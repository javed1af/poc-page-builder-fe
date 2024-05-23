import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const TopNav = () => {
  const location = useLocation();
  const [current, setCurrent] = useState(location.pathname);

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    { label: <Link to="/">Home</Link>, key: "/" },
    { label: <Link to="/about">About</Link>, key: "/about" },
    { label: <Link to="/editor">Puck Editor</Link>, key: "/editor" },
    { label: <Link to="/my-site-page">My Site</Link>, key: "/my-site-page" }
  ];

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[current]}
      onClick={handleClick}
      items={items}
    />
  );
};

export default TopNav;
