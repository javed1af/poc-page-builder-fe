import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the components for rendering
const components = {
  HeadingBlock: ({ children }) => <h1>{children}</h1>,
  Paragraph: ({ text }) => <p>{text}</p>,
};

const MySitePage = () => {
  const [content, setContent] = useState([]);

  // Fetch content from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/contents');
        const contentData = response.data;
        // Assuming response.data contains an array of contents
        if (contentData.length > 0) {
          const contentJson = typeof contentData[0].data === 'string'
            ? JSON.parse(contentData[0].data)
            : contentData[0].data;
          setContent(contentJson); // Set the content to the parsed or direct object
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      }
    };

    fetchData();
  }, []);

  // Render the components based on the fetched content
  return (
    <div>
      {content.map((block, index) => {
        const Component = components[block.type];
        return <Component key={index} {...block.props} />;
      })}
    </div>
  );
};

export default MySitePage;
