import React from "react";
import "./section.css";

function Section4() {
  return (
    <>
      <section className='section4'>
        <div className='container'>
          <div className='col1-3'>
            <h2 className='abouthotflix'>
              <b>HotFlix</b> – Best Place for Movies
            </h2>
            <p className='section__text'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy.
            </p>
            <p className='section__text'>
              Content here, content here, making it look like
              <a href='#'> readable</a> English. Many desktop publishing
              packages and web page editors now use Lorem Ipsum as their default
              model text, and a search for 'lorem ipsum' will uncover many web
              sites still in their infancy. Various versions have evolved over
              the years, sometimes by accident, sometimes on purpose (injected
              humour and the like).
            </p>
          </div>
          <div className='col2-3'>
            <div className='price'>
              <div className='price__item--first'>
                <span>Basic</span>
                <span>Free</span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; 7 days
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; 720p Resolution
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "red" }}
                    name='close-outline'
                  ></ion-icon>
                  &nbsp; Limited Availability
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "red" }}
                    name='close-outline'
                  ></ion-icon>
                  &nbsp; Desktop Only
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "red" }}
                    name='close-outline'
                  ></ion-icon>
                  &nbsp; Limited Support
                </span>
              </div>
              <a href='#' className='price__btn'>
                CHOOSE PLAN
              </a>
            </div>
            <div className='price'>
              <div className='price__item--first'>
                <span>Premium</span>
                <span style={{ color: "green" }}>
                  $34.99 <sub>/ month</sub>
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; 1 Month
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; Full HD
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; Lifetime Availability
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "red" }}
                    name='close-outline'
                  ></ion-icon>
                  &nbsp; TV & Desktop
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "red" }}
                    name='close-outline'
                  ></ion-icon>
                  &nbsp; 24/7 Support
                </span>
              </div>
              <a href='#' className='price__btn border-green'>
                CHOOSE PLAN
              </a>
            </div>
            <div className='price'>
              <div className='price__item--first'>
                <span>Cinematic</span>
                <span style={{ color: "#F9AB00" }}>
                  $49.99 <sub>/ month</sub>
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; 2 Months
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; Ultra HD
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; Lifetime Availability
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; Any Device
                </span>
              </div>
              <div className='price__item'>
                <span>
                  <ion-icon
                    style={{ color: "green" }}
                    name='checkmark-outline'
                  ></ion-icon>
                  &nbsp; 24/7 Support
                </span>
              </div>
              <a href='#' className='price__btn'>
                CHOOSE PLAN
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
