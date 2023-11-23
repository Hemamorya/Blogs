import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";




function Blogs() {
  //consuming step 3
  const { post, loading } = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div>
          <p>no post found</p>
        </div>
      ) : (
        post.map((post) => (<div key={post.id}>
          <p className="font-bold">{post.title}</p>
          <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
          </p>
          <p>post on {post.date}</p>
          <p>{post.content}</p>
          <div>
            {post.tags.map((tag,index)=>{
              return <span key={index}>{`#${tag}`}</span>

            })}
          </div>
        </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
