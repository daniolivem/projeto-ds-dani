/* Importa dependências */
import React from 'react';
import './Section.css';

/* Componente Section para títulos e conteúdo */
const Section = ({ title, titleAlign = 'left', link, children }) => {
  return (
    <section className="section">
      <div className="section-header">
        <h2 style={{ textAlign: titleAlign }}>{title}</h2>
        {link && (
          <a href={link.url} className="section-link">
            {link.text}
          </a>
        )}
      </div>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;