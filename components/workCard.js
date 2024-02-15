import Link from "next/link";
import Image from "next/image";

export default function WorkCard({ slug, img, duration, title, scope }) {
  return (
    <Link className="card-item" href={`/work/${slug}`}>
      <div className="animate-border">
        <Image fill alt={title} src={`/${img}`} />
      </div>
      <hr />
      <div className="scope-duration">
        <p>{scope}</p>
        <p>{duration}</p>
      </div>
      <h2>{title}</h2>
    </Link>
  );
}
