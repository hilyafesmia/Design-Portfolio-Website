import style from "../styles/highlightCard.module.css";
import Link from "next/link";
import card from "../styles/card.module.css";
import Image from "next/image";
import classNames from "classnames";

export default function HighlightCard({
  slug,
  img,
  duration,
  title,
  scope,
  desc,
}) {
  const scopes = scope.split(",");
  const imageClass = classNames(card.animateBorder, style.image);
  return (
    <Link className={style.container} href={slug}>
      <div className={imageClass}>
        <Image fill className={card.animateZoom} alt={title} src={`/${img}`} />
      </div>
      <div className={style.details}>
        <div className={style.heading}>
          <div className={card.tags}>
            {scopes.map((scope, index) => (
              <div key={title + "-" + index} className={card.chips}>
                {scope}
              </div>
            ))}
          </div>
          <h3>{title}</h3>
          <div className={card.duration}>{duration}</div>
        </div>
        <p>{desc}</p>
      </div>
    </Link>
  );
}
