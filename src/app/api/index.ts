/* eslint-disable @typescript-eslint/ban-types */
import type { RootState } from "../store";

import { type BaseQueryApi, createApi, type FetchArgs, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import ApiMicroservices from "@/app/consts/ApiMicroservices";
import { ActionTypes } from "@/app/store/consts";
import ContentTypes from "@/shared/consts/contentTypes";
import ValidationErrors from "@/shared/consts/validationErrors";

import AuthEndpoints from "./auth/endpoints";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": ContentTypes.APPLICATION_JSON,
  },
  prepareHeaders: (headers, { getState }) => {
    const { accessToken } = (getState() as RootState).user;

    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const result = await baseQuery(args, api, extraOptions);
  if (
    !result.meta?.request.url.includes("/auth/") &&
    (result.error?.status === 401 ||
      (result.error?.data &&
        typeof result.error?.data === "object" &&
        "detail" in result.error.data &&
        result.error.data.detail === ValidationErrors.EXPIRED_TOKEN))
  ) {
    const { refreshToken } = (api.getState() as RootState).user;

    if (refreshToken) {
      try {
        const response = await baseQuery(
          {
            url: `${ApiMicroservices.USERS}${AuthEndpoints.REFRESH}`,
            method: "POST",
            body: { refresh_token: refreshToken },
          },
          api,
          {},
        );

        // Я не смог придумать, как объявить тип response у BaseQuery, прошу простить
        const { access_token: accessToken } = response?.data as Pick<ApiAuthResponse.Refresh, "access_token">;

        if (accessToken) {
          api.dispatch({ type: ActionTypes.SET_ACCESS_TOKEN, payload: accessToken });
          return baseQuery(args, api, extraOptions);
        } else {
          api.dispatch({ type: ActionTypes.LOGOUT });
          return result;
        }
      } catch (e) {
        api.dispatch({ type: ActionTypes.LOGOUT });
        return result;
      }
    } else {
      api.dispatch({ type: ActionTypes.LOGOUT });
      return result;
    }
  }

  return result;
};

export const tagTypes = [
  "LayoutMenu",
  "LayoutFooter",
  "BannersPublic",
  "NewsPinned",
  "NewsLast",
  "NewsComments",
  "FreeAnswers",
  "NewsDetail",
  "PartnersAddresses",
  "EmployeesList",
  "EmployeesRoles",
  "СounterpartiesList",
  "СounterpartyDetail",
  "CasesDetail",
  "Profile",
  "Roles",
  "DesignSiteSchema",
] as const;

export type ApiTag = (typeof tagTypes)[number];

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes,
});
