import style from "../styles/marquee.module.css";
import classnames from "classnames";

export default function Marquee({ text, className = "" }) {
  return (
    <div className={classnames(style.marquee, className)}>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
}
