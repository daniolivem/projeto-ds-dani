/* Importa dependências */
import React from 'react';
import Gallery from '../../components/Gallery/Gallery.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import './HomePage.css';

/* Componente HomePage */
const HomePage = () => {
  /* Imagens do carrossel (substitua pelos caminhos reais) */
  const galleryImages = [
    { src: '/images/home-slide-1.jpeg' },
    { src: '/images/home-slide-2.jpeg' },
  ];

  /* Imagens das coleções */
  const collections = [
    '/images/collection-1.png',
    '/images/collection-2.png',
    '/images/collection-3.png',
  ];

  /* Produtos em alta (8 itens) */
  const products = Array(8)
    .fill()
    .map((_, index) => ({
      name: `Tênis ${index + 1}`,
      image: `/images/product-thumb-${(index % 2) + 1}.png`,
      price: 200,
      priceDiscount: index % 2 === 0 ? 149.9 : undefined,
    }));

  return (
    <div className="home-page">
      <Section title="Destaques">
        <Gallery images={galleryImages} />
      </Section>
      <Section title="Coleções em Destaque" link={{ text: 'Ver todas', url: '/collections' }}>
        <div className="home-collections">
          {collections.map((src, index) => (
            <img key={index} src={src} alt={`Collection ${index + 1}`} className="home-collection-image" />
          ))}
        </div>
      </Section>
      <Section title="Produtos em Alta" link={{ text: 'Ver todos', url: '/products' }}>
        <ProductListing products={products} />
      </Section>
    </div>
  );
};

export default HomePage;