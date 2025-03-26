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
        <div className="upload-section h-screen w-full flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-one to-six">
            <div className="UploadCard bg-one rounded-3xl px-10 py-10 shadow-xl">
                <h2 className="text-2xl font-narrAIte font-bold text-eight mb-4">Upload Your Image</h2>
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
                    className="px-4 py-2 bg-eight text-one font-narrAIte font-semibold rounded-lg hover:bg-seven transition"
                >
                    Generate
                </button>
            </div>  
        </div>
    );
}
