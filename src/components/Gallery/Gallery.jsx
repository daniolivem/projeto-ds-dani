/* Importa dependências */
import React, { useState } from 'react';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';
import './Gallery.css';

/* Componente Gallery para carrossel de imagens */
const Gallery = ({ images, showThumbs = true }) => {
  const [currentIndex, setCurrentIndex] = useState(0); /* Índice da imagem atual */

  /* Navega para a imagem anterior */
  const prevImage = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  /* Navega para a próxima imagem */
  const nextImage = () => {
    if (currentIndex < images.length - 1) setCurrentIndex(currentIndex + 1);
  };

  /* Seleciona uma imagem específica */
  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="gallery">
      <div className="gallery-main">
        <img src={images[currentIndex].src} alt={`Slide ${currentIndex + 1}`} className="gallery-image" />
        <button
          onClick={prevImage}
          disabled={currentIndex === 0}
          className="gallery-arrow gallery-arrow-left"
          aria-label="Previous image"
        >
          <img src={arrowLeft} alt="Previous" />
        </button>
        <button
          onClick={nextImage}
          disabled={currentIndex === images.length - 1}
          className="gallery-arrow gallery-arrow-right"
          aria-label="Next image"
        >
          <img src={arrowRight} alt="Next" />
        </button>
      </div>
      {showThumbs && (
        <div className="gallery-thumbs">
          {images.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`gallery-thumb ${currentIndex === index ? 'active' : ''}`}
              onClick={() => selectImage(index)}
              loading="lazy"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;