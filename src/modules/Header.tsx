import * as React from 'react';
import '../styles/sections.css';

export const Header: React.FC = () => {
  return (
    <header className="site-header">
      <div className="container header__bar">
        <a href="#home" className="logo">simao@dev:~/portfolio$</a>
        <nav className="nav">
          <a href="#about">About me</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className="btn small">Contacts</a>
        </nav>
      </div>
    </header>
  );
};
