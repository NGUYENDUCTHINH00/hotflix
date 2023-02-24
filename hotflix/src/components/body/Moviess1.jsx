import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./section.css";

function Moviess1() {
  const [listmovie, Setlistmovie] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/ss")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Setlistmovie(data);
      });
  }, []);

  return (
    <>
      <div className='col-2-2'>
        {listmovie.map((list) => (
          <div className='img-titlemovie'>
            <div className='img-img'>
              <Link to='/trailer'>
                <img className='img-movie' src={list.image} alt='' />
              </Link>
              <span className='card__rate'>{8.4}</span>
            </div>
            <div className='title-title'>
              <h3 className='card__title'>
                <a href='#'>{list.name}</a>
              </h3>
              <span className='card__category'>
                <a href='#'>{list.performer} </a>
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Moviess1;
