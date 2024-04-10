import "./copyright.scss";

export function Copyright() {
  return (
    <div className="copyright">
      <div className="copyright__info">© 2022 ООО «Глубинка»</div>
      <div className="copyright__links">
        <a className="link" href="/">
          Политика конфиденциальности
        </a>
        <div className="divider"></div>
        <a className="link" href="/">
          Использование cookies
        </a>
        <div className="divider"></div>
        <a className="link" href="/">
          Условия использования
        </a>
      </div>
    </div>
  );
}
