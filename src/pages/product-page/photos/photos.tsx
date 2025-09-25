import "./photos.scss"

export function Photos({ images }: { images: string[] }) {
    return (
        <div className="photos">
            {
                images.map((image, key) => (
                    <img
                        key={key}
                        className="photo"
                        src={image}
                    />
                ))
            }
        </div>
    )
}