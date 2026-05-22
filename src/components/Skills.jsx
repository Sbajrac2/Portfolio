// ============================================================
// Skills.jsx — Skills displayed as interactive category cards
// Edit src/data/skills.js to update your skills
// ============================================================

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import skills from "../data/skills";

function AnimateOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function SkillTag({ label, index }) {
  return (
    <motion.span
      key={label}
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.22, delay: index * 0.03 }}
      whileHover={{ scale: 1.05 }}
      className="px-3 py-1.5 bg-secondary text-secondary-foreground text-sm rounded-full font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-colors"
    >
      {label}
    </motion.span>
  );
}

function SkillCard({ category, index }) {
  const [open, setOpen] = useState(true);

  return (
    <AnimateOnScroll delay={index * 0.06}>
      <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors">
        {/* Category header — click to collapse */}
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-left"
        >
          <h3 className="text-sm font-bold text-foreground tracking-wide">{category.category}</h3>
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-muted-foreground text-xs"
          >
            ▾
          </motion.span>
        </button>

        {/* Skill tags — animated expand/collapse */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-5 pb-5 flex flex-wrap gap-2">
                {category.items.map((skill, i) => (
                  <SkillTag key={skill} label={skill} index={i} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateOnScroll>
  );
}

function Skills() {
  return (
    <div className="section-pad max-w-5xl mx-auto px-4 sm:px-6">
      <AnimateOnScroll>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          What I work with.
        </h2>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((category, i) => (
          <SkillCard key={category.category} category={category} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
