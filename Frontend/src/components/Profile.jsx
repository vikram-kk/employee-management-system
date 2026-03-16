import { useState, useRef } from "react";
import { setProfilePic } from "../services/userService";

export default function Profile() {
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Triggers the file dialog
    }
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
    const formdata = new FormData();
    console.log(formdata);
    formdata.append("image", image);
    setProfilePic(formdata);
  };

  // const handleSubmit = () => {};

  return (
    <div>
      <div className="grid grid-cols-4">
        <div className="flex flex-col gap-2">
          <div className="w-50 bg-amber-300 relative rounded-full h-50 flex-center overflow-hidden border-4 border-gray-300">
            <img
              src={`${image ? URL.createObjectURL(image) : null}`}
              className="w-full absolute transform translate-y-8"
              alt="profile_img"
            />
          </div>
          <div className="flex-center  pr-6">
            <label
              className="font-bold border-2 border-gray-300 p-2 rounded-lg "
              onClick={handleDivClick}
            >
              {image ? "Change Profile Picture" : "Upload Profile Pic"}
            </label>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleFileChange}
            />
            {/* <button type="submit" onClick={handleSubmit}>
              submit
            </button> */}
          </div>
        </div>
        <div className="col-span-3 bg-gray-50 shadow-lg py-6 px-4 rounded">
          <h1 className="text-3xl font-bold">Vikram Thakur</h1>
          <h2 className="text-xl">admin</h2>
          <h2 className="text-xl">Department</h2>
        </div>
      </div>
    </div>
  );
}
