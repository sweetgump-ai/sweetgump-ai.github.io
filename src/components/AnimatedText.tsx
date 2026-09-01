import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-0">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const chars = word.split('');
        const node = (
          <span key={wi} className="inline-block whitespace-nowrap">
            {chars.map((char, ci) => {
              const start = charIndex / totalChars;
              const end = (charIndex + 1) / totalChars;
              charIndex += 1;
              return (
                <Char key={ci} char={char} range={[start, end]} progress={scrollYProgress} />
              );
            })}
          </span>
        );
        charIndex += 1; // account for the space separator
        return (
          <span key={`w-${wi}`}>
            {node}
            {wi < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
    </p>
  );
}
