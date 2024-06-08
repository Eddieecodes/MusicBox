// src/components/Upload.js
import React from 'react';

const Upload = ({ onUpload }) => {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload(file);
    }
  };

  return (
  <div className="min-h-screen mt-12 md:mt-0 flex flex-col  ">
    <div className=" p-6">
      <p className='font-semibold text-3xl'>Add Music</p>
    </div>
  <div className="md:flex-1 flex justify-center items-center">
    <div className="flex flex-col bg-uploadBackground rounded-md p-8">
      <input
        type="file"
        onChange={handleFileUpload}
        className="mt-1  w-full text-sm text-white bg-gray-900/30 p-6 rounded-lg  cursor-pointer focus:outline-none"
        id='fileInput'
      />
      <div className='flex mt-4 justify-between items-center'>
        <button className="border border-customPurple px-5 py-2 text-sm font-medium  hover:cursor-pointer">Upload Music</button>
        <button 
        onClick={() => document.getElementById('fileInput').click()}
        className='bg-customPurple px-8 py-1 rounded-lg hover:cursor-pointer'>Add</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Upload;
