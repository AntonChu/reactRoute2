import React from "react";
import { Link, useParams } from "react-router-dom";

export const PostReview = ({ posts, countTime, requestDelete }) => {
  const targetId = Number(useParams().id);
  const onDeleteHandler = () => requestDelete(targetId);
  let targetPost = posts.find((el) => targetId === el.id);

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
        <Link to={`/posts/${targetId}/fix`}>
          <button className="reaction-button fix-button">Редактировать</button>
        </Link>

        <button
          onClick={onDeleteHandler}
          className="reaction-button delete-button"
        >
          Удалить
        </button>
      </div>
    </div>
  );
};
// onClick={requestDelete(Number(targetId))}
