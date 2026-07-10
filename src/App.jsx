import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    n: "01",
    title: "AMIS School Website",
    category: "Institutional Website",
    stack: "Laravel · JavaScript · Responsive UI",
    desc: "The public digital home of Al Munawwara Islamic School—bringing admissions, academics, school updates, and community information into one accessible experience.",
    type: "school",
    url: "https://amis.edu.ph",
  },
  {
    n: "02",
    title: "Online Enrollment System",
    category: "Operations Platform",
    stack: "Laravel · JavaScript · MariaDB",
    desc: "A multi-step enrollment workflow that turns complex admission processes into a clear, trackable experience.",
    type: "enroll",
  },
  {
    n: "03",
    title: "Digital ID Portal",
    category: "Identity System",
    stack: "PHP · MySQL · Responsive UI",
    desc: "Secure record verification and mobile-first digital identification designed for fast, practical access.",
    type: "identity",
  },
  {
    n: "04",
    title: "Payment Management System",
    category: "Financial Operations",
    stack: "Laravel · REST API · MySQL",
    desc: "A reliable payment monitoring workspace for managing student balances, transactions, and financial records.",
    type: "payment",
  },
  {
    n: "05",
    title: "Attendance Management System",
    category: "School Operations",
    stack: "JavaScript · Laravel · MariaDB",
    desc: "A streamlined attendance tool that helps teams record, review, and act on daily student data.",
    type: "attendance",
  },
];
const experience = [
  [
    "2026 — Present",
    "IT Staff",
    "Maintaining school technology operations, infrastructure, and user support.",
  ],
  [
    "2026 — Present",
    "Full-Stack Development",
    "Building enrollment, portal, LMS, and administration workflows with Laravel.",
  ],
  [
    "2026",
    "System Administration",
    "Integrating Microsoft 365, identity services, databases, and operational tools.",
  ],
  [
    "2023 — Present",
    "Web Application Development",
    "Creating practical web and mobile products for schools, businesses, and teams.",
  ],
];
const groups = {
  Frontend: ["React", "Vue", "Angular", "TypeScript", "Tailwind CSS"],
  Backend: ["Laravel", "PHP", "Node.js", "REST API"],
  Database: ["MySQL", "MariaDB", "PostgreSQL", "MongoDB"],
  Tools: ["Git", "Linux", "Azure", "Microsoft Graph", "Figma"],
};

const technologies = [
  ["React", "Frontend Development", "Advanced", "react", "61DAFB"],
  ["Vue.js", "Frontend Development", "Advanced", "vuedotjs", "4FC08D"],
  ["Angular", "Frontend Development", "Intermediate", "angular", "DD0031"],
  ["JavaScript", "Frontend Development", "Advanced", "javascript", "F7DF1E"],
  ["TypeScript", "Frontend Development", "Advanced", "typescript", "3178C6"],
  ["HTML5", "Frontend Development", "Advanced", "html5", "E34F26"],
  ["CSS3", "Frontend Development", "Advanced", "css", "663399"],
  ["Tailwind CSS", "Frontend Development", "Advanced", "tailwindcss", "06B6D4"],
  ["Bootstrap", "Frontend Development", "Advanced", "bootstrap", "7952B3"],
  ["Laravel", "Backend Development", "Advanced", "laravel", "FF2D20"],
  ["PHP", "Backend Development", "Advanced", "php", "777BB4"],
  ["Node.js", "Backend Development", "Advanced", "nodedotjs", "5FA04E"],
  ["Express.js", "Backend Development", "Intermediate", "express", "E8EDF6"],
  ["REST API", "Backend Development", "Advanced", "fastapi", "009688"],
  ["MySQL", "Database", "Advanced", "mysql", "4479A1"],
  ["MariaDB", "Database", "Advanced", "mariadb", "C0765A"],
  ["PostgreSQL", "Database", "Intermediate", "postgresql", "4169E1"],
  ["MongoDB", "Database", "Intermediate", "mongodb", "47A248"],
  ["Firebase", "Database & Cloud", "Advanced", "firebase", "DD2C00"],
  ["Git", "Tools & Platform", "Advanced", "git", "F05032"],
  ["GitHub", "Tools & Platform", "Advanced", "github", "E8EDF6"],
  ["Linux", "Tools & Platform", "Advanced", "linux", "FCC624"],
  [
    "Microsoft Azure",
    "Tools & Platform",
    "Intermediate",
    "azure",
    "0078D4",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
  ],
  [
    "Microsoft Graph",
    "Tools & Platform",
    "Advanced",
    "network",
    "5B9BD5",
    "https://api.iconify.design/lucide:network.svg?color=%235B9BD5",
  ],
  ["Figma", "Design Tool", "Advanced", "figma", "F24E1E"],
  [
    "Visual Studio Code",
    "Development Tool",
    "Advanced",
    "vscode",
    "007ACC",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  ],
  ["Postman", "API Tool", "Advanced", "postman", "FF6C37"],
  ["cPanel", "Hosting Platform", "Advanced", "cpanel", "FF6C2C"],
].map(([name, category, level, slug, color, icon]) => ({
  name,
  category,
  level,
  slug,
  color,
  icon,
}));

