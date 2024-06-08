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
  <div className="min-h-screen flex flex-col  ">
    <div className=" p-6">
      <p className='font-semibold'>Add Music</p>
    </div>
  <div className="md:flex-1 flex justify-center items-center">
    <div className="flex flex-col bg-uploadBackground rounded-md p-8">
      <input
        type="file"
        onChange={handleFileUpload}
        className="mt-1 block w-full text-sm text-white bg-gray-900/30 p-6 rounded-lg  cursor-pointer focus:outline-none"
      />
      <div className='flex mt-4 justify-between items-center'>
        <label className="border border-customPurple px-5 py-2 text-sm font-medium  ">Upload Music</label>
        <button className='bg-customPurple px-4 py-1 rounded-lg '>Add</button>
      </div>
    </div>
  </div>
</div>
  );
};

export default Upload;
