import React from "react";

export const HeadingBlock = {
  label: "Heading Block",
  fields: {
    children: { type: "text" },
  },
  render: ({ children }) => <h1>{children}</h1>,
};
