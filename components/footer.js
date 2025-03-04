import Image from "next/image";
import Link from "next/link";
import style from "../styles/footer.module.css";
import hero from "../styles/hero.module.css";
import AnimateFadeIn from "./animateFadeIn";
import StyledLink from "./styledLink";

export default function Footer() {
  return (
    <div className={style.backgroundColor}>
      <div className={hero.margin}>
        <AnimateFadeIn>
          <h1>
            Hire a Versatile Designer <br /> For Your Team
          </h1>
        </AnimateFadeIn>
        <AnimateFadeIn>
          <div className={style.contact}>
            <Link
              inverted
              className={style.link}
              href="mailto:hilyafesmia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="email"
                src="/icons/Email.svg"
                width="28"
                height="28"
              />
              <h5>hilyafesmia@gmail.com</h5>
            </Link>
            <Link
              className={style.link}
              href="https://wa.me/6285163501230"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="WhatsApp"
                src="/icons/WhatsApp.svg"
                width="28"
                height="28"
              />
              <h5>(+62) 851-6350-1230</h5>
            </Link>
            <Link
              className={style.link}
              href="https://www.linkedin.com/in/hilyafesmia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="LinkedIn"
                src="/icons/LinkedIn.svg"
                width="28"
                height="28"
              />
              <h5>Hilya Auli Fesmia</h5>
            </Link>
            <Link
              className={style.link}
              href="/Resume-Hilya-Auli-Fesmia-2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                alt="Resume"
                src="/icons/Resume.svg"
                width="28"
                height="28"
              />
              <h5>Resume</h5>
            </Link>
          </div>
        </AnimateFadeIn>
        <AnimateFadeIn>
          <StyledLink
            inverted
            href="https://github.com/hilyafesmia/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ textAlign: "center" }}>
              Made with love, blood, and tears. (quite literally)
            </p>
          </StyledLink>
        </AnimateFadeIn>
      </div>
    </div>
  );
}
