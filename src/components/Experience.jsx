// ============================================================
// Experience.jsx — Timeline of roles, events, and achievements
// Edit src/data/experience.js to update your timeline
// ============================================================

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import experience from "../data/experience";

const typeBadge = {
  "Leadership":          "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  "Hackathon":           "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Award":               "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",
  "Internship / Project":"bg-blue-100   text-blue-700   dark:bg-blue-900/30   dark:text-blue-300",
};
const defaultBadge = "bg-muted text-muted-foreground";

// The small circle on the timeline — shows a number if no icon
function TimelineDot({ index }) {
  return (
    <div className="w-9 h-9 rounded-full bg-secondary border-2 border-primary/25 flex items-center justify-center z-10 shrink-0">
      <span className="text-xs font-bold text-primary">{index + 1}</span>
    </div>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 pb-8 last:pb-0"
    >
      {/* Dot + connector line */}
      <div className="flex flex-col items-center shrink-0">
        <TimelineDot index={index} />
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      {/* Card */}
      <div className="bg-card border border-border rounded-2xl p-5 flex-1 group hover:border-primary/30 transition-colors mb-2">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
              {item.role}
            </h3>
            <p className="text-sm text-muted-foreground font-medium mt-0.5">{item.org}</p>
          </div>
          <div className="flex flex-col items-end gap-1.5">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${typeBadge[item.type] ?? defaultBadge}`}>
              {item.type}
            </span>
            <span className="text-xs text-muted-foreground">{item.date}</span>
          </div>
        </div>

        <p className="text-sm text-foreground/75 leading-relaxed mb-3">{item.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {item.highlights.map((h) => (
            <span key={h} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-full">
              {h}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Experience() {
  return (
    <div className="section-pad max-w-3xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          The journey so far.
        </h2>
      </motion.div>

      <div>
        {experience.map((item, i) => (
          <TimelineItem key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
