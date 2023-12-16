import "./about.scss"

export function About() {
    return (
        <div className="about">
            <div className="links">
                <div className="links__header">О проекте</div>
                <a className="links__text">О нас</a>
                <a className="links__text">Особенности</a>
                <a className="links__text">Новости</a>
            </div>

            <div className="links">
                <div className="links__header">Поддержка</div>
                <a className="links__text">FAQ</a>
                <a className="links__text">Центр поддержки</a>
            </div>

            <div className="links">
                <div className="links__header">Сотрудничество</div>
                <a className="links__text">Связаться с нами</a>
                <a className="links__text">Пожертвования</a>
                <a className="links__text">Благотворительность</a>
                <a className="links__text">Волонтёрство</a>
            </div>
        </div>
    )
}