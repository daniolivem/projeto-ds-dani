/* Importa componentes do React Router e páginas */
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductListingPage from './pages/ProductListingPage/ProductListingPage.jsx';
import ProductViewPage from './pages/ProductViewPage/ProductViewPage.jsx';
import './App.css';

/* Componente principal que define as rotas */
function App() {
  return (
    <Routes>
      {/* Layout engloba todas as páginas com Header e Footer */}
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} /> {/* Página inicial */}
        <Route path="/products" element={<ProductListingPage />} /> {/* Lista de produtos */}
        <Route path="/product/:id" element={<ProductViewPage />} /> {/* Detalhes do produto */}
        {/* Páginas placeholders para navegação */}
        <Route path="/categories" element={<div>Categorias</div>} />
        <Route path="/orders" element={<div>Meus Pedidos</div>} />
      </Route>
    </Routes>
  );
}

export default App;