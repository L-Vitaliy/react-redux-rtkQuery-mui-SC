import { FormHelperText, Stack, Tooltip } from "@mui/material";
import { Controller } from "react-hook-form";

import { ArrowRightIcon } from "@/assets/icons";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import InputPassword from "@/shared/ui/Input/Password/InputPassword";

import { Form } from "./AuthChangePasswordForm.styled";
import { useAuthChangePassword } from "../hooks/useAuthChangePassword";

export function AuthChangePasswordForm() {
  const { control, handleSubmit, errors, onSubmit, validationRules, isSubmitDisabled, isFetching } =
    useAuthChangePassword();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2.5}>
        <Stack gap={5}>
          <Stack>
            <Controller
              name="newPassword"
              control={control}
              rules={validationRules.newPassword}
              render={({ field }) => (
                <InputPassword
                  {...field}
                  autoComplete="new-password"
                  label="Новый пароль"
                  color={errors.newPassword ? "error" : "primary"}
                  error={Boolean(errors.newPassword)}
                  placeholder="••••••••••••"
                />
              )}
            />
            {errors.newPassword?.message && (
              <Tooltip title={errors.newPassword.message}>
                <FormHelperText error>{errors.newPassword.message}</FormHelperText>
              </Tooltip>
            )}
          </Stack>
          <Stack>
            <Controller
              name="newPasswordRepeat"
              control={control}
              rules={validationRules.newPasswordRepeat}
              render={({ field }) => (
                <InputPassword
                  {...field}
                  autoComplete="new-password"
                  label="Повторите новый пароль"
                  color={errors.newPasswordRepeat ? "error" : "primary"}
                  error={Boolean(errors.newPasswordRepeat)}
                  placeholder="••••••••••••"
                />
              )}
            />
            {errors.newPasswordRepeat?.message && (
              <Tooltip title={errors.newPasswordRepeat.message}>
                <FormHelperText error>{errors.newPasswordRepeat.message}</FormHelperText>
              </Tooltip>
            )}
          </Stack>
        </Stack>
      </Stack>
      <ButtonLoading
        type="submit"
        sx={{ justifyContent: "space-between" }}
        variant="contained"
        endIcon={<ArrowRightIcon />}
        disabled={isSubmitDisabled}
        loading={isFetching}
        onSubmit={handleSubmit(onSubmit)}>
        Изменить
      </ButtonLoading>
    </Form>
  );
}
