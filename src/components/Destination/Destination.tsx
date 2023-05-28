import React from "react";

import { AiFillStar } from "react-icons/ai";

import Destination1 from "../../images/Destination/Destination-1.webp";
import Destination2 from "../../images/Destination/Destination-2.webp";
import Destination3 from "../../images/Destination/Destination-3.webp";

import "./Destination.scss";

interface DestinationCardProps {
  title: string;
  duration: string;
  difficulty: string;
  description: string;
  icon: string;
  address: string;
}

const Destination = () => {
  return (
    <section className="section destination" aria-label="destination">
      <div className="container">
        <p className="section-subtitle">Top destination</p>

        <h2 className="h2 title section-title">Explore Top Destination</h2>
        <ul className="destination-list">
          <DestinationCard
            title="Annapurna Base Camp Trek"
            duration="13 days"
            difficulty="Hard"
            description="Offers diverse landscapes and a chance to visit Annapurna Sanctuary."
            icon={Destination1}
            address="Pokhara, Kaski, Gandaki, 33700"
          />
          <DestinationCard
            title="Glorious Kathmandu"
            duration="8 days"
            difficulty="Hard"
            description="Explore the capital city of Nepal, visit Durbar Square, and admire temples and monuments."
            icon={Destination2}
            address="Kathmandu, Kathmandu, Bagmati, 44600"
          />
          <DestinationCard
            title="Everest Gokyo Lake Trek"
            duration="12 days"
            difficulty="Hard"
            description="Experience beautiful mountain views and visit Gokyo Lake and Gokyo Ri for incredible viewpoints over Everest."
            icon={Destination3}
            address="Lukla, Solukhumbu, Province 1, 56000"
          />
        </ul>

        <a href="/" className="btn btn-primary">View all Destination</a>
      </div>
    </section>
  );
};

interface ImgHolderVariables extends React.CSSProperties {
    '--width' : number
    '--height': number
}

const DestinationCard = ({
  title,
  duration,
  difficulty,
  description,
  icon,
  address,
}: DestinationCardProps) => {
  return (
    <li>
      <div className="destination-card">
        <div className="card-banner img-holder" style={{'--width': 600, '--height': 650} as ImgHolderVariables}>
          <img
            src={icon}
            alt="destination"
            width="600"
            height="650"
            className="img-cover"
            loading="lazy"
          />
        </div>

        <h3 className="h3 title">
          <a href="/" className="card-title">
            {title}
          </a>
        </h3>

        <address className="card-text">{address}</address>

        <div className="card-rating">
          <span className="span">
            <AiFillStar className="star" /> {difficulty}
          </span>
          <p className="rating-text">{duration}</p>
        </div>

        <p className="card-description">{description}</p>
      </div>
    </li>
  );
};

export default Destination;
