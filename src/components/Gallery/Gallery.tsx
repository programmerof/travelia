import GalleryImg1 from "../../images/gallery-1.jpg";
import GalleryImg2 from "../../images/gallery-2.jpg";
import GalleryImg3 from "../../images/gallery-3.jpg";
import GalleryImg4 from "../../images/gallery-4.jpg";
import GalleryImg5 from "../../images/gallery-5.jpg";
import GalleryImg6 from "../../images/gallery-6.jpg";

import "./Gallery.scss";

interface GalleryCustomCssVariables extends React.CSSProperties {
  "--width": number;
  "--height": number;
}

const Gallery = () => {
  return (
    <section className="section gallery" aria-label="gallery">
      <div className="container">
        <p className="section-subtitle">Photo Gallery</p>

        <h2 className="h2 title section-title">Photo's From Travelers</h2>

        <ul className="gallery-list">
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 925 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg1}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="925"
                loading="lazy"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 925 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg2}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="925"
                loading="lazy"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 840 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg3}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="840"
                loading="lazy"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 378 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg4}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="378"
                loading="lazy"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 378 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg5}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="378"
                loading="lazy"
              />
            </figure>
          </li>
          <li className="gallery-item">
            <figure
              className="item-banner img-holder"
              style={
                { "--width": 700, "--height": 378 } as GalleryCustomCssVariables
              }
            >
              <img
                src={GalleryImg6}
                alt="Gallery"
                className="img-cover"
                width="700"
                height="378"
                loading="lazy"
              />
            </figure>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
