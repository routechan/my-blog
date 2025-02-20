import BlogPost from "../../../components/BlogPost";
import {client} from "../../../libs/client";


import React from 'react'

export const getStaticPaths = async () =>{
    const data = await client.get({endpoint:"route-blog"});

    const paths = data.contents.map((content)=>`/tech/${content.id}`);
    return{paths,fallback:false}
}
export const getStaticProps = async(context)=>{
    const id = context.params.id;
    const data = await client.get({endpoint:"route-blog",contentId:id})
    return{
        props:{
            post:data,
        },
    }
}

const TechBlogId = ({post}) => {
  return (
    <BlogPost post={post}/>
   
  )
}

export default TechBlogId