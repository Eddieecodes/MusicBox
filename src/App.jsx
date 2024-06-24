import { useState, useRef } from "react";
import PropTypes from "prop-types";
import MusicPlayer from "./components/MusicPlayer";
import Sidebar from "./components/Sidebar";
import Upload from "./components/Upload";
import DisplaySongs from "./components/DisplaySong";
import Dexie from "dexie";
import { useLiveQuery } from "dexie-react-hooks";
import jsmediatags from "jsmediatags";

// Create the Dexie database
const db = new Dexie("MusicBox");

//declare tables
db.version(1).stores({
  Songs: "++id, title, artist, duration",
});

const { Songs } = db;

function App() {
  const allSongs = useLiveQuery(() => Songs.toArray(), []);
  //to read the file and convert the time from second to minute-second
  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  //async function to add the songs to the db
  const addSongs = async (files) => {
    if (!files.length) return; //checks if no file is uploaded

    for (const file of files) {
      jsmediatags.read(file, {
        onSuccess: async (tag) => {
          const { title, artist } = tag.tags;
          const audio = new Audio(URL.createObjectURL(file));
          audio.addEventListener("loadedmetadata", async () => {
            const duration = audio.duration;
            const formattedDuration = formatDuration(duration);

            const fileData = await file.arrayBuffer(); // Convert the file to an ArrayBuffer

            await Songs.add({
              title: title || file.name,
              artist: artist || "Unknown Artist",
              duration: formattedDuration,
              fileData, // Store the file data as an ArrayBuffer
            });
          });
        },
        onError: (error) => {
          console.log(error);
        },
      });
    }
  };

  const [showUpload, setShowUpload] = useState(true); // Default to show upload component
  const [showSong, setShowSong] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const audioRef = useRef(null);

  const playSong = async (song) => {
    setCurrentSong(song);

    if (audioRef.current) {
      audioRef.current.pause();

      const handleCanPlay = () => {
        audioRef.current
          .play()
          .catch((error) => console.log("Error playing audio:", error));
        audioRef.current.removeEventListener("canplay", handleCanPlay);
      };

      // Remove previous event listener if any
      audioRef.current.removeEventListener("canplay", handleCanPlay);

      // Create a blob URL from the file data
      const blob = new Blob([song.fileData]);
      const blobUrl = URL.createObjectURL(blob);

      audioRef.current.src = blobUrl;
      audioRef.current.load();
      audioRef.current.addEventListener("canplay", handleCanPlay);
    }
  };

  const handleClick = () => {
    setShowUpload(true);
    setShowSong(false);
    setIsOpen(false); // Close the sidebar on mobile after clicking the button
  };

  const handleClickSong = () => {
    setShowUpload(false);
    setShowSong(true);
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!IsOpen);
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
        <img src="/assets/hamburgerMenu.svg" alt="menu-icon" />
      </button>
      <div className="flex-1 ml-0 md:ml-64">
        {showUpload && <Upload onAddClick={addSongs} />}
        {showSong && <DisplaySongs allSongs={allSongs} playSong={playSong} />}
        {currentSong && <MusicPlayer song={currentSong} audioRef={audioRef} />}
      </div>
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
