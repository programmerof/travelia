import React from "react";
import ExperienceBanner from "../../images/experience-banner.png";
import ExperienceShape from "../../images/exp-shape.svg";
import "./Experience.scss";

interface ExperienceItemProp {
  title: string;
  text1: string;
  text2: string;
}

const Experience = (): JSX.Element => {
  return (
    <section className="section experience" aria-label="experience">
      <div className="container">
        <div className="experience-content">
          <p className="section-subtitle">Our Experience</p>

          <h2 className="h2 title section-title">
            With Our Experience We Will Serve You
          </h2>

          <p className="section-text">
            Since we first opened we have always prioritized the convenience of
            our users by providing low prices and with a easy process.
          </p>

          <ul className="experience-list">
            <ExperienceItem title="20" text1="Years" text2="Experience" />
            <ExperienceItem
              title="460+"
              text1="Destination"
              text2="Collaboration"
            />
            <ExperienceItem title="50k+" text1="Happy" text2="Customer" />
          </ul>
        </div>

        <figure className="experience-banner">
          <img
            src={ExperienceBanner}
            alt="experience banner"
            className="w-100"
            width="550"
            height="660"
            loading="lazy"
          />
          <img
            src={ExperienceShape}
            alt="24/7 Guide Support"
            className="experience-shape"
            width="75"
            height="109"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
};

const ExperienceItem = ({
  title,
  text1,
  text2,
}: ExperienceItemProp): JSX.Element => {
  return (
    <li className="experience-item">
      <h3 className="h3 title item-title">{title}</h3>
      <p className="item-text">
        {text1} <br /> {text2}
      </p>
    </li>
  );
};

export default Experience;
