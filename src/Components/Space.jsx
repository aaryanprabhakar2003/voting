import React from 'react'
import toast, { Toaster } from "react-hot-toast";

const Space = () => {

   const handleButtonClick = () => {
     toast.success("Successfully toasted!");
   };
  return (
    <div>
      <button onClick={handleButtonClick}>Make me a toast</button>
      <Toaster />

    </div>
  );
}

export default Space