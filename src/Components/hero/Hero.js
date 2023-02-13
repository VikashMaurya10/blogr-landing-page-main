import React from "react";
import dIllustion from "../../images/illustration-editor-desktop.svg";
import mIllustion from "../../images/illustration-editor-mobile.svg";
const Hero = () => {
  return (
    <>
      <section className="hero-section d-f ai-c fd-c  b">
        <h1>Designed for the future</h1>
        <div className="hero-section__inner d-f ai-c">
          <div className="hero-section__inner__content">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
          <picture>
            <source media="(min-width: 990px)" srcSet={dIllustion} />
            <img src={mIllustion} alt="Flowers" />
          </picture>
        </div>
      </section>
    </>
  );
};

export default Hero;
