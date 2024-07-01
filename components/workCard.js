import Link from "next/link";
import Image from "next/image";
import style from "../styles/workCard.module.css";

export default function WorkCard({ slug, img, duration, title, scope }) {
  const scopes = scope.split(",");

  return (
    <Link className={style.container} href={slug}>
      <div className={style.animateBorder}>
        <Image className={style.animateZoom} alt={title} fill src={`/${img}`} />
      </div>
      <div className={style.details}>
        <div className={style.top}>
          <div className={style.tags}>
            {scopes.map((scope, index) => (
              <div key={title + "-" + index} className={style.chips}>
                {scope}
              </div>
            ))}
          </div>
          <div className={style.duration}>{duration}</div>
        </div>
        <h3>{title}</h3>
      </div>
    </Link>
  );
}
