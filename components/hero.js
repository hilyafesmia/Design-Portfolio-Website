import Link from "next/link";
import style from "./hero.module.css";
import Marquee from "./marquee.js";
import { useEffect, useRef, useState } from "react";

import classnames from "classnames";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityClass = classnames({
    [style.animateIn]: isVisible == true,
    [style.hide]: isVisible == false,
  });

  const setVisibility = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setVisibility, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, options]);

  return (
    <div className={style.container} ref={containerRef}>
      <div className={classnames(style.margin, visibilityClass)}>
        <div className={style.tagline}>
          <h1>I make</h1>
          <Marquee text="mobile app ✶ desktop website ✶ " />
          <h1>that works</h1>
        </div>
        <p>A Product Designer who looks beyond just the interface.</p>
        <hr />
        <div className={style.cta}>
          <div className={style.action}>
            <p>See My Works</p>
            <iframe
              src="https://lottie.host/embed/a57508f4-16dd-4bdb-ab27-14915e46c881/R7nJRWpe0h.json"
              width="96px"
              height="96px"
            ></iframe>
          </div>
          <div className={style.action}>
            <button>LinkedIn</button>
            <button>Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
}
