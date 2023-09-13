import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks,setBookmarks]= useState([]);
  const [readingTime, setReadingTime]=useState(0);
 
  const handleAddTime = time => {
    setReadingTime(readingTime + time )
  }
  const handleAddBookmark = blog =>{
    const newBook = [...bookmarks, blog];
    setBookmarks(newBook);
  }

  return (
    < >
      <div className='max-w-5xl mx-auto'>
      <Header></Header>
      <div className='flex'>
        <Blogs handleAddBookmark = {handleAddBookmark}
        handleAddTime={handleAddTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}
        ></Bookmarks>

      </div>
      </div>
    </>
  )
}

export default App
