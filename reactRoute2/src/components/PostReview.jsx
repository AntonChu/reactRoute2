import React from "react";

export const PostReview = ({ requestPost, deletePost, post }) => {
  return (
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
  );
};
