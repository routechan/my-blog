import React from 'react'
import styles from '../src/styles/Home.module.scss';

interface BlogPostProps {
  post: {
    title: string;
    date: string;
    content: string;
    thumbnail?: string;
    category?: string;
    id: string;
  }
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <div>
      <div className='text-center'>
        <div className={styles.thumbnail}>{post.thumbnail}</div>
      </div>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.publishedAt}>{post.date}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${post.content}`
        }}
        className={styles.post}
      />
    </div>
  )
}

export default BlogPost;