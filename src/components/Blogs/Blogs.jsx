import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookmark, handleReadingTime }) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })
    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-4xl">Blogs : {blogs.length}</h1> */}
            <div >
            {
                blogs.map((blog)=> <Blog
                handleAddToBookmark={handleAddToBookmark}
                handleReadingTime= {handleReadingTime}
                key={blog.id} blog={blog}></Blog>)
            }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}

export default Blogs;