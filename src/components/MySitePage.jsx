// src/components/MySitePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MySitePage = () => {
  const [publishedContent, setPublishedContent] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/published-contents');
        setPublishedContent(response.data);
      } catch (error) {
        console.error('Error fetching published content:', error);
      }
    };

    fetchData();
  }, []);

  const renderContent = (content) => {
    return content.map((item) => {
      switch (item.type) {
        case 'HeadingBlock':
          return <h1 key={item.id}>{item.data.children}</h1>;
        case 'Paragraph':
          return <p key={item.id}>{item.data.text}</p>;
        default:
          return null;
      }
    });
  };

  return (
    <div>
      <h1>My Site</h1>
      {renderContent(publishedContent.content || [])}
    </div>
  );
};

export default MySitePage;
