"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "./portfolio.css";

const designs = Array.from({ length: 26 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const ext = i < 9 ? "jpg.jpg" : "jpg.jpeg";
  return `/images/portfolio/social-design-${n}.${ext}`;
});

const reels = Array.from({ length: 5 }, (_, i) =>
  `/videos/reel-${String(i + 1).padStart(2, "0")}.mp4`
);

const logos = Array.from({ length: 10 }, (_, i) =>
  `/images/logo/logo-${String(i + 1).padStart(2, "0")}.png.jpeg`
);

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <nav className="portfolio-nav">
        <Link href="/" className="portfolio-brand">R&M</Link>
        <Link href="/" className="back-home">← BACK HOME</Link>
      </nav>

      <section className="portfolio-hero">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          R&M MEDIA AGENCY / SELECTED WORK
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          WE MAKE
          <span> BRANDS MOVE.</span>
        </motion.h1>

        <p className="portfolio-intro">
          Social campaigns, visual identities, reels and digital experiences
          created to make brands impossible to ignore.
        </p>
      </section>

      <section className="portfolio-section">
        <div className="section-heading">
          <span>01</span>
          <h2>SOCIAL DESIGNS</h2>
        </div>

        <div className="design-grid">
          {designs.map((src, i) => (
            <motion.div
              className="design-card"
              key={src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: (i % 4) * 0.06 }}
            >
              <img src={src} alt={`Social Design ${i + 1}`} />
              <div className="card-number">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio-section reels-section">
        <div className="section-heading">
          <span>02</span>
          <h2>REELS</h2>
        </div>

        <div className="reels-grid">
          {reels.map((src, i) => (
            <motion.div
              className="reel-card"
              key={src}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <video src={src} controls playsInline preload="metadata" />
              <div className="reel-label">
                REEL {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio-section logos-section">
        <div className="section-heading">
          <span>03</span>
          <h2>LOGOS & IDENTITIES</h2>
        </div>

        <div className="logos-grid">
          {logos.map((src, i) => (
            <motion.div
              className="logo-card"
              key={src}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={src} alt={`Logo ${i + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="portfolio-cta">
        <p>HAVE A BRAND THAT NEEDS TO MOVE?</p>
        <h2>LET'S CREATE<br />SOMETHING BIG.</h2>

        <a
          href="https://wa.me/201113403194"
          target="_blank"
          rel="noopener noreferrer"
        >
          START A PROJECT →
        </a>
      </section>
    </main>
  );
}