const technologyIcon = (technology) =>
  technology.icon ||
  `https://cdn.simpleicons.org/${technology.slug}/${technology.color}`;

function Loader() {
  const skip = new URLSearchParams(location.search).has("skipIntro");
  return (
    <div className={`loader ${skip ? "skip" : ""}`} aria-hidden="true">
      <div>
        <span>INITIALIZING DIGITAL LAB</span>
        <b className="load-percent">0</b>
      </div>
      <i>
        <em />
      </i>
    </div>
  );
}

function Cursor() {
  const dot = useRef(),
    glow = useRef();
  useEffect(() => {
    if (matchMedia("(pointer:coarse)").matches) return;
    const dx = gsap.quickTo(dot.current, "x", { duration: 0.18 }),
      dy = gsap.quickTo(dot.current, "y", { duration: 0.18 }),
      gx = gsap.quickTo(glow.current, "x", { duration: 0.7, ease: "power3" }),
      gy = gsap.quickTo(glow.current, "y", { duration: 0.7, ease: "power3" });
    const move = (e) => {
      dx(e.clientX);
      dy(e.clientY);
      gx(e.clientX);
      gy(e.clientY);
    };
    const over = (e) =>
      dot.current?.classList.toggle(
        "active",
        !!e.target.closest("a,button,.project-panel"),
      );
    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, []);
  return (
    <>
      <span ref={dot} className="cursor" />
      <span ref={glow} className="cursor-glow" />
    </>
  );
}

function Nav({ theme, onThemeChange }) {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-PH", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <nav className="nav">
      <a href="#top" className="nav-logo">
        MON.Z
      </a>
      <div className="nav-links">
        {["projects", "experience", "about", "contact"].map((x) => (
          <a href={`#${x}`} key={x}>
            {x}
          </a>
        ))}
      </div>
      <div className="nav-end">
        <span>
          <i />
          Available for opportunities
        </span>
        <b>DVO · {time}</b>
      </div>
      <button
        className="mode-toggle"
        type="button"
        onClick={onThemeChange}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        aria-pressed={theme === "light"}
      >
        {theme === "dark" ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
          </svg>
        )}
      </button>
    </nav>
  );
}

