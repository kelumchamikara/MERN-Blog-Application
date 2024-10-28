import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItems from '../Components/PostItems'

const AuthorPosts = () => {
  const[posts,setPosts] = useState(DUMMY_POSTS)
  return (
<section className='author__posts'>
    {posts.length > 0 ? <div className='container author__posts-container'>
    {
    posts.map(({id, thumbnail, category, title, desc, authorID})=> 
    <PostItems 
    key={id} postID={id}
    thumbnail={thumbnail} category={category} title={title} desc={desc}  authorID={authorID}/>)
   }
    </div> : <h2 className='center'>No Posts Founds</h2>}
   
</section>
  )
}

export default AuthorPosts
