import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="margin-web">
      <div className="about-intro">
        <Image src="/images/profile-picture.jpg" width="400" height="400" />
      </div>
      <div className="about-us">
        <h1>About Me</h1>
        <br />
        <p>Hello, world!</p>
        <br />
        <p>
          I&#39;m Hilya, a digital product designer with a background in
          computer science. I like connecting with people, and I&#39;m also into
          visual art. I think digital product design is my sweet spot as I can
          incorporate those two things I like and the knowledge I got from
          university; helping people solve their problems using a digital
          approach.
        </p>
        <br />
        <p>
          I&#39;m a designer 💫 during the daytime and a(n) [ artist 🎨 /
          engineer 💻 / couch potato 📺, depending on mood ] during nighttime.
          Please check
          <Link href="/works" className="link-limiter">
            Works
          </Link>
          for my design-related works or
          <Link href="/hobbies" className="link-limiter">
            Hobbies
          </Link>
          for other exciting things I made.
        </p>
        <br />
        <p>
          I hold a BSc degree in Computer Science from Universitas Indonesia. I
          managed to land several internships during my uni days as a UI/UX
          designer and a front-end web developer. I live in Jakarta, Indonesia,
          but I would love to travel the world 🌍 if I get the opportunity.
        </p>
        <br />
        <p>
          Also, you can check my resume
          <Link href="/Resume-Hilya-Auli-Fesmia-2023.pdf">here!</Link>{" "}
          (don&#39;t worry, this won&#39;t auto-download🤞🏼)
        </p>
        <br />
        <div className="contact-us">
          <h3>Get in touch</h3>
          <Link href="mailto:hilyafesmia@gmail.com">hilyafesmia@gmail.com</Link>
          <Link href="https://wa.me/6281296697907">+62 812-9669-7907</Link>
          <Link href="https://www.linkedin.com/in/hilyafesmia/">LinkedIn</Link>
        </div>
      </div>
    </div>
  );
}
