import React from "react";

import { AiFillStar } from "react-icons/ai";

import Destination1 from "../../images/destination-1.jpg";
import Destination2 from "../../images/destination-2.jpg";
import Destination3 from "../../images/destination-3.jpg";
import Destination4 from "../../images/destination-4.jpg";
import Destination5 from "../../images/destination-5.jpg";
import Destination6 from "../../images/destination-6.jpg";

import "./Destination.scss";

interface DestinationCardProps {
  title: string;
  icon: string;
  address: string;
  price: number;
  rating: number;
  review: string;
}

const Destination = () => {
  return (
    <section className="section destination" aria-label="destination">
      <div className="container">
        <p className="section-subtitle">Top destination</p>

        <h2 className="h2 title section-title">Explore Top Destination</h2>
        <ul className="destination-list">
          <DestinationCard
            title="Enjoy the Beauty of the del Pincio"
            icon={Destination1}
            price={340}
            address="Rome, Italy"
            rating={4.7}
            review="11.1k"
          />
          <DestinationCard
            title="Enjoy the Beauty of the Pakistan Monument"
            icon={Destination2}
            price={340}
            address="Islamabad, Pakistan"
            rating={4.6}
            review="16.9k"
          />
          <DestinationCard
            title="Enjoy the Beauty of the Burj Khalifa"
            icon={Destination3}
            price={340}
            address="Skyscraper in Dubia"
            rating={4.7}
            review="120k"
          />
          <DestinationCard
            title="Enjoy the Beauty of the Milaidhoo"
            icon={Destination4}
            price={340}
            address="Island in Maldives"
            rating={4.7}
            review="70"
          />
          <DestinationCard
            title="Enjoy the Beauty of the Ko Tao"
            icon={Destination5}
            price={340}
            address="Island in theGulf of Thailand"
            rating={4.5}
            review="985"
          />
          <DestinationCard
            title="Enjoy the Beauty of the Grand Mecidiye Mosque"
            icon={Destination6}
            price={340}
            address="Mosque in Istanbul, Turkiye"
            rating={4.8}
            review="29.6k"
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
  icon,
  price,
  address,
  rating,
  review,
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
          <span className="card-price">${price}</span>
        </div>

        <h3 className="h3 title">
          <a href="/" className="card-title">
            {title}
          </a>
        </h3>

        <address className="card-text">{address}</address>

        <div className="card-rating">
          <span className="span">
            <AiFillStar className="star" /> {rating}
          </span>
          <p className="rating-text">({review} Review)</p>
        </div>
      </div>
    </li>
  );
};

export default Destination;
