import { IconButton, styled } from "@mui/material";

import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";
import { scrollbar } from "@/app/styles/mixins";

export const DeliveryWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  border-top: 1px solid ${Colors.DIVIDER};
  margin-top: 30px;
  padding-top: 30px;
  flex: 1 1 auto;
`;

export const DeliveryHeader = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: -12px;
`;

export const DeliveryList = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  max-height: 340px;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px 18px 4px 0;
  margin-right: -18px;
  ${scrollbar()}
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  &:hover::-webkit-scrollbar-thumb {
    background-color: ${Colors.BLACK_MAIN};
  }
`;

export const DeliveryEmpty = styled("div")`
  flex: 1 1 auto;
  padding: 60px 0;
`;

export const DeliveryEmptyText = styled("div")`
  font-size: 1.125rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  color: ${Colors.GREY_MAIN};
`;

export const DeliveryActions = styled("div")`
  display: flex;
  column-gap: 4px;
  flex-shrink: 0;
  margin-left: 55px;
  margin-right: -12px;
  margin-top: -8px;
`;

export const DeliveryItemAction = styled(IconButton)`
  color: ${Colors.GREY_MAIN};
  margin-right: -8px;
  svg {
    width: 24px;
    height: 24px;
  }
`;
