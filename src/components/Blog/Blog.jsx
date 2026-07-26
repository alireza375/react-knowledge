import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmarks }) => {
    const {title, cover, author, author_img, reading_time, 
        posted_date, hashtags} = blog;
    return (
        <div>
            <img src={cover} alt='' />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt='' />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmarks(blog)} 
                    className='ml-2 text-2xl text-red-600'>
                        <FaBookmark />
                    </button>
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            {
                hashtags.map((hash, idx) => <spam key={idx}><a href="">#{hash}</a></spam>)
            }
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmarks: PropTypes.func
}

export default Blog;