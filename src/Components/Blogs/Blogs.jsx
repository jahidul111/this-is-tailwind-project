import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark,handleAddTime}) => {
    const[blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('blog.json')
        .then(res => res.json())
        .then(data =>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
          <h1 className="text-3xl ml-4">Blogs:{blogs.length}</h1>
          {
            blogs.map(blog =><Blog
                 key={blog.id}
                 blog ={blog}
                 handleAddBookmark={handleAddBookmark}
                 handleAddTime={handleAddTime}
                 ></Blog>)
          }
            
        </div>
    );
};

export default Blogs;