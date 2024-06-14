interface ProfileDeliveryForm {
  address?: StoreUser.PartnerAddress;
}

interface ProfileDeliveryDelete {
  addressId: number;
}

interface ProfileChangePasswordForm {
  password: string;
  newPassword: string;
  newPasswordRepeat: string;
}
