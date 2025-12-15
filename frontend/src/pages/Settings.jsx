// pages/Settings.jsx
import React from 'react'

const Settings = () => {
  return (
    <div>
      <h1>Настройки</h1>
      <p>Настройте параметры вашего аккаунта.</p>
      <div className="card mt-4">
        <h3>Настройки уведомлений</h3>
        <div className="form-check">
          <input type="checkbox" id="notify-email" defaultChecked />
          <label htmlFor="notify-email">Email уведомления</label>
        </div>
        <div className="form-check">
          <input type="checkbox" id="notify-push" defaultChecked />
          <label htmlFor="notify-push">Push уведомления</label>
        </div>
        <button className="btn-primary mt-3">
          Сохранить настройки
        </button>
      </div>
    </div>
  )
}

export default Settings