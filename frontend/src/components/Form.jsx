// Импорт хуков и необходимых зависимостей из React и других библиотек
import { useState } from "react";  // Хук useState для управления состоянием компонента
import api from "../api";           // Преднастроенный экземпляр axios для HTTP запросов
import { useNavigate } from "react-router-dom";  // Хук для программной навигации между страницами
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";  // Константы с именами ключей для токенов в localStorage
import "../styles/Form.css"         // Стили для формы (если файл существует)
import LoadingIndicator from "./LoadingIndicator";  // Компонент индикатора загрузки

// Основной функциональный компонент формы для входа и регистрации
// Принимает два пропса: route (путь API) и method (метод: "login" или "register")
function Form({ route, method }) {
    // Состояние для хранения имени пользователя (username)
    const [username, setUsername] = useState("");

    // Состояние для хранения пароля (password)
    const [password, setPassword] = useState("");

    // Состояние для отслеживания процесса загрузки (отправки формы)
    const [loading, setLoading] = useState(false);

    // Хук useNavigate для программной навигации
    const navigate = useNavigate();

    // Определение имени формы на основе метода (Login или Register)
    const name = method === "login" ? "Login" : "Register";

    // Обработчик отправки формы
    const handleSubmit = async (e) => {
        // Активация состояния загрузки при начале отправки формы
        setLoading(true);

        // Предотвращение стандартного поведения формы (перезагрузка страницы)
        e.preventDefault();

        try {
            // Отправка POST запроса на указанный маршрут (route) с данными пользователя
            const res = await api.post(route, { username, password })

            // Обработка успешного ответа в зависимости от метода
            if (method === "login") {
                // При входе сохраняем полученные токены в localStorage
                localStorage.setItem(ACCESS_TOKEN, res.data.access);    // Сохранение access токена
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);  // Сохранение refresh токена

                // Перенаправление на главную страницу после успешного входа
                navigate("/")
            } else {
                // При регистрации перенаправляем на страницу входа
                navigate("/login")
            }
        } catch (error) {
            // Обработка ошибок: показываем alert с текстом ошибки
            alert(error)
        } finally {
            // В любом случае (успех или ошибка) сбрасываем состояние загрузки
            setLoading(false)
        }
    };

    // Возвращаем JSX разметку формы
    return (
        // Форма с обработчиком onSubmit и CSS классом для стилизации
        <form onSubmit={handleSubmit} className="form-container">
            {/* Заголовок формы (Login или Register в зависимости от method) */}
            <h1>{name}</h1>

            {/* Поле ввода для имени пользователя */}
            <input
                className="form-input"               // CSS класс для стилизации
                type="text"                          // Тип поля - текстовое
                value={username}                     // Привязка значения к состоянию username
                onChange={(e) => setUsername(e.target.value)}  // Обновление состояния при изменении
                placeholder="Username"               // Подсказка в пустом поле
            />

            {/* Поле ввода для пароля */}
            <input
                className="form-input"               // CSS класс для стилизации
                type="password"                      // Тип поля - пароль (скрывает ввод)
                value={password}                     // Привязка значения к состоянию password
                onChange={(e) => setPassword(e.target.value)}  // Обновление состояния при изменении
                placeholder="Password"               // Подсказка в пустом поле
            />

            {/* Условный рендеринг индикатора загрузки (показывается только при loading = true) */}
            {loading && <LoadingIndicator />}

            {/* Кнопка отправки формы */}
            <button className="form-button" type="submit">
                {/* Текст на кнопке соответствует имени формы */}
                {name}
            </button>
        </form>
    );
}

// Экспорт компонента Form по умолчанию для использования в других файлах
export default Form