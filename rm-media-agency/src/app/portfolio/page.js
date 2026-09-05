"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  Play,
  X,
} from "lucide-react";

const projectImages = [
  "/images/portfolio/social-design-01.jpg.jpg",
  "/images/portfolio/social-design-02.jpg.jpg",
  "/images/portfolio/social-design-03.jpg.jpg",
  "/images/portfolio/social-design-04.jpg.jpg",
  "/images/portfolio/social-design-05.jpg.jpg",
  "/images/portfolio/social-design-06.jpg.jpg",
  "/images/portfolio/social-design-07.jpg.jpg",
  "/images/portfolio/social-design-08.jpg.jpg",
  "/images/portfolio/social-design-09.jpg.jpg",
  "/images/portfolio/social-design-10.jpg.jpeg",
  "/images/portfolio/social-design-11.jpg.jpeg",
  "/images/portfolio/social-design-12.jpg.jpeg",
  "/images/portfolio/social-design-13.jpg.jpeg",
  "/images/portfolio/social-design-14.jpg.jpeg",
  "/images/portfolio/social-design-15.jpg.jpeg",
  "/images/portfolio/social-design-16.jpg.jpeg",
  "/images/portfolio/social-design-17.jpg.jpeg",
  "/images/portfolio/social-design-18.jpg.jpeg",
  "/images/portfolio/social-design-19.jpg.jpeg",
  "/images/portfolio/social-design-20.jpg.jpeg",
  "/images/portfolio/social-design-21.jpg.jpeg",
  "/images/portfolio/social-design-22.jpg.jpeg",
  "/images/portfolio/social-design-23.jpg.jpeg",
  "/images/portfolio/social-design-24.jpg.jpeg",
  "/images/portfolio/social-design-25.jpg.jpeg",
  "/images/portfolio/social-design-26.jpg.jpeg",
];

const eventImages = [
  "/images/events/event-01.jpg.jpg",
  "/images/events/event-02.jpg.jpg",
  "/images/events/event-03.jpg.jpg",
  "/images/events/event-04.jpg.jpg",
  "/images/events/event-05.jpg.jpg",
];

const reelVideos = [
  "/videos/reel-01.mp4",
  "/videos/reel-02.mp4",
  "/videos/reel-03.mp4",
  "/videos/reel-04.mp4",
  "/videos/reel-05.mp4",
];

const imageProjects = [
  ...projectImages.map((image, index) => ({
    id: String(index + 1).padStart(2, "0"),
    title:
      index % 3 === 0
        ? "SOCIAL\nIMPACT"
        : index % 3 === 1
        ? "VISUAL\nLANGUAGE"
        : "CAMPAIGN\nSYSTEM",
    category: index % 3 === 0 ? "SOCIAL MEDIA" : "CREATIVE",
    type: index % 3 === 0 ? "social" : "creative",
    image,
    description:
      "A visual campaign created to build attention, consistency and a stronger digital presence.",
    meta: "Creative Direction / Content / Design",
  })),

  ...eventImages.map((image, index) => ({
    id: String(projectImages.length + index + 1).padStart(2, "0"),
    title: "BRAND\nEXPERIENCE",
    category: "EVENTS",
    type: "events",
    image,
    description:
      "A complete brand experience designed around atmosphere, interaction and memorable moments.",
    meta: "Events / Experience / Production",
  })),
];

