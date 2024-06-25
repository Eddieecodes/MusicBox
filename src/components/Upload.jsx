import React, { useState } from "react";
import PropTypes from "prop-types";
// import jsmediatags from "jsmediatags";

const Upload = ({ onAddClick }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const fileDisplay = document.getElementById("fileDisplay");
    const fileNames = [];

    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        fileNames.push(file.name);
        setSelectedFiles((prevFiles) => [...prevFiles, file]);
      }

      fileDisplay.innerHTML = fileNames
        .map(
          (fileName) =>
            `<div class="inline-block m-2 bg-customPurple border px-3 border-purple-600 w-20 rounded-md overflow-hidden overflow-ellipsis whitespace-nowrap">${fileName}</div>`
        )
        .join("");
    } else {
      fileDisplay.innerHTML = "No file chosen";
      setSelectedFiles([]);
    }
  };

  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col">
      <div className="p-6">
        <p className="font-semibold text-2xl ml-7 md:ml-0">Add Music</p>
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <div className="flex flex-col bg-uploadBackground rounded-md p-8">
          <div
            className="mt-1 w-full text-sm text-white bg-gray-900/100 p-6 rounded-lg cursor-pointer focus:outline-none"
            id="fileDisplay"
          ></div>
          <div className="flex mt-4 justify-between items-center gap-3">
            <button
              className="border border-customPurple px-3 py-2 text-sm font-normal hover:cursor-pointer rounded"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                multiple // Allow multiple file selection
              />
              Upload Music
            </button>
            <button
              className="bg-customPurple px-8 py-1 rounded hover:cursor-pointer"
              onClick={() => onAddClick(selectedFiles)}
              // onClick={() => onAddClickAlert()}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Upload.propTypes = {
  onAddClick: PropTypes.func.isRequired,
  // onAddClickAlert: PropTypes.func.isRequired,
};

export default Upload;
