import Link from 'next/link';
import Image from 'next/image'

export default function HobbyCard({slug, img, title, type}) {
    return (
        <Link href={`/hobby/${slug}`}>
            <div className="card-item">
                <div className="animate-border hobby-border">
                    <Image 
                        width={1600}
                        height={900}
                        alt={title}
                        src={`/${img}`}
                    />
                </div>
                <hr/>
                <p>{type}</p>
                <h2>{title}</h2>
            </div>
          </Link>
    )
}