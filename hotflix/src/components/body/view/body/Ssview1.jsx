import React from "react";
import "./sectionview.css";

function Ssview1() {
  return (
    <>
      <section className='home'>
        <div className='slide-img'>
          <div id='carouselExampleFade' class='carousel slide carousel-fade'>
            <div class='carousel-inner'>
              <div class='carousel-item active img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg2.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg3.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg4.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
              <div class='carousel-item img-slidemovie'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/home/home__bg5.jpg'
                  class='d-block w-100'
                  alt='...'
                />
              </div>
            </div>
            <div className='container'>
              <div className='row'>
                <div className='col-1-1'>
                  <h1 className='home__title'>I Dream in Another Language</h1>
                </div>
                <div className='col-2-2-2-2'>
                  <div className='img-titlemovie'>
                    <div className='img-img'>
                      <img
                        className='img-movie'
                        src='http://hotflix.volkovdesign.com/main/img/covers/cover1.jpg'
                        alt=''
                      />
                      <span className='card__rate'>6.2</span>
                    </div>
                    <a href='#' className='card__trailer'>
                      <ion-icon
                        style={{ fontSize: 22, marginRight: 5 }}
                        name='play-circle-outline'
                      ></ion-icon>
                      WATCH TRAILER
                    </a>
                  </div>
                  <div className='card_content'>
                    <ul className='card__meta'>
                      <li>
                        <span>Director:</span> Vince Gilligan
                      </li>
                      <li>
                        <span>Cast:</span>
                        <a href='#'>Brian Cranston,</a>
                        <a href='#'>Jesse Plemons,</a>
                        <a href='#'>Matt Jones,</a>
                        <a href='#'>Jonathan Banks,</a>
                        <a href='#'>Charles Baker,</a>
                        <a href='#'>Tess Harper</a>
                      </li>
                      <li>
                        <span>Genre:</span>
                        <a href='#'>Action,</a>
                        <a href='#'>Triler</a>
                      </li>
                      <li>
                        <span>Release year:</span>
                        2019
                      </li>
                      <li>
                        <span>Running time:</span>
                        130 min
                      </li>
                      <li>
                        <span>Contry:</span>
                        <a href='#'>USA</a>
                      </li>
                    </ul>
                    <div className='card__description'>
                      <div className='card_descriptionmovie'>
                        <span>
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English. Many
                          desktop publishing packages and web page editors now
                          use Lorem Ipsum as their default model text, and a
                          search for 'lorem ipsum' will uncover many web sites
                          still in their infancy. The point of using Lorem Ipsum
                          is that it has a more-or-less normal distribution of
                          letters, as opposed to using 'Content here, content
                          here', making it look like readable English.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className='trailer__movie'>
                    <video
                      controls
                      poster='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
                    >
                      <source src='https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4' />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ssview1;
