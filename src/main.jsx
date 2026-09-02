import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowUpRight, ExternalLink, Mail, Menu, X } from 'lucide-react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa6';
import ContactSection from './components/contact.jsx';
import HeroBackground from './components/hero-background.jsx';
import './styles.css';

const SOCIAL_LINKS = [
  {
    key: 'github',
    label: 'GitHub',
    Icon: FaGithub,
    href: 'https://github.com/ahmad012-ui',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    Icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/ahmad-rehman-29b268316/',
  },
  {
    key: 'instagram',
    label: 'Instagram',
    Icon: FaInstagram,
    href: 'https://www.instagram.com/ahmad.rehmn/',
  },
  {
    key: 'whatsapp',
    label: 'WhatsApp',
    Icon: FaWhatsapp,
    href: 'https://wa.me/923112607492',
  },
  {
    key: 'email',
    label: 'Email',
    Icon: Mail,
    href: 'mailto:codeby.ahmad@gmail.com',
  },
  {
    key: 'facebook',
    label: 'Facebook',
    Icon: FaFacebook,
    href: 'https://www.facebook.com/profile.php?id=61581994023105',
  },
  {
    key: 'x',
    label: 'X / Twitter',
    Icon: FaTwitter,
    href: 'https://x.com/ahmad_rehmn?t=RF2IG7vyyWwW9rclYRX2Jhg&s=09',
  },
];

const MAIN_SOCIAL = [ 'github', 'linkedin', 'facebook', 'x', 'instagram', 'whatsapp', 'email' ];

const NAV_ITEMS = ['about', 'skills', 'projects', 'experience', 'contact'];

const INDEX_ITEMS = [
  ['home', '01', 'HOME'],
  ['about', '02', 'ABOUT'],
  ['skills', '03', 'SKILLS'],
  ['projects', '04', 'PROJECTS'],
  ['experience', '05', 'EXPERIENCE'],
  ['contact', '06', 'CONTACT'],
];

const PROJECTS = [
  {
    n: '01',
    title: 'Vaccino',
    type: 'Vaccination Management System',
    desc: 'A full-stack vaccination management system for managing hospitals, vaccines, appointments and patient workflows with a structured PHP and MySQL backend.',
    stack: ['PHP', 'MySQL', 'JavaScript'],
    repo: 'https://github.com/ahmad012-ui/vaccination-management-system',
    image: '/vaccino-dashboard.svg',
  },
  {
    n: '02',
    title: 'MTCC Admin Portal',
    type: 'Admin Dashboard',
    desc: 'A responsive React admin dashboard with reusable UI components, structured workflows and Tailwind CSS layouts designed for efficient data and platform management.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    repo: 'https://github.com/ahmad012-ui/MTCC-Admin-Portal',
    image: '/mtcc-dashboard.svg',
  },
  {
    n: '03',
    title: 'Nextag',
    type: 'E-commerce Frontend',
    desc: 'A responsive e-commerce frontend prototype focused on product presentation, interactive UI elements, navigation and responsive layouts using modern frontend tools.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'jQuery'],
    repo: 'https://github.com/ahmad012-ui/E-project',
    image:
      'https://raw.githubusercontent.com/ahmad012-ui/E-project/main/files/img/Gemini_Generated_Image_2wgkgn2wgkgn2wgk.png',
  },
  {
    n: '04',
    title: 'Green Leaf',
    type: 'Full-Stack Plant E-commerce',
    desc: 'A full-stack plant-selling e-commerce website with dedicated user, seller and admin panels, built with PHP and MySQL for product, user and seller management. Payment integration is planned for a future update.',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Tailwind CSS', 'MySQL'],
    repo: 'https://github.com/ahmad012-ui/green-leaf',
    image: '/green-leaf-home.svg',
  },
];

