import React from "react";
import ServiceIcon1 from "../../images/service-icon-1.svg";
import ServiceIcon2 from "../../images/service-icon-2.svg";
import ServiceIcon3 from "../../images/service-icon-3.svg";
import "./Service.scss";

interface CardProps {
  title: string;
  text: string;
  Icon: string;
}

const Service = (): JSX.Element => {
  return (
    <section className="section service" aria-label="service">
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle">What we Serve</p>
          <h2 className="h2 title section-title">Top Values For You</h2>
          <p className="section-text">
            Try a variety of Benefits when using our services.
          </p>
        </div>
        <ServiceCard
          title="Lot of Choices"
          text="Total 460+ destinations that we work with."
          Icon={ServiceIcon1}
        />
        <ServiceCard
          title="Best Tour Guide"
          text="Our tour guide with 15+ years of experience."
          Icon={ServiceIcon2}
        />
        <ServiceCard
          title="Easy Booking"
          text="With an easy and fast ticket purchase process."
          Icon={ServiceIcon3}
        />
      </div>
    </section>
  );
};

const ServiceCard = ({ title, text, Icon }: CardProps): JSX.Element => {
  return (
    <div className="service-card">
      <div className="card-icon">
        <img
          src={Icon}
          alt="service icon"
          width="60"
          height="60"
          loading="lazy"
        />
      </div>
      <h3 className="h3 title card-title">{title}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
};

export default Service;
