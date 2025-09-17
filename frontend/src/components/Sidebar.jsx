import React from "react";
import { FiSettings, FiFileText, FiBarChart2, FiUser } from "react-icons/fi";
import { IoCloudUploadSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
      <div className="flex flex-col gap-4">
        <div className="flex text-2xl items-center gap-2 cursor-pointer hover:text-blue-300"><FiFileText /> Contracts</div>
        <div className="flex text-2xl items-center gap-2 cursor-pointer hover:text-blue-300"><FiBarChart2 /> Insights</div>
        <div className="flex text-2xl items-center gap-2 cursor-pointer hover:text-blue-300"><FiSettings /> Reports</div>
        <Link to="/UploadPage">
          <div className="flex text-2xl items-center gap-2 cursor-pointer hover:text-blue-300">
            <IoCloudUploadSharp /> Uploads
          </div>
        </Link>
        <div className="flex text-2xl items-center gap-2 cursor-pointer hover:text-blue-300"><FiUser /> Settings</div>
      </div>
    </div>
  );
};

export default Sidebar;