const SKILLS = {
  Frontend: [ 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery' ],
  Backend: [ 'PHP', 'C#', 'ASP.NET MVC', '.NET', 'Entity Framework Core', 'REST APIs' ],
  Database: ['MySQL', 'SQL Server'],
  Tools: ['Git', 'GitHub', 'Figma', 'VS Code', 'Visual Studio'],
  Testing: [ 'Manual Testing', 'Bug Reporting', 'Regression Testing', 'API Testing', 'UI Testing' ],
};

function SocialIcons() {
  return SOCIAL_LINKS
    .filter(({ key }) => MAIN_SOCIAL.includes(key))
    .sort(
      (a, b) => MAIN_SOCIAL.indexOf(a.key) - MAIN_SOCIAL.indexOf(b.key),
    )
    .map(({ key, label, Icon, href }) => {
      const isEmail = key === 'email';

      return (
        <a
          key={key}
          className="social-icon"
          href={href}
          aria-label={label}
          title={label}
          target={isEmail ? undefined : '_blank'}
          rel={isEmail ? undefined : 'noreferrer'}
        >
          <Icon />
        </a>
      );
    });
}

function Navigation({ menu, setMenu, active }) {
  return (
    <header className="nav">
      <a className="brand" href="#home" onClick={() => setMenu(false)}>
        <span>AR</span>
        <b>AHMAD REHMAN</b>
      </a>

      <button
        className="menu"
        onClick={() => setMenu(!menu)}
        aria-label="Toggle navigation"
      >
        {menu ? <X /> : <Menu />}
      </button>

      <nav className={menu ? 'open' : ''}>
        <a
          className={active === 'home' ? 'active' : ''}
          href="#home"
          onClick={() => setMenu(false)}
        >
          HOME
        </a>

        {NAV_ITEMS.map((item) => (
          <a
            key={item}
            className={active === item ? 'active' : ''}
            href={`#${item}`}
            onClick={() => setMenu(false)}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionIndex() {
  return (
    <aside className="index">
      {INDEX_ITEMS.map(([id, number, label]) => (
        <a key={id} href={`#${id}`}>
          {number}
          <span>{label}</span>
        </a>
      ))}
    </aside>
  );
}

function HeroSection() {
  return (
    <section id="home" className="hero">
      <HeroBackground />

      <div className="hero-copy reveal">
        <p className="eyebrow">FRONTEND DEVELOPER / QA ENGINEER</p>
        <h1>
          I BUILD WEB
          <br />
          EXPERIENCES
          <br />
          THAT <em>WORK.</em>
        </h1>
        <p className="lead">
          I build responsive web interfaces with React, JavaScript and modern
          CSS, while bringing a QA mindset to make sure the details work as
          well as they look.
        </p>

        <div className="actions">
          <a className="btn solid" href="#projects">
            VIEW MY WORK <ArrowUpRight />
          </a>
          <a className="btn" href="#contact">
            LET&apos;S CONNECT <ArrowUpRight />
          </a>
          <a className="btn" href="/Ahmad_Rehman_Resume.pdf" download>
            DOWNLOAD RESUME <ArrowDownRight />
          </a>
        </div>

        <div className="social">
          <span className="social-label">FIND ME ON</span>
          <SocialIcons />
        </div>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="cross">+</div>
        <div className="availability">
          <i /> <b>AVAILABLE FOR OPPORTUNITIES</b>
          <p>Open to frontend development and QA opportunities.</p>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section about">
      <div className="section-label reveal">
        02
        <br />
        <span>ABOUT</span>
      </div>

      <div className="section-inner two reveal">
        <div>
          <p className="eyebrow">GET TO KNOW ME</p>
          <h2>
            A LITTLE
            <br />
            ABOUT <em>ME.</em>
          </h2>
          <p>
            I&apos;m Ahmad Rehman, a frontend developer who enjoys turning designs
            and ideas into responsive, user-friendly web interfaces. I work
            with modern frontend technologies and focus on writing clean,
            practical code.
          </p>
          <p>
            My experience in QA also shapes how I build. I test interfaces,
            look for edge cases and pay attention to the details that make a
            product reliable—not just visually polished.
          </p>
          <a className="text-link" href="#contact">
            LET&apos;S TALK <ArrowUpRight />
          </a>
        </div>

        <div className="details">
          <div>
            <span>ROLE</span>
            <b>Frontend Developer / QA</b>
          </div>
          <div>
            <span>FOCUS</span>
            <b>Web UI · Testing · UX</b>
          </div>
          <div>
            <span>STACK</span>
            <b>React · JavaScript · CSS</b>
          </div>
          <div>
            <span>BASED</span>
            <b>Pakistan</b>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section skills">
      <div className="section-label reveal">
        03
        <br />
        <span>SKILLS</span>
      </div>

      <div className="section-inner reveal">
        <p className="eyebrow">WHAT I USE</p>
        <h2>
          THINGS I BUILD
          <br />
          WITH.
        </h2>

        <div className="skill-grid">
          {Object.entries(SKILLS).map(([category, items]) => (
            <div className="skill-col" key={category}>
              <h3>{category}</h3>
              {items.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onSelect(project);
    }
  };

  return (
    <article
      className="project"
      tabIndex="0"
      role="button"
      aria-label={`Open details for ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={handleKeyDown}
    >
      <div className="project-no">{project.n}</div>

      <div className="project-preview">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
        />
        <div className="preview-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
        <span>{project.title.toUpperCase()}</span>
      </div>

      <div className="project-info">
        <p>{project.type}</p>
        <h3>{project.title}</h3>
        <p className="desc">{project.desc}</p>
        <div className="tags">
          {project.stack.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </div>

      <div className="project-link">
        <span>
          VIEW PROJECT <ArrowUpRight />
        </span>
      </div>
    </article>
  );
}

function ProjectsSection({ onSelect }) {
  return (
    <section id="projects" className="section projects">
      <div className="section-label reveal">
        04
        <br />
        <span>PROJECTS</span>
      </div>

      <div className="section-inner reveal">
        <div className="project-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>
              PROJECTS THAT
              <br />
              SOLVE <em>REAL PROBLEMS.</em>
            </h2>
          </div>
          <a
            className="text-link"
            href="https://github.com/ahmad012-ui"
            target="_blank"
            rel="noreferrer"
          >
            VIEW GITHUB <ExternalLink />
          </a>
        </div>

        <div className="project-list">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.n}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="section experience">
      <div className="section-label reveal">
        05
        <br />
        <span>EXPERIENCE</span>
      </div>

      <div className="section-inner reveal">
        <p className="eyebrow">MY JOURNEY</p>
        <h2>
          EXPERIENCE
          <br />
          THAT SHAPED <em>ME.</em>
        </h2>

        <div className="timeline">
          <div>
            <b>FEBRUARY 2026 — PRESENT</b>
            <h3>
              UI/UX Developer & Quality Assurance (QA) Engineer — nopCommerce
            </h3>
            <p>
              Working across UI/UX development and QA, building and refining
              interfaces while testing functionality, workflows and user-facing
              features and reporting bugs.
            </p>
          </div>

          <div>
            <b>NOVEMBER 2025 — DECEMBER 2025</b>
            <h3>Software Developer Intern — Anomoz Softwares</h3>
            <p>
              Completed a two-month software development internship,
              contributing to web application development and gaining hands-on
              experience with real-world development workflows.
            </p>
          </div>

          <div>
            <b>JANUARY 2025 — PRESENT</b>
            <h3>Freelance — Full Stack Web Developer</h3>
            <p>
              Building and improving web projects across frontend and backend
              technologies, with a focus on responsive interfaces and practical
              functionality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="project-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="project-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <button
          className="project-modal-close"
          onClick={onClose}
          aria-label="Close project details"
        >
          <X />
        </button>

        <div className="project-modal-image">
          <img src={project.image} alt="" />
        </div>

        <div className="project-modal-content">
          <p className="eyebrow">
            {project.n} — {project.type}
          </p>
          <h2 id="project-modal-title">{project.title}</h2>
          <p>{project.desc}</p>

          <div className="tags">
            {project.stack.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>

          <a
            className="btn solid"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            VIEW ON GITHUB <ExternalLink />
          </a>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const sections = [...document.querySelectorAll('section[id]')];
    const sectionObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id),
        ),
      { rootMargin: '-35% 0px -55%' },
    );

    sections.forEach((section) => sectionObserver.observe(section));

    const revealElements = [
      ...document.querySelectorAll('.hero-copy,.section-label,.section-inner'),
    ];
    document.documentElement.classList.add('reveal-ready');

    const revealObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        }),
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="site">
      <Navigation menu={menu} setMenu={setMenu} active={active} />
      <SectionIndex />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection onSelect={setSelectedProject} />
        <ExperienceSection />
        <section id="contact" className="section contact">
          <div className="section-label reveal">
            06
            <br />
            <span>CONTACT</span>
          </div>
          <ContactSection />
        </section>
      </main>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <footer>
        <a className="brand" href="#home">
          <span>AR</span>
          <b>AHMAD REHMAN</b>
        </a>
        <small>© 2026 AHMAD REHMAN. ALL RIGHTS RESERVED.</small>
        <a className="back" href="#home">
          BACK TO TOP <ArrowDownRight />
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
