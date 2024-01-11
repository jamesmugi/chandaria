import { Link, NavLink, useParams } from "react-router-dom";
import { innovations } from "../utils/Data/Innovations";
import { useEffect } from "react";

const Innovations = () => {
  const urlParams = useParams();

  const fectchInnovations = innovations?.innovations?.filter((innovation) =>
    urlParams?.category === "all" || !urlParams?.category
      ? innovation?.category === innovation?.category
      : innovation?.category?.path === urlParams?.category
  );

  useEffect(() => {
    draggable();
    sliderFunction();
  }, []);

  useEffect(() => {
    if (urlParams?.category) {
      window.scrollTo({
        top: 580,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [urlParams?.category]);

  return (
    <div className="projects-container">
      <section className="hero smaller">
        <div className="carousel">
          <div className="carousel-slide person center">
            <div className="image-holder sliding">
              {innovations?.image?.map((image, imageKey) => (
                <img
                  src={image}
                  className="image-sliding"
                  alt=""
                  key={imageKey}
                />
              ))}
            </div>
            <div className="smaller-image carousels center">
              {innovations?.image?.map((image, imageKey) => (
                <img
                  src={image}
                  key={imageKey}
                  className="inner-carousels"
                  alt=""
                />
              ))}
              <div className="indicator">
                {innovations?.image?.map((image, imageKey) => (
                  <div className="indicators" key={imageKey}></div>
                ))}
              </div>
            </div>
            <div className="carousel-text">
              <h1 className="title">{innovations?.title}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section ">
        <h1 className="title">{innovations?.title}</h1>
        <div className="sub-title">{innovations?.subtitle}</div>

        <div className="categories-view max-width">
          <div className="nav" onClick={scrollLeft}>
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="selector-tab">
            {urlParams?.category ? (
              <NavLink to="/innovations/tabs/all" className="tab">
                All Innovations
              </NavLink>
            ) : (
              <NavLink to="/innovations/tabs/all" className="tab active">
                All Innovations
              </NavLink>
            )}
            <NavLink to="/innovations/tabs/ict" className="tab">
              ICT
            </NavLink>
            <NavLink
              to="/innovations/tabs/agriculture-agribusiness"
              className="tab"
            >
              Agriculture &amp; Agribusiness
            </NavLink>
            <NavLink to="/innovations/tabs/energy" className="tab">
              Energy
            </NavLink>
            <NavLink to="/innovations/tabs/health-nutrition" className="tab">
              Health &amp; Nutrition
            </NavLink>
            <NavLink
              to="/innovations/tabs/business-professional-services"
              className="tab"
            >
              Business &amp; Professional Services
            </NavLink>
            <NavLink
              to="/innovations/tabs/marketing-communication"
              className="tab"
            >
              Marketing &amp; Communication
            </NavLink>
            <NavLink to="/innovations/tabs/transport-logistics" className="tab">
              Transport &amp; Logistics
            </NavLink>
            <NavLink
              to="/innovations/tabs/manufacturing-construction"
              className="tab"
            >
              Manufacturing &amp; Construction
            </NavLink>
            <NavLink to="/innovations/tabs/beauty-cosmetics" className="tab">
              Beauty &amp; Cosmetcis
            </NavLink>
            <NavLink to="/innovations/tabs/waste-management" className="tab">
              Waste Management
            </NavLink>
            <NavLink to="/innovations/tabs/Aviation and Space" className="tab">
              Aviation and Space Science
            </NavLink>
            <NavLink to="/innovations/tabs/Bio and Nano" className="tab">
              Bio and Nano-Technology
            </NavLink>
            <NavLink
              to="/innovations/tabs/Green and ecological"
              className="tab"
            >
              Green and ecological business
            </NavLink>
            <NavLink to="/innovations/tabs/Tourism and eco" className="tab">
              Tourism and eco-tourism
            </NavLink>
            <NavLink to="/innovations/tabs/Fine and Performing" className="tab">
              Fine and Performing Arts
            </NavLink>
            <NavLink to="/innovations/tabs/Sports, Leisure" className="tab">
              Sports, Leisure and Entertainment
            </NavLink>
            <NavLink
              to="/innovations/tabs/Water and Sanitation"
              className="tab"
            >
              Water and Sanitation
            </NavLink>
            <NavLink
              to="/innovations/tabs/Media and Entertainment"
              className="tab"
            >
              Media and Entertainment
            </NavLink>
          </div>
          <div className="nav next" onClick={scrollRight}>
            <i className="fa fa-chevron-right"></i>
          </div>
        </div>

        <div className="projects-holder max-width">
          {fectchInnovations?.map((innovation, innovationKey) => (
            <Link
              to={`/innovations/${innovation?.path}`}
              className="project-card innovation"
              key={innovationKey}
            >
              <div className="project-icon partner">
                <img src={innovation?.icon} alt={`${innovation?.title} logo`} />
              </div>
              <div className="content">
                <div className="project-title">{innovation?.title}</div>
                <div className="project-category">
                  {innovation?.category?.name}
                </div>
                <div className="project-description">
                  {innovation?.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Innovations;

function draggable() {
  const slider = document.querySelector(".selector-tab");
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.classList.remove("active");
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
}

function scrollLeft() {
  const eventsHolder = document.querySelector(".selector-tab");
  eventsHolder.scrollLeft -= 200;
}

function scrollRight() {
  const eventsHolder = document.querySelector(".selector-tab");
  eventsHolder.scrollLeft += 200;
}

function sliderFunction() {
  var currentSlide = 0;
  const bigSlides = document.querySelectorAll(".image-sliding");
  const Slides = document.querySelectorAll(".inner-carousels");
  const indicatorContainer = document.querySelector(".indicator");
  const indicators = indicatorContainer.querySelectorAll(".indicators");

  bigSlides[0]?.classList.add("active");
  Slides[0]?.classList.add("active");
  indicators[0]?.classList.add("active");

  const init = (n) => {
    bigSlides.forEach((largerSlide) => {
      largerSlide?.classList.remove("active");
    });
    Slides.forEach((smallSlides) => {
      smallSlides?.classList.remove("active");
    });

    indicators?.forEach((indicator) => {
      indicator?.classList.remove("active");
    });
    bigSlides[n]?.classList.add("active");
    Slides[n]?.classList.add("active");
    indicators[n]?.classList.add("active");
  };

  indicators?.forEach((indicator, index) => {
    indicator?.addEventListener("click", () => {
      currentSlide = index;
      timer.stop();
      timer.start();
      init(index);
    });
  });

  const next = () => {
    currentSlide >= Slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);

    timer.stop();
    timer.start();
  };

  class Timer {
    constructor(fn, t) {
      var timerObj = setInterval(fn, t);

      this.stop = function () {
        if (timerObj) {
          clearInterval(timerObj);
          timerObj = null;
        }
        return this;
      };

      // start timer using current settings (if it's not already running)
      this.start = function () {
        if (!timerObj) {
          this.stop();
          timerObj = setInterval(fn, t);
        }
        return this;
      };

      // start with new or original interval, stop current interval
      this.reset = function (newT = t) {
        t = newT;
        return this.stop().start();
      };
    }
  }

  var timer = new Timer(function () {
    next();
  }, 5000);

  document.addEventListener("DOMContentLoaded", () => {
    init(currentSlide);
  });
}
