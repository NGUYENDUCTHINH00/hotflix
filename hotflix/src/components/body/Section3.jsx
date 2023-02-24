import React from "react";
import Moviess3 from "./Moviess3";
import "./section.css";

function Section3() {
  return (
    <>
      <section className='section-bordertopbot'>
        <div className='container'>
          <div className='container-child'>
            <div className='col1-1-2'>
              <h2 className='section__title'>Expected premiere</h2>
              <div className='section__nav'>
                <a href='#'>View All</a>
                <button type='button' style={{ margin: "0px 10px" }}>
                  <span class='carousel-control-prev-icon left'></span>
                  <span class='visually-hidden'>Previous</span>
                </button>
                <button type='button'>
                  <span class='carousel-control-next-icon right'></span>
                  <span class='visually-hidden'>Next</span>
                </button>
              </div>
            </div>
            <Moviess3 />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
