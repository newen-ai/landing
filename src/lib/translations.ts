export type Lang = "es" | "en" | "de" | "pt";

export type Translation = {
  nav: {
    services: string;
    how: string;
    team: string;
    projects: string;
    contact: string;
    contactButton: string;
  };
  languages: Record<Lang, { label: string; title: string }>;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    whyLabel: string;
    whyItems: string[];
    outcomeLabel: string;
    outcomeText: string;
  };
  stats: {
    leftValue: string;
    leftLabel: string;
    rightValue: string;
    rightLabel: string;
  };
  services: {
    label: string;
    featuredTitle: string;
    featuredText: string;
    featuredLink: string;
    cards: Array<{ title: string; text: string }>;
  };
  how: {
    label: string;
    steps: Array<{ num: string; title: string; desc: string }>;
  };
  team: {
    label: string;
    title: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
      image: string;
      linkedin?: string;
    }>;
  };
  history: {
    label: string;
    title: string;
    intro: string;
    cards: Array<{ title: string; text: string }>;
  };
  projects: {
    label: string;
    title: string;
    badge: string;
    text: string;
    links: Array<{ label: string; href: string }>;
  };
  contact: {
    label: string;
    title: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    divider: string;
    emailButton: string;
    whatsappButton: string;
    whatsappSoon: string;
    metaEmail: string;
    metaLabel: string;
  };
  footer: {
    text: string;
  };
};

