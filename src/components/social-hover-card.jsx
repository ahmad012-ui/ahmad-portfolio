import React from 'react';

export default function SocialHoverCard({ social }) {
  const { label, Icon, href, handle, description } = social;
  const external = !href.startsWith('mailto:');

  return (
    <span className="social-hover-wrap">
      <a
        className="social-icon"
        href={href}
        aria-label={label}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer noopener' : undefined}
      >
        <Icon />
      </a>
      <span className="social-hover-card" role="tooltip">
        <span className="social-hover-card-head">
          <span className="social-hover-card-icon"><Icon /></span>
          <span>
            <strong>{label}</strong>
            <small>{handle}</small>
          </span>
        </span>
        <span className="social-hover-card-description">{description}</span>
        <span className="social-hover-card-link">{label === 'Email' ? 'CONTACT ME' : 'OPEN PROFILE'} <span>↗</span></span>
      </span>
    </span>
  );
}
