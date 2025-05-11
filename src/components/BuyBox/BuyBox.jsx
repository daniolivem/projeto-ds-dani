/* Importa dependências */
import React from 'react';
import starIcon from '../../assets/icons/star-icon.svg';
import './BuyBox.css';

/* Componente BuyBox para informações e compra */
const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="buy-box">
      <h2>{name}</h2>
      <p className="buy-box-reference">{reference}</p>
      <div className="buy-box-rating">
        <div className="buy-box-stars">
          {stars}
          <img src={starIcon} alt="Star" />
        </div>
        <span className="buy-box-rating-count">({rating} avaliações)</span>
      </div>
      <div className="buy-box-prices">
        {priceDiscount ? (
          <>
            <span className="buy-box-original-price">{`R$${price.toFixed(2)}`}</span>
            <span className="buy-box-discount-price">{`R$${priceDiscount.toFixed(2)}`}</span>
          </>
        ) : (
          <span className="buy-box-price">{`R$${price.toFixed(2)}`}</span>
        )}
      </div>
      <p className="buy-box-description">{description}</p>
      {children}
      <button className="buy-box-button">Comprar</button>
    </div>
  );
};

export default BuyBox;