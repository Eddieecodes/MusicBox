import PropTypes from "prop-types";

const DisplaySongs = ({ allSongs, playSong }) => {
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
          <div
            key={song.id}
            className="flex space-x-8 p-4 rounded-lg mb-2 max-w-xs md:max-w-sm lg:max-w-full  hover:bg-gray-700 cursor-pointer`"
            onClick={() => playSong(song)}
          >
            <div className="">
              <img
                src="/assets/musicIcon.svg"
                alt="music-icon"
                className="rounded-lg w-16 h-16 object-cover"
              />
            </div>
            <div>
              <h2 className="text-lg  font-bold truncate">{song.title}</h2>
              <p className="text-sm ">
                {song.artist} {song.duration}
              </p>
            </div>
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
  playSong: PropTypes.func.isRequired,
};
export default DisplaySongs;
