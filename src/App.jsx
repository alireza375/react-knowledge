import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  return (
    <>
      <Header />
      <div className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <BookMarks bookmarks={bookmarks}/>
      </div>
    </>
  )
}

export default App
