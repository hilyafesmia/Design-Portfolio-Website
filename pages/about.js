import Link from 'next/link';

export default function AboutPage() {
    return (
        <>
        <div className="margin-web">
            <div className="img aboutus height">
            </div>
            <div className="aboutus">
                <h2>About Me</h2>
                <p>Hello, world!</p>
                <br/>
                <p>My name is Hilya Auli Fesmia, you can call me Hilya. I’m a computer science graduate from Universitas Indonesia.</p>
                <br/>
                <p>I am often the listener in a group of friends. Spend most of my time listening and proving aids to those who ask, I seek for new experience; I want to help even many more people.</p>
                <br/>
                <p>I have always been interested in art and design. I realize that by learning UI/UX, I can both help people by listening to their needs and training myself to be more creative. Hence, during my study in university, I focused myself in UI/UX design.</p>
                <br/>
                <h3>Get in touch</h3>
                <Link href="/">hilyafesmia@gmail.com</Link>
                <br/>
                <Link href="/">+62 (0)812-9669-7907</Link>
                <br/>
                <Link href="https://www.linkedin.com/in/hilyafesmia/">Hilya Auli Fesmia</Link>
            </div>
            <div className="">
            </div>
        </div>
        </>
    )
}