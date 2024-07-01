import SectionContainer from "./sectionContainer";
import style from "../styles/works.module.css";
import hero from "../styles/hero.module.css";
import HighlightCard from "./highlightCard";
import AnimateFadeIn from "./animateFadeIn";
import Button from "./button";

export default function Hobbies({ posts }) {
  const totalPost = posts.length;
  const latestPost = posts[totalPost - 1];
  return (
    <SectionContainer style={{ height: "fit-content" }} position="bottom">
      <div className={hero.margin}>
        <AnimateFadeIn>
          <div className={style.row}>
            <div className={style.title}>
              <h2>Hobbies</h2>
              <div className={style.counter}>{totalPost}</div>
            </div>
            <Button href={"/hobbies"}>See All</Button>
          </div>
        </AnimateFadeIn>

        <AnimateFadeIn>
          <HighlightCard
            key={0}
            slug={latestPost.slug}
            img={latestPost.frontmatter.previewImg}
            scope={latestPost.frontmatter.type}
            title={latestPost.frontmatter.title}
            desc={latestPost.frontmatter.desc}
          />
        </AnimateFadeIn>
      </div>
    </SectionContainer>
  );
}
