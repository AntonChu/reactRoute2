import React from "react";
import { Link } from "react-router-dom";

export const NewPost = ({ submit }) => {
  return (
    <form submit={submit}>
      <Link to={"/"}>X</Link>
      <textarea></textarea>
      <button>Опубликовать</button>
    </form>
  );
};
