import { Stack, Typography } from "@mui/material";

import Colors from "@/app/styles/colors";
import { AuthChangePasswordForm } from "@/features/auth/change-password";
import { CONTENT_PASSWORD_RULES } from "@/shared/consts/content";

export function AuthChangePasswordWidget() {
  return (
    <>
      <Stack gap={2.5}>
        <Typography variant="h3" align="center">
          Смена пароля
        </Typography>
        <Typography variant="subtitle1" style={{ color: Colors.GREY_MAIN }}>
          {CONTENT_PASSWORD_RULES}
        </Typography>
      </Stack>
      <AuthChangePasswordForm />
    </>
  );
}
