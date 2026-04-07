"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PHRASES = ["Seaway Think", "by William van Wingerden"];
const TYPE_SPEED = 90;
const DELETE_SPEED = 50;
const PAUSE_AFTER_TYPE = 2400;
const PAUSE_AFTER_DELETE = 600;

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      // Typing forward
      if (displayText.length < currentPhrase.length) {
        const nextChar = currentPhrase[displayText.length];
        setDisplayText((prev) => prev + nextChar);
        timeoutRef.current = setTimeout(tick, TYPE_SPEED);
      } else {
        // Finished typing — pause then start deleting
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          tick();
        }, PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      // Deleting backward
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        timeoutRef.current = setTimeout(tick, DELETE_SPEED);
      } else {
        // Finished deleting — pause then advance to next phrase
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
    }
  }, [displayText, isDeleting, phraseIndex]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, TYPE_SPEED);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [tick]);

  return (
    <h1
      style={{
        fontFamily: "var(--font-serif)",
        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
        fontWeight: 400,
        color: "var(--color-fg)",
        letterSpacing: "-0.025em",
        lineHeight: 1.1,
        minHeight: "1.2em",
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      <span>{displayText}</span>
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "0.85em",
          backgroundColor: "var(--color-fg)",
          marginLeft: "3px",
          animation: "cursorBlink 1s step-end infinite",
          verticalAlign: "baseline",
          position: "relative",
          top: "0.05em",
        }}
        aria-hidden="true"
      />
    </h1>
  );
}
