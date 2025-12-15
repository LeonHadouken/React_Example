// pages/components/HeroSection.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = ({ isLoggedIn, username }) => {
  return (
    <section className="hero">
      <h1>
        {isLoggedIn
          ? `Добро пожаловать, ${username}!`
          : 'Добро пожаловать в MyApp'
        }
      </h1>
      <p>
        {isLoggedIn
          ? 'Рады видеть вас снова. Продолжайте работу с вашими проектами.'
          : 'Мощная платформа для управления вашими проектами и задачами.'
        }
      </p>
      <div className="cta-buttons">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="btn btn-primary">
              Перейти к дашборду
            </Link>
            <Link to="/profile" className="btn btn-secondary">
              Мой профиль
            </Link>
          </>
        ) : (
          <>
            <Link to="/register" className="btn btn-primary">
              Начать бесплатно
            </Link>
            <Link to="/login" className="btn btn-secondary">
              Войти в систему
            </Link>
          </>
        )}
      </div>
    </section>
  )
}

export default HeroSection