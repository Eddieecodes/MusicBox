import React from "react";
import PropTypes from "prop-types";

const MusicPlayer = ({ song, audioRef }) => {
  
  return (
    
    <div className="fixed bottom-0 left-0 right-0 bg-red-500 p-4 flex items-center justify-between border-t border-gray-700">
      {song ? (
        <>
          <div className="text-white">
            <p className="text-lg font-bold">{song.title}</p>
            <p className="text-sm text-gray-400">{song.artist}</p>
          </div>
          <audio ref={audioRef} controls className="w-full" />
        </>
      ) : (
        <p className="text-white">No song selected</p>
      )}
    </div>
  );
};

MusicPlayer.propTypes = {
  song: PropTypes.shape({
    title: PropTypes.string,
    artist: PropTypes.string,
  }),
  audioRef: PropTypes.object.isRequired,
};

export default MusicPlayer;
