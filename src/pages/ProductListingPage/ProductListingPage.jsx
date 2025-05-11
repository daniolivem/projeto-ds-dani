/* Importa dependências do React, React Router e componentes */
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Section from '../../components/Section/Section.jsx';
import ProductListing from '../../components/ProductListing/ProductListing.jsx';
import FilterGroup from '../../components/FilterGroup/FilterGroup.jsx';
import './ProductListingPage.css';

/* Componente ProductListingPage para exibir produtos com filtros e ordenação */
const ProductListingPage = () => {
  /* Estado para armazenar a lista de produtos */
  const [products, setProducts] = useState([]);
  /* Obtém parâmetros de busca da URL */
  const [searchParams] = useSearchParams();
  const filterQuery = searchParams.get('filter') || ''; /* Filtro de busca */

  /* Dados mockados para produtos (substitua por chamada à API real) */
  const initialProducts = Array(12)
    .fill()
    .map((_, index) => ({
      name: `Tênis ${index + 1}`,
      image: `/images/product-thumb-${(index % 2) + 1}.png`,
      price: 200 + index * 10,
      priceDiscount: index % 2 === 0 ? 150 + index * 10 : undefined,
      size: index % 2 === 0 ? '40' : '41',
      color: index % 2 === 0 ? 'black' : 'white',
    }));

  /* Filtra produtos com base no parâmetro de busca */
  useEffect(() => {
    const filtered = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(filterQuery.toLowerCase())
    );
    setProducts(filtered);
  }, [filterQuery]);

  /* Opções de ordenação */
  const sortOptions = [
    { text: 'Menor preço', value: 'price-asc' },
    { text: 'Maior preço', value: 'price-desc' },
  ];

  /* Opções de filtros (tamanhos e cores) */
  const filterOptions = [
    {
      title: 'Tamanho',
      inputType: 'checkbox',
      options: [
        { text: '39', value: '39' },
        { text: '40', value: '40' },
        { text: '41', value: '41' },
      ],
    },
    {
      title: 'Cor',
      inputType: 'checkbox',
      options: [
        { text: 'Preto', value: 'black' },
        { text: 'Branco', value: 'white' },
      ],
    },
  ];

  /* Função para ordenar produtos */
  const handleSort = (e) => {
    const sortValue = e.target.value;
    if (!sortValue) {
      setProducts(initialProducts); /* Restaura lista original */
      return;
    }
    const sorted = [...products].sort((a, b) => {
      const priceA = a.priceDiscount || a.price;
      const priceB = b.priceDiscount || b.price;
      return sortValue === 'price-asc' ? priceA - priceB : priceB - priceA;
    });
    setProducts(sorted);
  };

  /* Função para aplicar filtros */
  const handleFilter = (e, groupTitle) => {
    const value = e.target.value;
    const checked = e.target.checked;
    let filtered = [...initialProducts];

    /* Aplica filtro com base no grupo (Tamanho ou Cor) */
    if (groupTitle === 'Tamanho') {
      filtered = filtered.filter((product) => (checked ? product.size === value : true));
    } else if (groupTitle === 'Cor') {
      filtered = filtered.filter((product) => (checked ? product.color === value : true));
    }

    /* Atualiza a lista de produtos filtrada */
    setProducts(filtered);
  };

  return (
    <div className="product-listing-page">
      {/* Área de filtros e ordenação */}
      <div className="product-listing-filters">
        {/* Ordenação */}
        <div className="product-listing-sort">
          <label htmlFor="sort">Ordenar por</label>
          <select id="sort" onChange={handleSort} aria-label="Ordenar produtos">
            <option value="">Selecione</option>
            {sortOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
        {/* Filtros */}
        <div className="product-listing-filter-section">
          <h3>Filtrar por</h3>
          <hr />
          {filterOptions.map((group, index) => (
            <FilterGroup
              key={index}
              title={group.title}
              inputType={group.inputType}
              options={group.options}
              onChange={(e) => handleFilter(e, group.title)}
            />
          ))}
        </div>
      </div>
      {/* Lista de produtos */}
      <Section title="Produtos">
        <ProductListing products={products} />
      </Section>
    </div>
  );
};

export default ProductListingPage;