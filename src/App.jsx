import { useState } from "react";
import PropTypes from "prop-types";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";

function App() {
  const [showUpload, setShowUpload] = useState(false);
  const handleClick = () => {
    setShowUpload(true);
  };

  const [IsOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!IsOpen);
  };
  return (
    <div className="min-h-screen  bg-black text-white flex justify-center items-center">
      <Sidebar
        onButtonClick={handleClick}
        IsOpen={IsOpen}
        toggleSidebar={toggleSidebar}
      />

      <button
        className="fixed top-2 right-4 hover:cursor-pointer md:hidden"
        onClick={toggleSidebar}
      >
        <img src="src/assets/hamburgerMenu.svg" alt="menu-icon" />
      </button>

      <div className="flex-1  ml-0 md:ml-64">
        {showUpload && <Upload />}
        <MusicPlayer />
      </div>
    </div>
  );
}
App.proTypes = {
  children: PropTypes.node,
};
export default App;
