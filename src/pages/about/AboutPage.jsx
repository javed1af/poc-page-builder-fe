import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Puck } from "@measured/puck";
import "@measured/puck/dist/index.css";
import getPuckConfig from './puckConfig';

const AboutPage = () => {
  const [content, setContent] = useState({ content: [], root: {}, zones: {} });
  const [loading, setLoading] = useState(true); // Loading state

  const config = getPuckConfig();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/contents/about');
        if (response.data) {
          console.log('response data: ', response.data);
          const contentJson = typeof response.data.data === 'string'
            ? JSON.parse(response.data.data)
            : response.data.data;
          console.log('contentJson: ', contentJson);
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

  const saveData = async (data) => {
    const payload = { data: JSON.stringify(data) };
    try {
      await axios.put('http://localhost:8000/api/contents/about', payload);
      console.log('Content updated successfully');
    } catch (error) {
      console.error('Error updating content:', error);
    }
  };

  // Conditional rendering based on loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>About Page Editor</h1>
      <Puck config={config} data={content} onPublish={saveData} />
    </div>
  );
};

export default AboutPage;
