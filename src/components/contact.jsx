import { useState } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('');
    try {
      const response = await fetch('https://formspree.io/f/xzzeyyrg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch {
      setStatus('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="section-inner contact-grid">
      <div>
        <p className="eyebrow">GET IN TOUCH</p>
        <h2>LET'S BUILD<br />SOMETHING<br /><em>USEFUL.</em></h2>
        <p>Have a project, opportunity or just want to talk frontend? I'm always open to good conversations.</p>
        <div className="contact-links">
          <a href="mailto:codeby.ahmad@gmail.com"><Mail />codeby.ahmad@gmail.com</a>
          <a href="https://github.com/ahmad012-ui" target="_blank" rel="noreferrer"><FaGithub />github.com/ahmad012-ui</a>
          <a href="https://www.linkedin.com/in/ahmad-rehman-29b268316/" target="_blank" rel="noreferrer"><FaLinkedin />LinkedIn</a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="YOUR NAME" required />
        <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="YOUR EMAIL" required />
        <input name="subject" value={formData.subject} onChange={handleChange} placeholder="SUBJECT" required />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="YOUR MESSAGE" rows="6" required />
        <button className="btn solid" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'} <ArrowUpRight />
        </button>
        {status ? <p className="form-status">{status}</p> : null}
      </form>
    </div>
  );
}
