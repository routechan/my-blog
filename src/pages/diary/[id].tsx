import BlogPost from "../../../components/BlogPost";
import {client} from "../../../libs/client";


import React from 'react'

export const getStaticPaths = async () =>{
    const data = await client.get({endpoint:"route-blog"});

    type Content = {
        id: string;
    };

    const paths = data.contents.map((content: Content) => `/diary/${content.id}`);
    return{paths,fallback:false}
}
export const getStaticProps = async(context: { params: { id: string } }) =>{
    const id = context.params.id;
    const data = await client.get({endpoint:"route-blog",contentId:id})
    return{
        props:{
            post:data,
        },
    }
}

type Props = {
  title: string;
  date: string;
  content: string;
  thumbnail?: string;
  category?: string;
  id: string;
}

const TechBlogId = (post: Props) => {
  return (
    <BlogPost post={post}/>
  )
}

export default TechBlogId