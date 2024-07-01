import classNames from "classnames";
import style from "../styles/sectionContainer.module.css";

export default function SectionContainer({ children, position = "bottom" }) {
  const depth = classNames(style.container, {
    [style.top]: position == "top",
    [style.middle]: position == "middle",
    [style.bottom]: position == "bottom",
  });

  return <div className={depth}>{children}</div>;
}