function Workspace() {
  return (
    <div className="workspace" aria-label="Interactive developer workspace">
      <div className="workspace-grid" />
      <div className="orb one" />
      <div className="orb two" />
      <svg className="connections" viewBox="0 0 700 700">
        <path d="M80 510 C210 340 300 500 415 275 S590 170 650 100" />
        <path d="M170 120 C230 210 395 130 540 400" />
      </svg>
      <div className="glass-card system">
        <small>System status</small>
        <strong>
          <i />
          All systems operational
        </strong>
        <span>MONITORING / 24:7</span>
      </div>
      <div className="glass-card role">
        <small>Current role</small>
        <strong>
          IT Staff /<br />
          Full-Stack Developer
        </strong>
        <span>AMIS · DAVAO CITY</span>
      </div>
      <div className="glass-card location">
        <small>Location</small>
        <strong>
          07.10° N<br />
          125.61° E
        </strong>
        <span>DAVAO CITY, PH</span>
      </div>
      <div className="glass-card tech">
        <small>Tech stack</small>
        <div>
          <b>Laravel</b>
          <b>React</b>
          <b>TypeScript</b>
          <b>MySQL</b>
        </div>
      </div>
      <div className="code-card">
        <span>01</span>
        <code>
          const idea = problem
          <br /> .map(clarity)
          <br /> .build(solution);
        </code>
      </div>
    </div>
  );
}

