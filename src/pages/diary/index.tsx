import React from 'react'
import BlogList from '../../../components/BlogList'
import {client} from "../../../libs/client"
import { GetStaticProps } from 'next';

export const getStaticProps:GetStaticProps = async () => {
    const data = await client.get({endpoint:"route-blog",queries:{filters:"category[equals]diary"}});
    return{
        props:{
            posts:data.contents,
        },
    }
}
type Props = {
  posts: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
  }[];
  category: string;
}

const tech = ({posts}:Props) => {
  
  return (
 
    <BlogList posts={posts} category="Diary"/>
  
 
  )
}

export default tech