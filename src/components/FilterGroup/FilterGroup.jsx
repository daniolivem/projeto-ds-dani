/* Importa dependências */
import React from 'react';
import './FilterGroup.css';

/* Componente FilterGroup para filtros (checkboxes ou radios) */
const FilterGroup = ({ title, inputType, options, onChange }) => {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      <div className="filter-options">
        {options.map((option, index) => (
          <label key={index} className="filter-option">
            <input type={inputType} value={option.value} onChange={onChange} />
            {option.text}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterGroup;