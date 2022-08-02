
export default function shortInfo({type, content}) {
    return (
        <div className="shortinfo-item">
            <h4>{type}</h4>
            <p>{content}</p>
        </div>
    )
}