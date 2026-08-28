import React, { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Menu, X, ExternalLink } from 'lucide-react';
import ContactSection from './components/contact.jsx';
import { SOCIAL_LINKS, MAIN_SOCIAL, projects, skills } from './data/portfolioData.js';
import './styles.css';

function SocialIcons() {
  return SOCIAL_LINKS.filter((s) => MAIN_SOCIAL.includes(s.key)).map((s) => {
    const Icon = s.Icon;
    return <a key={s.key} className="social-icon" href={s.href} aria-label={s.label} title={s.label} target={s.key === 'email' ? undefined : '_blank'} rel={s.key === 'email' ? undefined : 'noreferrer'}><Icon /></a>;
  });
}

const nav = ['about', 'skills', 'projects', 'experience', 'contact'];

function App() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const els = [...document.querySelectorAll('section[id]')];
    const obs = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-35% 0px -55%' });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return <div className="site">
    <header className="nav"><a className="brand" href="#home" onClick={() => setMenu(false)}><span>AR</span><b>AHMAD REHMAN</b></a><button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle navigation">{menu ? <X /> : <Menu />}</button><nav className={menu ? 'open' : ''}><a className={active === 'home' ? 'active' : ''} href="#home" onClick={() => setMenu(false)}>HOME</a>{nav.map((item) => <a key={item} className={active === item ? 'active' : ''} href={'#' + item} onClick={() => setMenu(false)}>{item.toUpperCase()}</a>)}</nav></header>
    <aside className="index"><a href="#home">01<span>HOME</span></a><a href="#about">02<span>ABOUT</span></a><a href="#skills">03<span>SKILLS</span></a><a href="#projects">04<span>PROJECTS</span></a><a href="#experience">05<span>EXPERIENCE</span></a><a href="#contact">06<span>CONTACT</span></a></aside>
    <main>
      <section id="home" className="hero"><div className="hero-copy"><p className="eyebrow">FRONTEND DEVELOPER / QA ENGINEER</p><h1>I BUILD WEB<br />EXPERIENCES<br />THAT <em>WORK.</em></h1><p className="lead">I build responsive web interfaces with React, JavaScript and modern CSS, while bringing a QA mindset to make sure the details work as well as they look.</p><div className="actions"><a className="btn solid" href="#projects">VIEW MY WORK <ArrowUpRight /></a><a className="btn" href="#contact">LET'S CONNECT <ArrowUpRight /></a></div><div className="social"><span className="social-label">FIND ME ON</span><SocialIcons /></div></div><div className="hero-art" aria-hidden="true"><div className="orb orb1" /><div className="orb orb2" /><div className="cross">+</div><div className="availability"><i /> <b>AVAILABLE FOR OPPORTUNITIES</b><p>Open to frontend development and QA opportunities.</p></div></div></section>
      <section id="about" className="section about"><div className="section-label">02<br /><span>ABOUT</span></div><div className="section-inner two"><div><p className="eyebrow">GET TO KNOW ME</p><h2>A LITTLE<br />ABOUT <em>ME.</em></h2><p>I'm Ahmad Rehman, a frontend developer who enjoys turning designs and ideas into responsive, user-friendly web interfaces. I work with modern frontend technologies and focus on writing clean, practical code.</p><p>My experience in QA also shapes how I build. I test interfaces, look for edge cases and pay attention to the details that make a product reliable—not just visually polished.</p><a className="text-link" href="#contact">LET'S TALK <ArrowUpRight /></a></div><div className="details"><div><span>ROLE</span><b>Frontend Developer / QA</b></div><div><span>FOCUS</span><b>Web UI · Testing · UX</b></div><div><span>STACK</span><b>React · JavaScript · CSS</b></div><div><span>BASED</span><b>Pakistan</b></div></div></div></section>
      <section id="skills" className="section skills"><div className="section-label">03<br /><span>SKILLS</span></div><div className="section-inner"><p className="eyebrow">WHAT I USE</p><h2>THINGS I BUILD<br />WITH.</h2><div className="skill-grid">{Object.entries(skills).map(([cat, items]) => <div className="skill-col" key={cat}><h3>{cat}</h3>{items.map((skill) => <span key={skill}>{skill}</span>)}</div>)}</div></div></section>
      <section id="projects" className="section projects"><div className="section-label">04<br /><span>PROJECTS</span></div><div className="section-inner"><div className="project-heading"><div><p className="eyebrow">SELECTED WORK</p><h2>PROJECTS THAT<br />SOLVE <em>REAL PROBLEMS.</em></h2></div><a className="text-link" href="https://github.com/ahmad012-ui" target="_blank" rel="noreferrer">VIEW GITHUB <ExternalLink /></a></div><div className="project-list">{projects.map((project) => <article className="project" key={project.n}><div className="project-no">{project.n}</div><div className="project-preview"><img src={project.image} alt={project.title} /><div className="preview-lines"><i /><i /><i /><i /></div><span>{project.title.toUpperCase()}</span></div><div className="project-info"><p>{project.type}</p><h3>{project.title}</h3><p className="desc">{project.desc}</p><div className="tags">{project.stack.map((stackItem) => <span key={stackItem}>{stackItem}</span>)}</div></div><div className="project-link">{project.repo ? <a href={project.repo} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight /></a> : <span>CASE STUDY</span>}</div></article>)}</div></div></section>
      <section id="experience" className="section experience"><div className="section-label">05<br /><span>EXPERIENCE</span></div><div className="section-inner"><p className="eyebrow">MY JOURNEY</p><h2>EXPERIENCE<br />THAT SHAPED <em>ME.</em></h2><div className="timeline"><div><b>FEBRUARY 2026 — PRESENT</b><h3>UI/UX Developer & Quality Assurance (QA) Engineer — nopCommerce</h3><p>Working across UI/UX development and QA, building and refining interfaces while testing functionality, workflows and user-facing features and reporting bugs.</p></div><div><b>NOVEMBER 2025 — DECEMBER 2025</b><h3>Software Developer Intern — Anomoz Softwares</h3><p>Completed a two-month software development internship, contributing to web application development and gaining hands-on experience with real-world development workflows.</p></div><div><b>JANUARY 2025 — PRESENT</b><h3>Freelance — Full Stack Web Developer</h3><p>Building and improving web projects across frontend and backend technologies, with a focus on responsive interfaces and practical functionality.</p></div></div></div></section>
      <section id="contact" className="section contact"><div className="section-label">06<br /><span>CONTACT</span></div><ContactSection /></section>
    </main>
    <footer><a className="brand" href="#home"><span>AR</span><b>AHMAD REHMAN</b></a><small>© 2026 AHMAD REHMAN. ALL RIGHTS RESERVED.</small><a className="back" href="#home">BACK TO TOP <ArrowDownRight /></a></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<App />);
