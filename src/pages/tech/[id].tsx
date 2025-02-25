import BlogPost from "../../../components/BlogPost";
import {client} from "../../../libs/client";


import React from 'react'

export const getStaticPaths = async () =>{
    const data = await client.get({endpoint:"route-blog"});

    type Content = {
      id: string;
  };

    const paths = data.contents.map((content:Content)=>`/tech/${content.id}`);
    return{paths,fallback:false}
}
export const getStaticProps = async(context: { params: { id: string } })=>{
    const id = context.params.id;
    const data = await client.get({endpoint:"route-blog",contentId:id})
    return{
        props:{
            post:data,
        },
    }
}


type Props = {
  id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
  category: string;
}

const TechBlogId = (props:Props) => {
  return (
    <BlogPost post={{
      title: "",
      date: "",
      content: "",
      thumbnail: ""
    }} {...props}/>
  )
}

export default TechBlogId