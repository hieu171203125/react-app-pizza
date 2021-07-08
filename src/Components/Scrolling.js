import React, { useRef } from "react";
import "../Assets/scrolling.css";
import bg from "../Assets/bg.png";
import palace from "../Assets/palace.png";
import pyramids from "../Assets/pyramids.png";
import { dropRight } from "lodash";
function Scrolling() {
  const left = useRef();
  const right = useRef();
  const logo = useRef();
  const nav = useRef();
  const info = useRef();
  window.addEventListener("load", () => {
    if (left.current) {
      left.current.style.transform = "translateX(0px)";
    }
    if (right.current) {
      right.current.style.transform = "translateX(0px)";
    }
    if (logo.current) {
      logo.current.style.transform = "translateY(0px)";
    }
    if (nav.current) {
      nav.current.style.transform = "translateY(0px)";
    }
    setTimeout(() => {
      if (info.current) {
        info.current.style.transform = "translateY(0px)";
        info.current.style.opacity = "1.0";
      }
    }, 500);
  });
  return (
    <div>
      <header className="header">
        <a href="#" className="logo" ref={logo}>
          Hieu
        </a>
        <nav ref={nav}>
          <a href="#" className="item-menu">
            Home
          </a>
          <a href="#" className="item-menu">
            Home
          </a>
          <a href="#" className="item-menu">
            Home
          </a>
          <a href="#" className="item-menu">
            Home
          </a>
          <a href="#" className="item-menu">
            Home
          </a>
        </nav>
      </header>
      <section className="home">
        <img src={bg} />
        <img src={pyramids} className="pyramids" ref={left} />
        <img src={palace} className="palace" ref={right} />
        <div className="info" ref={info}>
          <h2 className="title">Hieu</h2>
          <p className="p">
            {" "}
            Pls subscribe for more DIY projects and Gaming Room Setup Pls
            subscribe for more DIY projects and Gaming Room Setup Pls subscribe
            for more DIY projects and Gaming Room Setup Pls subscribe for more
            DIY projects and Gaming Room Setup
          </p>
          <a href="#" className="btn">
            {" "}
            Read More ...{" "}
          </a>
        </div>
      </section>
      <section className="content">
        <h2>Pyramids</h2>
        <p>
          Pls subscribe for more DIY projects and Gaming Room Setup Pls
          subscribe for more DIY projects and Gaming Room Setup Pls subscribe
          for more DIY projects and Gaming Room Setup Pls subscribe for more DIY
          projects and Gaming Room Setup
        </p>
        <br />
        <p>
          Pls subscribe for more DIY projects and Gaming Room Setup Pls
          subscribe for more DIY projects and Gaming Room Setup Pls subscribe
          for more DIY projects and Gaming Room Setup Pls subscribe for more DIY
          projects and Gaming Room Setup
        </p>
        <br />
        <p>
          Pls subscribe for more DIY projects and Gaming Room Setup Pls
          subscribe for more DIY projects and Gaming Room Setup Pls subscribe
          for more DIY projects and Gaming Room Setup Pls subscribe for more DIY
          projects and Gaming Room Setup
        </p>
        <br />
        <p>
          Pls subscribe for more DIY projects and Gaming Room Setup Pls
          subscribe for more DIY projects and Gaming Room Setup Pls subscribe
          for more DIY projects and Gaming Room Setup Pls subscribe for more DIY
          projects and Gaming Room Setup
        </p>
        <br />
      </section>
    </div>
  );
}

export default Scrolling;
