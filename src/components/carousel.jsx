import { useState, useLayoutEffect } from "react";

import arrow from "../images/icon-arrow.svg";

// Desktop Images
import slide1Desk from "../images/desktop-image-hero-1.jpg";
import slide2Desk from "../images/desktop-image-hero-2.jpg";
import slide3Desk from "../images/desktop-image-hero-3.jpg";

// Mobile Images
import slide1Mob from "../images/mobile-image-hero-1.jpg";
import slide2Mob from "../images/mobile-image-hero-2.jpg";
import slide3Mob from "../images/mobile-image-hero-3.jpg";

const Carousel = () => {
  const [isScreenLarge, setIsScreenLarge] = useState(true);
  const [repositionCtrlBtns, setRepositionCtrlBtns] = useState(false);

  useLayoutEffect(() => {
    function updateCarousel() {
      setIsScreenLarge(window.innerWidth > 767 ? true : false);
    }
    function updateCtrlBtns() {
      setRepositionCtrlBtns(window.innerWidth > 991 ? false : true);
    }
    window.addEventListener("resize", updateCarousel);
    window.addEventListener("resize", updateCtrlBtns);
    updateCarousel();
    updateCtrlBtns();
    return () => {
      window.removeEventListener("resize", updateCarousel);
      window.removeEventListener("resize", updateCtrlBtns);
    };
  }, [window.innerWidth]);

  return (
    <div id="carousel" className="carousel slide" data-bs-ride="false">
      <div className="carousel-inner">
        <div className="carousel-item active row ms-0">
          <div className="col-12 col-lg-7 px-0 position-relative">
            <img src={isScreenLarge ? slide1Desk : slide1Mob} alt="slide 1" />
            {repositionCtrlBtns ? (
              <div className="control-btns bottom-0 position-absolute d-flex px-0">
                <button
                  className="carousel-control-prev control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="info col-12 col-lg-5">
            <h1 className="heading bolder mb-3 mb-md-4 lh-1">
              Discover innovative ways to decorate
            </h1>
            <p className="description gray mb-md-4">
              We provide unmatched quality, comfort, and style for property
              owners across the country. Our experts combine form and function
              in bringing your vision to life. Create a room in your own style
              with our collection and make your property a reflection of you and
              what you love.
            </p>
            <button
              type="button"
              className="shop-btn btn bold p-0 text-uppercase d-flex align-items-center gap-4 lh-1"
            >
              <span>Shop now</span>
              <img src={arrow} alt="" className="arrow-img" />
            </button>
          </div>
          {!repositionCtrlBtns ? (
            <div className="control-btns bottom-0 position-absolute d-flex px-0">
              <button
                className="carousel-control-prev control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="carousel-item row ms-0">
          <div className="col-12 col-lg-7 px-0 position-relative">
            <img src={isScreenLarge ? slide2Desk : slide2Mob} alt="slide 2" />
            {repositionCtrlBtns ? (
              <div className="control-btns bottom-0 position-absolute d-flex px-0">
                <button
                  className="carousel-control-prev control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="info col-12 col-lg-5">
            <h1 className="heading bolder mb-3 mb-md-4 lh-1">
              We are available all across the globe
            </h1>
            <p className="description gray mb-md-4">
              With stores all over the world, it's easy for you to find
              furniture for your home or place of business. Locally, we’re in
              most major cities throughout the country. Find the branch nearest
              you using our store locator. Any questions? Don't hesitate to
              contact us today.
            </p>
            <button
              type="button"
              className="shop-btn btn bold p-0 text-uppercase d-flex align-items-center gap-4 lh-1"
            >
              <span>Shop now</span>
              <img src={arrow} alt="" className="arrow-img" />
            </button>
          </div>
          {!repositionCtrlBtns ? (
            <div className="control-btns bottom-0 position-absolute d-flex px-0">
              <button
                className="carousel-control-prev control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="carousel-item row ms-0">
          <div className="col-12 col-lg-7 px-0 position-relative">
            <img src={isScreenLarge ? slide3Desk : slide3Mob} alt="slide 3" />
            {repositionCtrlBtns ? (
              <div className="control-btns bottom-0 position-absolute d-flex px-0">
                <button
                  className="carousel-control-prev control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next control-btn position-relative opacity-100"
                  type="button"
                  data-bs-target="#carousel"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="info col-12 col-lg-5">
            <h1 className="heading bolder mb-3 mb-md-4 lh-1">
              Manufactured with the best materials
            </h1>
            <p className="description gray mb-md-4">
              Our modern furniture store provide a high level of quality. Our
              company has invested in advanced technology to ensure that every
              product is made as perfect and as consistent as possible. With
              three decades of experience in this industry, we understand what
              customers want for their home and office.
            </p>
            <button
              type="button"
              className="shop-btn btn bold p-0 text-uppercase d-flex align-items-center gap-4 lh-1"
            >
              <span>Shop now</span>
              <img src={arrow} alt="" className="arrow-img" />
            </button>
          </div>
          {!repositionCtrlBtns ? (
            <div className="control-btns bottom-0 position-absolute d-flex px-0">
              <button
                className="carousel-control-prev control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next control-btn position-relative opacity-100"
                type="button"
                data-bs-target="#carousel"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
