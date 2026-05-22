// ============================================================
// Hero.jsx — Landing / intro section
// Edit profile.js to change name, tagline, and social links
// To add your photo: put it at src/assets/photo.jpg
// ============================================================

import { motion } from "framer-motion";
import profile from "../data/profile";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-16 overflow-hidden">
      {/* Subtle gradient blobs in background */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(262 83% 65%), transparent)" }}
      />
      <div
        className="absolute -bottom-24 -left-32 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(310 70% 65%), transparent)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">

        {/* Greeting */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="text-sm font-semibold text-primary uppercase tracking-widest"
        >
          Hi, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
          className="text-5xl sm:text-7xl font-bold leading-tight gradient-text"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.3}
          className="text-lg text-muted-foreground font-medium tracking-wide"
        >
          {profile.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.4}
          className="text-xl sm:text-2xl text-foreground/75 font-serif italic max-w-xl leading-relaxed"
        >
          "{profile.tagline}"
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex flex-wrap gap-3 justify-center mt-2"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:opacity-90 active:scale-95 transition-all shadow-sm"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold hover:bg-secondary/80 active:scale-95 transition-all"
          >
            GitHub
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-border text-foreground rounded-full text-sm font-semibold hover:bg-muted active:scale-95 transition-all"
          >
            Resume
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="px-5 py-2.5 border border-border text-foreground rounded-full text-sm font-semibold hover:bg-muted active:scale-95 transition-all"
          >
            Say hi
          </a>
        </motion.div>

        {/* School badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.6}
          className="mt-2 px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium"
        >
          {profile.school} · {profile.major}
        </motion.div>
      </div>

    </div>
  );
}

export default Hero;
