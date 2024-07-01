import style from "../styles/header.module.css";
import StyledLink from "./styledLink";
import Button from "./button";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  // useEffect(() => {
  //   const hamburger = document.querySelector(".hamburger");
  //   const headerMenu = document.querySelector(".menu");
  //   const headerBg = document.querySelector(".background");
  //   const link = document.querySelectorAll(".menu a");
  //   const bar = document.querySelectorAll(".bar");

  //   hamburger.addEventListener("click", openMenu);
  //   link.forEach((n) =>
  //     n.addEventListener("click", () => {
  //       closeMenu();
  //     })
  //   );

  //   function closeMenu() {
  //     headerMenu.classList.remove("active");
  //     headerBg.classList.remove("active");
  //     bar.forEach((n) => n.classList.remove("active"));
  //   }

  //   function openMenu() {
  //     headerMenu.classList.toggle("active");
  //     headerBg.classList.toggle("active");
  //     bar.forEach((n) => n.classList.toggle("active"));
  //   }
  // }, []);

  return (
    <nav className={style.background}>
      <div className={style.outer}>
        <Link href="/">
          <Image src="icon.svg" height={"64"} width={"64"} />
        </Link>
        <div className={style.menu}>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/works">Works</StyledLink>
          <StyledLink href="/hobbies">Hobbies</StyledLink>
          <Button small href="mailto:hilyafesmia@gmail.com">
            Contact Me
          </Button>
        </div>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
}