const filters = [
  { label: "ALL WORK", value: "all" },
  { label: "SOCIAL", value: "social" },
  { label: "CREATIVE", value: "creative" },
  { label: "EVENTS", value: "events" },
  { label: "REELS", value: "reels" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [activeReel, setActiveReel] = useState(null);

  const visibleImages =
    filter === "all"
      ? imageProjects
      : imageProjects.filter((project) => project.type === filter);

  const showReels = filter === "all" || filter === "reels";

  return (
    <main className="portfolio-page">

      {/* NAV */}
      <nav className="portfolio-nav">
        <a href="/" className="portfolio-back">
          <ArrowLeft size={17} />
          BACK TO R&M
        </a>

        <div className="portfolio-nav-center">
          SELECTED WORK
        </div>

        <a href="/#contact" className="portfolio-nav-cta">
          START A PROJECT
          <ArrowUpRight size={16} />
        </a>
      </nav>

      {/* HERO */}
      <section className="portfolio-hero">
        <div className="portfolio-hero-number">R&M / 2026</div>

        <div className="portfolio-hero-grid" />

        <div className="portfolio-hero-content">
          <motion.div
            className="portfolio-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            / SELECTED WORK
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WE MAKE
            <br />
            BRANDS
            <br />
            <span>MOVE.</span>
          </motion.h1>

          <motion.div
            className="portfolio-hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p>
              A selection of campaigns, identities, digital experiences
              and brand moments created by R&M Media Agency.
            </p>

            <div className="portfolio-scroll">
              <ArrowDownRight size={18} />
              SCROLL
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="portfolio-intro">
        <div className="portfolio-label">/ OUR APPROACH</div>

        <div className="portfolio-intro-layout">
          <h2>
            IDEAS
            <br />
            WITH
            <br />
            <span>IMPACT.</span>
          </h2>

          <div className="portfolio-intro-copy">
            <p className="big">
              We don't create work just to fill a feed. We create work
              designed to give brands a point of view.
            </p>

            <p>
              Strategy comes first. Then comes the creative system,
              the content, the experience and every detail in between.
            </p>

            <div className="portfolio-line" />
            <span>STRATEGY / CREATIVE / MEDIA / DIGITAL</span>
          </div>
        </div>
      </section>

      {/* FILTERS */}
      <section className="portfolio-work">
        <div className="portfolio-work-head">
          <div>
            <div className="portfolio-label">/ SELECTED WORK</div>
            <h2>THE WORK.</h2>
          </div>

          <div className="portfolio-filters">
            {filters.map((item) => (
              <button
                key={item.value}
                className={filter === item.value ? "active" : ""}
                onClick={() => setFilter(item.value)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* IMAGE WORK */}
        {filter !== "reels" && (
          <div className="portfolio-project-grid">
            {visibleImages.map((project, index) => (
              <motion.article
                key={project.id}
                className={`portfolio-project portfolio-project-${(index % 6) + 1}`}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6 }}
              >
                <div className="project-image-wrap">
                  <img
                    src={project.image}
                    alt={project.title.replace("\n", " ")}
                    className="project-image"
                  />

                  <div className="project-index">
                    {project.id}
                  </div>

                  <div className="project-hover">
                    <ArrowUpRight size={28} />
                  </div>
                </div>

                <div className="project-info">
                  <div>
                    <span>{project.category}</span>
                    <h3>
                      {project.title.split("\n").map((line) => (
                        <span key={line}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </h3>
                  </div>

                  <p>{project.meta}</p>
                </div>
              </motion.article>
            ))}
          </div>
        )}

        {/* PREMIUM REELS */}
        {showReels && (
          <section className="portfolio-reels">
            <div className="portfolio-reels-heading">
              <div>
                <div className="portfolio-label">/ SHORT FORM</div>
                <h2>IN <span>MOTION.</span></h2>
              </div>

              <p>
                Reels and short-form content engineered to stop the scroll,
                build attention and make brands impossible to ignore.
              </p>
            </div>

            <div className="portfolio-reels-grid">
              {reelVideos.map((video, index) => (
                <motion.article
                  key={video}
                  className="portfolio-reel-card"
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                  }}
                >
                  <div className="reel-video-wrap">
                    <video
                      className="reel-video"
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="auto"
                    />

                    <div className="reel-overlay" />

                    <div className="reel-top">
                      <span>R&M / REEL</span>
                      <span>0{index + 1}</span>
                    </div>

                    <div className="reel-play">
                      <Play size={17} fill="currentColor" />
                    </div>

                    <div className="reel-bottom">
                      <span>SHORT FORM</span>
                      <span>2026</span>
                    </div>
                  </div>

                  <div className="reel-card-info">
                    <span>REEL / 0{index + 1}</span>
                    <h3>
                      {index === 0
                        ? "CONTENT IN MOTION."
                        : index === 1
                        ? "BRAND STORIES."
                        : index === 2
                        ? "SOCIAL ENERGY."
                        : index === 3
                        ? "CAMPAIGNS THAT MOVE."
                        : "REELS THAT CONNECT."}
                    </h3>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}
      </section>

      {/* MANIFESTO */}
      <section className="portfolio-manifesto">
        <div className="portfolio-label">/ THE MINDSET</div>

        <h2>
          MAKE THEM LOOK.
          <br />
          <span>MAKE THEM REMEMBER.</span>
        </h2>
      </section>

      {/* CTA */}
      <section className="portfolio-cta">
        <div className="portfolio-label">/ HAVE A PROJECT?</div>

        <h2>
          LET'S MAKE
          <br />
          SOMETHING
          <span> UNMISSABLE.</span>
        </h2>

        <a href="/#contact">
          START A PROJECT
          <ArrowUpRight size={19} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="portfolio-footer">
        <div>R&M MEDIA AGENCY</div>
        <div>CREATIVE / MEDIA / DIGITAL</div>
        <div>© 2026 R&M</div>
      </footer>

      <div className="portfolio-social">
        <a
          href="https://web.facebook.com/profile.php?id=61591050309972"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
        >
          f
        </a>

        <a
          href="https://wa.me/201113403194"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
        >
          wa
        </a>
      </div>

    
        <AnimatePresence>
          {activeReel && (
            <motion.div
              className="reel-lightbox"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveReel(null)}
            >
              <button
                className="reel-lightbox-close"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveReel(null);
                }}
                aria-label="Close reel"
              >
                <X size={22} />
              </button>

              <motion.div
                className="reel-lightbox-inner"
                initial={{ scale: 0.92, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 30 }}
                transition={{ duration: 0.4 }}
                onClick={(e) => e.stopPropagation()}
              >
                <video
                  src={activeReel}
                  className="reel-lightbox-video"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

</main>
  );
}
