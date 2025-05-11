/* Importa dependências */
import React from 'react';
import logo from '../../assets/logo.svg'; /* Caminho do logo */
import './Logo.css';

/* Componente Logo com opção para versão branca */
const Logo = ({ isWhite = false }) => {
  return (
    <img src={logo} alt="Drip Store Logo" className={`logo ${isWhite ? 'white' : ''}`} />
  );
};

export default Logo;