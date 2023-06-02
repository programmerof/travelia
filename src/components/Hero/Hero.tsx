import React from 'react';
import './Hero.scss';
import image from "../src/images/image.jpg";

const HomeSection = () => {
  return (
    <section className="home-section">
       <div className="home-section__image">
        <img src="https://www.muchbetteradventures.com/magazine/content/images/size/w2000/2018/05/08140741/download-3.jpeg" alt="Himalayas at sunrise" />
      </div>
      <div className="home-section__content">
        <h2 className="home-section__title">Welcome to Adventure Haven Nepal!</h2>
        <p className="home-section__description">
          Are you ready to experience the ultimate adventure amidst the majestic Himalayas? Adventure Haven Nepal
          invites you to discover the untamed beauty of Nepal through thrilling treks, heart-pounding expeditions,
          and unforgettable cultural encounters. We are passionate about providing you with the most exhilarating and
          authentic adventure experiences in the land of the highest peaks on Earth.
        </p>
        <div className="home-section__cta">
          <button className="home-section__cta-button">Contact Us</button>
        </div>
        <div className="home-section__cta">
          <button className="home-section__cta-button bg-red-500">Get a Trip Guide</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
