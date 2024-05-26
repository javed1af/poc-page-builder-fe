import React from "react";

export const Paragraph = {
  label: "Paragraph",
  fields: {
    text: { type: "text" },
  },
  render: ({ text }) => <p>{text}</p>,
};
