import * as React from 'react';
import '../styles/sections.css';

export const Contact: React.FC = () => {
  return (
    <section className="section" id="contact">
      <div className="container contact__inner">
        <h2 className="section__title">Contacts</h2>
        <a className="big-link" href="mailto:simaooliveira106@gmail.com">simaooliveira106@gmail.com</a>
        <div className="socials">
          <a href="https://github.com/SimaoOliveira05" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sim%C3%A3o-oliveira-a37114370/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/mrsimon476/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </section>
  );
};
