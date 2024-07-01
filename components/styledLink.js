import style from "../styles/styledLink.module.css";
import Link from "next/link";

export default function StyledLink({ children, href }) {
  return (
    <Link className={style.link} href={href}>
      {children}
    </Link>
  );
}
