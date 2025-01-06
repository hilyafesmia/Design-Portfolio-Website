import Image from "next/image";
import Marquee from "../components/marquee";
import StyledLink from "../components/styledLink";
import style from "../styles/about.module.css";
import work from "../styles/work.module.css";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Hilya</title>
      </Head>
      <div className={work.container}>
        <h1>
          <Marquee text="about me ✶ about me ✶ about me ✶ about me ✶ about me ✶ about me ✶ " />
        </h1>
        <div className={style.container}>
          <div className={style.left}>
            <h2>Short Bio</h2>
            <Image
              alt="Hilya's profile picture"
              src={"/images/profile-picture.jpg"}
              width={343}
              height={343}
            />
          </div>
          <div className={style.right}>
            <p>
              Hello, world!
              <br /> <br />
              I&#39;m Hilya, a digital product designer with a background in
              computer science. I like connecting with people, and I&#39;m also
              into visual art. I think digital product design is my sweet spot
              as I can incorporate those two things I like and the knowledge I
              got from university; helping people solve their problems using a
              digital approach.
              <br /> <br />
              <span>
                I&#39;m a designer 💫 during the daytime and a(n) [ artist 🎨 /
                engineer 💻 / gamer 🎮, depending on mood ] during nighttime.
                Please check <StyledLink href="/works">Works</StyledLink> for my
                design-related works or{" "}
                <StyledLink href="/hobbies">Hobbies</StyledLink> for other
                exciting things I do.
              </span>
              <br /> <br />I hold a BSc degree in Computer Science from
              Universitas Indonesia. I managed to land several internships
              during my uni days as a UI/UX designer and a front-end web
              developer. I live in Jakarta, Indonesia, but I would love to
              travel the world 🌍 if I get the opportunity.
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
                “Hilya is one of the rare designers who can create quality
                design concepts within a short time. She is willing to learn how
                to improve her work to suit users&#39; needs better, making her
                an open-minded person who is keen on collaborating with people
                from varying backgrounds. What I like the most when working with
                her are her great questions! She is curious not only to hone her
                UI skills but also hungry to know more about stakeholders
                management, learning the experiments through data, and how to
                create a product-solution fit.“
              </i>

              <div className={style.profile}>
                <Image
                  className={style.reviewer}
                  alt="Irsyadila's profile picture"
                  src={"/images/irsyadila.jpeg"}
                  width={64}
                  height={64}
                />
                <div>
                  <h4>Irsyadila Chuelita</h4>
                  <p>Irsya managed me directly</p>
                </div>
              </div>
            </div>
            <div className={style.review}>
              <i>
                “Hilya gave me a lot of surprises during our time working
                together. Start from her detailed question regarding every
                project she was assigned, her willingness to learn more about
                data and research, her fun character, the way she always crave
                for feedbacks, to her ability to create a hifi prototype in a
                short time. All of those things helped me, a Product Manager, a
                lot and made me feel confident about every project we were
                working on. I definitely recommend Hilya to anyone who is
                looking for a product designer.“
              </i>

              <div className={style.profile}>
                <Image
                  className={style.reviewer}
                  alt="Ajie's profile picture"
                  src={"/images/ajie.jpeg"}
                  width={64}
                  height={64}
                />
                <div>
                  <h4>Ajie Fachrizal</h4>
                  <p>Ajie worked with me as a Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
