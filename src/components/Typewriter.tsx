/** Typewriter — lightweight cycling text with realistic typing/deleting */
import { useState, useEffect, useCallback } from 'react';

const roles = [
  'Master of Computer Applications Candidate',
  'Full-Stack Solutions Architect',
  'Linux Systems Specialist (Fedora KDE)',
  'Web Security & Pen-Testing Enthusiast',
  'Open Source Contributor',
];

const TYPING_SPEED = 100;   // ms per character when typing
const DELETING_SPEED = 45;  // ms per character when deleting
const PAUSE_AFTER_TYPE = 2000; // ms to hold the completed word
const PAUSE_AFTER_DELETE = 400; // ms before typing next word

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      // Typing forward
      const next = currentRole.slice(0, displayText.length + 1);
      setDisplayText(next);

      if (next === currentRole) {
        // Finished typing — pause then start deleting
        return PAUSE_AFTER_TYPE;
      }
      // Slight randomness for realism
      return TYPING_SPEED + Math.random() * 40 - 20;
    } else {
      // Deleting backward
      const next = currentRole.slice(0, displayText.length - 1);
      setDisplayText(next);

      if (next === '') {
        // Finished deleting — move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return PAUSE_AFTER_DELETE;
      }
      return DELETING_SPEED;
    }
  }, [displayText, isDeleting, roleIndex]);

  // Trigger delete after pause
  useEffect(() => {
    if (!isDeleting && displayText === roles[roleIndex]) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, roleIndex]);

  // Main typing loop
  useEffect(() => {
    // Don't run the interval during the post-type pause
    if (!isDeleting && displayText === roles[roleIndex]) return;

    const speed = isDeleting
      ? DELETING_SPEED
      : TYPING_SPEED + Math.random() * 40 - 20;

    const timeout = setTimeout(() => {
      const currentRole = roles[roleIndex];
      if (!isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      } else {
        const next = currentRole.slice(0, displayText.length - 1);
        setDisplayText(next);
        if (next === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <span className="inline-flex items-baseline">
      {/* Typed text with gradient */}
      <span className="typewriter-gradient font-mono text-base sm:text-lg lg:text-xl font-medium">
        {displayText}
      </span>
      {/* Blinking cursor */}
      <span
        className="ml-0.5 inline-block w-[2px] sm:w-[3px] self-stretch rounded-full animate-cursor-blink"
        style={{
          minHeight: '1.2em',
          background: 'linear-gradient(180deg, var(--color-cyber), var(--color-accent))',
        }}
        aria-hidden="true"
      />
    </span>
  );
}
