import React from 'react'
import {Link} from "react-router-dom"
import Avator from "../images/user_icon.jpeg"

const PostAuthor = () => {
  return (
   <Link to={`/posts/users/sdfsdf`} className='post__author'>
     <div className='post__author-avatar'>
      <img src={Avator} alt=""/>
     </div>
     <div className='post__author-details'>
      <h5>By: Cammerl Jullt</h5>
      <small>Just Now</small>
     </div>
   </Link>
  )
}

export default PostAuthor
