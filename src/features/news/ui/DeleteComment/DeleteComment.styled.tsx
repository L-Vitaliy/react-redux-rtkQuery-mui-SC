import { styled } from "@mui/material";

import { Colors, Transitions, Breakpoints, Mixins } from "@/app/styles";

export const DeleteCommentWrapper = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 15px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    margin-right: 5px;
    ${Mixins.iconSize(24)}
  }
  color: ${Colors.GREY_MAIN};
  &:hover {
    color: ${Colors.BLACK_MAIN};
  }
  svg {
    path {
      transition: color ${Transitions.MEDIUM} ease;
      color: currentColor;
    }
  }
`;
