import "./pagination.scss"

export function Pagination() {
    const pages = [1, 2, 3, 4, 5, 6, "...", 10]
    return (
        <div className="pagination">
            <img src="../../../../public/icons/arrow-left.svg"></img>
            {
                pages.map((page, key) => (
                    <div key={key} className="pagination__container">
                        <div className="pagination__page">{page}</div>
                    </div>
                ))
            }
            <img src="../../../../public/icons/arrow-right.svg"></img>
        </div>
    )
}