function Hero() {
  const words = ["systems", "experiences", "solutions", "platforms"];
  const [word, setWord] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWord((v) => (v + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <span className="eyebrow mask">
          <i>Hello, I’m</i>
        </span>
        <h1>
          <span className="mask">
            <b>Mon Zhairel</b>
          </span>
          <span className="mask">
            <b>
              I build <em key={word}>{words[word]}</em>
            </b>
          </span>
          <span className="mask">
            <b>that make</b>
          </span>
          <span className="mask">
            <b>work simpler.</b>
          </span>
        </h1>
        <p>
          Full-stack developer and IT specialist building scalable web
          applications, digital platforms, and practical systems for real-world
          organizations.
        </p>
        <div className="hero-actions">
          <a href="#projects">
            View my work <span>↘</span>
          </a>
          <a href="#contact">
            Let’s connect <span>↗</span>
          </a>
        </div>
      </div>
      <Workspace />
      <div className="hero-index">
        <span>PORTFOLIO / 2026</span>
        <i />
        <span>SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}

function Preview({ type }) {
  if (type === "school") {
    return (
      <div className="preview school-preview">
        <div className="preview-top">
          <span />
          <span />
          <span />
          <b>amis.edu.ph</b>
        </div>
        <img
          src="/assets/projects/amis-school-website.png"
          alt="AMIS School Website homepage"
          loading="lazy"
        />
      </div>
    );
  }
  return (
    <div className={`preview ${type}`}>
      <div className="preview-top">
        <span />
        <span />
        <span />
        <b>mon.system / {type}</b>
      </div>
      <div className="preview-body">
        <aside>
          <i />
          <i />
          <i />
          <i />
        </aside>
        <main>
          <div className="preview-heading">
            <span />
            <b />
          </div>
          <div className="preview-widgets">
            <i />
            <i />
            <i />
          </div>
          <div className="preview-table">
            {[1, 2, 3, 4].map((x) => (
              <span key={x} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
function ProjectSection() {
  return (
    <section id="projects" className="projects section">
      <header className="section-head">
        <span>01 — Selected systems</span>
        <h2>
          Work designed around
          <br />
          <i>real operations.</i>
        </h2>
        <p>
          Digital products built to remove friction, connect people, and make
          everyday workflows easier.
        </p>
      </header>
      <div className="project-list">
        {projects.map((p, i) => (
          <article
            className={`project-panel ${i % 2 ? "reverse" : ""}`}
            key={p.title}
          >
            <div className="project-copy">
              <span className="project-number">{p.n}</span>
              <small>{p.category}</small>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <b>{p.stack}</b>
              {p.url && (
                <a
                  className="project-live"
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View live website <span>↗</span>
                </a>
              )}
            </div>
            <div className="preview-mask">
              <Preview type={p.type} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="experience section">
      <header className="section-head">
        <span>02 — Experience</span>
        <h2>
          One system
          <br />
          <i>at a time.</i>
        </h2>
      </header>
      <div className="timeline">
        <i className="timeline-progress" />
        {experience.map((e, i) => (
          <article key={e[1]}>
            <b>0{i + 1}</b>
            <span>{e[0]}</span>
            <div>
              <h3>{e[1]}</h3>
              <p>{e[2]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnologyGlobe() {
  const globe = useRef(null);
  const nodes = useRef([]);
  const [active, setActive] = useState(technologies[0]);
  useEffect(() => {
    const el = globe.current;
    if (!el) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const points = technologies.map((_, i) => {
      const y = 1 - (i / (technologies.length - 1)) * 2;
      const radius = Math.sqrt(1 - y * y);
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
    });
    let yaw = 0.2,
      pitch = -0.12,
      vx = 0.0015,
      vy = 0;
    let dragging = false,
      hovering = false,
      visible = false,
      lastX = 0,
      lastY = 0,
      frame;
    const render = () => {
      if (visible || reduced) {
        if (!dragging && !reduced) {
          yaw += hovering ? vx * 0.2 : vx;
          pitch += vy;
          vx += (0.0015 - vx) * 0.018;
          vy *= 0.94;
        }
        const width = el.clientWidth;
        const radius = width * (width < 520 ? 0.39 : 0.42);
        const cy = Math.cos(yaw),
          sy = Math.sin(yaw),
          cx = Math.cos(pitch),
          sx = Math.sin(pitch);
        points.forEach((p, i) => {
          const node = nodes.current[i];
          if (!node) return;
          const x1 = p.x * cy - p.z * sy,
            z1 = p.x * sy + p.z * cy;
          const y2 = p.y * cx - z1 * sx,
            z2 = p.y * sx + z1 * cx;
          const depth = (z2 + 1) / 2;
          const scale = 0.58 + depth * 0.62;
          node.style.transform = `translate3d(${x1 * radius}px,${y2 * radius}px,0) scale(${scale})`;
          node.style.opacity = String(0.28 + depth * 0.72);
          node.style.zIndex = String(Math.round(depth * 100));
          node.style.filter = `brightness(${0.62 + depth * 0.55})`;
        });
      }
      frame = requestAnimationFrame(render);
    };
    const down = (e) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      vx = 0;
      vy = 0;
      el.setPointerCapture?.(e.pointerId);
      el.classList.add("dragging");
    };
    const move = (e) => {
      if (!dragging) return;
      const dx = e.clientX - lastX,
        dy = e.clientY - lastY;
      yaw += dx * 0.006;
      pitch = Math.max(-1.15, Math.min(1.15, pitch - dy * 0.005));
      vx = dx * 0.00045;
      vy = -dy * 0.00035;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const up = (e) => {
      dragging = false;
      el.releasePointerCapture?.(e.pointerId);
      el.classList.remove("dragging");
    };
    const enter = () => {
        hovering = true;
      },
      leave = () => {
        hovering = false;
        if (dragging) up({});
      };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { rootMargin: "150px" },
    );
    observer.observe(el);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    gsap.fromTo(
      nodes.current,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.65,
        stagger: 0.035,
        ease: "back.out(1.8)",
        scrollTrigger: { trigger: el, start: "top 78%", once: true },
      },
    );
    render();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);
  return (
    <div className="globe-stage">
      <div
        className="tech-globe"
        ref={globe}
        role="application"
        aria-label="Draggable rotating technology globe"
      >
        <div className="globe-glow" />
        <div className="globe-ring ring-a" />
        <div className="globe-ring ring-b" />
        <div className="globe-ring ring-c" />
        <svg className="globe-lines" viewBox="0 0 600 600" aria-hidden="true">
          <path d="M100 300 Q300 105 500 300 Q300 495 100 300" />
          <path d="M300 100 Q105 300 300 500 Q495 300 300 100" />
        </svg>
        <div className="globe-core">
          <b>MZ</b>
          <span>
            FULL-STACK
            <br />
            DEVELOPER
          </span>
          <i />
          <i />
          <i />
        </div>
        <div className="globe-nodes">
          {technologies.map((tech, i) => (
            <button
              ref={(node) => (nodes.current[i] = node)}
              className="tech-node"
              style={{ "--brand": `#${tech.color}` }}
              key={tech.name}
              onPointerEnter={() => setActive(tech)}
              onFocus={() => setActive(tech)}
              onClick={() => setActive(tech)}
              aria-label={`${tech.name}, ${tech.category}, ${tech.level}`}
            >
              <img src={technologyIcon(tech)} alt="" loading="lazy" />
              <span>{tech.name}</span>
            </button>
          ))}
        </div>
      </div>
      <aside className="tech-detail" aria-live="polite">
        <span>Active technology</span>
        <div>
          <img src={technologyIcon(active)} alt="" />
          <p>
            <b>{active.name}</b>
            <small>{active.category}</small>
          </p>
          <em>{active.level}</em>
        </div>
        <small>Drag to explore · Select an icon for details</small>
      </aside>
    </div>
  );
}

function SkillsSection() {
  const all = technologies.map((item) => item.name);
  return (
    <section id="skills" className="skills section">
      <header>
        <span>03 — Technology network</span>
        <h2>
          Technologies
          <br />
          <i>in my orbit.</i>
        </h2>
        <p>
          A growing ecosystem of technologies I use to build scalable, reliable,
          and user-focused digital systems.
        </p>
      </header>
      <TechnologyGlobe />
      <div className="skill-marquee">
        <div>
          {[...all, ...all].map((x, i) => (
            <span key={`${x}${i}`}>
              {x}
              <i>✦</i>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "" }) {
  const ref = useRef();
  return (
    <b ref={ref} className="counter" data-to={to} data-suffix={suffix}>
      0{suffix}
    </b>
  );
}
function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="about-lead">
        <span>04 — About the lab</span>
        <h2>
          “I turn complex workflows into <i>practical digital systems.</i>”
        </h2>
        <p>
          I work across frontend, backend, databases, integrations, and IT
          operations—connecting technical decisions to the people who use the
          final product.
        </p>
      </div>
      <div className="stats">
        <article>
          <Counter to="1000" suffix="+" />
          <span>Student records managed</span>
        </article>
        <article>
          <Counter to="5" suffix="+" />
          <span>Digital systems developed</span>
        </article>
        <article>
          <b>Full-stack</b>
          <span>Development</span>
        </article>
        <article>
          <b>24/7</b>
          <span>Problem solving</span>
        </article>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-orb" />
      <span>05 — Start something useful</span>
      <h2>
        Have a system
        <br />
        in mind?
        <br />
        <i>Let’s build it.</i>
      </h2>
      <div className="contact-links">
        <a href="mailto:mon.lingasa@gmail.com">
          <span>Email me</span>
          <b>↗</b>
        </a>
        <a href="/assets/mon-zhairel-lingasa-cv.pdf" download>
          <span>View résumé</span>
          <b>↓</b>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          <span>LinkedIn</span>
          <b>↗</b>
        </a>
        <a href="https://github.com/zhairel" target="_blank" rel="noreferrer">
          <span>GitHub</span>
          <b>↗</b>
        </a>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer>
      <b>MON.Z / DIGITAL LAB</b>
      <span>© 2026 MON ZHAIREL LINGASA</span>
      <a href="#top">BACK TO TOP ↑</a>
    </footer>
  );
}

export default function App() {
  const root = useRef();
  const [theme, setTheme] = useState(
    () =>
      localStorage.getItem("mz-lab-theme") ||
      (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"),
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("mz-lab-theme", theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#07101f" : "#edf2fa");
  }, [theme]);
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const skip = new URLSearchParams(location.search).has("skipIntro");
    if (reduced || skip) {
      gsap.set(".loader", { display: "none" });
      gsap.set(".mask>*", { yPercent: 0 });
      return;
    }
    const ctx = gsap.context(() => {
      const count = { v: 0 };
      const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
      intro
        .to(count, {
          v: 100,
          duration: 1.3,
          onUpdate: () => {
            const el = document.querySelector(".load-percent");
            if (el) el.textContent = Math.round(count.v);
          },
        })
        .to(".loader em", { scaleX: 1, duration: 1.3 }, 0)
        .to(".loader", {
          clipPath: "inset(0 0 100% 0)",
          duration: 1,
          ease: "power4.inOut",
        })
        .from(".nav", { y: -25, opacity: 0, duration: 0.7 }, "-=.3")
        .fromTo(
          ".hero .mask>*",
          { yPercent: 110 },
          { yPercent: 0, duration: 1, stagger: 0.09, ease: "power4.out" },
          "-=.45",
        )
        .from(
          ".hero-copy p,.hero-actions,.hero-index",
          { y: 22, opacity: 0, duration: 0.7, stagger: 0.08 },
          "-=.6",
        )
        .from(
          ".glass-card,.code-card",
          {
            x: (i) => (i % 2 ? 60 : -60),
            y: (i) => i * 8 - 20,
            opacity: 0,
            duration: 0.9,
            stagger: 0.08,
          },
          "-=.8",
        );
      gsap.utils.toArray(".glass-card,.code-card").forEach((el, i) =>
        gsap.to(el, {
          y: i % 2 ? -10 : 12,
          duration: 2.6 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        }),
      );
      const ws = document.querySelector(".workspace");
      const qx = gsap.quickTo(".workspace", "x", {
          duration: 0.8,
          ease: "power3",
        }),
        qy = gsap.quickTo(".workspace", "y", { duration: 0.8, ease: "power3" });
      ws?.addEventListener("pointermove", (e) => {
        const r = ws.getBoundingClientRect();
        qx((e.clientX - r.left - r.width / 2) * 0.025);
        qy((e.clientY - r.top - r.height / 2) * 0.025);
      });
      gsap.utils
        .toArray(".section-head,.skills header,.about-lead,.contact>span")
        .forEach((el) =>
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
            y: 50,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          }),
        );
      gsap.utils.toArray(".project-panel").forEach((panel) => {
        const preview = panel.querySelector(".preview");
        gsap.from(panel.querySelectorAll(".project-copy>*"), {
          scrollTrigger: { trigger: panel, start: "top 78%", once: true },
          y: 35,
          opacity: 0,
          stagger: 0.08,
          duration: 0.75,
        });
        gsap.from(preview, {
          scrollTrigger: {
            trigger: panel,
            start: "top 82%",
            end: "center 55%",
            scrub: 0.7,
          },
          clipPath: "inset(0 0 100% 0)",
          scale: 1.08,
          ease: "none",
        });
        gsap.from(panel.querySelector(".project-number"), {
          scrollTrigger: { trigger: panel, start: "top 80%", once: true },
          xPercent: -50,
          opacity: 0,
          duration: 1,
        });
      });
      gsap.to(".timeline-progress", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "top 70%",
          end: "bottom 65%",
          scrub: true,
        },
        scaleY: 1,
        ease: "none",
      });
      gsap.utils.toArray(".timeline article").forEach((el) =>
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          x: 35,
          opacity: 0,
          duration: 0.7,
        }),
      );
      gsap.from(".globe-stage", {
        scrollTrigger: { trigger: ".skills", start: "top 75%", once: true },
        scale: 0.7,
        rotate: -25,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.5)",
      });
      gsap.utils.toArray(".counter").forEach((el) => {
        const obj = { v: 0 };
        gsap.to(obj, {
          v: +el.dataset.to,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
          onUpdate: () =>
            (el.textContent =
              Math.round(obj.v).toLocaleString() + el.dataset.suffix),
        });
      });
      gsap.from(".contact h2,.contact-links a", {
        scrollTrigger: { trigger: ".contact", start: "top 65%", once: true },
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={root}>
      <Loader />
      <Cursor />
      <Nav
        theme={theme}
        onThemeChange={() =>
          setTheme((value) => (value === "dark" ? "light" : "dark"))
        }
      />
      <main>
        <Hero />
        <ProjectSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
