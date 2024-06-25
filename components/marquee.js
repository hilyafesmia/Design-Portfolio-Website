import style from "./marquee.module.css";
import classnames from "classnames";

export default function Marquee({ text, className = "" }) {
  return (
    <div className={classnames(style.marquee, className)}>
      <h1>{text}</h1>
      <h1>{text}</h1>
      <h1>{text}</h1>
    </div>
  );
}
