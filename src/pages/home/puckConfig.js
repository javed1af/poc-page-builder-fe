import React from "react";
import { HeadingBlock } from "../../config/blocks/Heading";
import { Paragraph } from "../../config/blocks/Paragraph";
import { VerticalSpace } from "../../config/blocks/VerticalSpace";
import { Card } from "../../config/blocks/Card";

const getPuckConfig = () => ({
  components: {
    HeadingBlock,
    Paragraph,
    VerticalSpace,
    Card,
  },
  root: {
    render: ({ children }) => {
      return <div style={{padding:'20px'}}>{children}</div>;
    },
  },
});

export default getPuckConfig;
