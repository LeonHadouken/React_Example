// pages/Login.jsx
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css' // Стили для страницы логина

function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    setError('') // Сбрасываем ошибку при изменении полей
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/token/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const data = await response.json()

        // Сохраняем токены в localStorage
        localStorage.setItem('access_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)

        // Перенаправляем на домашнюю страницу
        navigate('/')
      } else {
        const errorData = await response.json()
        setError(errorData.detail || 'Неверный email или пароль')
      }
    } catch (err) {
      setError('Ошибка подключения к серверу')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        {/* Левая часть - приветствие и информация */}
        <div className="login-left">
          <div className="login-header">
            <h1>С возвращением!</h1>
            <p>Войдите в свой аккаунт, чтобы продолжить работу</p>
          </div>

          <div className="login-features">
            <div className="feature-item">
              <div className="feature-icon">🔐</div>
              <div className="feature-text">
                <h4>Безопасный вход</h4>
                <p>Все данные защищены шифрованием</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <div className="feature-text">
                <h4>Мгновенный доступ</h4>
                <p>К вашим проектам и настройкам</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">📈</div>
              <div className="feature-text">
                <h4>Персональная статистика</h4>
                <p>Отслеживайте свой прогресс</p>
              </div>
            </div>
          </div>
        </div>

        {/* Правая часть - форма */}
        <div className="login-right">
          <div className="login-form-wrapper">
            <h2>Вход в аккаунт</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Введите ваш email"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Пароль</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Введите ваш пароль"
                  required
                  disabled={loading}
                />
              </div>

              {error && (
                <div className="error-message">
                  ⚠️ {error}
                </div>
              )}

              <button
                type="submit"
                className="login-button"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="spinner"></span>
                    Вход...
                  </>
                ) : (
                  'Войти'
                )}
              </button>

              <div className="login-links">
                <Link to="/forgot-password" className="link">
                  Забыли пароль?
                </Link>
                <span className="divider">•</span>
                <Link to="/register" className="link">
                  Создать аккаунт
                </Link>
              </div>
            </form>

            <div className="social-login">
              <p className="divider-text">Или войдите через</p>
              <div className="social-buttons">
                <button className="social-button google">
                  <span className="social-icon">G</span>
                  Google
                </button>
                <button className="social-button github">
                  <span className="social-icon">🐙</span>
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login