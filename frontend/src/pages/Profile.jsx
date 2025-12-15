// pages/Profile.jsx
import React from 'react'

const Profile = () => {
  return (
    <div>
      <h1>Профиль пользователя</h1>
      <p>Здесь можно редактировать информацию о профиле.</p>
      <div className="card mt-4">
        <h3>Личная информация</h3>
        <form>
          <div className="form-group">
            <label>Имя</label>
            <input type="text" className="form-control" defaultValue="Иван" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" defaultValue="ivan@example.com" />
          </div>
          <button type="submit" className="btn-primary">
            Сохранить изменения
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile