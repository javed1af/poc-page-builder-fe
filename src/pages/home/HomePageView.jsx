import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getPuckConfig from './puckConfig';

const HomePageView = () => {
  const [content, setContent] = useState({ content: [], root: {}, zones: {} });
  const [loading, setLoading] = useState(true); // Loading state

  const config = getPuckConfig();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/contents/home');
        if (response.data) {
          const contentJson = typeof response.data.data === 'string'
            ? JSON.parse(response.data.data)
            : response.data.data;
          setContent(contentJson);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchData();
  }, []);

  // Conditional rendering based on loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  const renderContent = (content) => {
    if (!content || !content.content) return null;
    return content.content.map((item, index) => {
      const Component = config.components[item.type];
      if (!Component) return null;
      return <Component.render key={index} {...item.props} />;
    });
  };

  return (
    <div>
      {renderContent(content)}
    </div>
  );
};

export default HomePageView;
