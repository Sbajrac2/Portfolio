// ============================================================
// About.jsx — Personal introduction section
// Edit the bio array in src/data/profile.js to update content
// ============================================================

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import profile from "../data/profile";

function AnimateOnScroll({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Short descriptors — edit these to match your actual story
const highlights = [
  "Hackathon builder",
  "Community organizer",
  "Accessibility advocate",
  "CS student, SUNY Oswego",
  "LakerHacks organizer",
  "Resident Advisor",
];

function About() {
  return (
    <div className="section-pad max-w-4xl mx-auto px-4 sm:px-6">
      <AnimateOnScroll>
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">About Me</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
          The person behind the code.
        </h2>
      </AnimateOnScroll>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: bio paragraphs from profile.js */}
        <div className="flex flex-col gap-5">
          {profile.bio.map((paragraph, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <p className="text-foreground/80 leading-relaxed text-base">{paragraph}</p>
            </AnimateOnScroll>
          ))}
        </div>

        {/* Right: photo + descriptor chips */}
        <div className="flex flex-col gap-6">
          {/* Profile photo — uncomment <img> once you add src/assets/photo.jpg */}
          <AnimateOnScroll>
            <div className="w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-2xl bg-secondary overflow-hidden flex items-center justify-center border border-border relative">
             <img src="/src/assets/photo.jpg" alt={profile.name} className="w-full h-full object-cover" />
              <div className="text-center text-muted-foreground text-sm p-6">
                {/* <div className="w-16 h-16 rounded-full bg-muted mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-muted-foreground">
                    {profile.name.charAt(0)}
                  </span>
                </div> */}
                {/* <p className="font-medium text-foreground/60">Add your photo</p>
                <p className="text-xs mt-1 text-muted-foreground">Place image at</p>
                <code className="text-xs bg-muted px-1.5 py-0.5 rounded mt-1 inline-block">
                  src/assets/photo.jpg
                </code> */}
              </div>
              {/* <div className="absolute top-0 right-0 w-16 h-16 bg-primary/8 rounded-bl-3xl" /> */}
            </div>
          </AnimateOnScroll>

          {/* Descriptor chips */}
          <AnimateOnScroll delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {highlights.map((label) => (
                <span
                  key={label}
                  className="px-3 py-1.5 bg-card border border-border rounded-full text-sm text-foreground/75 hover:border-primary/40 hover:text-foreground transition-colors"
                >
                  {label}
                </span>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  );
}

export default About;
