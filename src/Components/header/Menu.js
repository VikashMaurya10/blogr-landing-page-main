import React from "react";
import { FaChevronDown } from "react-icons/fa";

const navLinks = [
  {
    id: "first",
    title: "Product",
    linkes: [
      { link: "Overview" },
      { link: "Pricing" },
      { link: "Marketplace" },
      { link: "Features" },
      { link: "Integrations" },
    ],
  },
  {
    id: "second",
    title: "Company",
    linkes: [
      { link: "About" },
      { link: "Team" },
      { link: "Blog" },
      { link: "Careers" },
    ],
  },
  {
    id: "third",
    title: "Connect",
    linkes: [{ link: "Contact" }, { link: "Newsletter" }, { link: "LinkedIn" }],
  },
];

const showLinks = (name) => {
  $(`#${name}`).addClass("showLink");
  $(`.${name}`).addClass("rotateArrow");
};
const hideLinks = (name) => {
  $(`#${name}`).removeClass("showLink");
  $(`.${name}`).removeClass("rotateArrow");
};

const menu = () => {
  return (
    <>
      {navLinks.map((items, index) => (
        <div className="menu" key={index}>
          <button
            className="title"
            onMouseOver={() => {
              showLinks(items.id);
            }}
            onMouseLeave={() => {
              hideLinks(items.id);
            }}
          >
            {items.title}
            <FaChevronDown
              className={items.id}
              style={{ marginLeft: "0.375rem", fontSize: "0.65rem" }}
            />
          </button>
          <div
            className="link b-r"
            onMouseOver={() => {
              showLinks(items.id);
            }}
            onMouseLeave={() => {
              hideLinks(items.id);
            }}
            id={items.id}
          >
            {items.linkes.map((item, index) => (
              <li key={index}>
                <a>{item.link}</a>
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default menu;
