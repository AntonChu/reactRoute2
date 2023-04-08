import { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import { PostsRender } from "./components/PostsRender";
import { NewPost } from "./components/NewPost";
import { PostReview } from "./components/PostReview";
import { PostFix } from "./components/PostFix";

const Social = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const id = useParams();

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
    request.open("DELETE", `http://localhost:7070/posts/${id}`);
    request.send();
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet();
      }
    };
  };

  const requestPost = (text, id = undefined) => {
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:7070/posts");
    request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    if (id) {
      request.send(JSON.stringify({ text }), id);
    } else {
      request.send(JSON.stringify({ text }));
    }
    request.onreadystatechange = function () {
      if (request.readyState === request.DONE) {
        requestGet();
      }
    };
  };

  const countTime = (time) => {
    const curentTime = new Date().getTime();
    return Math.floor((curentTime - time) / (1000 * 60));
  };

  useEffect(() => {
    requestGet();
  }, []);
  // /list
  // /posts/new
  // /posts/{postId}
   // /posts/{postId}/fix

  return (
    <>
      <button className="create-post">
        <Link to={"/posts/new"}>Создать</Link>
      </button>
      <div className="main-wrapper">
        <Routes>
          <Route
            path="/"
            element={<PostsRender posts={posts} countTime={countTime} />}
          />
          <Route
            path="/posts/new"
            element={<NewPost requestPost={requestPost} />}
          />
          <Route
            path="/posts/:id"
            element={
              <PostReview
                posts={posts}
                countTime={countTime}
                requestPost={requestPost}
                requestDelete={requestDelete}
              />
            }
          />
          <Route
            path="/posts/:id/fix"
            element={<PostFix posts={posts} requestPost={requestPost} />}
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
