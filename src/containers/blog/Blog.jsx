import React from 'react'
import './blog.css'
import {Article} from '../../components'
import {blog01, blog02, blog03, blog04, blog05} from './imports'

const Blog = () => {
  return (
    <div className="website__blog section__padding fade-in-bottom" id="blog">
      <div className="website__blog-heading">
        <h1>Current Crescent News!</h1>
      </div>
      <div className="website__blog-container">
        <div className="website__blog-container_groupA">
          <Article imgUrl={blog01} date="sep 26, 2021" title="Titles are litty"/>
        </div>
        <div className="website__blog-container_groupB">
          <Article imgUrl={blog02} date="sep 26, 2021" title="Titles are litty"/>
          <Article imgUrl={blog03} date="sep 26, 2021" title="Titles are litty"/>
          <Article imgUrl={blog04} date="sep 26, 2021" title="Titles are litty"/>
          <Article imgUrl={blog05} date="sep 26, 2021" title="Titles are litty"/>
        </div>
      </div>
    </div>
  )
}

export default Blog