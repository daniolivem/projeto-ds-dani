/* Importa dependências */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './Layout.css';

/* Componente de layout que engloba todas as páginas */
const Layout = () => {
  return (
    <div className="layout">
      {/* Cabeçalho fixo */}
      <Header />
      {/* Renderiza o conteúdo da página atual */}
      <main className="layout-content">
        <Outlet />
      </main>
      {/* Rodapé fixo */}
      <Footer />
    </div>
  );
};

export default Layout;