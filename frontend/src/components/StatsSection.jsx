// pages/components/StatsSection.jsx
import React, { useState, useEffect } from 'react'
import api from './../api'

const StatsSection = () => {
  const [stats, setStats] = useState({
    projects: 0,
    tasks: 0,
    completed: 0,
    members: 0
  })

  useEffect(() => {
    // Здесь можно загрузить реальную статистику с API
    const fetchStats = async () => {
      try {
        // Пример API запроса
        // const response = await api.get('/api/stats/')
        // setStats(response.data)

        // Временные данные для примера
        setStats({
          projects: 12,
          tasks: 48,
          completed: 36,
          members: 8
        })
      } catch (error) {
        console.error('Ошибка загрузки статистики:', error)
      }
    }

    fetchStats()
  }, [])

  return (
    <section className="stats-section">
      <h2>Ваша статистика</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-number">{stats.projects}</div>
          <div className="stat-label">Проектов</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.tasks}</div>
          <div className="stat-label">Задач</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.completed}</div>
          <div className="stat-label">Выполнено</div>
        </div>
        <div className="stat-card">
          <div className="stat-number">{stats.members}</div>
          <div className="stat-label">Участников</div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection