import React from "react";
import { useParams } from "react-router-dom";

export const PostReview = ({ posts, countTime, requestDelete }) => {
    const targetId = useParams().id;
    let targetPost = posts.find((el) => Number(targetId) === el.id);

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
            <div className="date">{countTime(targetPost.created)} мин.</div>
          </div>
        </div>
      </div>
      <h2 className="content">{targetPost.text.content}</h2>
      <div className="reaction">
        <button className="reaction-button">Like</button>
        <button className="reaction-button">Comment</button>
      </div>
      <div className="change-block">
        <button className="reaction-button fix-button">Редактировать</button>
        <button onClick={requestDelete(Number(targetId))} className="reaction-button delete-button">Удалить</button>
      </div>
    </div>
  );
};
// onClick={requestDelete(Number(targetId))}