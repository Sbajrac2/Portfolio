// ============================================================
// Contact.jsx — Contact section
// Edit email, linkedin, github, resume in src/data/profile.js
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

// Edit labels and hrefs here, or add more links
const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    note: "Best way to reach me"
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/shrishtika",
    href: profile.linkedin,
    note: "Professional updates"
  },
  {
    label: "GitHub",
    value: "github.com/shrishtika",
    href: profile.github,
    note: "Code & projects"
  },
  {
    label: "Resume",
    value: "Download PDF",
    href: profile.resume,
    note: "Work history & skills"
  },
];

function Contact() {
  return (
    <div className="section-pad max-w-4xl mx-auto px-4 sm:px-6">
      <AnimateOnScroll>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Contact</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Let's build something.
        </h2>
        <p className="text-foreground/65 text-lg max-w-lg mb-12 leading-relaxed">
          Whether you want to collaborate, talk about a project, or just say hi —
          I'm always happy to hear from people.
        </p>
      </AnimateOnScroll>

      {/* Contact links */}
      <div className="grid sm:grid-cols-2 gap-3 mb-14">
        {links.map(({ label, value, href, note }, i) => (
          <AnimateOnScroll key={label} delay={i * 0.07}>
            <a
              href={href}
              target={href.startsWith("mailto") ? "_self" : "_blank"}
              rel="noreferrer"
              className="group flex items-center justify-between bg-card border border-border rounded-xl px-5 py-4 hover:border-primary/40 hover:bg-secondary/20 transition-all"
            >
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                  {value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{note}</p>
              </div>
              <span className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all text-sm">
                →
              </span>
            </a>
          </AnimateOnScroll>
        ))}
      </div>

      {/* Footer */}
      <AnimateOnScroll delay={0.2}>
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>
            {/* Made by{" "} */}
            <span className="font-medium text-foreground">{profile.name}</span>
          </p>
          <p>React · Tailwind CSS · Framer Motion</p>
        </div>
      </AnimateOnScroll>
    </div>
  );
}

export default Contact;
