import PropTypes from "prop-types";

const DisplaySongs = ({ allSongs }) => {
  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col p-2  ">
      <div className=" p-6 flex justify-between">
        <p className="font-semibold text-xl md:text-3xl">My Songs</p>
        <input
          type="search"
          className="p-2 border-2 rounded-xl w-52 bg-transparent"
          placeholder="Search for your songs"
        />
      </div>
      {allSongs?.length ? (
        allSongs.map((song) => (
          <div key={song.id} className="bg-gray-800 p-4 rounded-lg mb-2">
            <h2 className="text-lg font-bold">{song.title}</h2>
            <p className="text-sm text-gray-400">{song.artist}</p>
            <p className="text-sm text-gray-400">{song.duration}</p>
          </div>
        ))
      ) : (
        <p className="text-center mt-4">No songs available</p>
      )}
    </div>
  );
};

DisplaySongs.propTypes = {
  allSongs: PropTypes.array.isRequired,
};
export default DisplaySongs;
