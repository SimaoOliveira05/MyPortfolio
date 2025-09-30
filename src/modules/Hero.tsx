import * as React from 'react';
import { motion, type Variants } from 'framer-motion';
import '../styles/sections.css';

export const Hero: React.FC = () => {
  // Typing effect
  const fullText = 'Simão Oliveira.';
  const [typed, setTyped] = React.useState('');

  React.useEffect(() => {
    let i = 0;
    const speed = 90; // ms por caractere
    const id = setInterval(() => {
      i += 1;
      setTyped(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, []);

  const finished = typed === fullText;

  const container: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 0.65, 0.32, 0.95] },
    },
  };

  return (
    <section className="hero" id="home">
      <div className="hero__content container">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="hero__grid"
        >
          <div className="hero__text-block">
            <motion.p variants={item} className="hero__hi">
              Hi! I am
            </motion.p>
            <motion.h1 variants={item} className="hero__title">
              <span className="typing" aria-label={fullText}>
                {typed}
                <span
                  className={
                    'typing__caret' + (finished ? ' typing__caret--end' : '')
                  }
                  aria-hidden="true"
                />
              </span>
            </motion.h1>
            <motion.h2 variants={item} className="hero__subtitle">
              Software Engineering student at University of Minho
            </motion.h2>
            <motion.p variants={item} className="hero__text">
              I love coding and problem-solving as much as I enjoy gaming and
              music. Technology inspires me, while gaming and music fuel my
              creativity and motivation.
            </motion.p>
            <motion.div variants={item} className="hero__actions">
              <a href="#projects" className="btn primary">
                My Projects
              </a>
              <a href="#experience" className="btn outline">
                Experience
              </a>
              <a href="#contact" className="btn outline">
                Contacts
              </a>
            </motion.div>
          </div>
          <motion.div variants={item} className="hero__photo-wrapper">
            <div className="hero__photo-frame">
              <img
                src="/me.jpeg"
                alt="Foto de Simão Oliveira"
                className="hero__photo"
                loading="eager"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero__bg-gradient" />
      <div className="hero__decor hero__decor--1" />
      <div className="hero__decor hero__decor--2" />
    </section>
  );
};
