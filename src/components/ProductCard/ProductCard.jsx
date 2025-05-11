/* Importa dependências */
import React from 'react';
import './ProductCard.css';

/* Componente ProductCard para exibir um produto */
const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="product-card">
      {/* Imagem com lazy loading */}
      <img src={image} alt={name} loading="lazy" />
      <h3>{name}</h3>
      <div className="product-card-prices">
        {priceDiscount ? (
          <>
            <span className="product-card-original-price">{`R$${price.toFixed(2)}`}</span>
            <span className="product-card-discount-price">{`R$${priceDiscount.toFixed(2)}`}</span>
          </>
        ) : (
          <span className="product-card-price">{`R$${price.toFixed(2)}`}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;