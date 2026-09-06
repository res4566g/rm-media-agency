"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Play,
  Plus,
  Minus,
  Check,
  MessageCircle,
  Instagram,
  Menu,
  X,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "DIGITAL MARKETING",
    text: "Strategy, campaigns and performance systems built to turn attention into measurable growth.",
  },
  {
    number: "02",
    title: "CREATIVE & DESIGN",
    text: "Visual identities and campaign concepts designed to make brands instantly recognizable.",
  },
  {
    number: "03",
    title: "MEDIA PRODUCTION",
    text: "Photo, video and short-form content engineered for modern platforms and real-world impact.",
  },
  {
    number: "04",
    title: "WEB SOLUTIONS",
    text: "High-converting digital experiences combining strong design, technology and strategy.",
  },
  {
    number: "05",
    title: "EVENTS & EXPERIENCES",
    text: "Brand activations and experiences people remember long after the event is over.",
  },
];

const work = [
  {
    image: "/images/portfolio/social-design-01.jpg.jpg",
    category: "SOCIAL / CAMPAIGN",
    title: "CAMPAIGN DIRECTION",
    size: "large",
  },
  {
    image: "/images/portfolio/social-design-02.jpg.jpg",
    category: "SOCIAL / CREATIVE",
    title: "VISUAL CAMPAIGN",
    size: "small",
  },
  {
    image: "/images/events/event-01.jpg.jpg",
    category: "EVENTS / EXPERIENCE",
    title: "BRAND EXPERIENCE",
    size: "small",
  },
  {
    image: "/images/portfolio/social-design-03.jpg.jpg",
    category: "SOCIAL / CREATIVE",
    title: "CONTENT SYSTEM",
    size: "large",
  },
  {
    image: "/images/portfolio/social-design-04.jpg.jpg",
    category: "SOCIAL / CREATIVE",
    title: "BRAND PRESENCE",
    size: "small",
  },
  {
    image: "/images/portfolio/social-design-05.jpg.jpg",
    category: "SOCIAL / CAMPAIGN",
    title: "DIGITAL IMPACT",
    size: "small",
  },
];

const logos = [
  "/images/logo/logo-01.png.jpeg",
  "/images/logo/logo-02.png.jpeg",
  "/images/logo/logo-03.png.jpeg",
  "/images/logo/logo-04.png.jpeg",
  "/images/logo/logo-05.png.jpeg",
  "/images/logo/logo-06.png.jpeg",
  "/images/logo/logo-07.png.jpeg",
  "/images/logo/logo-08.png.jpeg",
];

const testimonials = [
  {
    image: "/images/testimonials/review-clothing-01.png",
    label: "FASHION / CLOTHING",
  },
  {
    image: "/images/testimonials/review-real-estate-01.png",
    label: "REAL ESTATE",
  },
  {
    image: "/images/testimonials/review-dental-01.png",
    label: "DENTAL",
  },
  {
    image: "/images/testimonials/review-furniture-01.png",
    label: "FURNITURE",
  },
  {
    image: "/images/testimonials/review-restaurant-01.png",
    label: "RESTAURANT",
  },
  {
    image: "/images/testimonials/review-event-photography-01.png",
    label: "EVENTS",
  },
  {
    image: "/images/testimonials/review-ecommerce-01.png",
    label: "E-COMMERCE",
  },
];

const team = [
  {
    role: "STRATEGY",
    title: "THINKERS",
    text: "We find the opportunity before we build the campaign.",
  },
  {
    role: "CREATIVE",
    title: "MAKERS",
    text: "We turn strategy into visuals, stories and experiences.",
  },
  {
    role: "MEDIA",
    title: "GROWERS",
    text: "We put great creative in front of the right people.",
  },
];

const questions = [
  {
    title: "WHAT'S YOUR BUSINESS?",
    options: [
      "Restaurant",
      "Real Estate",
      "E-commerce",
      "Clinic",
      "Education",
      "Beauty & Fashion",
      "Corporate",
      "Other",
    ],
  },
  {
    title: "WHAT DO YOU NEED?",
    multi: true,
    options: [
      "Marketing",
      "Ads",
      "Social Media",
      "Branding",
      "Photography",
      "Video Production",
      "Website",
      "Event",
      "Full Package",
    ],
  },
  {
    title: "WHAT'S YOUR MAIN GOAL?",
    options: [
      "More Sales",
      "More Leads",
      "Brand Awareness",
      "Launch a Business",
      "Increase Followers",
      "Organize an Event",
      "Other",
    ],
  },
  {
    title: "WHAT'S YOUR ESTIMATED BUDGET?",
    options: [
      "Under 10K EGP",
      "10K – 25K EGP",
      "25K – 50K EGP",
      "50K – 100K EGP",
      "100K+ EGP",
      "Let's Discuss",
    ],
  },
];

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

