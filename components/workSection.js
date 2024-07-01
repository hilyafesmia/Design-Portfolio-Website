import SectionContainer from "./sectionContainer";
import style from "../styles/workSection.module.css";
import hero from "../styles/hero.module.css";
import Card from "./Card";
import HighlightCard from "./highlightCard";
import AnimateFadeIn from "./animateFadeIn";
import Button from "./button";

export default function WorkSection({ posts }) {
  const totalPost = posts.length;
  const latestPost = posts[totalPost - 1];
  return (
    <SectionContainer position="middle">
      <div className={hero.margin}>
        <AnimateFadeIn>
          <div className={style.row}>
            <div className={style.title}>
              <h2>Works</h2>
              <div className={style.counter}>{totalPost}</div>
            </div>
            <Button href={"/works"}>See All</Button>
          </div>
        </AnimateFadeIn>

        <AnimateFadeIn>
          <HighlightCard
            key={0}
            slug={latestPost.slug}
            img={latestPost.frontmatter.previewImg}
            duration={latestPost.frontmatter.duration}
            scope={latestPost.frontmatter.scope}
            title={latestPost.frontmatter.title}
            desc={latestPost.frontmatter.desc}
          />
        </AnimateFadeIn>
        <hr />
        <AnimateFadeIn>
          <div className={style.catalog}>
            {posts
              .slice(0, totalPost - 1)
              .reverse()
              .map(({ slug, frontmatter }, index) => {
                return (
                  <Card
                    key={index}
                    slug={slug}
                    img={frontmatter.previewImg}
                    duration={frontmatter.duration}
                    scope={frontmatter.scope}
                    title={frontmatter.title}
                  />
                );
              })}
          </div>
        </AnimateFadeIn>
      </div>
    </SectionContainer>
  );
}
