import { useParams } from "react-router-dom";
import { gallery } from "../utils/Data/Gallery";
import React from "react";

const GalleryView = () => {
  const urlParams = useParams();

  const newsletter = gallery?.newsletters?.filter(
    (newsletter) => newsletter?.path === urlParams?.newsletter
  )[0];
  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide person">
            <div className="image-holder">
              <img src={newsletter?.images[0]} alt="" />
            </div>
            <div className="smaller-image contain">
              <img src={newsletter?.images[0]} alt="" />
            </div>
            <div className="carousel-text">
              <h1 className="title">{newsletter?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <h1 className="title">{newsletter?.title}</h1>
        <div className="content-view max-width">
          {newsletter?.message?.map((message, messageKey) => (
            <React.Fragment key={messageKey}>
              <p>{message}</p> <br />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GalleryView;
