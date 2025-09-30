import * as React from 'react';
import '../styles/sections.css';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  repo?: string;
}

const projects: Project[] = [
  {
    title: 'LEI-Material-Estudo',
    description: 'Study materials for Software Engineering at the University of Minho, created to help fellow students succeed.',
    tech: ['Markdown'],
    link: 'https://darteescar.github.io/LEI-Material-Estudo/',
  },
  {
    title: 'SpotifyUM',
    description: 'Java-based object-oriented application developed as part of the OOP (Object-Oriented Programming) course at the University of Minho. It simulates a music streaming platform where users can manage and play songs, albums, and playlists.',
    tech: ['Java'],
    repo: 'https://github.com/SimaoOliveira05/SpotifyUM',
  },
  {
    title: 'Prestige Limousines',
    description: 'This project involves the design and implementation of a relational database for an emerging limousine company: Prestige Limousines.',
    tech: ['MySql'],
    repo: 'https://github.com/SimaoOliveira05/DB',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="section alt" id="projects">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <div className="projects__grid">
          {projects.map(p => (
            <div className="project-card" key={p.title}>
              <h3>{p.title}</h3>
              <p className="project-card__desc">{p.description}</p>
              <ul className="tech-list">
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className="project-card__links">
                {p.link && <a href={p.link} className="text-link" target="_blank" rel="noreferrer">Website</a>}
                {p.repo && <a href={p.repo} className="text-link" target="_blank" rel="noreferrer">Code</a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
