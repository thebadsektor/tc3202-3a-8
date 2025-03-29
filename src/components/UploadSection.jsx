import { useState } from "react";

export default function UploadSection() {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            setError(""); // Clear any previous errors
        }
    };

    const handleUpload = async () => {
        if (!image) return;
    
        setLoading(true);
        setDescription("");
        setError("");
    
        try {
            const formData = new FormData();
            formData.append("file", image);
    
            const response = await fetch("http://127.0.0.1:8000/describe-image/", {  // Use your FastAPI endpoint
                method: "POST",
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error("Failed to process image");
            }
    
            const data = await response.json();
            setDescription(data.description || "No description found.");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };    

    return (
        <div className="upload-section h-screen w-full flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-one to-six">
            <div className="UploadCard bg-one rounded-3xl px-10 py-10 shadow-xl">
                <h2 className="text-2xl font-narrAIte font-bold text-eight mb-4">Upload Your Image</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="file-input mb-3"
                />

                {imagePreview && (
                    <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-40 h-40 object-cover rounded-lg mb-3"
                    />
                )}

                {image && <p className="text-gray-500 mt-2">Selected: {image.name}</p>}

                <button
                    onClick={handleUpload}
                    disabled={!image || loading}
                    className={`px-4 py-2 font-narrAIte font-semibold rounded-lg transition ${
                        !image || loading ? "bg-gray-400 cursor-not-allowed" : "bg-eight text-one hover:bg-seven"
                    }`}
                >
                    {loading ? "Processing..." : "Generate"}
                </button>

                {description && <p className="mt-4 text-lg font-semibold text-eight">{description}</p>}
                {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
            </div>
        </div>
    );
}
