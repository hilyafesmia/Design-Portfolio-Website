import Image from "next/image";
import work from "../styles/work.module.css";
import Marquee from "../components/marquee";
import StyledLink from "../components/styledLink";
import style from "../styles/about.module.css";

export default function AboutPage() {
  return (
    <div className={work.container}>
      <h1>
        <Marquee text="about me ✶ about me ✶ about me ✶ about me ✶ " />
      </h1>
      <div className={style.container}>
        <div className={style.left}>
          <h2>Short Bio</h2>
          <Image src={"/images/profile-picture.jpg"} width={343} height={343} />
        </div>
        <div className={style.right}>
          <p>
            Hello, world!
            <br /> <br />
            I&#39;m Hilya, a digital product designer with a background in
            computer science. I like connecting with people, and I&#39;m also
            into visual art. I think digital product design is my sweet spot as
            I can incorporate those two things I like and the knowledge I got
            from university; helping people solve their problems using a digital
            approach.
            <br /> <br />
            <span>
              I&#39;m a designer 💫 during the daytime and a(n) [ artist 🎨 /
              engineer 💻 / gamer 📺, depending on mood ] during nighttime.
              Please check <StyledLink href="/works">Works</StyledLink> for my
              design-related works or{" "}
              <StyledLink href="/hobbies">Hobbies</StyledLink> for other
              exciting things I do.
            </span>
            <br /> <br />I hold a BSc degree in Computer Science from
            Universitas Indonesia. I managed to land several internships during
            my uni days as a UI/UX designer and a front-end web developer. I
            live in Jakarta, Indonesia, but I would love to travel the world 🌍
            if I get the opportunity.
          </p>
        </div>
      </div>
      <hr />
      <div className={style.container}>
        <div className={style.left}>
          <h2>Reviews</h2>
        </div>
        <div className={style.right}>
          <div className={style.review}>
            <i>
              “Hilya is one of the rare designers who can create quality design
              concepts within a short time. She is willing to learn how to
              improve her work to suit users' needs better, making her an
              open-minded person who is keen on collaborating with people from
              varying backgrounds. What I like the most when working with her
              are her great questions! She is curious not only to hone her UI
              skills but also hungry to know more about stakeholders management,
              learning the experiments through data, and how to create a
              product-solution fit.“
            </i>

            <div className={style.profile}>
              <Image
                src={"/images/profile-picture.jpg"}
                width={64}
                height={64}
              />
              <div>
                <h4>Irsyadila Chuelita</h4>
                <p>Irsya managed me directly at Justika</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="margin-web">
    //   <div className="about-intro">
    //     <Image src="/images/profile-picture.jpg" width="400" height="400" />
    //   </div>
    //   <div className="about-us">
    //     <h1>About Me</h1>
    //     <br />
    //     <p>Hello, world!</p>
    //     <br />
    //     <p>
    //       I&#39;m Hilya, a digital product designer with a background in
    //       computer science. I like connecting with people, and I&#39;m also into
    //       visual art. I think digital product design is my sweet spot as I can
    //       incorporate those two things I like and the knowledge I got from
    //       university; helping people solve their problems using a digital
    //       approach.
    //     </p>
    //     <br />
    //     <p>
    //       I&#39;m a designer 💫 during the daytime and a(n) [ artist 🎨 /
    //       engineer 💻 / gamer 📺, depending on mood ] during nighttime.
    //       Please check
    //       <Link href="/works">Works</Link>
    //       for my design-related works or
    //       <Link href="/hobbies">Hobbies</Link>
    //       for other exciting things I made.
    //     </p>
    //     <br />
    //     <p>
    //       I hold a BSc degree in Computer Science from Universitas Indonesia. I
    //       managed to land several internships during my uni days as a UI/UX
    //       designer and a front-end web developer. I live in Jakarta, Indonesia,
    //       but I would love to travel the world 🌍 if I get the opportunity.
    //     </p>
    //     <br />
    //     <p>
    //       Also, you can check my resume
    //       <Link
    //         href="/Resume-Hilya-Auli-Fesmia-2023.pdf"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         here!
    //       </Link>{" "}
    //       (don&#39;t worry, this won&#39;t auto-download🤞🏼)
    //     </p>
    //     <br />
    //     <div className="contact-us">
    //       <h3>Get in touch</h3>
    //       <Link
    //         href="mailto:hilyafesmia@gmail.com"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         hilyafesmia@gmail.com
    //       </Link>
    //       <Link
    //         href="https://wa.me/6285163501230"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         +62 851-6350-1230
    //       </Link>
    //       <Link
    //         href="https://www.linkedin.com/in/hilyafesmia/"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         linkedin.com/in/hilyafesmia
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
