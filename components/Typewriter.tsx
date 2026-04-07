"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const PHRASES = ["Seaway Think", "by William van Wingerden"];

/* ── Timing (ms) ── */
const TYPE_BASE = 130; // base keystroke interval — unhurried
const TYPE_VARIANCE = 60; // ±random jitter so rhythm feels human
const DELETE_SPEED = 45; // deletion stays quick but not frantic
const PAUSE_AFTER_TYPE = 3200; // dwell on the completed phrase
const PAUSE_AFTER_DELETE = 900; // breathe before next phrase
const INITIAL_DELAY = 500; // beat before first keystroke

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /** Small random offset so typing doesn't feel metronomic */
  const jitter = () =>
    TYPE_BASE + (Math.random() * TYPE_VARIANCE * 2 - TYPE_VARIANCE);

  const tick = useCallback(() => {
    const currentPhrase = PHRASES[phraseIndex];

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        const nextChar = currentPhrase[displayText.length];
        setDisplayText((prev) => prev + nextChar);
        timeoutRef.current = setTimeout(tick, jitter());
      } else {
        timeoutRef.current = setTimeout(() => {
          setIsDeleting(true);
          tick();
        }, PAUSE_AFTER_TYPE);
        return;
      }
    } else {
      if (displayText.length > 0) {
        setDisplayText((prev) => prev.slice(0, -1));
        timeoutRef.current = setTimeout(tick, DELETE_SPEED);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
        timeoutRef.current = setTimeout(tick, PAUSE_AFTER_DELETE);
        return;
      }
    }
  }, [displayText, isDeleting, phraseIndex]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, INITIAL_DELAY);
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
          width: "1.5px",
          height: "0.8em",
          backgroundColor: "var(--color-fg)",
          marginLeft: "4px",
          animation: "cursorBlink 1.2s ease-in-out infinite",
          verticalAlign: "baseline",
          position: "relative",
          top: "0.05em",
          opacity: 0.7,
        }}
        aria-hidden="true"
      />
    </h1>
  );
}
