// components/Layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      {/* Навбар отображается на всех защищенных страницах */}
      <Navbar />

      {/* Основной контент - здесь будут рендериться страницы */}
      <main className="layout-content">
        <Outlet />
      </main>

      {/* Опциональный футер */}
      <footer className="layout-footer">
        <p>© 2024 MyApp</p>
      </footer>
    </div>
  );
};

export default Layout;