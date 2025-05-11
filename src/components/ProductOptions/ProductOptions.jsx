/* Importa dependências */
import React, { useState } from 'react';
import './ProductOptions.css';

/* Componente ProductOptions para tamanhos ou cores */
const ProductOptions = ({ options, shape = 'square', type = 'text' }) => {
  const [selected, setSelected] = useState(null); /* Opção selecionada */

  return (
    <div className="product-options">
      {options.map((option, index) => (
        <div
          key={index}
          className={`option ${shape} ${selected === option ? 'selected' : ''}`}
          style={type === 'color' ? { backgroundColor: option } : {}}
          onClick={() => setSelected(option)}
          role="button"
          aria-label={`Selecionar ${option}`}
        >
          {type === 'text' && option}
        </div>
      ))}
    </div>
  );
};

export default ProductOptions;