import React from "react";
import { Link } from "react-router-dom";

export const NewPost = ({ requestPost }) => {
  const submit = (event) => {
    event.preventDefault();
    const text = {content: event.target[0].value};
    requestPost(text);
  }
  
  return (
    <form className="form" onSubmit={submit} id="form">
      <Link className="close-new" to={"/"}>X</Link>
      <textarea className="textarea" placeholder="share your thoughts..." required></textarea>
      <button className="button button-create-submit">Create
        {/* <Link to={"/"}>Опубликовать</Link>  */}
      </button>
    </form>
  );
};
