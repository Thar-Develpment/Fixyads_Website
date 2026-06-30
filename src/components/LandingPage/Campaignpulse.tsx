"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./Campaignpulse.module.css";

/* ── Sub-components ───────────────────────────────────── */

const PillRow = () => (
  <div className={styles.pillRow}>
    {[
      ["Your goals", true], ["Competition", false],
      ["Your audience", true], ["Current gaps", false],
      ["Your market", true], ["Seasonality", false],
      ["Pricing", false], ["Your voice", true],
    ].map(([label, amber]) => (
      <span
        key={label as string}
        className={`${styles.pill} ${amber ? styles.pillAmber : styles.pillOutline}`}
      >
        {label as string}
      </span>
    ))}
  </div>
);

const bars = [
  { label: "Search",  pct: 82, color: "#60a5fa" },
  { label: "Email",   pct: 61, color: "#67e8f9" },
  { label: "Social",  pct: 38, color: "#c4b5fd" },
  { label: "Display", pct: 19, color: "#64748b" },
];

const BarChart = () => (
  <div className={styles.barContainer}>
    {bars.map((b) => (
      <div className={styles.barRow} key={b.label}>
        <span className={styles.barLabel}>{b.label}</span>
        <div className={styles.barTrack}>
          <div className={styles.barFill} style={{ width: `${b.pct}%`, background: b.color }} />
        </div>
        <span className={styles.barPct}>{b.pct}%</span>
      </div>
    ))}
  </div>
);

const phases = [
  { range: "Months 1–2", phase: "Foundation", desc: "Infrastructure, tracking, baseline content.",          color: "#60a5fa" },
  { range: "Months 3–4", phase: "Momentum",   desc: "Early signals, tested channels, first wins.",          color: "#67e8f9" },
  { range: "Months 5–7", phase: "Velocity",   desc: "Double down on what's working, cut what's not.",       color: "#34d399" },
  { range: "Month 8+",   phase: "Compound",   desc: "Growth builds on itself. Harder to stop every month.", color: "#a3e635" },
];

const Timeline = () => (
  <div className={styles.timeline}>
    {phases.map((p, i) => (
      <div className={styles.tlItem} key={p.phase} data-last={i === phases.length - 1 ? "true" : undefined}>
        <div className={styles.tlDotWrap}>
          <div className={styles.tlDot} style={{ background: p.color + "22", boxShadow: `0 0 0 1px ${p.color}44` }}>
            <div className={styles.tlInner} style={{ background: p.color }} />
          </div>
          {i < phases.length - 1 && <div className={styles.tlLine} />}
        </div>
        <div className={styles.tlBody}>
          <p className={styles.tlMonth}>{p.range}</p>
          <p className={styles.tlPhase}>{p.phase}</p>
          <p className={styles.tlDesc}>{p.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

/* ── Card definitions ─────────────────────────────────── */

type CardDef = { step: string; title: string; body?: string; tag3?: string; content: React.ReactNode };

const CARDS: CardDef[] = [
  {
    step: "01 — We start by listening",
    title: "Your business,\nunderstood first.",
    body: "Before we touch a single ad or keyword, we spend time understanding what makes your business tick — and what's holding it back.",
    content: <PillRow />,
  },
  {
    step: "02 — The right channels",
    title: "Focused, not\nspray-and-pray.",
    body: "We choose channels based on your audience — not every channel deserves your budget.",
    content: <BarChart />,
  },
  {
    step: "03 — Month by month",
    title: "Harder to stop\nas it grows.",
    tag3: "Full transparency",
    content: <Timeline />,
  },
];

/* ── Arrow icon ───────────────────────────────────────── */

const ArrowIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Main component ───────────────────────────────────── */

export default function StoryCards() {
  const [current, setCurrent]   = useState(0);
  const [visible, setVisible]   = useState(true);
  const pendingRef               = useRef<number | null>(null);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setVisible(false);
    pendingRef.current = idx;
  };

  useEffect(() => {
    if (!visible && pendingRef.current !== null) {
      const t = setTimeout(() => {
        setCurrent(pendingRef.current!);
        pendingRef.current = null;
        setVisible(true);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [visible]);

  const advance = () => goTo((current + 1) % CARDS.length);
  const card = CARDS[current];

  return (
    <div className={styles.scene}>
      {/* Ambient glow orbs behind glass */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div
        className={styles.cardShell}
        onClick={advance}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && advance()}
        aria-label={`Card ${current + 1} of ${CARDS.length}. ${card.step}. Press to advance.`}
      >
        {/* Glass border highlight */}
        <div className={styles.glassHighlight} />

        {/* Fixed floating trust tags — always present */}
        <div className={styles.floatingTags}>
          <span className={`${styles.tag} ${styles.tagGreen}`}>No lock-in</span>
          <span className={`${styles.tag} ${styles.tagViolet}`}>90-day results</span>
        </div>

        {/* Crossfade content area — fixed height so card never resizes */}
        <div className={`${styles.content} ${visible ? styles.contentVisible : styles.contentHidden}`}>
          <p className={styles.stepLabel}>{card.step}</p>
          <h2 className={styles.cardTitle}>
            {card.title.split("\n").map((line, i) => (
              <span key={i}>{line}{i === 0 && <br />}</span>
            ))}
          </h2>

          <div className={styles.cardInner}>
            {card.content}
            {card.body && <p className={styles.cardBody}>{card.body}</p>}
          </div>

          <div className={styles.advanceHint}>
            <ArrowIcon />
            {current < CARDS.length - 1 ? "Tap to continue" : "Tap to restart"}
          </div>
        </div>

        {/* Card-3 bottom tag — inside content so it fades too */}
        {card.tag3 && visible && (
          <span className={`${styles.tag} ${styles.tagTeal} ${styles.tagBottom}`}>
            {card.tag3}
          </span>
        )}
      </div>

      {/* Dot nav */}
      <div className={styles.dotRow} role="tablist" aria-label="Card progress">
        {CARDS.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={(e) => { e.stopPropagation(); goTo(i); }}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to card ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}