import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToBookmarks = blog => {
    console.log('bookmark adding soon')
  }
  return (
    <>
      <Header />
      <div className='md:flex'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks} />
        <BookMarks />
      </div>
    </>
  )
}

export default App
