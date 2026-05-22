// ============================================================
// Projects.jsx — Project cards section
// Edit src/data/projects.js to add/remove/edit projects
// ============================================================

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import projects from "../data/projects";

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

// Category colors — add more if you create new categories in projects.js
const categoryColors = {
  "AI / Social Impact":       "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300",
  "Mental Health / UX":       "bg-pink-100   text-pink-700   dark:bg-pink-900/30   dark:text-pink-300",
  "Game Dev / Accessibility": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "Accessibility / Education":"bg-sky-100    text-sky-700    dark:bg-sky-900/30    dark:text-sky-300",
  "AI / Language Learning":   "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
  "Full Stack / IBM":         "bg-blue-100   text-blue-700   dark:bg-blue-900/30   dark:text-blue-300",
  "AI / Backend":             "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  "ML / Data":                "bg-teal-100   text-teal-700   dark:bg-teal-900/30   dark:text-teal-300",
  "Cloud / Backend":          "bg-cyan-100   text-cyan-700   dark:bg-cyan-900/30   dark:text-cyan-300",
};
const defaultColor = "bg-muted text-muted-foreground";

function ProjectCard({ project, index }) {
  return (
    <AnimateOnScroll delay={index * 0.06}>
      <div className="card-hover group bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 h-full">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[project.category] ?? defaultColor}`}>
              {project.category}
            </span>
            <h3 className="text-base font-bold text-foreground mt-2.5 group-hover:text-primary transition-colors leading-snug">
              {project.title}
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">{project.subtitle}</p>
          </div>
          {project.featured && (
            <span className="shrink-0 text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
              Featured
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-foreground/70 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="flex flex-col gap-1.5">
          {project.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full font-medium">
              {t}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-2 border-t border-border text-xs text-muted-foreground">
          <span>{project.date}</span>
          <div className="flex gap-3">
            {project.github !== "#" && (
              <a href={project.github} target="_blank" rel="noreferrer"
                className="hover:text-primary transition-colors font-medium">
                GitHub →
              </a>
            )}
            {project.demo !== "#" && (
              <a href={project.demo} target="_blank" rel="noreferrer"
                className="hover:text-primary transition-colors font-medium">
                Demo →
              </a>
            )}
            {project.github === "#" && project.demo === "#" && (
              <span className="italic opacity-40"> </span>
            )}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Featured"];

  const filtered = filter === "Featured"
    ? projects.filter((p) => p.featured)
    : projects;

  return (
    <div className="section-pad max-w-6xl mx-auto px-4 sm:px-6">
      <AnimateOnScroll>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Projects</p>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Things I've built.
          </h2>
          <div className="flex gap-1 p-1 bg-muted rounded-full self-start sm:self-auto">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                  filter === f
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </AnimateOnScroll>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
