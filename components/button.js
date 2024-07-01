import classNames from "classnames";
import style from "../styles/button.module.css";
import Link from "next/link";

export default function Button({ children, href, small = false }) {
  const buttonStyle = classNames(style.button, {
    [style.small]: small,
  });
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className={buttonStyle}
    >
      {children}
    </Link>
  );
}
