
export default function shortInfo({type, content}) {
    return (
        <div className="short-info">
            <h4>{type}</h4>
            <p>{content}</p>
        </div>
    )
}