// src/components/Upload.js
import React from "react";
// import PropTypes from "prop-types";

//function to handle fileupload
const Upload = () => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileDisplay = document.getElementById("fileDisplay");
    console.log("selected file", file);
    if (file) {
      // onUpload(file);
      fileDisplay.innerHTML = `${file.name}`;
    } else {
      fileDisplay.innerHTML = "No file choosen";
    }
  };

  return (
    <div className="min-h-screen mt-12 md:mt-0 flex flex-col  ">
      <div className=" p-6">
        <p className="font-semibold text-2xl ml-7 md:ml-0">Add Music</p>
      </div>
      <div className="md:flex-1 flex justify-center items-center">
        <div className="flex flex-col bg-uploadBackground rounded-md p-8">
          <div
            className="mt-1  w-full text-sm text-white bg-gray-900/30 p-6 rounded-lg  cursor-pointer focus:outline-none"
            id="fileDisplay"
          ></div>
          <div className="flex mt-4 justify-between items-center gap-3">
            <button
              className="border border-customPurple px-3 py-2 text-sm font-normal  hover:cursor-pointer rounded"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <input
                id="fileInput"
                type="file"
                onChange={handleFileUpload}
                style={{ display: "none" }}
              />
              Upload Music
            </button>
            <button className="bg-customPurple px-8 py-1 rounded hover:cursor-pointer">
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
// Upload.propTypes = {
//   onUpload: PropTypes.func.isRequired,
// };
export default Upload;
