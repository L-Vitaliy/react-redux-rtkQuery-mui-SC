import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";

import { useDeleteAddressMutation } from "@/app/api/partners/api";
import { setModal } from "@/app/store/app/slice";
import ValidationErrors from "@/shared/consts/validationErrors";
import { Variants } from "@/shared/consts/variants";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

export function ProfileDeliveryDeleteDialog({ addressId }: ProfileDeliveryDelete) {
  const dispatch = useDispatch();
  const [deleteAddress, { isLoading }] = useDeleteAddressMutation();
  const { enqueueSnackbar } = useSnackbar();

  const handleClick = () => {
    deleteAddress({ id: addressId })
      .unwrap()
      .then(() => {
        dispatch(setModal({ show: false }));
      })
      .catch(() => {
        enqueueSnackbar(ValidationErrors.UNEXPECTED, { variant: Variants.ERROR });
      });
  };

  return (
    <ButtonLoading size="large" type="button" variant="outlined" loading={isLoading} onClick={handleClick}>
      Да
    </ButtonLoading>
  );
}
