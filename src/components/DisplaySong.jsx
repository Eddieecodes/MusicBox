import PropTypes from "prop-types";

const DisplaySongs = ({ allSongs }) => {
  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col p-2">
      <div className="p-6 flex justify-between">
        <p className="font-semibold text-xl md:text-3xl">My Songs</p>
        <input
          type="search"
          className="p-2 border-2 rounded-xl w-52 bg-transparent"
          placeholder="Search for your songs"
        />
      </div>
      {allSongs?.length > 0 ? (
        allSongs.map((song) => (
          <div className="bg-gray-400 h-14 p-2" key={song.id}>
            <h2>{song.title}</h2>
            <p>
              {song.artist} {song.duration}
            </p>
            {/* <p>{song.duration}</p> */}
          </div>
        ))
      ) : (
        <p>No songs available</p>
      )}
    </div>
  );
};

DisplaySongs.propTypes = {
  allSongs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      artist: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DisplaySongs;
