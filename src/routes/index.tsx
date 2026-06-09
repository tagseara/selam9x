import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  Mail,
  Phone,
  Github,
  Globe,
  Sparkles,
  Code2,
  Zap,
  Twitter,
  Instagram,
  Dribbble,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parasayte — Creative Engineer Portfolio" },
      {
        name: "description",
        content:
          "Neo-brutalist portfolio for Parasayte — interactive graphics, physics-driven UI, and full-stack engineering.",
      },
      { property: "og:title", content: "Parasayte — Creative Engineer" },
      {
        property: "og:description",
        content: "Interactive physics-driven bilingual portfolio.",
      },
    ],
  }),
  component: Index,
});

const PILLS = [
  { label: "React",       color: "#61DAFB", text: "#000", slug: "react"        },
  { label: "TypeScript",  color: "#3178C6", text: "#fff", slug: "typescript"   },
  { label: "Node.js",     color: "#3eff8b", text: "#000", slug: "nodedotjs"    },
  { label: "WebGL",       color: "#ff65c3", text: "#fff", slug: "webgl"        },
  { label: "Three.js",    color: "#ffca3a", text: "#000", slug: "threedotjs"   },
  { label: "GSAP",        color: "#88CE02", text: "#000", slug: "greensock"    },
  { label: "Rust",        color: "#CE422B", text: "#fff", slug: "rust"         },
  { label: "Figma",       color: "#F24E1E", text: "#fff", slug: "figma"        },
  { label: "Google",      color: "#4285F4", text: "#fff", slug: "google"       },
  { label: "Meta",        color: "#0081FB", text: "#fff", slug: "meta"         },
  { label: "Apple",       color: "#555555", text: "#fff", slug: "apple"        },
  { label: "Microsoft",   color: "#00A4EF", text: "#fff", slug: "microsoft"    },
  { label: "AWS",         color: "#FF9900", text: "#000", slug: "amazonaws"    },
  { label: "OpenAI",      color: "#10A37F", text: "#fff", slug: "anthropic"    },
  { label: "Replit",      color: "#F26207", text: "#fff", slug: "replit"       },
  { label: "Discord",     color: "#5865F2", text: "#fff", slug: "discord"      },
  { label: "Next.js",     color: "#e2e2e2", text: "#000", slug: "nextdotjs"    },
  { label: "Tailwind",    color: "#06B6D4", text: "#fff", slug: "tailwindcss"  },
  { label: "PostgreSQL",  color: "#336791", text: "#fff", slug: "postgresql"   },
  { label: "Docker",      color: "#2496ED", text: "#fff", slug: "docker"       },
  { label: "Vercel",      color: "#e8e8e8", text: "#000", slug: "vercel"       },
  { label: "Supabase",    color: "#3ECF8E", text: "#000", slug: "supabase"     },
  { label: "GitHub",      color: "#2d333b", text: "#fff", slug: "github"       },
  { label: "Stripe",      color: "#635BFF", text: "#fff", slug: "stripe"       },
  { label: "Redis",       color: "#DC382D", text: "#fff", slug: "redis"        },
  { label: "GraphQL",     color: "#E10098", text: "#fff", slug: "graphql"      },
  { label: "Cloudflare",  color: "#F38020", text: "#fff", slug: "cloudflare"   },
  { label: "Kubernetes",  color: "#326CE5", text: "#fff", slug: "kubernetes"   },
  { label: "Terraform",   color: "#844FBA", text: "#fff", slug: "terraform"    },
];

const LOGO_ROW1 = [
  { name: "Replit",      slug: "replit",          color: "F26207" },
  { name: "GitHub",      slug: "github",           color: "ffffff" },
  { name: "Google",      slug: "google",           color: "4285F4" },
  { name: "Kali Linux",  slug: "kalilinux",        color: "557C94" },
  { name: "Kubernetes",  slug: "kubernetes",       color: "326CE5" },
  { name: "Meta",        slug: "meta",             color: "0081FB" },
  { name: "Apple",       slug: "apple",            color: "ffffff" },
  { name: "Terraform",   slug: "terraform",        color: "844FBA" },
  { name: "Anthropic",   slug: "anthropic",        color: "ffffff" },
  { name: "Discord",     slug: "discord",          color: "5865F2" },
  { name: "Vercel",      slug: "vercel",           color: "ffffff" },
  { name: "Figma",       slug: "figma",            color: "F24E1E" },
  { name: "Stripe",      slug: "stripe",           color: "635BFF" },
  { name: "Spotify",     slug: "spotify",          color: "1DB954" },
];

