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
    { label: <Link to="/home-page-view">Home Page View</Link>, key: "/home-page-view" },
    { label: <Link to="/about">About</Link>, key: "/about" },
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
