import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // Remove the read blog from bookmark
    // console.log('remove bookmark', id);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
      <Header />
      <div className='md:flex max-w-7xl mx-auto'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} 
        handleMarkAsRead= {handleMarkAsRead}/>
        <BookMarks readingTime={readingTime} bookmarks={bookmarks}/>
      </div>
    </>
  )
}

export default App
