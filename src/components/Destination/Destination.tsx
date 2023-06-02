import React from "react";

import { AiFillStar } from "react-icons/ai";

import Destination1 from "../../images/Destination/Destination-1.webp";
import Destination2 from "../../images/Destination/Destination-2.webp";
import Destination3 from "../../images/Destination/Destination-3.webp";
import Destination4 from "../../images/Destination/Destination-4.webp";
import Destination5 from "../../images/Destination/Destination-5.webp";
import Destination6 from "../../images/Destination/Destination-6.webp";
import Destination7 from "../../images/Destination/Destination-7.webp";
import Destination8 from "../../images/Destination/Destination-8.jpeg";
import Destination9 from "../../images/Destination/Destination-9.webp";
import Destination10 from "../../images/Destination/Destination-10.webp";
import Destination11 from "../../images/Destination/Destination-11.webp";
import Destination12 from "../../images/Destination/Destination-12.webp";
import Destination13 from "../../images/Destination/Destination-13.webp";
import Destination14 from "../../images/Destination/Destination-14.webp";
import Destination15 from "../../images/Destination/Destination-15.webp";



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
          {/* <DestinationCard
            title="Glorious Kathmandu"
            duration="8 days"
            difficulty="Hard"
            description="Explore the capital city of Nepal, visit Durbar Square, and admire temples and monuments."
            icon={Destination2}
            address="Kathmandu, Kathmandu, Bagmati, 44600"
          /> */}
          <DestinationCard
            title="Everest Gokyo Lake Trek"
            duration="12 days"
            difficulty="Hard"
            description="Experience beautiful mountain views and visit Gokyo Lake and Gokyo Ri for incredible viewpoints over Everest."
            icon={Destination3}
            address="Lukla, Solukhumbu, Province 1, 56000"
          />
          <DestinationCard
            title="Ghorepani - Poon Hill Trek"
            duration="9 days"
            difficulty="Hard"
            description="Trek through rhododendron forests, mountain villages, and enjoy stunning views of Fishtail Mountain, Annapurna, and Dhaulagiri."
            icon={Destination4}
            address="Ghorepani, Myagdi, Gandaki, 33200"
          />
          <DestinationCard
            title="Sherpa Village Trek"
            duration="9 days"
            difficulty="Hard"
            description="Immerse yourself in Sherpa culture, admire rice fields, and high peaks of the Himalayas in the Khumbu region."
            icon={Destination5}
            address="Namche Bazaar, Solukhumbu, Province 1, 56002"
          />
          <DestinationCard
            title="Langtang, Gosaikunda - Helambu Trek"
            duration="14 days"
            difficulty="Hard"
            description="Explore Langtang, Gosainkunda, and Helambu regions, witness stunning forests, and scenic views of Annapurna and Everest regions."
            icon={Destination6}
            address="Syabrubesi, Rasuwa, Bagmati, 45008"
          />
          <DestinationCard
            title="Around Manaslu Trek"
            duration="16 days"
            difficulty="Hard"
            description="Trek around the Manaslu massif, experience grandiose summits, Tibetan culture, and visit ancient monasteries."
            icon={Destination7}
            address="Soti Khola, Gorkha, Gandaki, 34000"
          />
          <DestinationCard
            title="Upper Mustang Trek"
            duration="14 days"
            difficulty="Moderate"
            description="Explore the 'Forbidden Kingdom' of Mustang, witness ocher cliffs, Buddhist monasteries, and experience authentic Tibetan culture."
            icon={Destination8}
            address="Jomsom, Mustang, Gandaki, 33100"
          />
          <DestinationCard
            title="Around Dhaulagiri Trek"
            duration="19 days"
            difficulty="Hard"
            description="Trek around the 'white mountain' of Dhaulagiri, witness diverse nature, and experience significant altitude."
            icon={Destination9}
            address="Beni, Mustang, Gandaki, 33500"
          />
          <DestinationCard
            title="Everest Kala Pattar Trek"
            duration="12 days"
            difficulty="Hard"
            description="Trek to Kala Pattar for the best view of Mount Everest, explore the Sherpa ethnic region, and ancient villages."
            icon={Destination10}
            address="Lukla, Solukhumbu, Province 1, 56000"
          />
          <DestinationCard
            title="Everest Base Camp Trek"
            duration="13 days"
            difficulty="Hard"
            description="Reach the foot of Mt Everest, enjoy views of the Solu Khumbu region, and visit Namche Bazaar."
            icon={Destination11}
            address="Lukla, Solukhumbu, Province 1, 56000"
          />
          <DestinationCard
            title="Everest - Tengboche Mani Rimdu Festival and Everest Base Camp Trek"
            duration="13 days"
            difficulty="Moderate"
            description="Witness the Mani Rimdu festival in the Everest region, experience Buddhist rituals, and masked dances."
            icon={Destination12}
            address="Lukla, Solukhumbu, Province 1, 56000"
          />




        </ul>

        <a href="/" className="btn btn-primary">View all Destination</a>
      </div>
    </section>
  );
};

interface ImgHolderVariables extends React.CSSProperties {
  '--width': number
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
        <div className="card-banner img-holder" style={{ '--width': 600, '--height': 650 } as ImgHolderVariables}>
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
