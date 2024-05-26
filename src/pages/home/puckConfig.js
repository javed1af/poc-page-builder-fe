import React from "react";
import { VerticalSpace } from "../../config/blocks/VerticalSpace";

const getPuckConfig = () => ({
  components: {
    HeadingBlock: {
      fields: {
        children: { type: "text" },
      },
      render: ({ children }) => <h1>{children}</h1>,
    },
    Paragraph: {
      fields: {
        text: { type: "text" },
      },
      render: ({ text }) => <p>{text}</p>,
    },
    VerticalSpace
  },
  root: {
    render: ({ children }) => {
      return <div style={{padding:'20px'}}>{children}</div>;
    },
  },
});

export default getPuckConfig;
