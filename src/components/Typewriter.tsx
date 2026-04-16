/** Typewriter — lightweight cycling text with realistic typing/deleting, Red/Black theme */
import { useState, useEffect, useCallback } from 'react';

const roles = [
  'Master of Computer Applications Candidate',
  'Full-Stack Solutions Architect',
  'Linux Systems Specialist (Fedora)',
  'Web Security & Pen-Testing Enthusiast',
  'Open Source Contributor',
];

const TYPING_SPEED = 100;
const DELETING_SPEED = 45;
const PAUSE_AFTER_TYPE = 2000;
const PAUSE_AFTER_DELETE = 400;

export default function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
      const next = currentRole.slice(0, displayText.length + 1);
      setDisplayText(next);

      if (next === currentRole) {
        return PAUSE_AFTER_TYPE;
      }
      return TYPING_SPEED + Math.random() * 40 - 20;
    } else {
      const next = currentRole.slice(0, displayText.length - 1);
      setDisplayText(next);

      if (next === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
        return PAUSE_AFTER_DELETE;
      }
      return DELETING_SPEED;
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    if (!isDeleting && displayText === roles[roleIndex]) {
      const timeout = setTimeout(() => setIsDeleting(true), PAUSE_AFTER_TYPE);
      return () => clearTimeout(timeout);
    }
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
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
    <span className="inline-flex items-center">
      <span className="font-mono text-base sm:text-lg lg:text-xl font-medium text-white px-1">
        {displayText}
      </span>
      {/* Blinking cursor */}
      <span
        className="ml-0.5 inline-block w-[10px] self-stretch animate-cursor-blink"
        style={{
          minHeight: '1.2em',
          background: 'var(--color-accent)',
        }}
        aria-hidden="true"
      />
    </span>
  );
}
