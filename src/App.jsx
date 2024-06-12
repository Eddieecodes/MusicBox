import { useState } from "react";
import PropTypes from "prop-types";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";
import DisplaySongs from "./components/DisplaySong";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";

// npm install dexie to create dexie js
// created database called musicbox
const db = new Dexie("MusicBox");
db.version(1).stores({
  Songs: "++id, title, artist, duration",
});

const { Songs } = db;

function App() {
  // uselivequery allows the app to watch for CRUD in db, it also requires a dependency array
  const allSongs = useLiveQuery(() => Songs.toArray(), []);
  console.log(allSongs);

  // add songs function
  const addSongs = async () => {
    const songField = document.querySelector("#fileDisplay"); // note, i think it's not properly reading the filedisplay id
    console.log(songField.value);

    await Songs.add({
      song: songField.value,
    });
    // this ought to refresh the filedisplay to be empty after add is clicked.
    songField.value = "";
  };

  // state to handle the current view
  const [currentView, setCurrentView] = useState("upload");

  const handleClickUpload = () => {
    setCurrentView("upload");
    toggleSidebar();
    console.log("clicked add");
  };

  const handleClickSong = () => {
    setCurrentView("songs");
    toggleSidebar();
    console.log("clicked song");
  };

  // state to toggle the sidebar when menu icon is clicked
  const [IsOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!IsOpen);
  };

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center">
      <Sidebar
        onButtonClick={handleClickUpload}
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
      <div className="flex-1 ml-0 md:ml-64">
        {currentView === "upload" && <Upload onAddClick={addSongs} />}
        {currentView === "songs" && <DisplaySongs allSongs={allSongs} />}
        <MusicPlayer />
      </div>
    </div>
  );
}

// prop validation
App.proTypes = {
  children: PropTypes.node,
};

export default App;
