import React from 'react'
import styles from '../src/styles/Home.module.scss';





const BlogPost = ({post}:any) => {
  return (
   

<div>
  <div className='text-center'>
  <div className={styles.thumbnail}>{post.thumbnail}</div>
  </div>
    <h1 className={styles.title}>{post.title}</h1>
    <p className={styles.publishedAt}>{post.publishedAt}</p>
    <div dangerouslySetInnerHTML={{
        __html:`${post.body}`
    }}
    className={styles.post}
    />
    </div>
  
  )
}

export default BlogPost