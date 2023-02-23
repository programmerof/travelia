import React from "react";
import { MdOutlineChevronRight } from "react-icons/md";
import { BsPlayFill } from "react-icons/bs";
import HeroBg from "../../images/hero-bg.jpg";
import TitleIcon from "../../images/title-icon.svg";
import HeroBtn from "../../images/hero-button-img.jpg";
import HeroBanner from "../../images/hero-banner.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <article>
      <section
        className="section hero has-bg-image"
        aria-label="hero"
        style={{ backgroundImage: `url(${HeroBg})` }}
      >
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle">
              Explore the World
              <img src={TitleIcon} width={20} height={20} alt="world icon" />
            </p>

            <h1 className="h1 title hero-title">
              It’s a Big World Out There, Go Explore
            </h1>
            <p className="hero-text">
              We always make our customer happy by providing as many choices as
              possible
            </p>

            <div className="wrapper">
              <a href="/" className="btn btn-secondary">
                <span className="span">Plan a Trip</span>
                <MdOutlineChevronRight />
              </a>
              <button className="hero-btn">
                <div className="btn-img">
                  <img
                    src={HeroBtn}
                    alt="our story"
                    width={100}
                    className="img-cover"
                  />
                  <BsPlayFill className='icon-play' />
                </div>
                <p className="text">Watch our Story</p>
              </button>
            </div>
          </div>
          <figure className="hero-banner">
            <img src={HeroBanner} alt="hero banner" className='w-100' width='631' height='735' />
          </figure>
        </div>
      </section>
    </article>
  );
};

export default Hero;
