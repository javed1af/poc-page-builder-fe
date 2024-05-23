import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const TopNav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="editor">
        <Link to="/editor">Puck Editor</Link>
      </Menu.Item>
      <Menu.Item key="my-site-page">
        <Link to="/my-site-page">My Site Page</Link>
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
