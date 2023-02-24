import React from "react";
import "./footer.css";

function Footerview() {
  return (
    <>
      <footer className='footer'>
        <div className='container'>
          <div className='footer__content'>
            <a className='footer__logo'>
              <img
                src='http://hotflix.volkovdesign.com/main/img/logo.svg'
                alt=''
              />
            </a>
            <div className='footer__copyright'>
              © HOTFLIX, 2019—2021
              <br />
              Create by &nbsp;
              <a style={{ textDecoration: "none" }} href='#'>
                Dmitry Volkov
              </a>
            </div>
            <nav className='footer__nav'>
              <a href='#'>About Us</a>
              <a href='#'>Contacts</a>
              <a href='#'>Privacy policy</a>
              <button className='footer__back' type='button'>
                <ion-icon name='arrow-up-outline'></ion-icon>
              </button>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footerview;
