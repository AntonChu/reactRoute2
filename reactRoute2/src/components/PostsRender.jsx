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

  return (
    <>
      {posts.map((el) => {
        return (
          <Link to={`/posts/${el.id}`}>
            <div className="post-wrapper" key={id}>
              <div className="post-header">
                <figure className="img-container">
                  <img src="#" className="img" />
                </figure>
                <div className="header-item">
                  <dav className="name">Персонаж о котором вы говорите</dav>
                  <div className="status">
                    <div className="position">Position</div>
                    <div className="date">{el.created}</div>
                  </div>
                </div>
              </div>
              <div className="content">{el.content}</div>
              <div className="reaction">
                <button className="like">Like</button>
                <button className="comment">Comment</button>
              </div>
            </div>
          </Link>
        );
      })}
    </>
  );
};
