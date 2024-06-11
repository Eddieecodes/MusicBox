import { useState } from "react";
import PropTypes from "prop-types";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";
import DisplaySongs from "./components/DisplaySong";

function App() {
  //function to handle upload state
  const [showUpload, setShowUpload] = useState(false);
  const handleClick = () => {
    setShowUpload(true);
    console.log("clicked add");
  };

  //state to toggle the sidebar when menu icon is clicked
  const [IsOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!IsOpen);
  };
  //state/function to handle my songs
  const [showSong, setShowSong] = useState(false);
  const handleClickSong = () => {
    setShowSong(true);
    console.log("clicked song");
  };

  return (
    <div className="min-h-screen  bg-black text-white flex justify-center items-center">
      <Sidebar
        onButtonClick={handleClick}
        IsOpen={IsOpen}
        toggleSidebar={toggleSidebar}
        onButtonSongClick={handleClickSong}
      />

      <button
        className="fixed top-2 right-4 hover:cursor-pointer md:hidden"
        onClick={toggleSidebar}
      >
        <img src="src/assets/hamburgerMenu.svg" alt="menu-icon" />
      </button>
      <div className="flex-1  ml-0 md:ml-64">
        {showUpload && <Upload />}
        {showSong && <DisplaySongs />}
        <MusicPlayer />
      </div>
      
    </div>
  );
}
//prop validation
App.proTypes = {
  children: PropTypes.node,
};
export default App;
