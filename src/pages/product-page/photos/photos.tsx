import "./photos.scss"

export function Photos({ images }: { images: string[] }) {
    return (
        <div className="photos">
            {
                images.map((image) => (
                    <img className="photo" src={image}></img>
                ))
            }
        </div>
    )
}