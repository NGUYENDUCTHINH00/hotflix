import React, { useState, useEffect } from "react";
import "./sectionview.css";

function Comment() {
  const [comments, Setcomments] = useState([]);
  const [comment, SetComment] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/comment")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Setcomments(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentss = {
      comment: comment,
    };
    fetch(`http://127.0.0.1:3000/comment`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentss),
    })
      .then((response) => response.json())
      .then((data) => {
        Setcomments([...comments, data]);
        SetComment("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ul className='comment__list'>
        {comments.map((comment) => (
          <li className='comments__item'>
            <div className='comments__autor'>
              <img
                src='http://hotflix.volkovdesign.com/main/img/user.svg'
                alt='@'
                className='comments__avatar'
              />
              <span className='comments__name'>John Doe</span>
              <span className='comments__time'>30.08.2018, 17:53</span>
            </div>
            <p className='commments__text'>{comment.comment}</p>
            <div className='comments__actions'>
              <div className='comments__rate'>
                <button type='button'>
                  <ion-icon name='thumbs-up-outline'></ion-icon>
                  12
                </button>
                <button type='button'>
                  7<ion-icon name='thumbs-down-outline'></ion-icon>
                </button>
              </div>
              <div className='comments__reply'>
                <button type='button'>
                  <ion-icon name='share-social-outline'></ion-icon>
                  REPLY
                </button>
                <button type='button'>
                  QOUTE
                  <ion-icon name='cube-outline'></ion-icon>
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} action='#' className='form'>
        <textarea
          name='text'
          id='text'
          className='form__textarea'
          placeholder='Add comment'
          onChange={(e) => SetComment(e.target.value)}
          value={comment}
        ></textarea>
        <button className='form__btn'>Send</button>
      </form>
    </>
  );
}

export default Comment;
