import React from 'react'
import styles from '../src/styles/Home.module.scss';

type BlogPostProps = {
  title: string;
  thumbnail: string;
  publishedAt: string;
  body: string;
}

const BlogPost = ({ title, thumbnail, publishedAt, body }: BlogPostProps) => {
  return (
    <div>
      <div className='text-center'>
        <div className={styles.thumbnail}>{thumbnail}</div>
      </div>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.publishedAt}>{publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${body}`
        }}
        className={styles.post}
      />
    </div>
  )
}

export default BlogPost