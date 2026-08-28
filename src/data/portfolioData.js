import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa6';

export const SOCIAL_LINKS = [
  { key: 'github', label: 'GitHub', Icon: FaGithub, href: 'https://github.com/ahmad012-ui' },
  { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/ahmad-rehman-29b268316/' },
  { key: 'instagram', label: 'Instagram', Icon: FaInstagram, href: 'https://www.instagram.com/ahmad.rehmn/' },
  { key: 'whatsapp', label: 'WhatsApp', Icon: FaWhatsapp, href: 'https://wa.me/923112607492' },
  { key: 'email', label: 'Email', Icon: Mail, href: 'mailto:codeby.ahmad@gmail.com' },
  { key: 'facebook', label: 'Facebook', Icon: FaFacebook, href: 'https://www.facebook.com/profile.php?id=61581994023105' },
  { key: 'x', label: 'X / Twitter', Icon: FaTwitter, href: 'https://x.com/ahmad_rehmn?t=RF2IG7vyywW9rclYRX2Jhg&s=09' }
];

export const MAIN_SOCIAL = ['github', 'linkedin', 'facebook', 'x', 'instagram', 'whatsapp', 'email'];

export const projects = [
  { n: '01', title: 'Vaccino', type: 'Vaccination Management System', desc: 'A full-stack vaccination management system for managing hospitals, vaccines, appointments and patient workflows with a structured PHP and MySQL backend.', stack: ['PHP', 'MySQL', 'JavaScript'], repo: 'https://github.com/ahmad012-ui/vaccination-management-system', image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80' },
  { n: '02', title: 'MTCC Admin Portal', type: 'Admin Dashboard', desc: 'A responsive React admin dashboard with reusable UI components, structured workflows and Tailwind CSS layouts designed for efficient data and platform management.', stack: ['React', 'Vite', 'Tailwind CSS'], repo: 'https://github.com/ahmad012-ui/MTCC-Admin-Portal', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80' },
  { n: '03', title: 'Nextag', type: 'E-commerce Frontend', desc: 'A responsive e-commerce frontend prototype focused on product presentation, interactive UI elements, navigation and responsive layouts using modern frontend tools.', stack: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind CSS', 'jQuery'], repo: 'https://github.com/ahmad012-ui/E-project', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80' },
  { n: '04', title: 'Furniro', type: 'Furniture Landing Page', desc: 'A responsive furniture ecommerce landing page recreated from a design with careful attention to layout, spacing, visual hierarchy and responsive behavior.', stack: ['HTML', 'CSS', 'JavaScript'], repo: 'https://github.com/ahmad012-ui/Furniro-Furniture-Landing-Page', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80' }
];

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'jQuery'],
  Backend: ['PHP', 'ASP.NET MVC', 'REST APIs'],
  Database: ['MySQL', 'SQL Server'],
  Tools: ['Git', 'GitHub', 'Figma', 'VS Code', 'Visual Studio'],
  Testing: ['Manual Testing', 'Bug Reporting', 'Regression Testing', 'API Testing', 'UI Testing']
};
