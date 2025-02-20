import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'

type Props = {
  posts: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
  }[];
  category: string;
}

const BlogList = ({posts, category}: Props) => {
  
  return (
    <div>
      <h2 className='font-bold text-4xl '>{category}</h2>
      <ul className='mt-10 flex flex-col gap-4'>
        {posts.map((post)=>(
          <Link href={`tech/${post.id}`}  key={post.id}>
          <motion.li
          whileHover={{scale:1.02}}
          transition={{duration:0.3}}
          className='border rounded-md py-4 px-4 bg-white w-full'>
            
            <div className='flex items-center gap-4 '>
              <div className='text-7xl shrink-0'>
             {post.thumbnail}
              </div>
              <div className='flex flex-col justify-between'>
            <h3 className='text-xl underline font-semibold'>{post.title}</h3>
           
            <span className='text-gray-400 text-sm'>{new Date(post.publishedAt).toLocaleDateString()}</span>
            </div>
            </div>
          
            </motion.li>
            </Link>
      ))}
      </ul>
    </div>
  )
}

export default BlogList