'use client';

import { useEffect, useState } from 'react';
import styles from './BubblesCloud.module.css';

interface Bubble {
  img: string;
  size: number;
  top: number;
  left: number;
  floatRange: string;
  floatDuration: string;
  floatDelay: string;
}

const bubbleImages = [
  '/bubbles/analytics.png',
  '/bubbles/searchconsole.png',
  '/bubbles/trends.png',
  '/bubbles/tag.png',
  '/bubbles/lockerstudio.png',
  '/bubbles/gemini.png',
  '/bubbles/lighthouse.png',
  '/bubbles/aistudio.png',
  '/bubbles/notebook.png',
  '/bubbles/googleads.png',
];

const MAX_ATTEMPTS = 50;
const MIN_GAP = 14;

const BubblesCloud = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const placed: Bubble[] = [];

    bubbleImages.forEach((img) => {
      const size = Math.floor(Math.random() * 40) + 70;

      let bubble: Omit<Bubble, 'floatRange' | 'floatDuration' | 'floatDelay'>;
      let attempts = 0;

      do {
        bubble = {
          img,
          size,
          top: Math.random() * 80,
          left: Math.random() * 80,
        };

        attempts++;
      } while (
        attempts < MAX_ATTEMPTS &&
        placed.some((b) => {
          const dx = (bubble.left - b.left) * 5;
          const dy = (bubble.top - b.top) * 5;
          const distance = Math.sqrt(dx * dx + dy * dy);
          return distance < (bubble.size + b.size) / 2 + MIN_GAP;
        })
      );

      placed.push({
        ...bubble,
        floatRange: `${Math.random() * 10 + 8}px`,
        floatDuration: `${Math.random() * 4 + 5}s`,
        floatDelay: `${Math.random() * 2}s`,
      });
    });

    setBubbles(placed);
  }, []);

  // 🚨 Prevent hydration mismatch
  if (bubbles.length === 0) return null;

  return (
    <div className={styles.wrapper}>
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={styles.bubble}
          style={{
            width: bubble.size,
            height: bubble.size,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            ['--float-range' as any]: bubble.floatRange,
            ['--float-duration' as any]: bubble.floatDuration,
            ['--float-delay' as any]: bubble.floatDelay,
          }}
        >
          <img src={bubble.img} alt="Bubble icon" />
        </div>
      ))}
    </div>
  );
};

export default BubblesCloud;
