import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 my-8">
            <div>
                <h3 className='text-2xl font-bold text-sky-700 py-5 mb-5 px-3 rounded-xl bg-sky-100 border-2 border-sky-800'>Spent Time On Read : {readingTime}</h3>
            </div>
            <h2 className="text-2xl font-bold px-3">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark 
                    key={bookmark.id}
                    bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingTime: PropTypes.number
}
export default Bookmarks;