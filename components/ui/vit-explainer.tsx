"use client";

import { useEffect, useState } from "react";

const patches = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const DWELL_MS = 4500;

function DownArrow() {
  return <span aria-hidden="true" className="vit-down" />;
}

function StageOne() {
  return (
    <section className="vit-step">
      <h2> Image → tokens → positional embeddings</h2>
      <div className="vit-image" aria-hidden="true">
        {patches.map((patch) => (
          <span
            className="vit-patch"
            key={patch}
            style={{ animationDelay: `${patch * 0.12}s` }}
          />
        ))}
      </div>
      <DownArrow />
      <div className="vit-row" aria-hidden="true">
        <span className="vit-token vit-token-cls">CLS</span>
        {patches.map((patch) => (
          <span
            className="vit-token"
            key={patch}
            style={{ animationDelay: `${0.3 + patch * 0.08}s` }}
          />
        ))}
      </div>
      <p className="vit-caption">Each patch becomes a token</p>
      <DownArrow />
      <div className="vit-row" aria-hidden="true">
        {patches.map((patch) => (
          <span className="vit-pos" key={patch}>
            <span className="vit-token" />
            <span>+p{patch + 1}</span>
          </span>
        ))}
      </div>
      <p className="vit-caption">A learned position is added to every token</p>
    </section>
  );
}

function StageTwo() {
  return (
    <section className="vit-step">
      <h2> Self-attention, then the MLP</h2>
      <div className="vit-attend" aria-hidden="true">
        {patches.slice(0, 5).map((patch) => (
          <span key={patch} style={{ animationDelay: `${patch * 0.15}s` }} />
        ))}
      </div>
      <p className="vit-caption">Every token attends to every other token</p>
      <DownArrow />
      <div className="vit-block">
        <span>MLP</span>
        <i />
      </div>
      <p className="vit-caption">A small feed-forward network updates each token</p>
    </section>
  );
}

function StageThree() {
  return (
    <section className="vit-step">
      <h2> Multi-head attention and transformer blocks</h2>
      <div className="vit-heads" aria-hidden="true">
        {["H1", "H2", "H3", "H4"].map((head) => (
          <div className="vit-block" key={head}>
            <span>{head}</span>
            <i />
          </div>
        ))}
      </div>
      <p className="vit-caption">Heads run in parallel, then their outputs mix</p>
      <DownArrow />
      <div className="vit-stack" aria-hidden="true">
        {["Block 1", "Block 2", "Block N"].map((block) => (
          <div className="vit-block" key={block}>
            <span>{block} · attend + MLP</span>
            <i />
          </div>
        ))}
      </div>
      <p className="vit-caption">The same block repeats down the network</p>
    </section>
  );
}

const stages = [StageOne, StageTwo, StageThree];

export default function VitExplainer() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % stages.length);
    }, DWELL_MS);

    return () => window.clearInterval(id);
  }, []);

  const Stage = stages[step];

  return (
    <div className="vit-flow">
      <p className="text-xs font-medium tracking-[0.18em] text-default-500 uppercase">
        Vision Transformer
      </p>
      <div className="vit-stage-frame" key={step}>
        <Stage />
      </div>
      <div className="vit-dots" role="tablist" aria-label="Transformer stages">
        {stages.map((_, index) => (
          <button
            aria-label={`Show stage ${index + 1}`}
            aria-selected={index === step}
            className={index === step ? "is-on" : undefined}
            key={index}
            type="button"
            onClick={() => setStep(index)}
          />
        ))}
      </div>
      <blockquote>
        All paths lead to{" "}
        <span className="text-accent">Attention Is All You Need</span>.
      </blockquote>
    </div>
  );
}
