import * as React from 'react';
import '../styles/sections.css';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Simão Oliveira. Built with React + Vite.</p>
      </div>
    </footer>
  );
};
