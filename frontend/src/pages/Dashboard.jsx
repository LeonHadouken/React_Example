// pages/Dashboard.jsx
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <h1>Дашборд</h1>
      <p>Это страница дашборда с аналитикой и статистикой.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="card">
          <h3>Пользователи</h3>
          <p>100</p>
        </div>
        <div className="card">
          <h3>Заказы</h3>
          <p>24</p>
        </div>
        <div className="card">
          <h3>Доход</h3>
          <p>$5,430</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard