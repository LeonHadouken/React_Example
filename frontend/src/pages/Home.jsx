// pages/Home.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Home.css' // Стили для домашней страницы

// Импортируем внутренние компоненты
import HeroSection from '../components/HeroSection'
import StatsSection from '../components/StatsSection'
import FeaturesSection from '../components/FeaturesSection'
import CallToAction from '../components/CallToAction'

function Home() {
  // Проверяем авторизацию для персонализации
  const isLoggedIn = !!localStorage.getItem('access_token')
  const username = "Пользователь" // Здесь можно получить из API

  return (
    <div className="home-page">

      {/* Герой-секция с приветствием */}
      <HeroSection
        isLoggedIn={isLoggedIn}
        username={username}
      />

      {/* Статистика (только для авторизованных) */}
      {isLoggedIn && <StatsSection />}

      {/* Особенности приложения */}
      <FeaturesSection />

      {/* Призыв к действию */}
      <CallToAction isLoggedIn={isLoggedIn} />

      {/* Быстрые ссылки для авторизованных */}
      {isLoggedIn && (
        <div className="quick-links">
          <h3>Быстрый доступ</h3>
          <div className="links-grid">
            <Link to="/dashboard" className="quick-link">
              <div className="link-icon">📊</div>
              <span>Дашборд</span>
            </Link>
            <Link to="/profile" className="quick-link">
              <div className="link-icon">👤</div>
              <span>Профиль</span>
            </Link>
            <Link to="/settings" className="quick-link">
              <div className="link-icon">⚙️</div>
              <span>Настройки</span>
            </Link>
          </div>
        </div>
      )}

    </div>
  )
}

export default Home