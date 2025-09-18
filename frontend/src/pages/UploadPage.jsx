import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// helper to get cookie by name
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

const UploadsPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFiles = async (event) => {
    const files = Array.from(event.target.files);

    const token = getCookie("token"); // get token from cookie
    if (!token) {
      alert("You are not logged in!");
      return;
    }

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);

      try {
        const res = await axios.post(
          "https://assignment-fullstack-5.onrender.com/upload",
          formData,
          {
            headers: { 
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}` // send token in header
            },
          }
        );

        setUploadedFiles((prev) => [
          ...prev,
          {
            file,
            preview: URL.createObjectURL(file),
            status: "✅ Uploaded",
            docId: res.data.docId,
            chunksCount: res.data.chunksCount,
          },
        ]);
      } catch (err) {
        console.error("Upload error:", err);
        setUploadedFiles((prev) => [
          ...prev,
          {
            file,
            preview: URL.createObjectURL(file),
            status: "❌ Failed",
          },
        ]);
      }
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Uploaded Files</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Upload</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center p-4 border border-dashed rounded h-40">
            <p className="mb-2 text-gray-500">
              Drag & drop files here or click below
            </p>
            <input
              type="file"
              multiple
              onChange={handleFiles}
              className="cursor-pointer text-black"
            />
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-6 grid grid-cols-3 gap-4">
        {uploadedFiles.map((f, idx) => (
          <div key={idx} className="border rounded p-2 flex flex-col items-center">
            {f.file.type.startsWith("image/") && (
              <img
                src={f.preview}
                alt={f.file.name}
                className="w-24 h-24 object-cover rounded"
              />
            )}
            <p className="mt-2 text-sm font-medium">{f.file.name}</p>
            <span className={f.status.includes("✅") ? "text-green-500" : "text-red-500"}>
              {f.status}
            </span>
            {f.docId && (
              <p className="text-xs text-gray-500">
                ID: {f.docId} ({f.chunksCount} chunks)
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadsPage;
