export default function shortInfo({ type, content }) {
  return (
    <div style={{ width: "160px" }}>
      <h4>{type}</h4>
      <p>{content}</p>
    </div>
  );
}
