import React from "react";
import { Link } from "react-router-dom";

export const PostsRender = ({ posts }) => {
  if (!posts) {
    return;
  }

  const submit = (event) => {
    event.preventDefault();
    console.log(event);
    //получить значение в тексэриа, вызвать requestPost
  };

  const countTime = (time) => {
    const curentTime = new Date().getTime();
    return Math.floor((curentTime - time) / (1000 * 60));
  }

  return (
    <>
      {posts.map((el) => {
        return (
          <Link to={`/posts/${el.id}`} key={el.id}>
            <div className="post-wrapper">
              <div className="post-header">
                <figure className="img-container">
                  <img src="#" className="img" />
                </figure>
                <div className="header-item">
                  <div className="name">Персонаж о котором вы говорите</div>
                  <div className="status">
                    <div className="position">Autor</div>
                    <div className="date">{countTime(el.created)} мин.</div>
                  </div>
                </div>
              </div>
              <h2 className="content">{el.text.content}</h2>
              <div className="reaction">
                <button className="reaction-button">Like</button>
                <button className="reaction-button">Comment</button>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
