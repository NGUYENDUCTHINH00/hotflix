import React from "react";
import Moviess2 from "./Moviess2";
import "./section.css";

function Section2() {
  return (
    <>
      <section className='content'>
        <div className='content__head'>
          <div className='container'>
            <h2 className='content__title'>New items</h2>
            <ul className='content__tabs'>
              <li style={{ paddingRight: 20 }}>
                <a href='#'>NEW RELEASES</a>
              </li>
              <li className='li-category'>
                <a href='#'>MOVIES</a>
              </li>
              <li className='li-category'>
                <a href='#'>TV SERIES</a>
              </li>
              <li className='li-category'>
                <a href='#'>CARTOONS</a>
              </li>
            </ul>
          </div>
        </div>
        <Moviess2 />
      </section>
    </>
  );
}

export default Section2;
