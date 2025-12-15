// components/Navbar/Navbar.jsx
import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { ACCESS_TOKEN } from '../../constants'
import './Navbar.css' // Создадим стили отдельно

const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN)

  // Функция для выхода из системы
  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN)
    localStorage.removeItem('refresh_token')
    navigate('/login')
  }

  // Проверка активного маршрута
  const isActive = (path) => {
    return location.pathname === path ? 'active' : ''
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Логотип / Бренд */}
        <div className="navbar-brand">
          <Link to="/" className="navbar-logo">
            MyApp
          </Link>
        </div>

        {/* Навигационные ссылки для авторизованных пользователей */}
        {isLoggedIn ? (
          <>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${isActive('/')}`}
                >
                  Главная
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/dashboard"
                  className={`nav-link ${isActive('/dashboard')}`}
                >
                  Дашборд
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/profile"
                  className={`nav-link ${isActive('/profile')}`}
                >
                  Профиль
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/settings"
                  className={`nav-link ${isActive('/settings')}`}
                >
                  Настройки
                </Link>
              </li>
            </ul>

            {/* Правый блок с пользователем и выходом */}
            <div className="navbar-right">
              <div className="user-info">
                <span className="username">
                  {/* Здесь можно отображать имя пользователя */}
                  Пользователь
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="btn-logout"
              >
                Выйти
              </button>
            </div>
          </>
        ) : (
          /* Навигационные ссылки для неавторизованных пользователей */
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/login"
                className={`nav-link ${isActive('/login')}`}
              >
                Вход
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className={`nav-link ${isActive('/register')}`}
              >
                Регистрация
              </Link>
            </li>
          </ul>
        )}

        {/* Кнопка для мобильного меню (опционально) */}
        <button className="navbar-toggler">
          <span className="toggler-icon">☰</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar