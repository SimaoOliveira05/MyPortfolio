import * as React from 'react';
import '../styles/sections.css';


export const About: React.FC = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section__title">About me</h2>
        <p className="lead">I have hands-on experience in Java, C, and Haskell, and 
                                  love to apply and learn technical skills in a collaborative environment. Passionate about
                                    problem-solving, algorithm optimization, and building efficient software solutions.</p>

        <p className="lead">I consider myself an open-minded person who enjoys working with others. I value clear communication and have developed strong teamwork and leadership skills through different experiences, such as school projects and hackathons.
</p>
        <p className="lead">Outside of my studies, I enjoy <a href="https://steamcommunity.com/profiles/76561198392443423/" target="_blank" rel="noopener noreferrer" className="text-link">video games</a>, series, anime, <a href="https://open.spotify.com/user/simonjovi?si=51b49fdb744f461f" target="_blank" rel="noopener noreferrer" className="text-link">music</a>, and hanging out with friends.
</p>
        
        <div className="about__grid">
          <div>
            <h3>Stack Principal</h3>
            <ul className="pill-list">
              <li>React</li>
              <li>Java</li>
              <li>C</li>
              <li>Haskell</li>
              <li>Python</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </div>
          <div>
            <h3>Values</h3>
            <ul className="check-list">
              <li>Data Structures</li>
              <li>Code Optimization</li>
              <li>Teamwork and Collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
