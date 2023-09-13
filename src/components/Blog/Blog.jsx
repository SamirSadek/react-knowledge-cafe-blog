import PropTypes from 'prop-types';
import { BsBookmarks } from 'react-icons/bs';

const Blog = ({blog, handleAddToBookmark, handleReadingTime}) => {
    const {title,cover,author_img,author,posted_date,reading_time,hashtags} = blog;
    
    return (
        <div className="my-8">
            <img className='rounded-lg w-full' src={cover} alt="" />
            <div className='flex justify-between my-8 items-center'>
                <div className='flex gap-3 '>
                    <img className='w-[60px]' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex gap-2'>
                      <p>{reading_time} min read</p>
                      <button 
                      onClick={()=>handleAddToBookmark(blog)}><BsBookmarks /></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
           <div className='my-8'>
           {
               hashtags.map((hash,idx)=> <span key={idx}><a href="">#{hash}</a></span>)
            }
           </div>
           <button onClick={()=>handleReadingTime(reading_time)} className='btn font-bold text-amber-700 underline'>Mark As Read</button>
        </div>
    );
};


Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;