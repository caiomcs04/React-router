import "../assets/css/blog.css";
import React, { useState, useEffect } from 'react'
import CategoryList from "../componentes/CategoryList";
import PostList from "../componentes/PostList";
import { Route, useParams, useRouteMatch, Link, Switch } from 'react-router-dom'
import SubCategory from "./SubCategory";
import { getPost } from "../service/api";

const Category = () => {
  const { id } = useParams();
  const { url, path } = useRouteMatch();
  const [subcategorias, setSubCategorias] = useState([]);

  useEffect(() => {
    getPost(`/categorias/${id}`, (categoria) => {
      setSubCategorias(categoria.subcategorias);
    });
  }, [id]);

  return (
    <>
      <div className="container">
        <h2 className="titulo-pagina">Pet Notícias</h2>
      </div>

      <CategoryList />
      <ul className="lista-categorias container flex">
        {subcategorias.map((subcategoria) => (
          <li
            className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
            key={subcategoria}
          >
            <Link to={`${url}/${subcategoria}`}>{subcategoria}</Link>
          </li>
        ))}
      </ul>
      <Switch>
        <Route exact path={`${path}/`}>
          <PostList url={`/posts?categoria=${id}`} />
        </Route>
        <Route path={`${path}/:subcategoria`}>
          <SubCategory />
        </Route>
      </Switch>
    </>
  );
};

export default Category;
