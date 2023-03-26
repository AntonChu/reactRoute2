import React from "react";
import { Link } from "react-router-dom";

export const NewPost = ({ requestPost }) => {
  const submit = (event) => {
    event.preventDefault();
    const form = document.getElementById('form')
    const text = event.target[0].value;
    requestPost(text, form);

    //получить значение в тексэриа, вызвать requestPost
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
