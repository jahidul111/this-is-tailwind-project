import PropTypes from 'prop-types';
import {FaBookmark } from "react-icons/fa";

const Blog = ({blog,handleAddBookmark,handleAddTime}) => {
    const{title,cover,author_img,author,posted_date,reading_time,hashtags}=blog
    return (
        <div className='space-y-8 m-4'>
            <img className='w-full rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <img className='w-12 h-12 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <p className='font-semibold'>
                            {author}
                        </p>
                        <p>{posted_date}</p>

                    </div>

                </div>
                    <div className='flex gap-2 items-center'>
                    <p>{reading_time} min red</p>
                    <button onClick={()=>handleAddBookmark(blog)} className='text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                    </div>
            </div>
            <h2 className="text-2xl">Title: {title}</h2>
            <h3 className='flex , gap-4'>
                <a href="">#{hashtags[0]}</a>
                <a href="">#{hashtags[1]}</a>
            </h3>
            <button className='text-purple-800  font-extrabold underline' onClick={()=>handleAddTime(reading_time)}>Mark As Read</button>
            
        </div>
    );
};
Blog.propTypes={
    blog: PropTypes.object,
    handleAddBookmark:PropTypes.func
}

export default Blog;