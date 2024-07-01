import style from "../styles/hero.module.css";
import Marquee from "./marquee.js";

import AnimateFadeIn from "./animateFadeIn.js";
import SectionContainer from "./sectionContainer.js";
import Button from "./button.js";

export default function Hero() {
  return (
    <SectionContainer position="top">
      <div className={style.margin}>
        <div className={style.tagline}>
          <AnimateFadeIn>
            <h1>I make</h1>
          </AnimateFadeIn>
          <AnimateFadeIn delayInMilliseconds={100}>
            <Marquee text="mobile app ✶ desktop website ✶ " />
          </AnimateFadeIn>
          <AnimateFadeIn delayInMilliseconds={200}>
            <h1>that works</h1>
          </AnimateFadeIn>
        </div>

        <AnimateFadeIn delayInMilliseconds={300}>
          <h5>A Product Designer who looks beyond just the interface.</h5>
        </AnimateFadeIn>
        <AnimateFadeIn delayInMilliseconds={400}>
          <hr />
        </AnimateFadeIn>
        <AnimateFadeIn delayInMilliseconds={500}>
          <div className={style.cta}>
            <div className={style.spacingArrow}>
              <h5>See My Works</h5>
              <iframe
                src="https://lottie.host/embed/a57508f4-16dd-4bdb-ab27-14915e46c881/R7nJRWpe0h.json"
                width="64px"
                height="64px"
              ></iframe>
            </div>
            <div className={style.action}>
              <Button href="https://www.linkedin.com/in/hilyafesmia/">
                LinkedIn
              </Button>
              <Button href="/Resume-Hilya-Auli-Fesmia-2024.pdf">Resume</Button>
            </div>
          </div>
        </AnimateFadeIn>
      </div>
    </SectionContainer>
  );
}
