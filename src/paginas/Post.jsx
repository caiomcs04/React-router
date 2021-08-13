import React, { useEffect, useState } from "react";
import { getPost } from "../service/api";
import { useParams, useHistory } from "react-router-dom";
import "../assets/css/post.css";

const Post = () => {
  let history = useHistory();
  const [post, setPost] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getPost(`/posts/${id}`, setPost).catch(() => {
      history.push("/404");
    });
  }, [id]);

  return (
    <main className="container flex flex--centro">
      <article className="cartao post">
        <h2 className="cartao__titulo">{post.title}</h2>
        <p className="carta__texto">{post.body}</p>
      </article>
    </main>
  );
};

export default Post;
