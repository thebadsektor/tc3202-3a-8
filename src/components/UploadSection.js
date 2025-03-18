import { useState } from "react";

export default function UploadSection() {
  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const uploadedFile = e.dataTransfer.files[0];
    if (uploadedFile) setFile(uploadedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  return (
    <div
      className={`p-6 border-2 border-dashed ${
        dragging ? "border-yellow-400 bg-yellow-50" : "border-gray-300"
      } rounded-lg text-center transition-all duration-300`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
    >
      {file ? (
        <p className="text-gray-600">✅ File uploaded: {file.name}</p>
      ) : (
        <p className="text-gray-600">
          Drag and drop an image here or click to upload
        </p>
      )}

      <input
        type="file"
        className="hidden"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="mt-4 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded transition-all">
        Upload
      </button>
    </div>
  );
}
