import React from 'react';

const MySitePage = () => {
  // Dummy published content
  const publishedContent = {
    title: 'Welcome to My Site!',
    body: 'This is a dummy content published using Puck Editor.',
  };

  return (
    <div>
      <h1>My Site</h1>
      <div>
        <h2>{publishedContent.title}</h2>
        <p>{publishedContent.body}</p>
      </div>
    </div>
  );
};

export default MySitePage;
