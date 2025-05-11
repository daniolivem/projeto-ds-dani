/* Importa dependências */
import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/Gallery/Gallery.jsx';
import BuyBox from '../../components/BuyBox/BuyBox.jsx';
import ProductOptions from '../../components/ProductOptions/ProductOptions.jsx';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import './ProductViewPage.css';

/* Componente ProductViewPage */
const ProductViewPage = () => {
  const { id } = useParams(); /* Obtém o ID do produto */

  /* Dados mockados (substitua por API) */
  const product = {
    name: 'Tênis Exemplo',
    reference: 'REF123',
    stars: 4.5,
    rating: 120,
    price: 200,
    priceDiscount: 149.9,
    description: 'Descrição detalhada do tênis, destacando materiais e conforto.',
    images: [
      { src: '/images/product-image-1.png' },
      { src: '/images/product-image-2.png' },
    ],
    sizes: ['39', '40', '41', '42'],
    colors: ['#000000', '#ffffff', '#c92071'],
  };

  /* Produtos recomendados */
  const recommendedProducts = Array(4)
    .fill()
    .map((_, index) => ({
      name: `Tênis Recomendado ${index + 1}`,
      image: `/images/product-thumb-${(index % 2) + 1}.png`,
      price: 200 + index * 10,
      priceDiscount: index % 2 === 0 ? 150 + index * 10 : undefined,
    }));

  return (
    <div className="product-view-page">
      <div className="product-view-main">
        <div className="product-view-gallery">
          <Gallery images={product.images} />
        </div>
        <div className="product-view-buybox">
          <BuyBox
            name={product.name}
            reference={product.reference}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <div className="product-view-options">
              <h3>Tamanho</h3>
              <ProductOptions options={product.sizes} />
            </div>
            <div className="product-view-options">
              <h3>Cor</h3>
              <ProductOptions options={product.colors} shape="circle" type="color" />
            </div>
          </BuyBox>
        </div>
      </div>
      <Section title="Produtos Recomendados">
        <ProductListing products={recommendedProducts} />
      </Section>
    </div>
  );
};

export default ProductViewPage;