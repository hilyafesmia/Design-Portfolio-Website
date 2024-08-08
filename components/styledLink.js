import classNames from "classnames";
import Link from "next/link";
import style from "../styles/styledLink.module.css";

export default function StyledLink({
  children,
  href,
  inverted = false,
  target = "",
  rel = "",
}) {
  const styleChecker = classNames({
    [style.linkInverted]: inverted == true,
    [style.link]: inverted == false,
  });

  return (
    <Link target={target} rel={rel} className={styleChecker} href={href}>
      {children}
    </Link>
  );
}
