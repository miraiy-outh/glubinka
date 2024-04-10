import "./about.scss";

export function About() {
  return (
    <div className="about">
      <div className="links">
        <div className="links__header">О проекте</div>
        <a className="links__text" href="/">
          О нас
        </a>
        <a className="links__text" href="/">
          Особенности
        </a>
        <a className="links__text" href="/">
          Новости
        </a>
      </div>

      <div className="links">
        <div className="links__header">Поддержка</div>
        <a className="links__text" href="/">
          FAQ
        </a>
        <a className="links__text" href="/">
          Центр поддержки
        </a>
      </div>

      <div className="links">
        <div className="links__header">Сотрудничество</div>
        <a className="links__text" href="/">
          Связаться с нами
        </a>
        <a className="links__text" href="/">
          Пожертвования
        </a>
        <a className="links__text" href="/">
          Благотворительность
        </a>
        <a className="links__text" href="/">
          Волонтёрство
        </a>
      </div>
    </div>
  );
}
