// src/components/Sidebar.js
import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({ onButtonClick, IsOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-black border-r border-customPurple p-6 flex-col items-center transition-transform transform ${
        IsOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      } md:flex md:fixed md:left-0 md:top-0 md:h-full md:w-64 md:bg-black md:border-r md:border-customPurple md:p-6 md:flex-col md:items-center`}
    >
      <div className="mb-6">
        <img
          src="src/assets/logo.svg"
          alt="App Logo"
          className="h-12 mx-auto"
        />
      </div>
      <div className="flex items-center space-x-2">
        <img src="src/assets/mySongs.svg" alt="My Songs" className="h-12 w-8" />
        <span className="font-bold font-serif">My Songs</span>
      </div>
      <button
        className="flex items-center space-x-2 mt-4"
        onClick={onButtonClick}
      >
        <img
          src="src/assets/addMusic.svg"
          alt="Add Music Icon"
          className="h-8 w-8"
        />
        <span className="font-semibold">Add Music</span>
      </button>
    </div>
  );
};

Sidebar.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  IsOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
