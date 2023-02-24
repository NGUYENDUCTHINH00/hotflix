import React, { useState, useEffect } from "react";
import "./Login.scss";

function Login() {
  const [email, SetEmail] = useState();
  const [password, SetPassWord] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/user")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let test = data.find((e) => {
          return e.email === email && e.password === password;
        });
        console.log(test);
        if (test) {
          return (window.location.href = "http://localhost:3001/homepage");
        } else {
          return alert("sai email hoac mat khau");
        }
      });
  };

  return (
    <>
      <div className='login-container-flixgo'>
        <div className='login-flixgo'>
          <div className='wrap-flixgo-container'>
            <div className='box-img-flixgo'>
              <img
                src='http://hotflix.volkovdesign.com/main/img/logo.svg'
                alt=''
              />
            </div>
            <div className='wrap-flixgo'>
              <form onSubmit={handleSubmit}>
                <input
                  className='input'
                  type='email'
                  name='email'
                  id=''
                  placeholder='Email'
                  value={email}
                  onChange={(e) => SetEmail(e.target.value)}
                />
                <input
                  className='input'
                  type='password'
                  name='password'
                  id=''
                  placeholder='Password'
                  onChange={(e) => SetPassWord(e.target.value)}
                  value={password}
                />
                <input
                  className='checkbox'
                  type='checkbox'
                  name='remember'
                  id=''
                />
                <label className='label-remember' htmlFor=''>
                  Remember
                </label>
                <div className='btn-login'>
                  <button>SIGN IN</button>
                </div>
              </form>
              <p>
                Don't have an account? <a href='/register'>Sign up!</a>
              </p>
              <p>
                <a href=''>Forgot password?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
