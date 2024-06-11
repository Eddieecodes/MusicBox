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
      {allSongs?.map((song) => (
        <div className="bg-red-700 h-14 p-2" key={song.id}>
          <h2>No songs</h2>
        </div>
      ))}
    </div>
  );
};

DisplaySongs.propTypes = {
  allSongs: PropTypes.func.isRequired,
};
export default DisplaySongs;
