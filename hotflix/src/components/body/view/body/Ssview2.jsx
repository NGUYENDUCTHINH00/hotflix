import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import "./sectionview.css";

function Ssview2() {
  const [listmovie, Setlistmovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/perium")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Setlistmovie(data);
      });
  }, []);

  return (
    <>
      <section className='content' style={{ padding: "0px 0px 40px" }}>
        <div className='content__head'>
          <div className='container'>
            <h2 className='content__title'>Discover</h2>
            <ul className='content__tabs'>
              <li style={{ paddingRight: "20px" }}>
                <a href='#'>COMMENTS</a>
              </li>
              <li className='li-category'>
                <a href='#'>REVIEW</a>
              </li>
              <li className='li-category'>
                <a href='#'>PHOTOS</a>
              </li>
            </ul>
          </div>
        </div>
        <div style={{ marginTop: 30 }} className='container'>
          <div className='comments'>
            <Comment />
          </div>
          <div className='maybelike'>
            <h2 className='section__title section__title--sidebar'>
              You may also like...
            </h2>
            <div className='movie__maybelike'>
              {listmovie.map((list) => (
                <div className='col-2-2'>
                  <div className='img-titlemovie'>
                    <div className='img-img ss2'>
                      <img className='img-movie' src={list.image} alt='' />
                      <span className='card__rate'>{list.rating}</span>
                    </div>
                    <div className='title-title'>
                      <h3 className='card__title'>
                        <a href='#'>{list.name}</a>
                      </h3>
                      <span className='card__category'>
                        <a href='#'>{list.performer}</a>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ssview2;