function Consultation() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);

  const question = questions[step];

  const choose = (option) => {
    if (question.multi) {
      const current = answers[step] || [];
      setAnswers({
        ...answers,
        [step]: current.includes(option)
          ? current.filter((item) => item !== option)
          : [...current, option],
      });
    } else {
      setAnswers({ ...answers, [step]: option });
    }
  };

  const selected = answers[step];
  const canContinue = question.multi
    ? selected?.length > 0
    : Boolean(selected);

  const finish = () => setFinished(true);

  const whatsapp = () => {
    const summary = questions
      .map((q, index) => {
        const answer = answers[index];
        return `${q.title}: ${
          Array.isArray(answer) ? answer.join(", ") : answer || "Not specified"
        }`;
      })
      .join("\n");

    const message = encodeURIComponent(
      `Hello R&M Media Agency 👋\n\nI'd like to discuss a growth plan.\n\n${summary}`
    );

    window.open(`https://wa.me/201113403194?text=${message}`, "_blank");
  };

  return (
    <div className="consultation">
      <div className="consultation-top">
        <div>
          <span className="eyebrow">R&M GROWTH ENGINE</span>
          <h3>BUILD YOUR<br /><em>GROWTH PLAN.</em></h3>
        </div>
        <div className="consultation-progress">
          <span>{String(Math.min(step + 1, 4)).padStart(2, "0")}</span>
          <i />
          <span>04</span>
        </div>
      </div>

      {!finished ? (
        <>
          <div className="consultation-question">
            <span>QUESTION {String(step + 1).padStart(2, "0")}</span>
            <h4>{question.title}</h4>
          </div>

          <div className="consultation-options">
            {question.options.map((option) => {
              const active = question.multi
                ? selected?.includes(option)
                : selected === option;

              return (
                <button
                  key={option}
                  className={`consultation-option ${active ? "active" : ""}`}
                  onClick={() => choose(option)}
                >
                  <span>{option}</span>
                  <span className="option-check">
                    {active ? <Check size={16} /> : "+"}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="consultation-actions">
            <button
              className="consultation-back"
              disabled={step === 0}
              onClick={() => setStep(Math.max(0, step - 1))}
            >
              BACK
            </button>

            <button
              className="button button-light"
              disabled={!canContinue}
              onClick={() => {
                if (step === questions.length - 1) finish();
                else setStep(step + 1);
              }}
            >
              {step === questions.length - 1 ? "BUILD MY PLAN" : "CONTINUE"}
              <ArrowRight size={18} />
            </button>
          </div>
        </>
      ) : (
        <motion.div
          className="consultation-result"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="result-number">R&M</div>
          <span className="eyebrow">YOUR NEXT MOVE</span>
          <h4>YOUR R&M<br /><em>GROWTH PLAN.</em></h4>
          <p>
            Your business is ready to grow. Let's turn your answers into a
            strategy built around your actual goals.
          </p>

          <button className="button button-light" onClick={whatsapp}>
            TALK TO AN R&M SPECIALIST
            <MessageCircle size={18} />
          </button>

          <button
            className="restart"
            onClick={() => {
              setAnswers({});
              setStep(0);
              setFinished(false);
            }}
          >
            START AGAIN
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <nav className="nav">
        <button className="brand" onClick={() => scrollTo("top")}>
          <span>R&M</span>
          <small>MEDIA AGENCY</small>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <button onClick={() => scrollTo("capabilities")}>Capabilities</button>
          <button onClick={() => scrollTo("work")}>Selected Work</button>
          <button onClick={() => scrollTo("about")}>About</button>
          <button onClick={() => scrollTo("contact")}>Start a project</button>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" />

        <motion.div
          className="hero-orb orb-one"
          animate={{ x: [0, 80, 0], y: [0, -50, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          className="hero-orb orb-two"
          animate={{ x: [0, -60, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="hero-content">
          <Reveal>
            <span className="eyebrow">ALEXANDRIA — EGYPT</span>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
          >
            WE DON'T
            <br />
            <span>JUST</span> MARKET.
            <br />
            <strong>WE MOVE.</strong>
          </motion.h1>

          <motion.div
            className="hero-bottom"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p>
              Strategy. Creative. Media. Digital.
              <br />
              One agency built around making
              <br />
              brands impossible to ignore.
            </p>

            <button
              className="circle-arrow"
              onClick={() => scrollTo("statement")}
            >
              <ArrowDownIcon />
            </button>
          </motion.div>
        </div>

        <div className="hero-image">
          <img src="/hero.png" alt="R&M Media Agency" />
          <div className="hero-image-overlay" />
        </div>

        <div className="hero-index">01 / 07</div>
      </section>

      <div className="marquee">
        <div className="marquee-track">
          <span>STRATEGY</span><i>✦</i>
          <span>CREATIVE</span><i>✦</i>
          <span>MEDIA</span><i>✦</i>
          <span>DIGITAL</span><i>✦</i>
          <span>EXPERIENCES</span><i>✦</i>
          <span>STRATEGY</span><i>✦</i>
          <span>CREATIVE</span><i>✦</i>
          <span>MEDIA</span><i>✦</i>
        </div>
      </div>

      <section className="statement section" id="statement">
        <div className="section-label">
          <span>/</span> WHAT WE BELIEVE
        </div>

        <div className="statement-content">
          <Reveal>
            <h2>
              GOOD MARKETING
              <br />
              <span>GETS SEEN.</span>
              <br />
              GREAT MARKETING
              <br />
              <strong>GETS REMEMBERED.</strong>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p>
              R&M brings strategy, creativity, production and technology under
              one roof — because the strongest brands don't work in pieces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="capabilities section" id="capabilities">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>/</span> CAPABILITIES
            </div>
            <h2>
              WHAT WE
              <br />
              <em>DO.</em>
            </h2>
          </div>

          <p>
            Everything your brand needs to move from being present to being
            impossible to ignore.
          </p>
        </div>

        <div className="services-list">
          {services.map((service, index) => (
            <motion.div
              className={`service-row ${
                activeService === index ? "active" : ""
              }`}
              key={service.number}
              onMouseEnter={() => setActiveService(index)}
              onClick={() => setActiveService(index)}
            >
              <span className="service-number">{service.number}</span>
              <h3>{service.title}</h3>

              <motion.p
                initial={false}
                animate={{
                  opacity: activeService === index ? 1 : 0.45,
                  x: activeService === index ? 0 : 20,
                }}
              >
                {service.text}
              </motion.p>

              <ArrowUpRight className="service-arrow" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="work section" id="work">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>/</span> SELECTED WORK
            </div>
            <h2>
              MADE TO
              <br />
              <em>STAND OUT.</em>
            </h2>
          </div>

          <button className="text-link">
            VIEW ALL WORK <ArrowUpRight size={17} />
          </button>
        </div>

        <div className="work-grid">
          {work.map((item, index) => (
            <Reveal
              key={item.title + index}
              delay={index * 0.05}
              className={`work-card ${item.size}`}
            >
              <div className="work-image">
                <img src={item.image} alt={item.title} />
                <div className="work-hover">
                  <ArrowUpRight size={30} />
                </div>
              </div>

              <div className="work-meta">
                <span>{item.category}</span>
                <h3>{item.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="experience">
        <div className="experience-image">
          <img src="/images/events/event-02.jpg.jpg" alt="R&M experience" />
        </div>

        <div className="experience-content">
          <div className="section-label">
            <span>/</span> EXPERIENCES
          </div>

          <h2>
            BRANDS
            <br />
            SHOULD BE
            <br />
            <em>FELT.</em>
          </h2>

          <p>
            From corporate experiences to launches, activations and
            unforgettable moments — we turn your brand into an experience
            people can actually feel.
          </p>

          <button className="button button-outline">
            CREATE AN EXPERIENCE <ArrowUpRight size={18} />
          </button>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="section-label">
          <span>/</span> WHY R&M
        </div>

        <div className="about-intro">
          <h2>
            NOT ANOTHER
            <br />
            <em>AGENCY.</em>
          </h2>

          <p>
            We think like strategists, create like artists and execute like
            operators.
          </p>
        </div>

        <div className="about-line">
          <div className="about-big">
            We build brands that move
            <span>people.</span>
          </div>

          <p>
            Every project starts with a clear objective. Every visual has a
            reason. Every campaign is designed to move the business forward.
          </p>
        </div>

        <div className="stats">
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

      <section className="team section">
        <div className="section-label">
          <span>/</span> THE PEOPLE BEHIND THE MOVE
        </div>

        <div className="team-heading">
          <h2>
            THINK.
            <br />
            <em>MAKE.</em>
            <br />
            MOVE.
          </h2>
          <p>
            Different disciplines. One ambition: make your brand impossible
            to ignore.
          </p>
        </div>

        <div className="team-grid">
          {team.map((person, index) => (
            <Reveal key={person.role} delay={index * 0.1}>
              <div className="team-card">
                <span>0{index + 1}</span>
                <small>{person.role}</small>
                <h3>{person.title}</h3>
                <p>{person.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="testimonials section">
        <div className="section-heading">
          <div>
            <div className="section-label">
              <span>/</span> CLIENT VOICES
            </div>
            <h2>
              THEY
              <br />
              <em>TRUSTED US.</em>
            </h2>
          </div>

          <p>
            Real conversations.
            <br />
            Real clients.
            <br />
            Real work.
          </p>
        </div>

        <div className="testimonial-wall">
          {testimonials.map((review, index) => (
            <Reveal key={review.label} delay={index * 0.04}>
              <div className="testimonial-card">
                <div className="testimonial-top">
                  <span>{review.label}</span>
                  <span>WHATSAPP</span>
                </div>
                <img src={review.image} alt={`${review.label} client review`} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="logos section">
        <div className="section-label">
          <span>/</span> BRANDS WE BUILD FOR
        </div>

        <div className="logo-wall">
          {logos.map((logo, index) => (
            <motion.div
              key={logo}
              className="logo-item"
              whileHover={{ scale: 1.04, y: -5 }}
            >
              <img src={logo} alt={`R&M client ${index + 1}`} />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="growth section">
        <div className="section-label">
          <span>/</span> START HERE
        </div>

        <div className="growth-heading">
          <h2>
            DON'T KNOW
            <br />
            WHERE TO
            <br />
            <em>START?</em>
          </h2>

          <p>
            Answer four quick questions and let us build a starting point for
            your brand.
          </p>
        </div>

        <Consultation />
      </section>

      <section className="contact" id="contact">
        <div className="contact-glow" />

        <div className="section-label">
          <span>/</span> LET'S CREATE SOMETHING
        </div>

        <h2>
          YOUR NEXT
          <br />
          <em>MOVE.</em>
        </h2>

        <p>
          Have a brand that deserves more attention?
          <br />
          Let's make people stop scrolling.
        </p>

        <a
          className="contact-button"
          href="https://wa.me/201113403194"
          target="_blank"
          rel="noreferrer"
        >
          START A CONVERSATION
          <ArrowUpRight size={22} />
        </a>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <strong>R&M</strong>
            <span>MEDIA AGENCY</span>
          </div>

          <div className="footer-location">
            ALEXANDRIA
            <br />
            EGYPT
          </div>

          <div className="footer-socials">
            <a
              href="https://web.facebook.com/profile.php?id=61591050309972"
              target="_blank"
              rel="noreferrer"
            >
              <span className="social-letter">f</span>
            </a>
            <a
              href="https://wa.me/201113403194"
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>STRATEGY · CREATIVE · MEDIA · DIGITAL · EXPERIENCES</span>
          <button onClick={() => scrollTo("top")}>BACK TO TOP ↑</button>
          <span>© 2026 R&M</span>
        </div>
      </footer>
      {/* Floating Social Buttons */}
      <div className="floating-socials">
        <motion.a
          href="https://wa.me/201113403194"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social whatsapp"
          animate={{ y: [0, -7, 0] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          aria-label="WhatsApp"
        >
          <MessageCircle size={23} strokeWidth={2.2} />
        </motion.a>

        <motion.a
          href="https://web.facebook.com/profile.php?id=61591050309972"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-social facebook"
          animate={{ y: [0, 7, 0] }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
          aria-label="Facebook"
        >
          <span className="social-letter">f</span>
        </motion.a>
      </div>

    </main>
  );
}

function ArrowDownIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22">
      <path
        d="M12 3v17M5 14l7 7 7-7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
