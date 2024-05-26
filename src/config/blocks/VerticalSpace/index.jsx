import React from "react";
import { spacingOptions } from "../../options";

export const VerticalSpace = {
  label: "Vertical Space",
  fields: {
    size: {
      type: "select",
      options: spacingOptions,
    },
  },
  defaultProps: {
    size: "24px",
  },
  render: ({ size }) => {
    return <div style={{ height: size, width: "100%" }} />;
  },
};
