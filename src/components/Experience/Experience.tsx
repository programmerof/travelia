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
<p className="section-subtitle">Discover Nepal's Majestic Landscapes</p>

      <h2 className="h2 title section-title">
        Introducing Apex Adventures Trekking: The Best Trekking Company in Nepal
      </h2>

      <p className="section-text">
        With over 20 years of experience, Apex Adventures Trekking is a leading trekking company based in Kathmandu, Nepal. We take pride in offering unparalleled trekking experiences and prioritizing the satisfaction and convenience of our valued customers.
      </p>

      <ul className="experience-list">
        <ExperienceItem title="Experience" text1="20" text2="Years" />
        <ExperienceItem title="Destination Collaboration" text1="460+" text2="Destinations" />
        <ExperienceItem title="Happy Customers" text1="50k+" text2="Customers" />
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
{text1} {text2}
</p>
</li>
);
};

export default Experience;