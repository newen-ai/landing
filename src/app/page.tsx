"use client";

import { useMemo, useState, type FormEvent } from "react";
import { languages, translations, type Lang } from "@/lib/translations";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function buildMailtoLink(nombre: string, email: string, mensaje: string): string {
  const subject = `Consulta desde la web: ${nombre}`;
  const body = `Nombre: ${nombre}\nEmail: ${email}\n\n${mensaje}`;
  return `mailto:contact@newen.solutions?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("es");
  const t = useMemo(() => translations[lang], [lang]);

  const enviarConsulta = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const nombre = String(formData.get("nombre") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const mensaje = String(formData.get("mensaje") ?? "").trim();

    window.location.href = buildMailtoLink(nombre, email, mensaje);
  };

  return (
    <>
      <nav>
        <a href="#" aria-label="Ir al inicio">
          <img src={`${basePath}/assets/logo-clara-crop.png`} alt="Newen" />
        </a>
        <div className="links">
          <a href="#servicios">{t.nav.services}</a>
          <a href="#como-trabajamos">{t.nav.how}</a>
          <a href="#equipo">{t.nav.team}</a>
          <a href="#proyectos">{t.nav.projects}</a>
          <a href="#contacto">{t.nav.contact}</a>
        </div>
        <div className="right">
          <div className="langs">
            {languages.map((code) => (
              <button
                key={code}
                type="button"
                className={code === lang ? "active" : undefined}
                aria-pressed={code === lang}
                title={t.languages[code].title}
                onClick={() => setLang(code)}
              >
                {t.languages[code].label}
              </button>
            ))}
          </div>
          <a
            href="#contacto"
            className="btn-primary"
            style={{ padding: "9px 16px", fontSize: "13px" }}
          >
            {t.nav.contactButton}
          </a>
        </div>
      </nav>

      <div className="hero">
        <div className="hero-grid">
          <div>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1 className="hero-title">{t.hero.title}</h1>
            <p className="hero-sub">{t.hero.subtitle}</p>
            <div className="hero-ctas">
              <a href="#contacto" className="btn-primary">
                {t.hero.ctaPrimary}
              </a>
              <a href="#servicios" className="btn-secondary">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>
          <div className="why-card">
            <p className="label">{t.hero.whyLabel}</p>
            <div className="why-list">
              {t.hero.whyItems.map((item) => (
                <div className="why-item" key={item}>
                  <span className="why-dot" />
                  <span className="txt">{item}</span>
                </div>
              ))}
            </div>
            <div className="outcome-box">
              <p className="label">{t.hero.outcomeLabel}</p>
              <p className="text">{t.hero.outcomeText}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="stats">
        <div className="stats-grid">
          <div>
            <p className="stat-num">{t.stats.leftValue}</p>
            <p className="stat-label">{t.stats.leftLabel}</p>
          </div>
          <div>
            <p className="stat-num">{t.stats.rightValue}</p>
            <p className="stat-label">{t.stats.rightLabel}</p>
          </div>
        </div>
      </div>

      <section id="servicios" className="services-wrap">
        <p className="section-label">{t.services.label}</p>
        <div className="services-grid">
          <div className="service-featured">
            <div>
              <h3>{t.services.featuredTitle}</h3>
              <p>{t.services.featuredText}</p>
            </div>
            <a
              href="#proyectos"
              style={{ fontSize: "11px", color: "var(--newen-orange)", fontWeight: 500, textDecoration: "none" }}
            >
              {t.services.featuredLink}
            </a>
          </div>
          {t.services.cards.map((card) => (
            <div className="service-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-trabajamos">
        <p className="section-label">{t.how.label}</p>
        <div className="steps">
          {t.how.steps.map((step) => (
            <div key={step.num}>
              <p className="step-num">{step.num}</p>
              <p className="step-title">{step.title}</p>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="equipo">
        <p className="section-label">{t.team.label}</p>
        <h2 className="section-title">{t.team.title}</h2>
        <div className="team-grid">
          {t.team.members.map((member) => (
            <div className="team-card" key={member.name}>
              <img src={`${basePath}${member.image}`} alt={member.name} />
              <p className="team-name">{member.name}</p>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
              {member.linkedin ? (
                <a className="team-linkedin" href={member.linkedin} target="_blank" rel="noopener">
                  LinkedIn -&gt;
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section>
        <p className="section-label">{t.history.label}</p>
        <h2 className="section-title">{t.history.title}</h2>
        <p className="trayectoria-intro">{t.history.intro}</p>
        <div className="trayectoria-grid">
          {t.history.cards.map((card) => (
            <div className="tray-card" key={card.title}>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="proyectos" className="proyectos-wrap">
        <p className="section-label">{t.projects.label}</p>
        <div className="proyecto-card">
          <div>
            <h4>
              {t.projects.title} <span className="proyecto-badge">{t.projects.badge}</span>
            </h4>
            <p>{t.projects.text}</p>
          </div>
          <div className="proyecto-links">
            {t.projects.links.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto">
        <p className="section-label">{t.contact.label}</p>
        <div className="contacto-grid">
          <p className="big">{t.contact.title}</p>

          <form className="contact-form" onSubmit={enviarConsulta}>
            <input type="text" name="nombre" placeholder={t.contact.namePlaceholder} required />
            <input type="email" name="email" placeholder={t.contact.emailPlaceholder} required />
            <textarea
              name="mensaje"
              rows={4}
              placeholder={t.contact.messagePlaceholder}
              required
            />
            <button type="submit" className="btn-primary">
              {t.contact.submit}
            </button>
          </form>
          <p className="form-divider">{t.contact.divider}</p>

          <div className="contacto-ctas">
            <a href="mailto:contact@newen.solutions" className="btn-secondary">
              {t.contact.emailButton}
            </a>
            <a
              href="#"
              className="btn-secondary"
              style={{ opacity: 0.45, pointerEvents: "none", cursor: "default" }}
              title={t.contact.whatsappSoon}
            >
              {t.contact.whatsappButton}
            </a>
          </div>
          <p className="contacto-meta">
            <a href={`mailto:${t.contact.metaEmail}`}>{t.contact.metaEmail}</a> ·{" "}
            <a
              href="https://www.linkedin.com/company/newensolutions"
              target="_blank"
              rel="noopener"
            >
              {t.contact.metaLabel}
            </a>
          </p>
        </div>
      </section>

      <footer>
        <img className="foot-logo" src={`${basePath}/assets/logo-clara-crop.png`} alt="Newen" />
        {t.footer.text}
      </footer>
    </>
  );
}
