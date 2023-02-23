import CTABg from "../../images/cta-bg.jpg";
import TitleIcon from "../../images/title-icon.svg";

import "./CTA.scss";

const CTA = () => {
  return (
    <section className="section cta" aria-label="call to action">
      <div className="container">
        <div
          className="cta-card has-bg-image"
          style={{ backgroundImage: `url(${CTABg})` }}
        >
          <h2 className="h2 title section-title">
            Prepare Yourself & Let’s Explore The Beauty Of The World
            <img
              src={TitleIcon}
              alt="title icon"
              width="36"
              height="36"
              loading="lazy"
              className="img"
            />
          </h2>

          <p className="section-text">
            We have many special offers especially for you.
          </p>

          <a href="/" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
