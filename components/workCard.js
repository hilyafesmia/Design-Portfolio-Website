import Link from 'next/link';
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function WorkCard({slug, img, duration, title, scope}) {
    return (
        <Link href={`/work/${slug}`}>
            <div className="card-item">
                <Image 
                    width={800}
                    height={600}
                    alt={title}
                    src={`/${img}`}
                />
                <hr/>
                <div className="scope-duration">
                    <p>{scope}</p>
                    <p>{duration}</p>
                </div>
                <h3>{title}</h3>
            </div>
          </Link>
    )
}