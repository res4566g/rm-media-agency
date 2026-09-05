"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  ArrowRight,
  Play,
  Plus,
  Sparkles,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "DIGITAL\nMARKETING",
    text: "Strategy, campaigns and performance systems built to turn attention into measurable growth.",
  },
  {
    number: "02",
    title: "CREATIVE\n& DESIGN",
    text: "Visual identities and campaign concepts designed to make brands instantly recognizable.",
  },
  {
    number: "03",
    title: "MEDIA\nPRODUCTION",
    text: "Photo, video and short-form content engineered for modern platforms and real-world impact.",
  },
  {
    number: "04",
    title: "WEB\nSOLUTIONS",
    text: "High-converting digital experiences that combine strong design, technology and strategy.",
  },
  {
    number: "05",
    title: "EVENTS\n& EXPERIENCES",
    text: "Brand activations and experiences people remember long after the event is over.",
  },
];

const work = [
  {
    image: "/images/portfolio/social-design-01.jpg.jpg",
    category: "SOCIAL / CAMPAIGN",
    title: "Campaign Direction",
    size: "large",
  },
  {
    image: "/images/portfolio/social-design-02.jpg.jpg",
    category: "SOCIAL / CREATIVE",
    title: "Visual Campaign",
    size: "small",
  },
  {
    image: "/images/events/event-01.jpg.jpg",
    category: "EVENTS / EXPERIENCE",
    title: "Brand Experience",
    size: "small",
  },
  {
    image: "/images/portfolio/social-design-03.jpg.jpg",
    category: "SOCIAL / CREATIVE",
    title: "Content System",
    size: "large",
  },
];

const logos = [
  "/images/logo/logo-01.png.jpeg",
  "/images/logo/logo-02.png.jpeg",
  "/images/logo/logo-03.png.jpeg",
  "/images/logo/logo-04.png.jpeg",
];

