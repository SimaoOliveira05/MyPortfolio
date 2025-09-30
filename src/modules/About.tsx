import * as React from 'react';
import '../styles/sections.css';


export const About: React.FC = () => {
  return (
    <>
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
    {/* Experience Timeline */}
    <section className="section alt" id="experience">
      <div className="container">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <h3>Summer Worker <span className="accent">@Carpintaria Limiana</span></h3>
              <span className="timeline__period">Jun 2024 - Aug 2024 | Ponte de Lima, Portugal</span>
              <p>During the summer after my first year at university, I wanted to spend my time learning something new while also earning some money. Thanks to a family connection, I had the chance to work at Carpintaria Limiana. With no previous knowledge of carpentry, I was quickly introduced to the art and craftsmanship behind it, which I grew to truly appreciate.</p>
              <p>I began by assisting in furniture assembly for kitchens and living rooms, and over time I was able to assemble pieces on my own. This experience taught me the value of asking for help when needed, sharpened my problem-solving skills, and gave me a new sense of respect for manual work and attention to detail. More than just a summer job, it was a moment where I discovered the satisfaction of creating something tangible with my own hands.</p>
            </div>
          </div>
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <h3>Mentor / Volunteer <span className="accent">@CoderDojo Braga</span></h3>
              <span className="timeline__period">2024 - Present | Braga, Portugal</span>
              <p></p>
            </div>
          </div>
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <h3>Hackathon Bugsbyte</h3>
              <span className="timeline__period">2024 | Braga, Portugal</span>
              <p>My first hackathon was both challenging and rewarding. It was the first time I worked in a fast-paced, team-based development environment, and being under pressure really pushed me out of my comfort zone.</p>
              <p>Tried to develop a gamified study time organization app in C, where users would be represented by wizard cat characters that leveled up based on study time. Although we didn’t manage to complete much during the hackathon, it was a fun and creative challenge that gave me my first taste of team-based development under pressure.</p>

            </div>
          </div>
          <div className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__content">
              <h3>Hackathon Bugsbyte</h3>
              <span className="timeline__period">2025 | Braga, Portugal</span>
              <p>Improved significantly from the previous year, with my team achieving 10th place out of 18. We worked on a product recommendation app using machine learning in python, focusing on teamwork, time management, and rapid prototyping.</p>
              <ul className="timeline__bullets">
              </ul>
            </div>
          </div>
        </div>
        {/* Editar, remover ou duplicar blocos conforme necessário */}
      </div>
    </section>
    </>
  );
};
