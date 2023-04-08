import React from "react";
import { useParams, Link } from "react-router-dom";

export const PostFix = ({ posts, requestPost }) => {
    const targetId = Number(useParams().id);
    let targetPost = posts.find((el) => targetId === el.id);

    const submit = (event) => {
        event.preventDefault();
        const text = {content: event.target[0].value};
        requestPost(text, targetId);
    }

  return (
    <form className="form" onSubmit={submit} id="form">
      <div className="fix-header">
        <p>Редактировать запись</p>
        <Link className="close-new" to={"/"}>X</Link>
      </div>
      <textarea
        className="textarea"
        placeholder="share your thoughts..."
        defaultValue={targetPost.text.content}
      ></textarea>
      <button className="button button-create-submit">Save</button>
    </form>
  );
};