export default function Home() {
  return (
    <main className="rm-home">

      {/* NAV */}
      <nav className="rm-nav">
        <a href="#home" className="rm-logo">
          R<span>&</span>M
        </a>

        <div className="rm-nav-links">
          <a href="#services">Capabilities</a>
          <a href="#work">Selected Work</a>
          <a href="#about">About</a>
        </div>

        <a href="#contact" className="rm-nav-cta">
          Start a project
          <ArrowUpRight size={15} />
        </a>
      </nav>

      {/* HERO — intentionally kept clean */}
      <section className="rm-hero" id="home">
        <div className="rm-hero-grid" />

        <div className="rm-hero-copy">
          <div className="rm-kicker">
            <span />
            R&M MEDIA AGENCY
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            WE DON'T
            <br />
            JUST <em>MARKET.</em>
            <br />
            WE <strong>MOVE.</strong>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Strategy. Creative. Media. Digital.
            <br />
            One agency built around making brands impossible to ignore.
          </motion.p>

          <div className="rm-hero-actions">
            <a href="#contact" className="rm-btn rm-btn-blue">
              Start your project
              <ArrowUpRight size={18} />
            </a>

            <a href="#work" className="rm-btn rm-btn-line">
              <Play size={14} fill="currentColor" />
              Explore our work
            </a>
          </div>
        </div>

        <div className="rm-hero-visual">
          <div className="rm-hero-image-frame">
            <img src="/hero.png" alt="R&M Media Agency" />
          </div>
          <div className="rm-hero-index">01 / 07</div>
        </div>

        <div className="rm-scroll">
          <ArrowDownRight size={18} />
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* BIG STATEMENT */}
      <section className="rm-statement">
        <div className="rm-section-label">/ WHAT WE BELIEVE</div>

        <h2>
          GOOD MARKETING
          <br />
          GETS <span>SEEN.</span>
          <br />
          GREAT MARKETING
          <br />
          GETS <i>REMEMBERED.</i>
        </h2>

        <div className="rm-statement-bottom">
          <p>
            R&M brings strategy, creativity, production and technology under
            one roof — because the strongest brands don't work in pieces.
          </p>

          <div className="rm-circle-mark">
            <span>R&M</span>
            <ArrowDownRight size={22} />
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="rm-services" id="services">
        <div className="rm-section-head">
          <div>
            <div className="rm-section-label">/ CAPABILITIES</div>
            <h2>
              WHAT WE
              <br />
              <span>DO.</span>
            </h2>
          </div>

          <p>
            Everything your brand needs to move from being present
            to being impossible to ignore.
          </p>
        </div>

        <div className="rm-service-list">
          {services.map((service) => (
            <motion.div
              className="rm-service-row"
              key={service.number}
              whileHover={{ x: 10 }}
            >
              <span className="rm-service-number">{service.number}</span>

              <h3>
                {service.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </h3>

              <p>{service.text}</p>

              <ArrowUpRight className="rm-service-arrow" size={24} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section className="rm-work" id="work">
        <div className="rm-section-head">
          <div>
            <div className="rm-section-label">/ SELECTED WORK</div>
            <h2>
              MADE TO
              <br />
              <span>STAND OUT.</span>
            </h2>
          </div>

          <a href="/portfolio" className="rm-text-link">
            View all work
            <ArrowRight size={17} />
          </a>
        </div>

        <div className="rm-work-grid">
          {work.map((item, index) => (
            <motion.article
              className={`rm-work-card ${item.size}`}
              key={item.image}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="rm-work-image">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="rm-work-overlay">
                  <ArrowUpRight size={25} />
                </div>
              </div>

              <div className="rm-work-meta">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* EVENTS / EXPERIENCE */}
      <section className="rm-experience">
        <div className="rm-experience-image">
          <img
            src="/images/events/event-02.jpg.jpg"
            alt="R&M event experience"
            loading="lazy"
          />
        </div>

        <div className="rm-experience-copy">
          <div className="rm-section-label">/ EXPERIENCES</div>

          <h2>
            BRANDS
            <br />
            SHOULD BE
            <br />
            <span>FELT.</span>
          </h2>

          <p>
            From corporate experiences to launches, activations and
            unforgettable moments — we turn your brand into an experience
            people can actually feel.
          </p>

          <a href="#contact" className="rm-text-link">
            Create an experience
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="rm-about" id="about">
        <div className="rm-section-label">/ WHY R&M</div>

        <div className="rm-about-layout">
          <h2>
            NOT ANOTHER
            <br />
            <span>AGENCY.</span>
          </h2>

          <div className="rm-about-copy">
            <p className="rm-about-big">
              We think like strategists, create like artists and execute
              like operators.
            </p>

            <p>
              Every project starts with a clear objective. Every visual has
              a reason. Every campaign is designed to move the business
              forward.
            </p>

            <a href="#contact" className="rm-text-link">
              Why work with us
              <ArrowRight size={17} />
            </a>
          </div>
        </div>

        <div className="rm-stats">
          <div>
            <strong>360°</strong>
            <span>CREATIVE & DIGITAL</span>
          </div>
          <div>
            <strong>05</strong>
            <span>CORE CAPABILITIES</span>
          </div>
          <div>
            <strong>01</strong>
            <span>CONNECTED TEAM</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>WAYS TO CREATE</span>
          </div>
        </div>
      </section>

      {/* LOGO WALL */}
      <section className="rm-logo-wall">
        <div className="rm-section-label">/ BRANDS WE BUILD FOR</div>

        <div className="rm-logo-grid">
          {logos.map((logo) => (
            <div className="rm-client-logo" key={logo}>
              <img src={logo} alt="Client brand" loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="rm-contact" id="contact">
        <div className="rm-contact-glow" />

        <div className="rm-section-label">/ LET'S CREATE SOMETHING</div>

        <h2>
          YOUR NEXT
          <br />
          <span>MOVE.</span>
        </h2>

        <p>
          Have a brand that deserves more attention?
          <br />
          Let's make people stop scrolling.
        </p>

        <a href="#contact" className="rm-btn rm-btn-blue rm-contact-btn">
          Start a conversation
          <ArrowUpRight size={19} />
        </a>
      </section>

      {/* FOOTER */}
      <footer className="rm-footer">
        <div className="rm-footer-logo">
          R<span>&</span>M
        </div>

        <div>
          <span>R&M MEDIA AGENCY</span>
          <small>Strategy · Creative · Media · Digital · Experiences</small>
        </div>

        <a href="#home">
          Back to top
          <ArrowUpRight size={15} />
        </a>
      </footer>

    </main>
  );
}
