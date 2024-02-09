import "./copyright.scss"

export function Copyright() {
    return (
        <div className="copyright">
            <div className="copyright__info">© 2022 ООО «Глубинка»</div>
            <div className="copyright__links">
                <div className="link">Политика конфиденциальности</div>
                <div className="divider"></div>
                <div className="link">Использование cookies</div>
                <div className="divider"></div>
                <div className="link">Условия использования</div>
            </div>
        </div>
    )
}