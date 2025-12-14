'use client';

import { memo } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const TYPEWRITER_WORDS = [
  'Full-Stack Developer',
  'Mobile App Developer',
  'UI/UX-Focused Engineer',
  'Backend Problem Solver',
  'Frontend Experience Builder',
  'Machine Learning Enthusiast',
  'Tech Explorer & Creator',
];

export const HeroTypewriter = memo(function HeroTypewriter() {
  return (
    <h2 className="text-xl text-muted-foreground mt-2 h-8">
      <Typewriter
        words={TYPEWRITER_WORDS}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={40}
        delaySpeed={1200}
      />
    </h2>
  );
});
