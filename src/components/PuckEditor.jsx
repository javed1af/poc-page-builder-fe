import React from 'react';
import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";
import axios from 'axios';

// Define Puck component configuration
const getPuckConfig = () => ({
  components: {
    HeadingBlock: {
      fields: {
        children: {
          type: "text",
        },
      },
      render: ({ children }) => <h1>{children}</h1>,
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
});

// Initial data for Puck editor
const initialData = {
  content: [],
  root: {},
};

// Function to save data to the database
const saveData = async (data) => {
  console.log('payload data: ', data);
  try {
    const response = await axios.post('http://localhost:8000/api/contents', data);
    console.log('Published data:', response.data);
  } catch (error) {
    console.error('Error publishing data:', error);
  }
};

const PuckEditor = () => {
  const config = getPuckConfig();

  return (
    <div>
      <h1>Puck Editor</h1>
      <Puck config={config} data={initialData} onPublish={saveData} />
    </div>
  );
};

export default PuckEditor;
