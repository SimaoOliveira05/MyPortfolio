import * as React from 'react';
import { IntroTerminal } from './IntroTerminal';
import { Hero } from './Hero';
import { About } from './About';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Header } from './Header';
import { Footer } from './Footer';

export const App: React.FC = () => {
  const [ready, setReady] = React.useState(false);
  return (
    <>
      {!ready && <IntroTerminal onFinish={() => setReady(true)} />}
      {ready && (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};
