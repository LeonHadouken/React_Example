// pages/components/CallToAction.jsx
import React from 'react'
import { Link } from 'react-router-dom'

const CallToAction = ({ isLoggedIn }) => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h2>Готовы начать?</h2>
        <p>
          {isLoggedIn
            ? 'Продолжайте развивать ваши проекты с нашими инструментами.'
            : 'Присоединяйтесь к тысячам довольных пользователей уже сегодня.'
          }
        </p>
        <div className="cta-buttons">
          {isLoggedIn ? (
            <Link to="/dashboard" className="btn btn-primary">
              Открыть дашборд
            </Link>
          ) : (
            <>
              <Link to="/register" className="btn btn-primary">
                Создать аккаунт
              </Link>
              <Link to="/login" className="btn btn-secondary">
                Уже есть аккаунт?
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

export default CallToAction