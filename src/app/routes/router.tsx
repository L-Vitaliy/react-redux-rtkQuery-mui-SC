import { createBrowserRouter } from "react-router-dom";

import { ErrorBoundaryRouter } from "@/app/providers/ErrorBoundary";
import { AccountLayout } from "@/layouts/account";
import { MainLayout } from "@/layouts/main";

import Routes from "./consts/routes";

export function getRouter() {
  const router = createBrowserRouter([
    {
      path: Routes.MAIN_PAGE,
      errorElement: <ErrorBoundaryRouter />,
      element: <MainLayout />,
      children: [
        {
          path: Routes.NOT_FOUND_PAGE,
          async lazy() {
            const { NotFoundPage } = await import("@/pages/notfound");
            return { Component: NotFoundPage };
          },
        },
        {
          path: Routes.NEWS_PAGE,
          async lazy() {
            const { NewsBoxLayout } = await import("@/layouts/news-box");
            return { Component: NewsBoxLayout };
          },
          children: [
            {
              path: Routes.NEWS_PAGE,
              async lazy() {
                const { NewsPage } = await import("@/pages/news");
                return { Component: NewsPage };
              },
            },
          ],
        },
        {
          path: Routes.DASHBOARD_PAGE,
          async lazy() {
            const { DashboardPage } = await import("@/pages/dashboard");
            return { Component: DashboardPage };
          },
        },
        {
          path: Routes.STYLEGUIDE_PAGE,
          async lazy() {
            const { StyleGuide } = await import("@/pages/styleguide");
            return { Component: StyleGuide };
          },
        },
        {
          path: Routes.ACCOUNT_EMPLOYEES_PAGE,
          element: <AccountLayout />,
          children: [
            {
              path: Routes.ACCOUNT_SITE_SETTINGS_PAGE,
              async lazy() {
                const { AccountSiteDesignSettingsPage } = await import("@/pages/account/index");
                return { Component: AccountSiteDesignSettingsPage };
              },
            },
            {
              path: Routes.ACCOUNT_EMPLOYEES_PAGE,
              async lazy() {
                const { AccountEmployeesPage } = await import("@/pages/account");
                return { Component: AccountEmployeesPage };
              },
            },
            {
              path: Routes.ACCOUNT_COUNTERPARTIES_PAGE,
              async lazy() {
                const { AccountCounterpartiesPage } = await import("@/pages/account");
                return { Component: AccountCounterpartiesPage };
              },
            },
          ],
        },
        {
          path: Routes.ACCOUNT_EMPLOYEE_CREATE_PAGE,
          async lazy() {
            const { AccountEmployeeCreatePage } = await import("@/pages/account");
            return { Component: AccountEmployeeCreatePage };
          },
        },
        {
          path: Routes.ACCOUNT_COUNTERPARTY_PAGE,
          async lazy() {
            const { CounterpartyPage } = await import("@/pages/account");
            return { Component: CounterpartyPage };
          },
        },
        {
          path: Routes.PROFILE_PAGE,
          async lazy() {
            const { ProfileLayout } = await import("@/layouts/profile");
            return { Component: ProfileLayout };
          },
          children: [
            {
              path: Routes.PROFILE_PAGE,
              async lazy() {
                const { ProfileMainPage } = await import("@/pages/profile");
                return { Component: ProfileMainPage };
              },
            },
            {
              path: Routes.PROFILE_BONUS_PAGE,
              async lazy() {
                const { ProfileBonusPage } = await import("@/pages/profile");
                return { Component: ProfileBonusPage };
              },
            },
            {
              path: Routes.PROFILE_CASES_PAGE,
              async lazy() {
                const { ProfileCasesPage } = await import("@/pages/profile");
                return { Component: ProfileCasesPage };
              },
            },
          ],
        },
      ],
    },
    {
      path: Routes.AUTH_LAYOUT_ROUTE,
      async lazy() {
        const { AuthLayout } = await import("@/layouts/auth");
        return { Component: AuthLayout };
      },
      children: [
        {
          path: Routes.AUTH_LOGIN_PAGE,
          async lazy() {
            const { AuthLoginPage } = await import("@/pages/auth/login");
            return { Component: AuthLoginPage };
          },
        },
        {
          path: Routes.AUTH_ADD_PROFILE_PAGE,
          async lazy() {
            const { AuthLoginAddProfilePage } = await import("@/pages/auth/login");
            return { Component: AuthLoginAddProfilePage };
          },
        },
        {
          path: Routes.AUTH_RESET_PASSWORD_PAGE,
          async lazy() {
            const { AuthResetPasswordPage } = await import("@/pages/auth/reset-password");
            return { Component: AuthResetPasswordPage };
          },
        },
        {
          path: Routes.AUTH_RESET_PASSWORD_SUCCESS_PAGE,
          async lazy() {
            const { AuthResetPasswordSuccessPage } = await import("@/pages/auth/reset-password");
            return { Component: AuthResetPasswordSuccessPage };
          },
        },
        {
          path: Routes.AUTH_CHANGE_PASSWORD_PAGE,
          async lazy() {
            const { AuthChangePasswordPage } = await import("@/pages/auth/change-password");
            return { Component: AuthChangePasswordPage };
          },
        },
        {
          path: Routes.AUTH_CHANGE_PASSWORD_SUCCESS_PAGE,
          async lazy() {
            const { AuthChangePasswordSuccessPage } = await import("@/pages/auth/change-password");
            return { Component: AuthChangePasswordSuccessPage };
          },
        },
      ],
    },
  ]);
  return { router };
}