export const translations: Record<Lang, Translation> = {
  es: {
    nav: {
      services: "Servicios",
      how: "Cómo trabajamos",
      team: "Equipo",
      projects: "Proyectos",
      contact: "Contacto",
      contactButton: "Contacto",
    },
    languages: {
      es: { label: "ES", title: "Español" },
      en: { label: "EN", title: "English" },
      de: { label: "DE", title: "Deutsch" },
      pt: { label: "PT", title: "Português" },
    },
    hero: {
      eyebrow: "Consultoría y desarrollo de software · Desde Argentina y Alemania al mundo",
      title: "La fuerza estratégica detrás del crecimiento de tu empresa.",
      subtitle:
        "Consultoría empresarial, desarrollo de software, ERP e integración de inteligencia artificial. Con base en Argentina y Alemania.",
      ctaPrimary: "Agendar una consulta",
      ctaSecondary: "Ver servicios",
      whyLabel: "Por qué funciona",
      whyItems: [
        "Estrategia y ejecución alineadas a objetivos reales del negocio",
        "Implementación rápida, sin resignar calidad ni control",
        "Métricas claras y mejora continua",
      ],
      outcomeLabel: "Enfoque en resultados",
      outcomeText: "De la estrategia a la implementación en semanas, no trimestres.",
    },
    stats: {
      leftValue: "+15",
      leftLabel: "Años de experiencia",
      rightValue: "AR + DE",
      rightLabel: "Base en Argentina y Alemania",
    },
    services: {
      label: "Servicios",
      featuredTitle: "Desarrollo de software",
      featuredText: "Arquitectura, integraciones y productos a medida. El corazón técnico de Newen.",
      featuredLink: "Ver más ->",
      cards: [
        { title: "Consultoría empresarial", text: "Diagnóstico y mejora de procesos" },
        { title: "ERP e implementación", text: "Odoo, Tango, Jazz, Bejerman" },
        { title: "IA y automatización", text: "Claude, ChatGPT, Make, n8n, agentes propios" },
        { title: "Procesos y CRM", text: "Ventas, seguimiento y gestión comercial" },
        { title: "E-commerce", text: "Tiendas online, integraciones de pago y logística" },
        {
          title: "Growth Partner o consultoría clásica",
          text: "Pago por resultados o por proyecto, según lo que necesites",
        },
      ],
    },
    how: {
      label: "Cómo trabajamos",
      steps: [
        { num: "01", title: "Diagnóstico", desc: "Mapeamos procesos, datos y oportunidades reales." },
        { num: "02", title: "Diseño", desc: "Arquitectura de la solución a medida." },
        { num: "03", title: "Desarrollo", desc: "Software, ERP, IA y automatización en semanas." },
        { num: "04", title: "Resultados", desc: "Medimos, optimizamos y acompañamos." },
      ],
    },
    team: {
      label: "Equipo",
      title: "Socios fundadores",
      members: [
        {
          name: "Andrea Kuhk",
          role: "Socia fundadora · CEO",
          bio: "Lidera la visión estratégica y las relaciones de Newen, con foco en convertir consultoría, procesos e IA en crecimiento medible para las empresas.",
          image: "/assets/andrea-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/andreakuhk/",
        },
        {
          name: "Daniel Seidler",
          role: "Socio fundador · CTO",
          bio: "Impulsa la arquitectura técnica de Newen, garantizando sistemas escalables, seguros y confiables para el desarrollo de software y la integración de IA.",
          image: "/assets/daniel-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/danieljseidler/",
        },
        {
          name: "Tomás Pilipski",
          role: "Socio fundador · CMO",
          bio: "Lidera el posicionamiento de mercado y la ejecución go-to-market, conectando las capacidades de Newen con resultados concretos para los clientes.",
          image: "/assets/tomas-headshot.jpg",
        },
      ],
    },
    history: {
      label: "Nuestra historia",
      title: "Una trayectoria que cruza industrias exigentes",
      intro:
        "Newen nace de una experiencia real construida en sectores muy distintos entre sí: compliance automotriz internacional, modernización de gestión pública a gran escala e infraestructura blockchain de punta. Esa mezcla es la base de cómo trabajamos: no llegamos a un problema desde una sola disciplina, sino con la experiencia concreta de haber resuelto desafíos serios en industrias que no perdonan errores.",
      cards: [
        {
          title: "Compliance automotriz internacional",
          text: "Gestión de cumplimiento normativo OBD para Volkswagen, coordinando requisitos técnicos y regulatorios entre equipos globales.",
        },
        {
          title: "Modernización de gestión pública",
          text: "Más de 80 proyectos: trámites 100% online verificados con AFIP, primera autoridad de firma digital propia y un programa de eficiencia energética con IBM (USD 500.000).",
        },
        {
          title: "Infraestructura blockchain multichain",
          text: "Plataforma de liquid staking con integración NEAR, Ethereum, Aurora y Solana.",
        },
        {
          title: "Oracle on-chain para datos de mercado",
          text: "Desarrollo en Solana (Rust + Anchor) para feeds de precios en tiempo real.",
        },
      ],
    },
    projects: {
      label: "Proyectos con Newen",
      title: "Mathesis",
      badge: "Proyecto en marcha",
      text: "La primera comunidad intelectual verificada para mentes excepcionales",
      links: [
        { label: "Ver caso ->", href: "https://mathesis.social" },
        {
          label: "Saber mas de Mathesis ->",
          href: "https://mathesis.social/miembros-mensa-argentina/",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Charlamos sobre cómo hacer crecer tu empresa?",
      namePlaceholder: "Tu nombre",
      emailPlaceholder: "Tu email",
      messagePlaceholder: "Cuéntanos en qué podemos ayudarte",
      submit: "Agendar una consulta",
      divider: "o escríbenos directamente",
      emailButton: "Escríbenos",
      whatsappButton: "WhatsApp (Próximamente)",
      whatsappSoon: "Próximamente",
      metaEmail: "contact@newen.solutions",
      metaLabel: "LinkedIn",
    },
    footer: {
      text: "© 2026 Newen. Desde Argentina y Alemania al mundo.",
    },
  },
  en: {
    nav: {
      services: "Services",
      how: "How we work",
      team: "Team",
      projects: "Projects",
      contact: "Contact",
      contactButton: "Contact",
    },
    languages: {
      es: { label: "ES", title: "Spanish" },
      en: { label: "EN", title: "English" },
      de: { label: "DE", title: "German" },
      pt: { label: "PT", title: "Portuguese" },
    },
    hero: {
      eyebrow: "Software consulting and development · From Argentina and Germany to the world",
      title: "The strategic force behind your company growth.",
      subtitle:
        "Business consulting, software development, ERP and artificial intelligence integration. Based in Argentina and Germany.",
      ctaPrimary: "Schedule a consultation",
      ctaSecondary: "View services",
      whyLabel: "Why it works",
      whyItems: [
        "Strategy and execution aligned with real business goals",
        "Fast implementation without sacrificing quality or control",
        "Clear metrics and continuous improvement",
      ],
      outcomeLabel: "Outcome focus",
      outcomeText: "From strategy to implementation in weeks, not quarters.",
    },
    stats: {
      leftValue: "+15",
      leftLabel: "Years of experience",
      rightValue: "AR + DE",
      rightLabel: "Based in Argentina and Germany",
    },
    services: {
      label: "Services",
      featuredTitle: "Software development",
      featuredText: "Architecture, integrations and custom products. The technical core of Newen.",
      featuredLink: "See more ->",
      cards: [
        { title: "Business consulting", text: "Process diagnosis and improvement" },
        { title: "ERP and implementation", text: "Odoo, Tango, Jazz, Bejerman" },
        { title: "AI and automation", text: "Claude, ChatGPT, Make, n8n, proprietary agents" },
        { title: "Processes and CRM", text: "Sales, follow-up and commercial management" },
        { title: "E-commerce", text: "Online stores, payment and logistics integrations" },
        {
          title: "Growth Partner or classic consulting",
          text: "Performance-based or project-based fees, depending on your needs",
        },
      ],
    },
    how: {
      label: "How we work",
      steps: [
        { num: "01", title: "Diagnosis", desc: "We map processes, data and real opportunities." },
        { num: "02", title: "Design", desc: "Tailored solution architecture." },
        { num: "03", title: "Development", desc: "Software, ERP, AI and automation in weeks." },
        { num: "04", title: "Results", desc: "We measure, optimize and support." },
      ],
    },
    team: {
      label: "Team",
      title: "Founding partners",
      members: [
        {
          name: "Andrea Kuhk",
          role: "Founding Partner · CEO",
          bio: "Leads Newen's strategic vision and relationships, focused on turning consulting, processes and AI into measurable growth for companies.",
          image: "/assets/andrea-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/andreakuhk/",
        },
        {
          name: "Daniel Seidler",
          role: "Founding Partner · CTO",
          bio: "Drives Newen's technical architecture, ensuring scalable, secure and reliable systems for software development and AI integration.",
          image: "/assets/daniel-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/danieljseidler/",
        },
        {
          name: "Tomas Pilipski",
          role: "Founding Partner · CMO",
          bio: "Leads market positioning and go-to-market execution, connecting Newen's capabilities with concrete client outcomes.",
          image: "/assets/tomas-headshot.jpg",
        },
      ],
    },
    history: {
      label: "Our story",
      title: "A track record that crosses demanding industries",
      intro:
        "Newen comes from real experience built in very different sectors: international automotive compliance, large-scale public administration modernization and cutting-edge blockchain infrastructure. That mix is the basis of how we work: we do not approach a problem from a single discipline, but with the concrete experience of having solved serious challenges in industries that do not forgive mistakes.",
      cards: [
        {
          title: "International automotive compliance",
          text: "OBD compliance management for Volkswagen, coordinating technical and regulatory requirements across global teams.",
        },
        {
          title: "Public administration modernization",
          text: "More than 80 projects: fully online procedures verified with AFIP, first in-house digital signature authority and an energy efficiency program with IBM (USD 500,000).",
        },
        {
          title: "Multichain blockchain infrastructure",
          text: "Liquid staking platform with NEAR, Ethereum, Aurora and Solana integration.",
        },
        {
          title: "On-chain oracle for market data",
          text: "Development on Solana (Rust + Anchor) for real-time price feeds.",
        },
      ],
    },
    projects: {
      label: "Projects with Newen",
      title: "Mathesis",
      badge: "Ongoing project",
      text: "The first verified intellectual community for exceptional minds",
      links: [
        { label: "View case ->", href: "https://mathesis.social" },
        {
          label: "Learn more about Mathesis ->",
          href: "https://mathesis.social/miembros-mensa-argentina/",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Shall we talk about growing your company?",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Tell us how we can help",
      submit: "Schedule a consultation",
      divider: "or email us directly",
      emailButton: "Write to us",
      whatsappButton: "WhatsApp (Soon)",
      whatsappSoon: "Soon",
      metaEmail: "contact@newen.solutions",
      metaLabel: "LinkedIn",
    },
    footer: {
      text: "© 2026 Newen. From Argentina and Germany to the world.",
    },
  },
  de: {
    nav: {
      services: "Leistungen",
      how: "So arbeiten wir",
      team: "Team",
      projects: "Projekte",
      contact: "Kontakt",
      contactButton: "Kontakt",
    },
    languages: {
      es: { label: "ES", title: "Spanisch" },
      en: { label: "EN", title: "Englisch" },
      de: { label: "DE", title: "Deutsch" },
      pt: { label: "PT", title: "Portugiesisch" },
    },
    hero: {
      eyebrow: "Softwareberatung und -entwicklung · Von Argentinien und Deutschland in die Welt",
      title: "Die strategische Kraft hinter dem Wachstum Ihres Unternehmens.",
      subtitle:
        "Unternehmensberatung, Softwareentwicklung, ERP und Integration von kunstlicher Intelligenz. Mit Standorten in Argentinien und Deutschland.",
      ctaPrimary: "Beratungstermin vereinbaren",
      ctaSecondary: "Leistungen ansehen",
      whyLabel: "Warum es funktioniert",
      whyItems: [
        "Strategie und Umsetzung an realen Unternehmenszielen ausgerichtet",
        "Schnelle Implementierung ohne Verzicht auf Qualitat oder Kontrolle",
        "Klare Kennzahlen und kontinuierliche Verbesserung",
      ],
      outcomeLabel: "Fokus auf Ergebnisse",
      outcomeText: "Von der Strategie zur Umsetzung in Wochen, nicht in Quartalen.",
    },
    stats: {
      leftValue: "+15",
      leftLabel: "Jahre Erfahrung",
      rightValue: "AR + DE",
      rightLabel: "Standorte in Argentinien und Deutschland",
    },
    services: {
      label: "Leistungen",
      featuredTitle: "Softwareentwicklung",
      featuredText:
        "Architektur, Integrationen und massgeschneiderte Produkte. Das technische Herz von Newen.",
      featuredLink: "Mehr sehen ->",
      cards: [
        { title: "Unternehmensberatung", text: "Analyse und Verbesserung von Prozessen" },
        { title: "ERP und Implementierung", text: "Odoo, Tango, Jazz, Bejerman" },
        { title: "KI und Automatisierung", text: "Claude, ChatGPT, Make, n8n, eigene Agenten" },
        { title: "Prozesse und CRM", text: "Vertrieb, Nachverfolgung und kommerzielle Steuerung" },
        { title: "E-Commerce", text: "Onlineshops, Zahlungs- und Logistikintegrationen" },
        {
          title: "Growth Partner oder klassische Beratung",
          text: "Erfolgs- oder projektbasierte Vergutung, je nach Bedarf",
        },
      ],
    },
    how: {
      label: "So arbeiten wir",
      steps: [
        { num: "01", title: "Analyse", desc: "Wir erfassen Prozesse, Daten und reale Chancen." },
        { num: "02", title: "Design", desc: "Massgeschneiderte Losungsarchitektur." },
        { num: "03", title: "Entwicklung", desc: "Software, ERP, KI und Automatisierung in wenigen Wochen." },
        { num: "04", title: "Ergebnisse", desc: "Wir messen, optimieren und begleiten." },
      ],
    },
    team: {
      label: "Team",
      title: "Grundungspartner",
      members: [
        {
          name: "Andrea Kuhk",
          role: "Grundungspartnerin · CEO",
          bio: "Leitet Newens strategische Vision und Beziehungen, mit Fokus darauf, Beratung, Prozesse und KI in messbares Wachstum fur Unternehmen zu verwandeln.",
          image: "/assets/andrea-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/andreakuhk/",
        },
        {
          name: "Daniel Seidler",
          role: "Grundungspartner · CTO",
          bio: "Treibt Newens technische Architektur voran und gewahrleistet skalierbare, sichere und zuverlassige Systeme fur Softwareentwicklung und KI-Integration.",
          image: "/assets/daniel-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/danieljseidler/",
        },
        {
          name: "Tomas Pilipski",
          role: "Grundungspartner · CMO",
          bio: "Leitet Marktpositionierung und Go-to-Market-Umsetzung und verbindet Newens Fahigkeiten mit konkreten Kundenergebnissen.",
          image: "/assets/tomas-headshot.jpg",
        },
      ],
    },
    history: {
      label: "Unsere Geschichte",
      title: "Ein Werdegang aus anspruchsvollen Branchen",
      intro:
        "Newen basiert auf echter Erfahrung aus sehr unterschiedlichen Bereichen: internationaler Automotive-Compliance, der Modernisierung grosser offentlicher Verwaltungsprozesse und moderner Blockchain-Infrastruktur. Diese Mischung pragt unsere Arbeitsweise: Wir betrachten Probleme nicht nur aus einer einzigen Disziplin heraus, sondern mit der praktischen Erfahrung, schwierige Aufgaben in Branchen gelost zu haben, die keine Fehler verzeihen.",
      cards: [
        {
          title: "Internationale Automotive-Compliance",
          text: "OBD-Compliance-Management fur Volkswagen, mit Koordination technischer und regulatorischer Anforderungen uber globale Teams hinweg.",
        },
        {
          title: "Modernisierung der offentlichen Verwaltung",
          text: "Mehr als 80 Projekte: vollstandig digitale Verfahren mit AFIP-Verifizierung, erste eigene digitale Signaturbehorde und ein Energieeffizienzprogramm mit IBM (USD 500.000).",
        },
        {
          title: "Multichain-Blockchain-Infrastruktur",
          text: "Liquid-Staking-Plattform mit Integration von NEAR, Ethereum, Aurora und Solana.",
        },
        {
          title: "On-Chain-Oracle fur Marktdaten",
          text: "Entwicklung auf Solana (Rust + Anchor) fur Preis-Feeds in Echtzeit.",
        },
      ],
    },
    projects: {
      label: "Projekte mit Newen",
      title: "Mathesis",
      badge: "Laufendes Projekt",
      text: "Die erste verifizierte intellektuelle Gemeinschaft fur aussergewohnliche Kopfe",
      links: [
        { label: "Fall ansehen ->", href: "https://mathesis.social" },
        {
          label: "Mehr zu Mathesis ->",
          href: "https://mathesis.social/miembros-mensa-argentina/",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Sollen wir uber das Wachstum Ihres Unternehmens sprechen?",
      namePlaceholder: "Ihr Name",
      emailPlaceholder: "Ihre E-Mail",
      messagePlaceholder: "Sagen Sie uns, wie wir helfen konnen",
      submit: "Beratungstermin vereinbaren",
      divider: "oder schreiben Sie uns direkt",
      emailButton: "Schreiben Sie uns",
      whatsappButton: "WhatsApp (Bald)",
      whatsappSoon: "Bald",
      metaEmail: "contact@newen.solutions",
      metaLabel: "LinkedIn",
    },
    footer: {
      text: "© 2026 Newen. Von Argentinien und Deutschland in die Welt.",
    },
  },
  pt: {
    nav: {
      services: "Servicos",
      how: "Como trabalhamos",
      team: "Equipe",
      projects: "Projetos",
      contact: "Contato",
      contactButton: "Contato",
    },
    languages: {
      es: { label: "ES", title: "Espanhol" },
      en: { label: "EN", title: "Ingles" },
      de: { label: "DE", title: "Alemao" },
      pt: { label: "PT", title: "Portugues" },
    },
    hero: {
      eyebrow: "Consultoria e desenvolvimento de software · Da Argentina e Alemanha para o mundo",
      title: "A forca estrategica por tras do crescimento da sua empresa.",
      subtitle:
        "Consultoria empresarial, desenvolvimento de software, ERP e integracao de inteligencia artificial. Com base na Argentina e na Alemanha.",
      ctaPrimary: "Agendar uma consulta",
      ctaSecondary: "Ver servicos",
      whyLabel: "Por que funciona",
      whyItems: [
        "Estrategia e execucao alinhadas a objetivos reais do negocio",
        "Implementacao rapida, sem abrir mao de qualidade ou controle",
        "Metricas claras e melhoria continua",
      ],
      outcomeLabel: "Foco em resultados",
      outcomeText: "Da estrategia a implementacao em semanas, nao em trimestres.",
    },
    stats: {
      leftValue: "+15",
      leftLabel: "Anos de experiencia",
      rightValue: "AR + DE",
      rightLabel: "Base na Argentina e Alemanha",
    },
    services: {
      label: "Servicos",
      featuredTitle: "Desenvolvimento de software",
      featuredText: "Arquitetura, integracoes e produtos sob medida. O coracao tecnico da Newen.",
      featuredLink: "Ver mais ->",
      cards: [
        { title: "Consultoria empresarial", text: "Diagnostico e melhoria de processos" },
        { title: "ERP e implementacao", text: "Odoo, Tango, Jazz, Bejerman" },
        { title: "IA e automacao", text: "Claude, ChatGPT, Make, n8n, agentes proprios" },
        { title: "Processos e CRM", text: "Vendas, acompanhamento e gestao comercial" },
        { title: "E-commerce", text: "Lojas online, integracoes de pagamento e logistica" },
        {
          title: "Growth Partner ou consultoria classica",
          text: "Pagamento por resultado ou por projeto, conforme sua necessidade",
        },
      ],
    },
    how: {
      label: "Como trabalhamos",
      steps: [
        { num: "01", title: "Diagnostico", desc: "Mapeamos processos, dados e oportunidades reais." },
        { num: "02", title: "Design", desc: "Arquitetura de solucao sob medida." },
        { num: "03", title: "Desenvolvimento", desc: "Software, ERP, IA e automacao em semanas." },
        { num: "04", title: "Resultados", desc: "Medimos, otimizamos e acompanhamos." },
      ],
    },
    team: {
      label: "Equipe",
      title: "Socios fundadores",
      members: [
        {
          name: "Andrea Kuhk",
          role: "Socia fundadora · CEO",
          bio: "Lidera a visao estrategica e o relacionamento da Newen, com foco em transformar consultoria, processos e IA em crescimento mensuravel para empresas.",
          image: "/assets/andrea-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/andreakuhk/",
        },
        {
          name: "Daniel Seidler",
          role: "Socio fundador · CTO",
          bio: "Impulsiona a arquitetura tecnica da Newen, garantindo sistemas escalaveis, seguros e confiaveis para desenvolvimento de software e integracao de IA.",
          image: "/assets/daniel-headshot.jpg",
          linkedin: "https://www.linkedin.com/in/danieljseidler/",
        },
        {
          name: "Tomas Pilipski",
          role: "Socio fundador · CMO",
          bio: "Lidera o posicionamento de mercado e a execucao go-to-market, conectando as capacidades da Newen a resultados concretos para os clientes.",
          image: "/assets/tomas-headshot.jpg",
        },
      ],
    },
    history: {
      label: "Nossa historia",
      title: "Uma trajetoria que cruza industrias exigentes",
      intro:
        "A Newen nasce de experiencia real construida em setores muito diferentes entre si: compliance automotivo internacional, modernizacao de gestao publica em grande escala e infraestrutura blockchain de ponta. Essa combinacao sustenta nossa forma de trabalhar: nao abordamos um problema por uma unica disciplina, mas com a vivencia pratica de quem ja resolveu desafios importantes em industrias que nao perdoam erros.",
      cards: [
        {
          title: "Compliance automotivo internacional",
          text: "Gestao de conformidade OBD para a Volkswagen, coordenando requisitos tecnicos e regulatórios entre equipes globais.",
        },
        {
          title: "Modernizacao de gestao publica",
          text: "Mais de 80 projetos: processos 100% online verificados com AFIP, primeira autoridade de assinatura digital propria e um programa de eficiencia energetica com a IBM (USD 500.000).",
        },
        {
          title: "Infraestrutura blockchain multichain",
          text: "Plataforma de liquid staking com integracao NEAR, Ethereum, Aurora e Solana.",
        },
        {
          title: "Oracle on-chain para dados de mercado",
          text: "Desenvolvimento em Solana (Rust + Anchor) para feeds de precos em tempo real.",
        },
      ],
    },
    projects: {
      label: "Projetos com a Newen",
      title: "Mathesis",
      badge: "Projeto em andamento",
      text: "A primeira comunidade intelectual verificada para mentes excepcionais",
      links: [
        { label: "Ver caso ->", href: "https://mathesis.social" },
        {
          label: "Saiba mais sobre Mathesis ->",
          href: "https://mathesis.social/miembros-mensa-argentina/",
        },
      ],
    },
    contact: {
      label: "Contato",
      title: "Vamos conversar sobre como fazer sua empresa crescer?",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu email",
      messagePlaceholder: "Conte em que podemos ajudar",
      submit: "Agendar uma consulta",
      divider: "ou escreva direto para nos",
      emailButton: "Escreva para nos",
      whatsappButton: "WhatsApp (Em breve)",
      whatsappSoon: "Em breve",
      metaEmail: "contact@newen.solutions",
      metaLabel: "LinkedIn",
    },
    footer: {
      text: "© 2026 Newen. Da Argentina e Alemanha para o mundo.",
    },
  },
};

export const languages: Lang[] = ["es", "en", "de", "pt"];
