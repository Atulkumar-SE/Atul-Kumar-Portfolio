"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Menu, X, Building2 } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const EXPERIENCE = [
  {
    company: "LCNC Technologies",
    role: "Software Developer",
    period: "Jan 2024 – Apr 2026",
    location: "Noida",
    color: "#FF5722",
    points: [
      "Built scalable UI architecture for a FinTech LOS/LMS web application.",
      "Integrated complex third-party APIs — Account Aggregator, eNACH, DocuSign, KYC, EMI flow.",
      "Leveraged AWS Lambda for backend automation; optimized layouts for Core Web Vitals.",
      "Accelerated delivery using AI tools: Claude, Cursor, Copilot, Figma AI.",
    ],
  },
  {
    company: "Lintas Infosystem",
    role: "Software Developer Executive (Trainee)",
    period: "May 2023 – Jan 2024",
    location: "Noida",
    color: "#FF7043",
    points: [
      "Developed organizational sites from scratch and managed MERN apps with Laravel API integrations.",
      "Translated Figma designs into clean, pixel-perfect React components.",
      "Collaborated with backend teams on API integration and state management in Agile sprints.",
    ],
  },
  {
    company: "Kube",
    role: "UI/UX Designer (Intern)",
    period: "Jun 2022 – Oct 2022",
    location: "Noida",
    color: "#FFAB40",
    points: [
      "Designed intuitive mobile interfaces for consumer-facing products.",
      "Created low-to-high fidelity wireframes and interactive prototypes in Figma.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Corporate Live Projects 4+",
    description:
      "Engineered full-stack enterprise solutions across FinTech, EdTech, and ERP systems. Focused on building scalable frontend architectures, high-performance dashboards, and optimized data workflows.",
    tags: [
      "Next.js",
      "React.js",
      "Node.js",
      "MongoDB",
      "Redux",
      "TailwindCSS",
      "RestAPI",
    ],
    accent: "#FF5722",
    icon: "🏬",
    link: "#",
  },
  {
    title: "Tools Issue Management System",
    description:
      "A workshop platform with dual-role workflows. Mechanics can browse, issue, and return tools, while Admins manage inventory, track live stock levels, and monitor global issue records.",
    tags: ["React 18", "Vite", "React Router", "Context API", "TailwindCSS"],
    accent: "#FF9800",
    icon: "🛠️",
    link: "https://atulkumar-se.github.io/Assignment-Indicorp/",
  },
  {
    title: "AeroTick — Secure Support System",
    description:
      "A full-stack ticketing and issue-resolution platform featuring robust user authentication. Built with secure dual-role dashboards allowing users to seamlessly lodge support requests, while enabling administrators to manage ticket Lifecycles, update tracking statuses, and streamline team workflows.",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Axios",
      "TailwindCSS",
    ],
    accent: "#FF9800",
    icon: "🎟️",
    link: "https://github.com/Atulkumar-SE/Aerotick",
  },
  {
    title: "Argus — UI/UX & Brand Identity",
    description:
      "Designed a comprehensive brand identity and high-fidelity interactive prototype from scratch. Conducted user research, established a scalable design system with reusable UI components, and built seamless user flows focused on delivering an intuitive and high-converting digital experience.",
    tags: ["Figma", "Brand Identity", "UI/UX Design", "Prototyping"],
    accent: "#3B82F6",
    icon: "✨",
    link: "https://www.figma.com/proto/r0wYPmCsdFgfrjgR1aGxH4/Atulix?node-id=128-10&t=T69LKEjk0r4kIEJt-1&scaling=min-zoom&content-scaling=fixed&page-id=128%3A2&starting-point-node-id=162%3A20",
  },
  {
    title: "Kube — Mobile UI/UX Design",
    description:
      "Designed a modern, mobile-first interface focusing on intuitive user flows and seamless gesture interactions. Created a cohesive mobile design system, optimized screen real estate for diverse device profiles, and delivered a high-fidelity interactive prototype centered on accessibility and touch-target optimization.",
    tags: ["Figma", "Mobile UI/UX", "App Design", "Wireframing", "Prototyping"],
    accent: "#00E5FF",
    icon: "📱",
    link: "https://www.figma.com/proto/SPDO8A1WDqDyDc5bGtb80d/Kube-Retail-Tech-Pvt.-Ltd.?node-id=1106-5978&t=EA1ji2AUDIEjaMyz-1&scaling=min-zoom&content-scaling=fixed&page-id=1106%3A3184",
  },
];

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Atulkumar-SE",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/atul-jaiswal-sde",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:atuljaiswal.se@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="w-5 h-5"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,14 22,4" />
      </svg>
    ),
  },
];

