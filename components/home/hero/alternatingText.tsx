"use client";

import {ReactTyped} from 'react-typed';

const texts = [
  "highly interactive.",
  "visually stunning.",
  "robust and scalable.",
  "performance-driven.",
  "tailored to your needs.",
];

export default function TypewriterEffect() {
  return (
    <ReactTyped
      strings={texts}
      typeSpeed={40}
      backSpeed={30}
      backDelay={1000}
      loop
      className='text-primary-500 dark:text-primary-500'
    />
  );
}
