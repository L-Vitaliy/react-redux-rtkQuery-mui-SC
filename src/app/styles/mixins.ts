import Colors from "./colors";

export const scrollbar = (
  width = "7px",
  thumbColor = Colors.BLACK_MAIN,
  scrollbarColor = "transparent",
  thumbHoverColor = Colors.BLACK,
  visible = true,
) => `
  ${visible ? "" : "scrollbar-width: none; -ms-overflow-style: none;"}
  scrollbar-color: transparent;
  &::-webkit-scrollbar-track {
    margin: 10px;
  }
  &::-webkit-scrollbar {
    ${visible ? "" : "display: none;"}
    width: ${width};
    background-color: ${scrollbarColor};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${thumbColor};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${thumbHoverColor};
  }
`;

export const scrollbarObject = (
  width = "7px",
  thumbColor = Colors.BLACK_MAIN,
  scrollbarColor = "transparent",
  thumbHoverColor = Colors.BLACK,
) => ({
  scrollbarColor: "transparent",
  "&::-webkit-scrollbar-track": {
    margin: "10px",
  },
  "&::-webkit-scrollbar": {
    width,
    backgroundColor: scrollbarColor,
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: thumbColor,
    borderRadius: "10px",
  },

  "&::-webkit-scrollbar-thumb:hover": {
    backgroundColor: thumbHoverColor,
  },
});

export const buttonClear = () => `
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  outline: none;
  padding: 0;
`;

export const textEllipsis = () => `
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const textEllipsisObject = () => ({
  textOverflow: "ellipsis",
  overflow: "hidden",
  whiteSpace: "nowrap",
});

export const textRowsEllipsis = (rows: number, height: number | string) => `
  display: -webkit-box;
  max-height: $height;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${rows};
  line-height: calc(${height} / ${rows});
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const textRowsEllipsisObject = (rows: number, height: number | string) => ({
  display: "-webkit-box",
  maxHeight: "$height",
  "-webkit-box-orient": "vertical",
  "-webkit-line-clamp": `${rows}`,
  lineHeight: `calc(${height} / ${rows})`,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const iconSize = (size: number) => `
  & > svg {
    width: ${size}px;
    height: ${size}px;
  }
`;

export default {
  scrollbar,
  iconSize,
  textEllipsis,
  textEllipsisObject,
  textRowsEllipsis,
  textRowsEllipsisObject,
  buttonClear,
  scrollbarObject,
};
