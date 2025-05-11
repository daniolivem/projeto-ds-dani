/* Importa dependências */
import React from 'react';
import Logo from '../Logo/Logo.jsx';
import InfoSection from './InfoSection.jsx';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import './Footer.css';

/* Componente Footer */
const Footer = () => {
  /* Dados para as seções de informações */
  const infoData = [
    {
      title: 'Sobre',
      informations: [
        { text: 'Sobre Drip Store', link: '/about' },
        { text: 'Blog', link: '/blog' },
      ],
    },
    {
      title: 'Suporte',
      informations: [
        { text: 'FAQ', link: '/faq' },
        { text: 'Contato', link: '/contact' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Seção da marca */}
        <div className="footer-brand">
          {/* Logo branca */}
          <Logo isWhite />
          <p className="footer-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src={facebookIcon} alt="Facebook" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src={instagramIcon} alt="Instagram" />
            </a>
            <a href="https://twitter.com" aria-label="Twitter">
              <img src={twitterIcon} alt="Twitter" />
            </a>
          </div>
        </div>

        {/* Seções de informações */}
        {infoData.map((section, index) => (
          <InfoSection key={index} title={section.title} informations={section.informations} />
        ))}
      </div>
      <hr />
      <p className="footer-copyright">© 2025 Digital Store</p>
    </footer>
  );
};

export default Footer;