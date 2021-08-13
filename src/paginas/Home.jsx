import React from "react";
import PostList from "../componentes/PostList";
import CategoryList from "../componentes/CategoryList";

const Home = () => {
  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>
      <CategoryList/>
      <PostList url={"/posts"}/>
    </main>
  );
};

export default Home;
