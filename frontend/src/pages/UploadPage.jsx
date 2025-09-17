import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const UploadsPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFiles = (event) => {
    const files = Array.from(event.target.files).map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      status: "success",
    }));
    setUploadedFiles((prev) => [...prev, ...files]);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl  font-bold mb-4">Uploaded Files listed</h1>

      
      <Dialog>
        <DialogTrigger asChild>
          <Button>Upload</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload Files</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center p-4 border border-dashed rounded h-40">
            <p className="mb-2 text-gray-500">Drag & drop files here or click below</p>
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
            <span className="text-green-500">{f.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UploadsPage;
