import * as React from 'react';
import '../styles/sections.css';

interface IntroTerminalProps { onFinish: () => void }

// Script: linhas com distinção entre comando (cmd) e output (out)
const script: Array<{ text: string; type: 'cmd' | 'out' }> = [
  { text: 'simao@dev:~/favourite_games$ ls', type: 'cmd' },
  { text: 'elden_ring  hollow_knight  outer_wilds  league_of_legends  sekiro', type: 'out'},
  { text: 'simao@dev:~/favourite_games$ cd ..', type: 'cmd' },
  { text: 'simao@dev:~$ ls', type: 'cmd' },
  { text: 'documents  music  pictures  favourite_games  portfolio  scripts', type: 'out' },
  { text: 'simao@dev:~$ cd portfolio', type: 'cmd' },
  { text: 'simao@dev:~/portfolio$ ls', type: 'cmd' },
  { text: 'src  public  README.md  package.json  node_modules', type: 'out' },
  { text: 'simao@dev:~/portfolio$ npm run build', type: 'cmd' },
  { text: '▶ vite build', type: 'out' },
  { text: 'building for production...', type: 'out' },
  { text: '✓ transpile + bundle', type: 'out' },
  { text: '✓ minify', type: 'out' },
  { text: '✓ emitting assets', type: 'out' },
  { text: 'Build complete. Launching...', type: 'out' },
];

export const IntroTerminal: React.FC<IntroTerminalProps> = ({ onFinish }) => {
  // Linhas finalizadas
  const [lines, setLines] = React.useState<Array<{ text:string; type:'cmd'|'out' }>>([]);
  // Estado da linha em digitação
  const [prompt, setPrompt] = React.useState('');
  const [typed, setTyped] = React.useState('');
  const [index, setIndex] = React.useState(0);
  const [typing, setTyping] = React.useState(false);

  // UseRef para garantir que onFinish só é chamado uma vez
  const finishedRef = React.useRef(false);
  const [closing, setClosing] = React.useState(false);

  const skipIntro = React.useCallback(() => {
    if (finishedRef.current || closing) return;
    finishedRef.current = true;
    setTyping(false);
    // mostrar todas as linhas imediatamente
    setLines(script.map(l => ({ text: l.text, type: l.type })));
    setClosing(true);
    setTimeout(() => onFinish(), 350);
  }, [onFinish, closing]);

  React.useEffect(() => {
    if (index >= script.length) {
      if (!finishedRef.current) {
        finishedRef.current = true;
        setTyping(false);
        // inicia fade out
        setClosing(true);
        const t = setTimeout(() => { onFinish(); }, 650); // espera animação
        return () => clearTimeout(t);
      }
      return;
    }

    const current = script[index];

    if (current.type === 'out') {
      // Output: aparece instantaneamente após pequeno atraso
      const t = setTimeout(() => {
        setLines(prev => [...prev, current]);
        setIndex(i => i + 1);
      }, 140);
      return () => clearTimeout(t);
    }

    // Comando: separar prompt e comando
    const match = current.text.match(/^(.*\$ )(.*)$/);
    const fullPrompt = match ? match[1] : '';
    const commandPart = match ? match[2] : current.text;
    setPrompt(fullPrompt);
    setTyped('');
    setTyping(true);

    let pos = 0;
    let cancelled = false;
    let timeoutId: number;

    const typeNext = () => {
      if (cancelled) return;
      if (pos <= commandPart.length) {
        setTyped(commandPart.slice(0, pos));
        pos += 1;
        const base = 80;
        const jitter = Math.random() * 55;
        timeoutId = setTimeout(typeNext, base + jitter);
      } else {
        // concluir comando
        setLines(prev => [...prev, { text: current.text, type: 'cmd' }]);
        setTyping(false);
        setIndex(i => i + 1);
      }
    };

    const startDelay = 220;
    const starter = setTimeout(typeNext, startDelay);
    
    return () => { 
      cancelled = true; 
      clearTimeout(starter);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [index, onFinish]);

  return (
    <div className={"intro-terminal" + (closing ? ' intro-terminal--closing' : '')}>
      <div className="intro-terminal__inner">
        <div className="intro-terminal__bar">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
          <span className="intro-terminal__title">Simon – boot session</span>
          <button type="button" className="intro-skip" onClick={skipIntro} aria-label="Skip intro">Skip</button>
        </div>
        <pre className="intro-terminal__body" aria-label="boot log">
          {lines.map((l,i) => (
            <div key={i} className={l.type === 'cmd' ? 'term-line cmd' : 'term-line'}>{l.text}</div>
          ))}
          {typing && (
            <div className="term-line cmd">
              <span>{prompt}<span>{typed}</span><span className="blink-caret" /></span>
            </div>
          )}
        </pre>
      </div>
    </div>
  );
};