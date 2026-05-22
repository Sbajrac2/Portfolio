// ============================================================
// Personality.jsx — "Beyond the code" section
// Edit funFacts and currentlyLearning in src/data/profile.js
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import profile from "../data/profile";

function AnimateOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Words that define your approach — edit freely
const identityWords = [
  "Builder",
  "Leader",
  "Mentor",
  "Organizer",
  "Advocate",
  "Creator",
];

// What drives you — edit these three items
const values = [
  {
    title: "Impact over output",
    desc: "I care less about lines of code and more about real people. Every project I take on has someone at the end of it."
  },
  {
    title: "Community first",
    desc: "I run hackathons, lead orgs, and mentor peers because I know how much it matters to have people in your corner."
  },
  {
    title: "Curiosity as a practice",
    desc: "Always learning — whether it's voice UI, game design, or how to support someone having a hard week."
  }
];

function Personality() {
  return (
    <div className="section-pad max-w-5xl mx-auto px-4 sm:px-6">
      <AnimateOnScroll>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Beyond Code</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          This is who I am.
        </h2>
      </AnimateOnScroll>

      {/* Identity words — single muted color, separated by slashes */}
      <AnimateOnScroll delay={0.05}>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mb-14">
          {identityWords.map((word, i) => (
            <span key={word}>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className="text-3xl sm:text-4xl font-serif font-bold text-foreground/80 cursor-default"
              >
                {word}
              </motion.span>
              {i < identityWords.length - 1 && (
                <span className="text-border font-sans text-2xl mx-2">/</span>
              )}
            </span>
          ))}
        </div>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-5">
        {/* A few things about me */}
        <AnimateOnScroll delay={0.1}>
          <div className="bg-card border border-border rounded-2xl p-6 h-full">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-5">
              A few things about me
            </h3>
            <ul className="flex flex-col gap-3">
              {profile.funFacts.map((fact, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: i * 0.05 }}
                  className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed"
                >
                  <span className="w-1 h-1 rounded-full bg-primary mt-2 shrink-0" />
                  {fact}
                </motion.li>
              ))}
            </ul>
          </div>
        </AnimateOnScroll>

        {/* Currently exploring + quote */}
        <AnimateOnScroll delay={0.12}>
          <div className="bg-secondary/50 border border-border rounded-2xl p-6 h-full flex flex-col gap-5">
            <div>
              <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-4">
                Currently exploring
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.currentlyLearning.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border mt-auto">
              <p className="text-sm text-foreground/65 font-serif italic leading-relaxed">
                "Technology should make people feel more human, not less. That's the thread
                running through everything I build."
              </p>
            </div>
          </div>
        </AnimateOnScroll>

        {/* What drives me */}
        <AnimateOnScroll delay={0.15}>
          <div className="md:col-span-2 bg-card border border-border rounded-2xl p-6">
            <h3 className="text-sm font-bold text-foreground uppercase tracking-widest mb-6">
              What drives me
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {values.map(({ title, desc }) => (
                <div key={title} className="flex flex-col gap-2">
                  <div className="w-6 h-px bg-primary mb-1" />
                  <h4 className="font-semibold text-foreground text-sm">{title}</h4>
                  <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  );
}

export default Personality;
