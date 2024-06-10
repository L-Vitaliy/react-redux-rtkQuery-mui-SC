import { Helmet } from "react-helmet-async";

import { AuthChangePasswordWidget } from "@/widgets/auth/change-password";

export function AuthChangePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Смена пароля</title>
      </Helmet>
      <AuthChangePasswordWidget />
    </>
  );
}
