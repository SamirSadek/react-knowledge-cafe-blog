
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleReadingTime = time =>{
    
    const newReadingTime = readingTime+ time
    setReadingTime(newReadingTime)
    console.log("time :" , readingTime)
  }

  const handleAddToBookmark = blog =>{
     const newBookmarks = [...bookmarks, blog];
     setBookmarks(newBookmarks);

  }
  return (
    <>
      <Header></Header>
      <main className='md:flex justify-between p-4 gap-8  max-w-7xl mx-auto'>
         <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
         <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
