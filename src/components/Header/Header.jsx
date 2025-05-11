/* Importa dependências */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Logo/Logo.jsx';
import searchIcon from '../../assets/icons/search-icon.svg';
import cartIcon from '../../assets/icons/cart-icon.svg';
import './Header.css';

/* Componente Header */
const Header = () => {
  const [searchQuery, setSearchQuery] = useState(''); /* Estado para a busca */
  const [isMenuOpen, setIsMenuOpen] = useState(false); /* Estado para o menu hamburguer */
  const navigate = useNavigate();

  /* Função para lidar com a busca */
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?filter=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo da loja */}
        <Logo />

        {/* Botão do menu hamburguer */}
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)} /* Alterna o menu */
          aria-label="Toggle menu"
        >
          ☰ {/* Ícone de hamburguer */}
        </button>

        {/* Barra de busca */}
        <form onSubmit={handleSearch} className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Pesquisar produtos..."
            aria-label="Pesquisar produtos"
          />
          <button type="submit">
            <img src={searchIcon} alt="Search" />
          </button>
        </form>

        {/* Área de ações */}
        <div className="header-actions">
          <NavLink to="/signup" className="signup-link">
            Cadastre-se
          </NavLink>
          <NavLink to="/login" className="login-button">
            Entrar
          </NavLink>
          <NavLink to="/cart">
            <img src={cartIcon} alt="Cart" className="cart-icon" />
          </NavLink>
        </div>

        {/* Navegação */}
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setIsMenuOpen(false)}>
            Produtos
          </NavLink>
          <NavLink to="/categories" onClick={() => setIsMenuOpen(false)}>
            Categorias
          </NavLink>
          <NavLink to="/orders" onClick={() => setIsMenuOpen(false)}>
            Meus Pedidos
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;