const SKILLS = [
  "React.js",
  "Next.js",
  "Node.js",
  "AI Integration",
  "TypeScript",
  "MongoDB",
  "AWS Lambda",
  "Figma",
  "TailwindCSS",
  "Docker",
  "Redux",
  "Chart.js",
  "Framer Motion",
  "JWT Auth",
  "Git",
  "CI/CD",
  "Agile Sprints",
  "REST APIs",
];

// ─── COMPONENTS ──────────────────────────────────────────────────────────────

function FloatingParticles() {
  const particles = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.5 + 0.1,
  }));
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-orange-400"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [p.opacity, p.opacity * 0.3, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

function Nav({ activeSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localActive, setLocalActive] = useState("home");
  const MotionLink = motion(Link);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Backup Scroll Spy: If Claude's parent page does not pass 'activeSection',
  // this automatically highlights the correct nav element on scroll.
  useEffect(() => {
    if (activeSection) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setLocalActive(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const currentActive = activeSection || localActive;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4 sm:py-6 bg-[#0B0F19]/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand Logo */}
        <MotionLink
          href="#home"
          className="font-logo inline-block text-3xl sm:text-4xl font-extrabold tracking-[-0.08em] text-white select-none cursor-pointer lowercase"
          animate={{
            y: [0, -3, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="bg-gradient-to-r from-[#FF5722] to-[#FF8A65] bg-clip-text text-transparent">
            a
          </span>
          <span className="text-white -ml-[2px]">j</span>
        </MotionLink>

        {/* Floating Navigation Pill (Desktop UI) */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-lg px-4 py-2 rounded-full border border-white/10 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                currentActive === item.id
                  ? "bg-gradient-to-r from-[#FF5722] to-amber-500 text-white shadow-[0_0_15px_rgba(255,87,34,0.4)]"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-full text-sm font-semibold border border-[#FF5722] text-white bg-gradient-to-r from-transparent to-transparent hover:from-[#FF5722] hover:to-[#E64A19] transition-all duration-300 shadow-[0_0_15px_rgba(255,87,34,0.15)] hover:shadow-[0_0_25px_rgba(255,87,34,0.4)]"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white hover:text-[#FF5722] transition-colors focus:outline-none"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Accordion Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-[#0D0B14]/95 backdrop-blur-xl rounded-2xl border border-white/10 p-6 md:hidden flex flex-col gap-3 shadow-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`py-2.5 px-4 rounded-xl text-base font-semibold transition-all ${
                  currentActive === item.id
                    ? "bg-gradient-to-r from-[#FF5722] to-amber-500 text-white"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-bold shadow-lg shadow-orange-600/20"
            >
              Get in Touch
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient radial */}
      <div
        className="absolute inset-0 bg-gradient-radial pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255,87,34,0.18) 0%, rgba(26,16,47,0.4) 50%, transparent 80%)",
        }}
      />

      {/* Giant background typography */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
      >
        <span
          className="bebas glow-text text-[22vw] md:text-[20vw] leading-none text-center"
          style={{
            color: "rgba(255,87,34,0.12)",
            letterSpacing: "0.02em",
            whiteSpace: "nowrap",
          }}
        >
          ATUL KUMAR
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center min-h-screen">
        {/* Left: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-orange-400 tracking-[0.3em] text-sm uppercase font-semibold mb-4"
          >
            ✦ Full-Stack Developer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bebas glow-text leading-none mb-6"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "#f0ece8" }}
          >
            Hi, I am
            <br />
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,87,34,0.8)",
                color: "transparent",
              }}
            >
              Atul
            </span>
            <span className="text-white">Kumar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-300 text-lg leading-relaxed max-w-md mb-8"
          >
            Building interfaces that turn{" "}
            <span className="text-orange-400 font-semibold">complex ideas</span>{" "}
            into elegant, high-performance web experiences. Focused on React,
            Next.js & MERN Stack.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <a
              href="#"
              download="Atul_Kumar-Frontend.pdf"
              className="group px-7 py-3.5 rounded-full bg-gradient-to-r from-[#FF5722] to-[#E64A19] text-white font-semibold hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            >
              My Resume
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-full glass text-white font-semibold hover:border-orange-400/40 transition-all duration-300 hover:scale-105 border border-white/10"
            >
              View My Work
            </a>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 items-center"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=atuljaiswal.se@gmail.com`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-400/40 transition-all duration-200 hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
            <div className="h-px w-12 bg-gradient-to-r from-orange-500/60 to-transparent ml-2" />
            <span className="text-gray-500 text-xs tracking-widest uppercase">
              Connect
            </span>
          </motion.div>
        </div>

        {/* Right: Profile visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center items-center"
        >
          {/* Outer glowing ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full"
            style={{ border: "1px dashed rgba(255,87,34,0.3)" }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full"
            style={{ border: "1px dashed rgba(255,171,64,0.15)" }}
          />

          {/* Profile circle */}
          <div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden orange-glow"
            style={{
              border: "2px solid rgba(255,87,34,0.4)",
              background: "linear-gradient(135deg, #1A102F 0%, #0F1628 100%)",
            }}
          >
            {/* Placeholder avatar */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#1A102F] to-[#0B0F19]">
              <img
                src="/aj.png"
                alt="Atul Kumar"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>

          {/* Floating stat badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 right-4 md:right-0 glass px-4 py-2.5 rounded-2xl text-center"
          >
            <p className="bebas text-2xl text-orange-400">3+</p>
            <p className="text-gray-400 text-xs">Years Exp.</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
            className="absolute bottom-8 left-2 md:left-0 glass px-4 py-2.5 rounded-2xl text-center"
          >
            <p className="bebas text-2xl text-amber-400">12+</p>
            <p className="text-gray-400 text-xs">Projects Built</p>
          </motion.div>
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="absolute bottom-20 right-0 md:-right-4 glass px-3 py-2 rounded-xl"
          >
            <span className="text-xs text-gray-300">⚡ Available for hire</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-orange-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function SkillsRibbon() {
  return (
    <div className="relative overflow-hidden py-6 border-y border-white/5">
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-gradient-to-r from-[#0B0F19] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-gradient-to-l from-[#0B0F19] to-transparent pointer-events-none" />
      <motion.div
        animate={{ x: [0, -50 * SKILLS.length] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex gap-6 whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {[...SKILLS, ...SKILLS].map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2 text-sm text-gray-400 font-medium px-4 py-1.5 glass rounded-full shrink-0"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <SectionHeader label="Career" title="Experience" accent="Timeline" />
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent -translate-x-1/2 hidden md:block" />
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-orange-500/60 via-orange-500/20 to-transparent md:hidden" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              animate={{ y: [0, i % 2 === 0 ? -4 : 4, 0] }}
              // note: whileInView overrides animate so we need separate motion for float
              className={`relative flex flex-col md:flex-row gap-6 mb-12 pl-16 md:pl-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Dot */}
              <div
                className="absolute left-[18px] md:left-1/2 top-6 w-4 h-4 rounded-full -translate-x-1/2 border-2 border-orange-400 z-10"
                style={{
                  background: exp.color,
                  boxShadow: `0 0 14px ${exp.color}80`,
                }}
              />

              {/* Date (desktop only, opposite side) */}
              <div
                className={`hidden md:flex w-[45%] ${i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"} items-start pt-4`}
              >
                <span className="text-gray-500 text-sm tracking-wider font-medium">
                  {exp.period}
                </span>
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="md:w-[45%] glass rounded-2xl px-6 py-10 hover:border-orange-400/30 transition-colors "
                style={{ borderLeft: `3px solid ${exp.color}` }}
              >
                <div className="flex items-start justify-between gap-3 mb-1 flex-wrap">
                  <h3 className="text-white font-semibold text-lg">
                    {exp.company}
                  </h3>
                  <span className="md:hidden text-gray-500 text-xs">
                    {exp.period}
                  </span>
                </div>
                <p className="font-medium mb-1" style={{ color: exp.color }}>
                  {exp.role}
                </p>
                <p className="text-gray-500 text-xs mb-4 tracking-wider">
                  📍 {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-gray-400 text-sm leading-relaxed flex gap-2"
                    >
                      <span className="text-orange-500 mt-1 shrink-0">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,87,34,0.07) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto max-w-6xl">
        <SectionHeader label="Work" title="Featured" accent="Projects" />
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden cursor-pointer transition-all duration-300"
              style={{ "--accent": project.accent }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${project.accent}20 0%, transparent 70%)`,
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
                }}
              />

              <div className="relative">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3.5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.7,
                  }}
                  className="text-4xl mb-4"
                >
                  {project.icon}
                </motion.div>

                <h3 className="bebas text-2xl text-white mb-3 tracking-wide group-hover:text-orange-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full text-gray-300 font-medium"
                      style={{
                        background: `${project.accent}18`,
                        border: `1px solid ${project.accent}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer" // Security best practice for external links
                    className="flex items-center gap-1.5 font-semibold transition-colors hover:opacity-80"
                    style={{ color: project.accent }}
                  >
                    View Project →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          label="Academic"
          title="Education &"
          accent="Certifications"
        />
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* Degree Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            animate={{ y: [0, -4, 0] }}
            className="glass rounded-2xl p-7 border-l-2 border-orange-500"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/30 to-orange-800/20 flex items-center justify-center mb-5 text-2xl border border-orange-500/20">
              🎓
            </div>
            <h3 className="text-white font-semibold text-xl mb-1">
              B.Tech in CSE
            </h3>
            <p className="text-orange-400 font-medium text-sm mb-2">
              Mangalmay Institute of Engineering & Technology (AKTU)
            </p>
            <p className="text-gray-500 text-sm mb-5">
              2019 – 2023 · Greater Noida, UP
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Core studies in algorithms, data structures, operating systems,
              database systems, and software engineering. Graduated with focus
              on web technologies.
            </p>
          </motion.div>

          {/* Certifications Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            animate={{ y: [0, 4, 0] }}
            className="glass rounded-2xl p-7 border-l-2 border-amber-400"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400/20 to-orange-800/10 flex items-center justify-center mb-5 text-2xl border border-amber-400/20">
              🏅
            </div>
            <h3 className="text-white font-semibold text-xl mb-4">
              Certifications
            </h3>
            {[
              { title: "UI/UX Design", org: "Kube Retail Tech Pvt. Ltd." },
              { title: "Full Stack Web Development", org: "Ducate" },
              {
                title: "AWS Cloud Practitioner Essentials",
                org: "Amazon Web Services",
              },
              {
                title: "Diploma in Computer Applications",
                org: "HEC Computer Education",
              },
            ].map((cert, i) => (
              <div key={i} className="flex items-start gap-3 mb-3 last:mb-0">
                <span className="text-amber-400 mt-0.5 shrink-0">✦</span>
                <div>
                  <p className="text-gray-200 text-sm font-medium">
                    {cert.title}
                  </p>
                  <p className="text-gray-500 text-xs">{cert.org}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Tech stack visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 glass rounded-2xl p-6"
        >
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">
            Core Technology Stack
          </p>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill, i) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, color: "#FF5722" }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="text-gray-300 text-sm px-3 py-1.5 rounded-full glass hover:border-orange-400/40 cursor-default font-medium transition-colors"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ak_contact_form");
      if (saved) setForm(JSON.parse(saved));
    } catch (_) {}
  }, []);

  const handleChange = (e) => {
    const next = { ...form, [e.target.name]: e.target.value };
    setForm(next);
    try {
      localStorage.setItem("ak_contact_form", JSON.stringify(next));
    } catch (_) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setSent(true);
    try {
      localStorage.removeItem("ak_contact_form");
    } catch (_) {}
    setTimeout(() => {
      setSent(false);
      setForm({ name: "", email: "", message: "" });
    }, 4000);
  };

  const inputClass =
    "w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-orange-400/60 focus:bg-white/[0.06] transition-all duration-200";

  return (
    <section id="contact" className="relative py-24 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 100%, rgba(255,87,34,0.08) 0%, transparent 70%)",
        }}
      />
      <div className="container mx-auto max-w-2xl">
        <SectionHeader label="Let's Work" title="Get in" accent="Touch" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 glass rounded-3xl p-8 md:p-10"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-8"
              >
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="bebas text-3xl text-orange-400 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-400">
                  Thanks {form.name || "there"}, I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-gray-400 text-xs mb-2 tracking-wider uppercase">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-2 tracking-wider uppercase">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 text-xs mb-2 tracking-wider uppercase">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-xl font-semibold text-white text-base tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25"
                  style={{
                    background:
                      "linear-gradient(135deg, #FF5722 0%, #E64A19 50%, #BF360C 100%)",
                  }}
                >
                  Send Message ↗
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {/* Contact info row */}
          <div className="mt-8 pt-8 border-t border-white/5 flex flex-wrap gap-6 justify-center">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-orange-400 text-sm transition-colors"
              >
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-gray-600 text-sm">
        Crafted with ☕ by{" "}
        <span className="text-orange-400 font-medium">Atul Kumar</span> ·{" "}
        {new Date().getFullYear()}
      </p>
    </footer>
  );
}

function SectionHeader({ label, title, accent }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-orange-400 tracking-[0.3em] text-xs uppercase font-semibold mb-3">
        ✦ {label}
      </p>
      <h2
        className="bebas leading-none"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
      >
        <span className="text-white">{title} </span>
        <span
          style={{
            WebkitTextStroke: "1px rgba(255,87,34,0.7)",
            color: "transparent",
          }}
        >
          {accent}
        </span>
      </h2>
    </motion.div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main
      className="grain relative min-h-screen"
      style={{
        background:
          "linear-gradient(160deg, #0B0F19 0%, #1A102F 50%, #0B0F19 100%)",
      }}
    >
      <FloatingParticles />
      <Nav />
      <Hero />
      <SkillsRibbon />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
