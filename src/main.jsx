import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, Mail, Menu, X, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa6';
import ContactSection from './components/contact.jsx';
import Hero3D from './components/Hero3D.jsx';
import './styles.css';

// --- Data ---
const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub', Icon: FaGithub, href: 'https://github.com/ahmad012-ui' },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-rehman-29' },
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/' },
  { key: 'whatsapp', label: 'WhatsApp', Icon: FaWhatsapp, href: 'https://wa.me/your-number' },
  { key: 'facebook', label: 'Facebook', Icon: FaFacebook, href: 'https://www.facebook.com/' },
  { key: 'x', label: 'X', Icon: FaTwitter, href: 'https://twitter.com/' },
  { key: 'email', label: 'Email', Icon: Mail, href: 'mailto:your-email@example.com' },
];

const MAIN_SOCIAL = ['github', 'linkedin', 'facebook', 'x', 'instagram', 'whatsapp', 'email'];

const PROJECTS = [
  {
    n: '01',
    title: 'Vaccino',
    type: 'Vaccination Management System',
    desc:
      'Full-stack vaccination management system that handles hospitals, vaccines, appointments and patient workflows. Built with a focus on reliability and maintainability.',
    href: 'https://github.com/ahmad012-ui/vaccino',
  },
  {
    n: '02',
    title: 'Portfolio',
    type: 'Personal website',
    desc: 'A personal portfolio site showcasing projects, skills and contact information.',
    href: 'https://github.com/ahmad012-ui/ahmad-portfolio',
  },
];

const SKILLS = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  Backend: ['PHP', 'C#', 'ASP.NET MVC', '.NET', 'Entity Framework Core', 'REST APIs'],
  Database: ['MySQL', 'SQL Server', 'SQLite'],
};

// --- Small presentational components ---
function SocialIcons({ className = '' }) {
  const ordered = SOCIAL_LINKS.filter((s) => MAIN_SOCIAL.includes(s.key)).sort(
    (a, b) => MAIN_SOCIAL.indexOf(a.key) - MAIN_SOCIAL.indexOf(b.key)
  );

  return (
    <div className={`social-icons ${className}`}> 
      {ordered.map((s) => {
        const Icon = s.Icon;
        return (
          <a key={s.key} href={s.href} aria-label={s.label} target="_blank" rel="noreferrer" className="social-link">
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

function Nav({ active, onToggleMenu, menuOpen }) {
  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="site-header">
      <div className="brand">Ahmad Rehman</div>
      <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''}>
            {l.label}
          </a>
        ))}
      </nav>
      <button className="menu-btn" onClick={onToggleMenu} aria-label="Toggle menu">
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects section">
      <h2>
        Projects <ArrowDownRight />
      </h2>
      <div className="project-list">
        {PROJECTS.map((p) => (
          <article key={p.n} className="project-card">
            <div className="project-index">{p.n}</div>
            <div className="project-body">
              <h3>
                {p.title} <span className="muted">{p.type}</span>
              </h3>
              <p>{p.desc}</p>
              <div className="project-actions">
                <a href={p.href} target="_blank" rel="noreferrer">
                  View <ExternalLink />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="skills section">
      <h2>
        Skills <ArrowUpRight />
      </h2>
      <div className="skills-grid">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="skill-group">
            <h4>{group}</h4>
            <ul>
              {items.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

// --- Main App ---
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    // Update active link based on scroll position.
    const sections = Array.from(document.querySelectorAll('section[id]'));
    function onScroll() {
      const scrollY = window.scrollY + window.innerHeight / 3;
      let current = 'home';
      for (const sec of sections) {
        const top = sec.offsetTop;
        if (scrollY >= top) current = sec.id;
      }
      setActive(current);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when navigation changes
    if (menuOpen) setMenuOpen(false);
  }, [active]);

  return (
    <div className="app-root">
      <Nav active={active} onToggleMenu={() => setMenuOpen((v) => !v)} menuOpen={menuOpen} />

      <main>
        <section id="home" className="hero section">
          <div className="hero-left">
            <h1>
              Hi, I'm Ahmad — <span className="accent">Frontend</span> & Full-stack Developer
            </h1>
            <p className="lead">
              I build web applications and tools. I focus on performance, accessibility and developer experience.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn">
                View Projects <ArrowDownRight />
              </a>
              <a href="#contact" className="btn ghost">
                Contact <Mail />
              </a>
            </div>
            <SocialIcons className="hero-socials" />
          </div>

          <div className="hero-right">
            <Hero3D />
          </div>
        </section>

        <section id="about" className="about section">
          <h2>About</h2>
          <p>
            I'm a software developer with experience across front-end and back-end technologies. I enjoy turning
            ideas into products and learning new tools along the way.
          </p>
        </section>

        <Projects />
        <Skills />

        <section id="contact" className="contact section">
          <h2>Contact</h2>
          <ContactSection />
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-left">© {new Date().getFullYear()} Ahmad Rehman</div>
        <div className="footer-right">
          <SocialIcons />
        </div>
      </footer>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-inner">
            <button className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close">
              <X />
            </button>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.desc}</p>
            <a href={selectedProject.href} target="_blank" rel="noreferrer">
              View repo <ExternalLink />
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
