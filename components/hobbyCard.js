import Link from "next/link";
import Image from "next/image";

export default function HobbyCard({ slug, img, title, type }) {
  return (
    <Link className="card-item" href={`/hobby/${slug}`}>
      <div className="animate-border hobby-border">
        <Image fill alt={title} src={`/${img}`} />
      </div>
      <hr />
      <p>{type}</p>
      <h2>{title}</h2>
    </Link>
  );
}
