import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/blog.css'
import { getPost } from '../service/api'

const CategoryList = () => { 

  const[categorias, setCategorias] = useState([])

  useEffect(() => {
   getPost(`/categorias`, setCategorias)
  }, [])

  return(
    <ul className="lista-categorias container flex">
      {
        categorias.map((categoria) => (
          <Link to={`/categoria/${categoria.id}`}>
            <li className={`lista-categorias__categoria lista-categorias__categoria--${categoria.id}`}>
              {categoria.nome}
            </li>
          </Link>
        ))
      }
    </ul>
  )
}

export default CategoryList