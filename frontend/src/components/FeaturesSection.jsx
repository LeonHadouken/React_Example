// pages/components/FeaturesSection.jsx
import React from 'react'

const FeaturesSection = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Быстрый старт',
      description: 'Начните работу за минуты. Интуитивный интерфейс и простой onboarding.'
    },
    {
      icon: '🔒',
      title: 'Безопасность',
      description: 'Ваши данные защищены с помощью современного шифрования.'
    },
    {
      icon: '📈',
      title: 'Аналитика',
      description: 'Мощные инструменты аналитики для отслеживания прогресса.'
    },
    {
      icon: '🤝',
      title: 'Коллаборация',
      description: 'Работайте вместе с командой в реальном времени.'
    },
    {
      icon: '📱',
      title: 'Мобильность',
      description: 'Доступ с любых устройств. Работайте где угодно.'
    },
    {
      icon: '⚡',
      title: 'Производительность',
      description: 'Оптимизировано для быстрой работы даже с большими объемами данных.'
    }
  ]

  return (
    <section className="features">
      <h2>Почему выбирают нас</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection