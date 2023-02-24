import React from "react";
import { Link } from "react-router-dom";
import "./headerview.css";

function Headerview() {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <div className='nav'>
            <div className='logo-hotflix'>
              <Link to='/homepage'>
                <img
                  src='http://hotflix.volkovdesign.com/main/img/logo.svg'
                  alt=''
                />
              </Link>
            </div>
            <div className='drop-down none'>
              <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                <li class='nav-item dropdown'>
                  <a
                    class='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    HOME
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Home style 1
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Home style 2
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Home style 3
                      </a>
                    </li>
                  </ul>
                </li>
                <li class='nav-item dropdown'>
                  <a
                    class='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    CATALOG
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Catalog style 1
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Catalog style 2
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Details style 1
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Details style 2
                      </a>
                    </li>
                  </ul>
                </li>
                <li class='nav-item dropdown'>
                  <a class='nav-link active' aria-current='page' href='#'>
                    PRICING PLAN
                  </a>
                </li>
                <li className='nav-item dropdown'>
                  <a
                    className='nav-link  '
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    <ion-icon name='ellipsis-horizontal-outline'></ion-icon>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        About
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Contacts
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Help center
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Admin pages
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Sign up
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        Forgot password
                      </a>
                    </li>
                    <li>
                      <a className='dropdown-item ' href='#'>
                        404 Page
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className='navbar-search'>
              <form className='d-flex ' role='search'>
                <input
                  className=' me-2 none'
                  type='text'
                  placeholder='Search...'
                />
                <button className='btn-search none '>
                  <ion-icon name='search-outline'></ion-icon>
                </button>
              </form>
              <button
                style={{ border: "none" }}
                class='btn btn-primary block btn-search'
                type='button'
                data-bs-toggle='offcanvas'
                data-bs-target='#offcanvasTop'
                aria-controls='offcanvasTop'
              >
                <ion-icon name='search-outline'></ion-icon>
              </button>

              <div
                class='offcanvas offcanvas-top'
                tabindex='-1'
                id='offcanvasTop'
                aria-labelledby='offcanvasTopLabel'
              >
                <div class='offcanvas-header'>
                  <div style={{ display: "flex" }}>
                    <input
                      className=' me-2 block'
                      type='text'
                      placeholder='Search...'
                    />
                    <button className='btn-search block'>
                      <ion-icon name='search-outline'></ion-icon>
                    </button>
                  </div>
                  <button
                    type='button'
                    class='btn-close'
                    data-bs-dismiss='offcanvas'
                    aria-label='Close'
                  ></button>
                </div>
              </div>

              <ul className='icon-search'>
                <li class='nav-item dropdown'>
                  <a
                    class='nav-link dropdown-toggle'
                    href='#'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    EN
                  </a>
                  <ul class='dropdown-menu'>
                    <li>
                      <a class='dropdown-item' href='#'>
                        English
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a class='dropdown-item' href='#'>
                        Russian
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <Link to='/login'>
                <button class='btn btn-outline-success' type='submit'>
                  SIGN IN
                </button>
              </Link>
              <div>
                <button
                  class='btn btn-primary nav-right'
                  type='button'
                  data-bs-toggle='offcanvas'
                  data-bs-target='#offcanvasRight'
                  aria-controls='offcanvasRight'
                >
                  <ion-icon name='menu-outline'></ion-icon>
                </button>

                <div
                  class='offcanvas offcanvas-end sideleft-nav'
                  tabindex='-1'
                  id='offcanvasRight'
                  aria-labelledby='offcanvasRightLabel'
                >
                  <div class='offcanvas-header'>
                    <h5 class='offcanvas-title' id='offcanvasRightLabel'></h5>
                    <button
                      type='button'
                      class='btn-close'
                      data-bs-dismiss='offcanvas'
                      aria-label='Close'
                    ></button>
                  </div>
                  <div class='offcanvas-body'>
                    <div className='drop-down '>
                      <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li class='nav-item dropdown'>
                          <a
                            class='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            HOME
                          </a>
                          <ul class='dropdown-menu'>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Home style 1
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Home style 2
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Home style 3
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class='nav-item dropdown'>
                          <a
                            class='nav-link dropdown-toggle'
                            href='#'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            CATALOG
                          </a>
                          <ul class='dropdown-menu'>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Catalog style 1
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Catalog style 2
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Details style 1
                              </a>
                            </li>
                            <li>
                              <a class='dropdown-item' href='#'>
                                Details style 2
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li class='nav-item dropdown'>
                          <a
                            class='nav-link active'
                            aria-current='page'
                            href='#'
                          >
                            PRICING PLAN
                          </a>
                        </li>
                        <li className='nav-item dropdown'>
                          <a
                            className='nav-link  '
                            href='#'
                            role='button'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'
                          >
                            <ion-icon name='ellipsis-horizontal-outline'></ion-icon>
                          </a>
                          <ul className='dropdown-menu'>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                About
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Profile
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Contacts
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Help center
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Privacy policy
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Admin pages
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Sign in
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Sign up
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                Forgot password
                              </a>
                            </li>
                            <li>
                              <a className='dropdown-item ' href='#'>
                                404 Page
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Headerview;
