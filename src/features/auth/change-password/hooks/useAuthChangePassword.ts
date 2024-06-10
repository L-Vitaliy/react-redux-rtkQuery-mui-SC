import { useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useChangePasswordMutation } from "@/app/api/auth/api";
import Routes from "@/app/routes/consts/routes";
import store from "@/app/store";
import { logout } from "@/app/store/user/slice";
import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PASSWORD } from "@/shared/consts/validationPatterns";
import { getUserIdFromToken } from "@/shared/utils/apiHelpers";

export function useAuthChangePassword() {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showBoundary } = useErrorBoundary();

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    clearErrors,
    watch,
  } = useForm<AuthChangePasswordForm>({
    defaultValues: {
      newPassword: "",
      newPasswordRepeat: "",
    },
    mode: "onChange",
  });

  const validationRules = {
    newPassword: {
      required: ValidationErrors.REQUIRED,
      minLength: {
        value: VALIDATION_PASSWORD.minLength,
        message: `Пароль должен быть не меньше ${VALIDATION_PASSWORD.minLength} символов`,
      },
      maxLength: {
        value: VALIDATION_PASSWORD.maxLength,
        message: `Пароль должен быть не более ${VALIDATION_PASSWORD.maxLength} символов`,
      },
      pattern: {
        value: VALIDATION_PASSWORD.regExp,
        message: ValidationErrors.INCORRECT,
      },
    },
    newPasswordRepeat: {
      required: ValidationErrors.REQUIRED,
    },
  };

  useEffect(() => {
    watch((values) => {
      if (values.newPassword === values.newPasswordRepeat) {
        clearErrors("newPasswordRepeat");
      } else {
        setTimeout(() => {
          setError("newPasswordRepeat", { type: "custom", message: ValidationErrors.SAME_PASSWORD });
        });
      }
    });
  }, [watch]);

  const onSubmit: SubmitHandler<AuthChangePasswordForm> = (data) => {
    const { accessToken } = store.getState().user;
    const userId = getUserIdFromToken(accessToken);
    if (userId) {
      changePassword({
        userId,
        password: data.newPassword,
      })
        .unwrap()
        .then(() => {
          dispatch(logout());
          return navigate(Routes.AUTH_CHANGE_PASSWORD_SUCCESS_PAGE);
        })
        .catch((error: ApiErrorResponse) => {
          if (error?.status >= 500) {
            showBoundary({ code: 500 });
          }

          if (typeof error?.data?.detail === "object") {
            setError("newPassword", { type: "custom", message: error.data.detail.password || ValidationErrors.UNEXPECTED });
          }
        });
    } else {
      return setError("newPassword", { type: "custom", message: "Необходима повторная авторизация" });
    }
  };

  const isSubmitDisabled =
    !isDirty || (isDirty && Object.keys(errors).length !== 0 && errors.newPassword?.type !== "custom");

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    validationRules,
    isSubmitDisabled,
    isFetching: isLoading,
  };
}
