import React, { useState, useEffect } from "react";
import "./SignUp.scss";

function Register() {
  const [username, SetUsername] = useState();
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();
  const [noEmail, SetNoEmail] = useState([]);
  const [noPassword, SetNoPassword] = useState([]);
  const [noUsername, SetNoUsername] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) {
      SetNoUsername("Please enter your username");
    } else if (!email) {
      SetNoUsername("");
      SetNoEmail("Please enter your email");
    } else if (!password) {
      SetNoUsername("");
      SetNoEmail("");
      SetNoPassword("Please enter your password");
    } else {
      const dataUser = {
        name: username,
        email: email,
        password: password,
      };
      fetch("http://localhost:3000/user")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          for (let i = 0; i < data.length; i++) {
            console.log(data);
            if (data[i].email == dataUser.email) {
              return alert("Trùng email");
            } else {
              return fetch("http://localhost:3000/user", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(dataUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  SetNoUsername("");
                  SetNoEmail("");
                  SetNoPassword("");
                  alert("Đăng kí thành công");
                  return (window.location.href = "http://localhost:3001/login");
                })
                .catch((error) => {
                  console.error("Error:", error);
                });
            }
          }
        });
    }
  };

  return (
    <>
      <div className='register-container-flixgo'>
        <div className='register-flixgo'>
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
                  type='name'
                  name='username'
                  placeholder='Username'
                  onChange={(e) => SetUsername(e.target.value)}
                  value={username}
                />
                <p className='validate'>{noUsername}</p>
                <input
                  className='input'
                  type='email'
                  name='email'
                  placeholder='Email'
                  onChange={(e) => SetEmail(e.target.value)}
                  value={email}
                />
                <p className='validate'>{noEmail}</p>

                <input
                  className='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                  onChange={(e) => SetPassword(e.target.value)}
                  value={password}
                />
                <p className='validate'>{noPassword}</p>

                <label className='label-remember' htmlFor=''>
                  I agree to the <a href=''>Privacy Policy</a>
                </label>
                <div className='btn-register'>
                  <button>SIGN UP</button>
                </div>
              </form>
              <p>
                Already have an account? <a href='/login'>Sign in!</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
