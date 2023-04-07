import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import { PostsRender } from "./components/PostsRender";
import { NewPost } from "./components/NewPost";
import { PostReview } from "./components/PostReview";

const Social = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const id = useParams();
  console.log(id)

  const requestGet = () => {
    let request = new XMLHttpRequest();
    request.open("GET", "http://localhost:7070/posts");
    request.responseType = "json";
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        console.log("GET ответ сервера ->", request.response);
        setPosts(request.response);
        navigate("/");
      }
    };
  };

  const requestDelete = (id) => {
    let request = new XMLHttpRequest();
    request.open("DELETE", `http://localhost:7070/notes/${id}`);
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet();
      }
    };
  };

  const requestPost = (text) => {
    console.log(text);
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:7070/posts");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    request.send(JSON.stringify({ text }));
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet();
      }
    };
  };

  useEffect(() => {
    requestGet();
  }, []);
  // /list
  // /posts/new
  // /posts/{postId}

  return (
    <>
      <button className="create-post">
        <Link to={"/posts/new"}>Создать</Link>
      </button>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<PostsRender posts={posts} />} />
          <Route
            path="/posts/new"
            element={
              <NewPost requestPost={requestPost}/>
            }
          />
          <Route
            path={`/posts/:id`}
            element={
              <PostReview
                posts={posts}
                requestPost={requestPost}
                requestDelete={requestDelete}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return <Social />;
}

export default App;
