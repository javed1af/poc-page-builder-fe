import React from 'react';
import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";

const PuckEditorComponent = () => {
  // Create Puck component config
  const config = {
    components: {
      HeadingBlock: {
        fields: {
          children: {
            type: "text",
          },
        },
        render: ({ children }) => {
          return <h1>{children}</h1>;
        },
      },

      Paragraph: {
        fields: {
          text: { type: "text" },
        },
        defaultProps: {
          text: "Paragraph",
        },
        render: ({ text }) => (
          <div style={{ padding: 15 }}>
            <p>{text}</p>
          </div>
        ),
      },
    },
  };

  // Describe the initial data
  const initialData = {
    content: [],
    root: {},
  };

  // Save the data to your database
  const save = (data) => {
    // Implement your save logic here
    console.log("Published data:", data);
  };

  return (
    <div>
      <h1>Puck Editor</h1>
      <Puck config={config} data={initialData} onPublish={save} />
    </div>
  );
};

export default PuckEditorComponent;
