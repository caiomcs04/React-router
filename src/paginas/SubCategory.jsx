import React from 'react'
import { useParams } from 'react-router-dom'
import PostList from '../componentes/PostList'

const SubCategory = () => { 
  const { subcategoria } = useParams()
  return(
    <PostList url={`/posts?subcategoria=${subcategoria}`} />
  )
}

export default SubCategory
