// Importa dependências
import React from 'react';
import './InfoSection.css';

// Componente InfoSection para seções de informações no rodapé
// Recebe 'title' (título da seção) e 'informations' (array de objetos com texto e link)
const InfoSection = ({ title, informations }) => {
  return (
    <div className="info-section">
      {/* Título da seção */}
      <h3>{title}</h3>

      {/* Lista de links */}
      <ul>
        {informations.map((info, index) => (
          <li key={index}>
            <a href={info.link} aria-label={info.text}>
              {info.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfoSection;