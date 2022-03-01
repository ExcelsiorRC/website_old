import React from 'react';
import '../../styles/components/common/header.scss';
import { Link } from 'gatsby';
import { globalHistory } from '@reach/router';
import Toggler from './Toggler';

interface HeaderProps {
  headerTitle: JSX.Element;
}

function Header({ headerTitle }: HeaderProps) {
  const { pathname } = globalHistory.location;

  return (
    <header className="header-area">
      <div className="header-contents">
        <h2 className="header-title">{headerTitle}</h2>
        <div className="header-category-container">
          <Toggler />
          <Link to="/">
            <h3 className={pathname === '/' ? 'active' : ''}>HOME</h3>
          </Link>
          <Link to="/blog">
            <h3 className={pathname === '/blog' ? 'active' : ''}>BLOG</h3>
          </Link>
          <Link to="/about">
            <h3 className={pathname === '/about' ? 'active' : ''}>ABOUT</h3>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
