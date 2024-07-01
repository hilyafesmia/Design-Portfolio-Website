import style from "../styles/animateFadeIn.module.css";
import { useEffect, useRef, useState } from "react";

import classnames from "classnames";

export default function AnimateFadeIn({ children, delayInMilliseconds = 0 }) {
  const [isVisible, setIsVisible] = useState(false);

  const visibilityClass = classnames({
    [style.animateIn]: isVisible == true,
    [style.hide]: isVisible == false,
  });

  const setVisibility = (entries) => {
    const [entry] = entries;
    setTimeout(function () {
      setIsVisible(entry.isIntersecting);
    }, delayInMilliseconds);
  };

  const containerRef = useRef(null);

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setVisibility, options);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [containerRef, setVisibility]);

  return (
    <div className={visibilityClass} ref={containerRef}>
      {children}
    </div>
  );
}
