import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div className="border-4 text-center mb-4 p-4 border-blue-400">
               <h3 className="text-4xl">Reading Time:{readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Book Marks:{bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;