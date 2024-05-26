import React from "react";

export const HeadingBlock = {
  fields: {
    children: { type: "text" },
  },
  render: ({ children }) => <h1>{children}</h1>,
};
