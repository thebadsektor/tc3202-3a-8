import { useState } from "react";

export default function UploadSection() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleUpload = () => {
        if (file) {
            console.log("Uploading:", file.name);
            // Add upload logic here (e.g., send to server or cloud storage)
        } else {
            alert("Please select a file first.");
        }
    };

    return (
        <div className="upload-section flex flex-col items-center justify-center gap-4 p-6 border-2 border-dashed border-gray-300 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-700">Upload Your File</h2>
            <input
                type="file"
                onChange={handleFileChange}
                className="file-input"
            />
            {file && (
                <p className="text-gray-500 mt-2">Selected: {file.name}</p>
            )}
            <button
                onClick={handleUpload}
                className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
                Upload
            </button>
        </div>
    );
}
