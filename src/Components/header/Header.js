import React from "react";
import Button from "./Button";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <section className="header-section">
        <header>
          <Nav />
        </header>
        <div className="header-section__inner-header d-f fd-c ai-c jc-c">
          <h1>
            <span>A modern</span> publishing platform
          </h1>
          <p>
            Grow your audience and build your <span>online brand</span>
          </p>
          <ul>
            <Button
              title="Start for Free"
              bg_color="white"
              text_color="hsl(356, 100%, 66%)"
            />
            <Button
              className="learn"
              title="Learn More"
              bg_color="transparent"
            />
          </ul>
        </div>
      </section>
    </>
  );
};

export default Header;
