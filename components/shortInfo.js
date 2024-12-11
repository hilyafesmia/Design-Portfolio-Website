import style from "../styles/workDetail.module.css";

export default function shortInfo({ type, content }) {
  return (
    <div className={style.shortInfoContainer}>
      <h4>{type}</h4>
      <p>{content}</p>
    </div>
  );
}
