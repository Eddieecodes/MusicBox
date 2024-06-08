import { useState } from 'react'


import MusicPlayer from './components/MusicPlayer'
import Sidebar from './components/Sidebar'


function App() {


  return (
    <div className="min-h-screen  bg-black text-white flex justify-center items-center">
     <Sidebar/>
     <button className='fixed top-2 right-4 hover:cursor-pointer md:hidden'><img src="src/assets/hamburgerMenu.svg" alt="" /></button>
      <div className="flex-1  ml-0 md:ml-64">
        <MusicPlayer />
      </div>
    </div>
  )
}

export default App
