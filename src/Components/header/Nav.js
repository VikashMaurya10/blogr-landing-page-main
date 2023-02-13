import React from "react";
import logo from "../../images/logo.svg";
import ham from "../../images/icon-hamburger.svg";
import close from "../../images/icon-close.svg";
import Button from "./Button";
import Menu from "./Menu";
const showMenu = () => {
  $(".Menu").toggleClass("navshow");
  $(".ctaBtn").toggleClass("navshow");
  $(".ul").toggleClass("navshowUl");
  $(".close").toggleClass("showClose");
  $(".hamBurger").toggleClass("hideHam");
};

const Nav = () => {
  return (
    <>
      <nav className="d-f jc-sb">
        <img src={logo} alt="Blogr-logo" />
        <ul className="ul d-f ai-c jc-sb">
          <div className="Menu d-f ai-c jc-c">
            <Menu />
            <hr className="b-r" />
          </div>
          <ul className="ctaBtn">
            <Button title="Login" bg_color="transparent" />
            <Button
              title="Sign Up"
              bg_color="white"
              text_color="hsl(356, 100%, 66%)"
            />
          </ul>
        </ul>
        <button className="ham" onClick={showMenu}>
          <img className="hamBurger" src={ham} alt="icon-ham" />
          <img className="close" src={close} alt="icon-close" />
        </button>
      </nav>
    </>
  );
};

export default Nav;