const LOGO_ROW2 = [
  { name: "Docker",     slug: "docker",      color: "2496ED" },
  { name: "Tailwind",   slug: "tailwindcss", color: "06B6D4" },
  { name: "PostgreSQL", slug: "postgresql",  color: "4169E1" },
  { name: "Redis",      slug: "redis",       color: "FF4438" },
  { name: "Cloudflare", slug: "cloudflare",  color: "F38020" },
  { name: "Next.js",    slug: "nextdotjs",   color: "ffffff" },
  { name: "GraphQL",    slug: "graphql",     color: "E10098" },
  { name: "Netflix",    slug: "netflix",     color: "E50914" },
  { name: "Notion",     slug: "notion",      color: "ffffff" },
  { name: "Linear",     slug: "linear",      color: "5E6AD2" },
  { name: "Supabase",   slug: "supabase",    color: "3ECF8E" },
  { name: "MongoDB",    slug: "mongodb",     color: "47A248" },
  { name: "Firebase",   slug: "firebase",    color: "FFCA28" },
  { name: "TypeScript", slug: "typescript",  color: "3178C6" },
];

function Index() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const en = lang === "en";

  return (
    <div className="brutal-root" dir={en ? "ltr" : "rtl"}>
      <style>{CSS}</style>

      <header className="brutal-header">
        <div className="brutal-logo">
          <Sparkles size={18} strokeWidth={3} />
          <span>PARASAYTE</span>
        </div>
        <button
          className="lang-badge"
          onClick={() => setLang(en ? "ar" : "en")}
        >
          <Globe size={16} strokeWidth={3} />
          {en ? "العربية" : "English"}
        </button>
      </header>

      <main className="cv-grid">
        {/* Profile */}
        <section className="brutal-card">
          <div className="card-tag">
            <Code2 size={14} strokeWidth={3} />
            {en ? "CREATIVE ENGINEER" : "مهندس برمجيات"}
          </div>

          <div className="profile-container">
            <div className="avatar-frame">
              <img
                src="https://images2.imgbox.com/14/5e/YYO6KGYd_o.jpg"
                alt="Parasayte portrait"
              />
            </div>
            <div>
              <h1 className="profile-name">
                {en ? "Parasayte" : "باراسايت"}
              </h1>
            </div>
          </div>

          <h2 className="section-title">
            {en ? "About Me" : "نبذة عني"}
          </h2>

          <p className="about-desc">
            {en
              ? "Full-stack engineer specialised in interactive graphics, dynamic physics architectures, and production-ready high-performance systems."
              : "مهندس برمجيات متكامل متخصص في بيئات الجرافيكس التفاعلية وهندسة الواجهات وبناء أنظمة برمجية متكاملة."}
          </p>

          <div className="contact-row">
            <a href="mailto:hougjgrxkj@gmail.com" className="contact-button">
              <Mail size={18} strokeWidth={2.5} />
              <span>hougjgrxkj@gmail.com</span>
            </a>
            <a href="https://instagram.com/selam9x" target="_blank" rel="noreferrer" className="contact-button">
              <Instagram size={18} strokeWidth={2.5} />
              <span>@selam9x</span>
            </a>
            <a href="tel:+905411442870" className="contact-button">
              <Phone size={18} strokeWidth={2.5} />
              <span>+90 541 144 2870</span>
            </a>
            <a href="https://github.com/Parasayte" target="_blank" rel="noreferrer" className="contact-button">
              <Github size={18} strokeWidth={2.5} />
              <span>Parasayte</span>
            </a>
          </div>
        </section>

        {/* Toolbelt — physics pills */}
        <section className="brutal-card stack-card">
          <div className="card-tag tag-accent">
            <Zap size={14} strokeWidth={3} />
            {en ? "STACK" : "المنظومة التقنية"}
          </div>
          <h2 className="section-title">
            {en ? "Toolbelt" : "الأدوات"}
          </h2>
          <ToolbeltPhysics />
        </section>

        {/* Projects */}
        <section className="project-showcase">
          <div className="brutal-card section-head">
            <h2 className="section-title" style={{ margin: 0 }}>
              {en ? "Featured Systems" : "أبرز المشاريع"}
            </h2>
          </div>

          {PROJECTS.map((p) => (
            <article key={p.title} className="project-subcard">
              <div className="project-banner-mock">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-details">
                <h3>{p.title}</h3>
                <p className="about-desc">{en ? p.en : p.ar}</p>
                <a className="project-link" href="#">
                  {en ? "View case study" : "عرض الدراسة"} <ChevronRight size={14} strokeWidth={3} />
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <ScrollingBanners />
      <CompanyLogoStrip />

      <footer className="brutal-footer">
        <div className="footer-container">
          <div className="footer-branding">
            <h3>{en ? "Let's build something loud." : "لنبنِ شيئاً يُسمع."}</h3>
            <p>
              {en
                ? "Available for selected freelance & contract engagements across interactive engineering, motion design, and product systems."
                : "متاح للمشاريع المستقلة والعقود المختارة في هندسة التفاعل وتصميم الحركة وأنظمة المنتجات."}
            </p>
            <div className="footer-socials">
              <a className="social-icon-btn" href="https://twitter.com" aria-label="Twitter">
                <Twitter size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://instagram.com/selam9x" aria-label="Instagram">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://github.com/Parasayte" aria-label="GitHub">
                <Github size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://dribbble.com" aria-label="Dribbble">
                <Dribbble size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>{en ? "Navigate" : "التنقل"}</h4>
            <ul>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Work" : "الأعمال"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "About" : "عني"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Journal" : "المدونة"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Contact" : "التواصل"}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{en ? "Contact" : "تواصل"}</h4>
            <ul>
              <li><a href="mailto:hougjgrxkj@gmail.com"><Mail size={12} strokeWidth={3} /> hougjgrxkj@gmail.com</a></li>
              <li><a href="tel:+905411442870"><Phone size={12} strokeWidth={3} /> +90 541 144 2870</a></li>
              <li><a href="https://instagram.com/selam9x"><Instagram size={12} strokeWidth={3} /> @selam9x</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Parasayte · {en ? "All rights reserved" : "جميع الحقوق محفوظة"}</p>
          <p>{en ? "Built with React · Matter.js · loud typography" : "مبني بـ React · Matter.js"}</p>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TOOLBELT PHYSICS — DOM pills synced to Matter.js bodies             */
/* ------------------------------------------------------------------ */
function ToolbeltPhysics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillEls      = useRef<(HTMLDivElement | null)[]>([]);
  const [key, setKey]   = useState(0);
  const [ready, setReady] = useState(false);

  /* ResizeObserver — re-init on container width change */
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let lastW = el.clientWidth;
    const ro = new ResizeObserver(() => {
      if (Math.abs(el.clientWidth - lastW) > 20) {
        lastW = el.clientWidth;
        setKey((k) => k + 1);
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  /* Phase 1: wait two frames after key change so pills are measured */
  useEffect(() => {
    setReady(false);
    let id1: number, id2: number;
    id1 = requestAnimationFrame(() => {
      id2 = requestAnimationFrame(() => setReady(true));
    });
    return () => { cancelAnimationFrame(id1); cancelAnimationFrame(id2); };
  }, [key]);

  /* Phase 2: init physics once pill DOM elements have measured sizes */
  useEffect(() => {
    if (!ready) return;
    const container = containerRef.current;
    if (!container) return;

    const W = container.clientWidth;
    const H = container.clientHeight;

    const engine = Matter.Engine.create({ gravity: { y: 2.2 } });

    /* Static walls: floor + left + right */
    const invis = { isStatic: true, render: { visible: false } };
    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(W / 2, H + 25,  W * 2, 50,    invis),
      Matter.Bodies.rectangle(-25,   H / 2,   50,    H * 2, invis),
      Matter.Bodies.rectangle(W + 25, H / 2,  50,    H * 2, invis),
    ]);

    /* Create a physics body for every pill, grouped in rows above the container */
    const PH = 38;
    const bodies = pillEls.current.map((el, i) => {
      if (!el) return null;
      const PW  = el.offsetWidth || 90;
      const cols = W < 400 ? 2 : W < 640 ? 3 : 4;
      const col  = i % cols;
      const row  = Math.floor(i / cols);
      const startX = (col + 0.5) * (W / cols) + (Math.random() - 0.5) * 18;
      const startY = -(PH + row * (PH + 12) + Math.random() * 10);
      return Matter.Bodies.rectangle(startX, startY, PW, PH, {
        restitution: 0.25,
        friction:    0.55,
        frictionAir: 0.018,
        chamfer:     { radius: PH / 2 },
        render:      { visible: false },
      });
    }).filter(Boolean) as Matter.Body[];

    Matter.Composite.add(engine.world, bodies);

    /* Sync DOM pill positions to physics bodies every frame */
    let raf: number;
    const sync = () => {
      pillEls.current.forEach((el, i) => {
        const body = bodies[i];
        if (!el || !body) return;
        const { x, y } = body.position;
        const deg = (body.angle * 180) / Math.PI;
        el.style.transform = `translate(${x - el.offsetWidth / 2}px,${y - PH / 2}px) rotate(${deg}deg)`;
      });
      raf = requestAnimationFrame(sync);
    };
    sync();

    /* ── Mouse / touch drag ──
       Attach directly to the container div so coordinate systems match perfectly.
       Pill elements have pointer-events:none so all events fall through to the container. */
    const mouse = Matter.Mouse.create(container);

    /* Prevent the constraint from hijacking page scroll */
    const mw = (mouse as unknown as { mousewheel: EventListener }).mousewheel;
    container.removeEventListener("wheel",         mw);
    container.removeEventListener("mousewheel",    mw);
    container.removeEventListener("DOMMouseScroll", mw);

    const mc = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.3, damping: 0.1, render: { visible: false } },
    });
    Matter.Composite.add(engine.world, mc);

    /* Cursor feedback */
    Matter.Events.on(mc, "startdrag", () => { container.style.cursor = "grabbing"; });
    Matter.Events.on(mc, "enddrag",   () => { container.style.cursor = "grab"; });

    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      cancelAnimationFrame(raf);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [ready]);

  return (
    <div className="toolbelt-physics-wrap">
      <div ref={containerRef} className="toolbelt-canvas-container">
        {PILLS.map((pill, i) => (
          <div
            key={`${key}-${pill.slug}`}
            ref={(el) => { pillEls.current[i] = el; }}
            className="dom-pill"
            style={{
              background: pill.color,
              color:      pill.text,
              opacity:    ready ? 1 : 0,
            }}
          >
            <img
              src={`https://cdn.simpleicons.org/${pill.slug}/${pill.text === "#000" ? "000000" : "ffffff"}`}
              width={15} height={15} alt=""
              draggable={false}
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <span>{pill.label}</span>
          </div>
        ))}
      </div>
      <button className="reset-btn" onClick={() => setKey((k) => k + 1)}>
        <RefreshCw size={14} strokeWidth={3} /> Reset
      </button>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* COMPANY LOGO STRIP                                                   */
/* B&W by default → full color + scale on hover                        */
/* ------------------------------------------------------------------ */
function CompanyLogoStrip() {
  const row1 = [...LOGO_ROW1, ...LOGO_ROW1, ...LOGO_ROW1];
  const row2 = [...LOGO_ROW2, ...LOGO_ROW2, ...LOGO_ROW2];
  return (
    <section className="logo-strip-section">
      <div className="logo-strip-row">
        <div className="logo-strip-track logo-track-ltr">
          {row1.map((logo, i) => (
            <div key={i} className="logo-item">
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color ?? ""}`}
                alt={logo.name}
                className="logo-img"
                draggable={false}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="logo-strip-row">
        <div className="logo-strip-track logo-track-rtl">
          {row2.map((logo, i) => (
            <div key={i} className="logo-item">
              <img
                src={`https://cdn.simpleicons.org/${logo.slug}/${logo.color ?? ""}`}
                alt={logo.name}
                className="logo-img"
                draggable={false}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "01 // Neural Core Engine",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    en: "Real-time visualisation layer mapping ML pipelines onto a GPU canvas — sub-frame latency.",
    ar: "طبقة تصوّر فورية ترسم مسارات تعلم الآلة على لوحة GPU بزمن استجابة دون الإطار.",
  },
  {
    title: "02 // Cryptographic Grid",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80",
    en: "Edge-deployed zero-trust mesh with custom signature scheme and audited bindings.",
    ar: "شبكة انعدام الثقة منشورة على الحافة مع نظام توقيع مخصص وروابط مدققة.",
  },
  {
    title: "03 // Motion OS",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    en: "Component library powering 40+ marketing sites with physics-grade choreography.",
    ar: "مكتبة مكونات تُشغّل أكثر من 40 موقعًا تسويقيًا بتنسيق حركي على مستوى الفيزياء.",
  },
  {
    title: "04 // Studio Tools",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    en: "Internal tooling for a design studio — collaborative canvases, build pipelines, devops.",
    ar: "أدوات داخلية لاستوديو تصميم — لوحات تعاون ومسارات بناء وعمليات تشغيل.",
  },
];

const SCROLL_ROWS = [
  { bg: "#ff65c3", color: "#000", dir: "left",  items: ["GRADE", "ENGINEERING", "PRODUCTION", "REACT", "BACKEND", "DATABASE"] },
  { bg: "#a374ff", color: "#fff", dir: "right", items: ["FULLSTACK", "DESIGN", "BUILD", "DEPLOY", "SCALE", "SHIP"] },
  { bg: "#3eff8b", color: "#000", dir: "left",  items: ["INTERACTIVE", "GRAPHICS", "MOTION", "WEBGL", "TYPESCRIPT", "NODE"] },
  { bg: "#ffca3a", color: "#000", dir: "right", items: ["GITHUB", "VERCEL", "STRIPE", "SUPABASE", "TAILWIND", "NEXTJS"] },
];

function ScrollingBanners() {
  return (
    <section className="scroll-stage" aria-label="Skill banners">
      {SCROLL_ROWS.map((row, i) => (
        <div key={i} className="scroll-ribbon" style={{ background: row.bg, color: row.color }}>
          <div className={`scroll-track ${row.dir === "right" ? "scroll-rtl" : "scroll-ltr"}`}>
            {[...row.items, ...row.items, ...row.items, ...row.items].map((item, k) => (
              <span key={k}>{item}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

/* ---------- styles ---------- */
const CSS = `
:root {
  --bg: #0d0e12;
  --primary: #a374ff;
  --secondary: #ff65c3;
  --accent: #3eff8b;
  --card-bg: #161820;
  --text: #ffffff;
  --muted: #a0a5b5;
  --border-thick: 4px solid #000000;
  --shadow-brutal: 5px 5px 0 #000;
  --shadow-brutal-lg: 12px 12px 0 #000;
  --radius: 28px;
}

.brutal-root {
  background: var(--bg);
  background-image:
    radial-gradient(circle at 20% 25%, rgba(163,116,255,.18) 0%, transparent 50%),
    radial-gradient(circle at 80% 75%, rgba(255,101,195,.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(62,255,139,.08) 0%, transparent 60%);
  font-family: 'Thmanyah Sans', 'Plus Jakarta Sans', 'Inter', sans-serif;
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
}

[dir="rtl"] {
  font-family: 'Thmanyah Sans', 'Cairo', sans-serif;
}

.brutal-root h1, .brutal-root h2, .brutal-root h3, .brutal-root h4, .brutal-logo {
  font-family: 'Thmanyah Serif Display', 'Syne', 'Plus Jakarta Sans', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
}

[dir="rtl"] h1,
[dir="rtl"] h2,
[dir="rtl"] h3,
[dir="rtl"] h4,
[dir="rtl"] .brutal-logo,
[dir="rtl"] .section-title,
[dir="rtl"] .profile-name,
[dir="rtl"] .card-tag {
  font-family: 'Thmanyah Serif Display', 'Thmanyah Sans', sans-serif;
}

.brutal-header {
  padding: 18px 20px;
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1300px; margin: 0 auto;
}

@media (max-width: 640px) {
  .brutal-header {
    padding: 12px 14px;
    gap: 10px;
  }
  .brutal-logo {
    font-size: .75rem;
    padding: 6px 12px;
  }
  .brutal-logo svg {
    width: 14px;
    height: 14px;
  }
  .lang-badge {
    padding: 6px 10px;
    font-size: .75rem;
  }
  .lang-badge svg {
    width: 14px;
    height: 14px;
  }
}

.brutal-logo {
  background: var(--primary); color: #000;
  padding: 10px 22px; border: var(--border-thick); border-radius: 18px;
  box-shadow: var(--shadow-brutal);
  font-size: 1.15rem; letter-spacing: -.5px;
  display: inline-flex; align-items: center; gap: 10px;
  flex-shrink: 0;
}

.lang-badge {
  background: #fff; color: #000;
  padding: 8px 20px; border: var(--border-thick); border-radius: 15px;
  font-weight: 800; box-shadow: var(--shadow-brutal);
  display: inline-flex; align-items: center; gap: 8px;
  cursor: pointer; font-family: 'Syne', sans-serif; font-size: .95rem;
  transition: transform .12s, box-shadow .12s;
  flex-shrink: 0;
}

.lang-badge:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 #000; }

.cv-grid {
  max-width: 1300px; margin: 20px auto 80px;
  padding: 0 15px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 35px;
  position: relative; z-index: 1;
}

@media (max-width: 1024px) {
  .cv-grid {
    padding: 0 16px;
    gap: 24px;
  }
}

@media (max-width: 768px) {
  .cv-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    margin: 16px auto 60px;
  }
}

@media (max-width: 480px) {
  .cv-grid {
    padding: 0 12px;
    gap: 16px;
    margin: 12px auto 48px;
  }
}

.brutal-card {
  background: var(--card-bg);
  border: var(--border-thick);
  border-radius: var(--radius);
  box-shadow: var(--shadow-brutal-lg);
  padding: 35px;
  position: relative; overflow: hidden;
}

@media (max-width: 768px) {
  .brutal-card {
    padding: 24px;
    border-width: 3px;
    box-shadow: 8px 8px 0 #000;
  }
}

@media (max-width: 480px) {
  .brutal-card {
    padding: 16px;
    border-width: 2px;
    box-shadow: 4px 4px 0 #000;
    border-radius: 16px;
  }
}

.card-tag {
  display: inline-flex; align-items: center; gap: 8px;
  align-self: flex-start;
  background: var(--accent); color: #000;
  padding: 6px 14px; border: 2px solid #000; border-radius: 12px;
  font-weight: 800; font-size: .8rem; margin-bottom: 20px;
  text-transform: uppercase; letter-spacing: .5px;
}

@media (max-width: 480px) {
  .card-tag {
    padding: 4px 10px;
    font-size: .7rem;
    border-radius: 8px;
  }
  .card-tag svg {
    width: 11px;
    height: 11px;
  }
}

.tag-accent { background: var(--secondary); color: #fff; }

.section-title {
  font-size: 2rem; margin-bottom: 22px;
  letter-spacing: -1px; line-height: 1.1;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 1.5rem;
    margin-bottom: 16px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
}

.profile-container {
  display: flex; gap: 22px; align-items: center; margin-bottom: 26px;
}

@media (max-width: 480px) {
  .profile-container {
    gap: 14px;
    margin-bottom: 18px;
  }
}

.avatar-frame {
  width: 120px; height: 120px; min-width: 120px;
  background: #fff; border: var(--border-thick);
  border-radius: var(--radius); box-shadow: var(--shadow-brutal);
  overflow: hidden;
}

@media (max-width: 480px) {
  .avatar-frame {
    width: 80px;
    height: 80px;
    min-width: 80px;
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
  }
}

.avatar-frame img { width: 100%; height: 100%; object-fit: cover; }

.profile-name { font-size: 2rem; letter-spacing: -1px; line-height: 1.05; }

@media (max-width: 768px) {
  .profile-name {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .profile-name {
    font-size: 1.25rem;
  }
}

.about-desc {
  font-size: .92rem; color: var(--muted); line-height: 1.6; margin-bottom: 12px;
}

@media (max-width: 480px) {
  .about-desc {
    font-size: .85rem;
    margin-bottom: 10px;
  }
}

.contact-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 22px;
}

@media (max-width: 640px) {
  .contact-row {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .contact-row {
    gap: 10px;
    margin-top: 16px;
  }
}

.contact-button {
  background: #212431; border: 2px solid #000; border-radius: 18px;
  padding: 12px 16px; display: flex; align-items: center; gap: 10px;
  color: var(--text); text-decoration: none; font-weight: 600;
  box-shadow: var(--shadow-brutal); font-size: .9rem;
  transition: transform .12s, box-shadow .12s;
  overflow: hidden;
}

@media (max-width: 480px) {
  .contact-button {
    padding: 10px 12px;
    border-radius: 12px;
    font-size: .8rem;
    border-width: 1.5px;
    box-shadow: 3px 3px 0 #000;
  }
  .contact-button svg {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
  }
  .contact-button span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.contact-button:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 #000; }
.contact-button svg { color: var(--secondary); }

/* TOOLBELT PHYSICS */
.stack-card {
  padding-bottom: 20px;
  display: flex; flex-direction: column;
}

.toolbelt-physics-wrap { display: flex; flex-direction: column; gap: 12px; flex: 1; }

.toolbelt-canvas-container {
  flex: 1;
  width: calc(100% + 70px);
  margin-left: -35px;
  height: 370px;
  overflow: hidden;
  position: relative;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  touch-action: none;
}

@media (max-width: 768px) {
  .toolbelt-canvas-container {
    height: 300px;
    width: calc(100% + 48px);
    margin-left: -24px;
  }
}

@media (max-width: 480px) {
  .toolbelt-canvas-container {
    height: 250px;
    width: calc(100% + 32px);
    margin-left: -16px;
  }
}

.toolbelt-canvas-container:active { cursor: grabbing; }

.dom-pill {
  position: absolute; left: 0; top: 0;
  display: inline-flex; align-items: center; gap: 6px;
  padding: 8px 15px;
  border-radius: 9999px;
  border: 2.5px solid rgba(0,0,0,0.3);
  font-family: 'Syne', sans-serif;
  font-weight: 800; font-size: 13px;
  white-space: nowrap; user-select: none;
  pointer-events: none;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0,0,0,0.4);
  transition: opacity 0.15s;
  z-index: 5;
}

@media (max-width: 480px) {
  .dom-pill {
    padding: 6px 12px;
    font-size: 11px;
    border-width: 2px;
  }
}

.dom-pill img { display: block; flex-shrink: 0; }

/* COMPANY LOGO STRIP */
.logo-strip-section {
  overflow: hidden;
  border-top: var(--border-thick);
  border-bottom: var(--border-thick);
  background: #09090d;
  margin-bottom: 0;
}

.logo-strip-row {
  overflow: hidden;
  padding: 28px 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

@media (max-width: 480px) {
  .logo-strip-row {
    padding: 16px 0;
    border-bottom-width: 0.5px;
  }
}

.logo-strip-row:last-child { border-bottom: none; }

.logo-strip-track {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

@keyframes logoScrollLTR { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
@keyframes logoScrollRTL { from { transform: translateX(-33.333%); } to { transform: translateX(0); } }
.logo-track-ltr { animation: logoScrollLTR 38s linear infinite; }
.logo-track-rtl { animation: logoScrollRTL 38s linear infinite; }

.logo-item {
  display: inline-flex;
  align-items: center;
  padding: 0 44px;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .logo-item {
    padding: 0 28px;
  }
}

.logo-img {
  width: 44px; height: 44px;
  object-fit: contain; display: block;
  transition: transform 0.28s ease, opacity 0.28s ease;
  opacity: 0.85;
}

@media (max-width: 480px) {
  .logo-img {
    width: 32px;
    height: 32px;
  }
}

.logo-item:hover .logo-img {
  transform: scale(1.25);
  opacity: 1;
}

.reset-btn {
  align-self: flex-start;
  display: inline-flex; align-items: center; gap: 7px;
  background: #212431; border: 2px solid #000; border-radius: 12px;
  padding: 8px 16px; color: var(--muted); font-weight: 700; font-size: .82rem;
  cursor: pointer; box-shadow: 3px 3px 0 #000;
  transition: transform .12s, box-shadow .12s;
  text-transform: uppercase; letter-spacing: .5px;
}

@media (max-width: 480px) {
  .reset-btn {
    padding: 6px 12px;
    font-size: .7rem;
    border-width: 1.5px;
    box-shadow: 2px 2px 0 #000;
  }
  .reset-btn svg {
    width: 12px;
    height: 12px;
  }
}

.reset-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #000; color: var(--accent); }

.project-showcase {
  grid-column: span 2;
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}

.project-showcase .section-head { grid-column: span 2; padding: 20px 28px; }

@media (max-width: 1024px) {
  .project-showcase {
    grid-column: span 1;
    grid-template-columns: 1fr;
  }
  .project-showcase .section-head {
    grid-column: span 1;
  }
}

@media (max-width: 768px) {
  .project-showcase {
    gap: 16px;
  }
  .project-showcase .section-head {
    padding: 16px 20px;
  }
}

@media (max-width: 480px) {
  .project-showcase .section-head {
    padding: 12px 16px;
  }
}

.project-subcard {
  background: #1c1e29; border: var(--border-thick); border-radius: var(--radius);
  padding: 22px; display: flex; flex-direction: column; gap: 16px;
  box-shadow: var(--shadow-brutal);
}

@media (max-width: 768px) {
  .project-subcard {
    padding: 16px;
    border-width: 3px;
    box-shadow: 6px 6px 0 #000;
  }
}

@media (max-width: 480px) {
  .project-subcard {
    padding: 12px;
    border-width: 2px;
    box-shadow: 3px 3px 0 #000;
  }
}

.project-banner-mock {
  width: 100%; height: 200px; border: 2px solid #000;
  border-radius: 20px; overflow: hidden; background: #2b2e3d;
}

@media (max-width: 480px) {
  .project-banner-mock {
    height: 140px;
    border-radius: 12px;
    border-width: 1.5px;
  }
}

.project-banner-mock img { width: 100%; height: 100%; object-fit: cover; }

.project-details h3 { font-size: 1.3rem; margin-bottom: 6px; color: #fff; }

@media (max-width: 480px) {
  .project-details h3 {
    font-size: 1.05rem;
    margin-bottom: 4px;
  }
}

.project-link {
  margin-top: 6px; display: inline-flex; align-items: center; gap: 6px;
  font-weight: 800; color: var(--accent); text-decoration: none; font-size: .9rem;
  text-transform: uppercase; letter-spacing: .5px;
}

@media (max-width: 480px) {
  .project-link {
    font-size: .8rem;
    margin-top: 4px;
  }
}

/* SCROLLING BANNERS */
.scroll-stage { margin: 40px 0 80px; overflow: hidden; }

@media (max-width: 480px) {
  .scroll-stage {
    margin: 24px 0 48px;
  }
}

.scroll-ribbon {
  border-top: var(--border-thick); border-bottom: var(--border-thick);
  padding: 16px 0; overflow: hidden; margin-bottom: -4px;
}

@media (max-width: 480px) {
  .scroll-ribbon {
    padding: 12px 0;
    border-width: 2px;
  }
}

.scroll-track {
  display: flex; white-space: nowrap;
  font-family: 'Syne', sans-serif;
  font-weight: 900; font-size: 1.5rem;
  text-transform: uppercase; letter-spacing: 1px;
}

@media (max-width: 768px) {
  .scroll-track {
    font-size: 1.2rem;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 480px) {
  .scroll-track {
    font-size: 0.9rem;
    letter-spacing: 0.2px;
  }
}

.scroll-track span { display: inline-block; }
.scroll-ltr { animation: scrollLTR 22s linear infinite; }
.scroll-rtl { animation: scrollRTL 22s linear infinite; }

@keyframes scrollLTR {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}

@keyframes scrollRTL {
  0%   { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

/* FOOTER */
.brutal-footer {
  background: #161820; border-top: var(--border-thick);
  padding: 60px 25px 30px; position: relative; z-index: 1;
}

@media (max-width: 768px) {
  .brutal-footer {
    padding: 40px 16px 20px;
  }
}

@media (max-width: 480px) {
  .brutal-footer {
    padding: 24px 12px 16px;
  }
}

.footer-container {
  max-width: 1300px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px;
}

@media (max-width: 1024px) {
  .footer-container {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 480px) {
  .footer-container {
    gap: 24px;
  }
}

.footer-branding h3 { font-size: 1.8rem; margin-bottom: 12px; color: var(--accent); }

@media (max-width: 480px) {
  .footer-branding h3 {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
}

.footer-branding p { color: var(--muted); line-height: 1.6; max-width: 450px; margin-bottom: 22px; }

@media (max-width: 480px) {
  .footer-branding p {
    font-size: .9rem;
    margin-bottom: 16px;
  }
}

.footer-links-col h4 {
  font-size: 1.05rem; color: #fff; margin-bottom: 18px;
  border-bottom: 2px dashed #333; padding-bottom: 8px;
}

@media (max-width: 480px) {
  .footer-links-col h4 {
    font-size: 0.95rem;
    margin-bottom: 12px;
  }
}

.footer-links-col ul { list-style: none; padding: 0; margin: 0; }
.footer-links-col ul li { margin-bottom: 10px; }

.footer-links-col ul li a {
  color: var(--muted); text-decoration: none; font-weight: 600;
  display: inline-flex; align-items: center; gap: 8px; transition: color .2s;
  font-size: .95rem;
}

@media (max-width: 480px) {
  .footer-links-col ul li a {
    font-size: .85rem;
    margin-bottom: 6px;
  }
}

.footer-links-col ul li a:hover { color: var(--secondary); }
.footer-socials { display: flex; gap: 12px; }

.social-icon-btn {
  width: 44px; height: 44px; background: #fff; color: #000;
  border: 2px solid #000; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; box-shadow: 3px 3px 0 #000;
  transition: transform .12s, box-shadow .12s;
  flex-shrink: 0;
}

@media (max-width: 480px) {
  .social-icon-btn {
    width: 36px;
    height: 36px;
    border-width: 1.5px;
    box-shadow: 2px 2px 0 #000;
  }
}

.social-icon-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #000; }

.footer-bottom {
  max-width: 1300px; margin: 50px auto 0;
  padding-top: 22px; border-top: var(--border-thick);
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 18px;
}

@media (max-width: 768px) {
  .footer-bottom {
    margin: 36px auto 0;
    padding-top: 16px;
    gap: 12px;
  }
}

@media (max-width: 480px) {
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    margin: 24px auto 0;
    padding-top: 12px;
    gap: 8px;
  }
}

.footer-bottom p { font-size: .88rem; color: var(--muted); }

@media (max-width: 480px) {
  .footer-bottom p {
    font-size: .8rem;
  }
}
`;
