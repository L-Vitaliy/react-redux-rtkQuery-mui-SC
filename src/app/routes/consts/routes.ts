const enum Routes {
  MAIN_PAGE = "/",
  NOT_FOUND_PAGE = "*",
  STYLEGUIDE_PAGE = "/styleguide",

  DASHBOARD_PAGE = "/dashboard",
  NEWS_PAGE = "/news/:id",
  PRODUCT_PAGE = "/product/:id",

  ACCOUNT_EMPLOYEES_PAGE = "/account",
  ACCOUNT_EMPLOYEE_CREATE_PAGE = "/account/create",
  ACCOUNT_EMPLOYEE_PAGE = "/account/:id",
  ACCOUNT_COUNTERPARTIES_PAGE = "/account/counterparties",
  ACCOUNT_COUNTERPARTY_PAGE = "/account/counterparties/:id",

  ACCOUNT_SITE_SETTINGS_PAGE = "/account/site-settings",

  PROFILE_PAGE = "/profile",
  PROFILE_BONUS_PAGE = "/profile/bonus",
  PROFILE_CASES_PAGE = "/profile/cases",

  AUTH_LAYOUT_ROUTE = "/auth",
  AUTH_LOGIN_PAGE = "/auth/login",
  AUTH_ADD_PROFILE_PAGE = "/auth/login/add-profile",
  AUTH_CHANGE_PASSWORD_PAGE = "/auth/change-password",
  AUTH_CHANGE_PASSWORD_SUCCESS_PAGE = "/auth/change-password/success",
  AUTH_RESET_PASSWORD_PAGE = "/auth/reset-password",
  AUTH_RESET_PASSWORD_SUCCESS_PAGE = "/auth/reset-password/success",
}

export default Routes;
