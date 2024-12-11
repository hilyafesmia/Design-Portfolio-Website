import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import style from "../styles/header.module.css";
import Button from "./button";
import StyledLink from "./styledLink";

export default function Header() {
  const [isMobileMode, setMobileMode] = useState(false);
  const [width] = useWindowSize();
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (width < 900) {
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }, [width]);

  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const menuStyle = classNames(style.blockedMenu, {
    [style.invisible]: !isMenuOpen,
    [style.visible]: isMenuOpen,
  });

  const left = classNames(style.lines, {
    "": !isMenuOpen,
    [style.lineLeft]: isMenuOpen,
  });

  const right = classNames(style.lines, {
    "": !isMenuOpen,
    [style.lineRight]: isMenuOpen,
  });

  return !isMobileMode ? (
    <nav className={style.background}>
      <div className={style.outer}>
        <Link href="/">
          <Image
            alt="Hilya Auli Fesmia"
            src="/icon.svg"
            height={"64"}
            width={"64"}
          />
        </Link>
        <div className={style.menu}>
          <StyledLink href="/">Home</StyledLink>
          <StyledLink href="/about">About</StyledLink>
          <StyledLink href="/works">Works</StyledLink>
          <StyledLink href="/hobbies">Hobbies</StyledLink>
          <Button small href="/Resume-Hilya-Auli-Fesmia-2024.pdf">
            See Resume
          </Button>
        </div>
      </div>
    </nav>
  ) : (
    <nav className={style.background}>
      <div className={style.header}>
        <Image
          alt="Hilya Auli Fesmia"
          src="/icon.svg"
          height={"64"}
          width={"64"}
        />
        <div className={style.hamburger} onClick={openMenu}>
          <div className={left} />
          <div className={right} />
        </div>
      </div>
      <div className={menuStyle}>
        <div className={style.menuList}>
          <Link className={style.logo} href="/">
            <Image
              alt="Hilya Auli Fesmia"
              src="/icon-inverted.svg"
              height={"64"}
              width={"64"}
            />
          </Link>
          <Link href="/" onClick={closeMenu}>
            <h2>Home</h2>
          </Link>
          <Link href="/about" onClick={closeMenu}>
            <h2>About</h2>
          </Link>
          <Link href="/works" onClick={closeMenu}>
            <h2>Works</h2>
          </Link>
          <Link href="/hobbies" onClick={closeMenu}>
            <h2>Hobbies</h2>
          </Link>
        </div>

        <Button inverted href="/Resume-Hilya-Auli-Fesmia-2024.pdf">
          See Resume
        </Button>
      </div>
    </nav>
  );
}
