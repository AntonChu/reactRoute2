import React from "react";
import { useParams } from "react-router-dom";

export const PostReview = ({ posts, requestPost, deletePost }) => {
    console.log(posts)
    const targetId = useParams().id;
    const targetPost = posts.find((el) => Number(targetId) === el.id);
    console.log(targetPost);

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
            <div className="date">{targetPost.created} мин.</div>
          </div>
        </div>
      </div>
      <h2 className="content">{targetPost.text.content}</h2>
      <div className="reaction">
        <button className="reaction-button">Like</button>
        <button className="reaction-button">Comment</button>
      </div>
    </div>
  );
};
