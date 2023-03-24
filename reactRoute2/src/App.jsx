import { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { PostsRender } from "./components/PostsRender";
import { NewPost } from "./components/NewPost";

const Social = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);

  const submit = () => {
    //получить значение в тексэриа, вызвать requestPost
  }

  const requestGet = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:7777/posts");
    request.responseType = "json";
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log(`GET ${request.response}`);
        setPosts(request.response);
        // переход на "/"
      }
    };
  };

  const requestDelete = (id) => {
    let request = new XMLHttpRequest();
    request.open('DELETE', `http://localhost:7777/notes/${id}`);
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet()
      }
    };
  }

  const requestPost = (form, text) => {
    let formData = new FormData(form);
    console.log(formData);
    console.log(text)
    formData.append("text", text);
    console.log(formData.has('text'));
    let request = new XMLHttpRequest();
    request.open('POST', "http://localhost:7777/notes");
    request.send(formData);
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet()
      }
    }
  }

  useEffect(() => {
    requestGet();
  }, []);
  // /list
  // /posts/new
  // /posts/{postId}

  return (
    <button className="create-post">
      <Link to={"/posts/new"}>Создать</Link>
    </button>
  );
};

function App() {
  return (
    <>
      <Social />
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<PostsRender />} />
          <Route path="/posts/new" element={<NewPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
