import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import BookAnimation from "../assets/Books.json";

export default function UploadSection() {
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [audioSrc, setAudioSrc] = useState("");
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [messageIndex, setMessageIndex] = useState(0);
    const [language, setLanguage] = useState("en");

    const translations = {
        en: {
            uploadImage: "Upload Your Image",
            generate: "Generate",
            processing: "Processing...",
            selected: "Selected",
            descriptionTitle: "Description",
            close: "Close",
            messages: ["Generating Description...", "Converting to Audio...", "Please Wait..."],
        },
        tl: {
            uploadImage: "Upload Your Image",
            generate: "Generate",
            processing: "Processing...",
            selected: "Selected",
            descriptionTitle: "Description",
            close: "Close",
            messages: ["Generating Description...", "Converting to Audio...", "Please Wait..."],
        }
    };

    const t = translations[language];

    const handleCloseModal = () => {
        const confirmClose = window.confirm(
            language === "en"
                ? "Are you sure you want to close this? Unsaved results will be lost."
                : "Are you sure you want to close this? Unsaved results will be lost."
        );
        if (confirmClose) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setMessageIndex((prev) => (prev + 1) % t.messages.length);
            }, 1500);
            return () => clearInterval(interval);
        }
    }, [loading, t.messages]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setImagePreview(URL.createObjectURL(file));
            setError("");
        }
    };

    const handleUpload = async () => {
        if (!image) return;

        setLoading(true);
        setDescription("");
        setAudioSrc("");
        setError("");

        try {
            const formData = new FormData();
            formData.append("file", image);

            const response = await fetch(`http://127.0.0.1:8000/describe-image/?language=${language}`, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw new Error("Failed to process image");

            const data = await response.json();
            setDescription(data.description || (language === "en" ? "No description found." : "No description found."));
            setAudioSrc(`data:audio/mpeg;base64,${data.audio_base64}`);
            setShowModal(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="upload-section h-screen w-full flex flex-col items-center justify-center gap-4 p-6 bg-gradient-to-br from-one to-six relative">

            <div className="LanguageCard">
                
            </div>

            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-40">
                    <div className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center shadow-2xl">
                        <Lottie animationData={BookAnimation} className="w-52 h-52" />
                        <p className="text-gray-700 font-medium text-lg mt-4 text-center">
                            {t.messages[messageIndex]}
                        </p>
                    </div>
                </div>
            )}

            <div className="UploadCard bg-white rounded-3xl px-12 py-10 shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-narrAIte font-bold text-softBlack mb-4 text-center">{t.uploadImage}</h2>

                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="w-full mb-4 file:mr-4 file:py-2 file:px-4 file:border-0 file:rounded-full file:bg-gray-300 file:text-sm file:font-semibold file:font-narrAIte"
                />

                {imagePreview && <img src={imagePreview} alt="Preview" className="w-40 h-40 object-cover rounded-xl mx-auto mb-4" />}
                {image && <p className="text-gray-500 font-narrAIte text-sm text-center mb-2">{t.selected}: {image.name}</p>}

                <div className="mb-4 flex flex-row">
                    <label className="text-softBlack font-narrAIte font-semibold mr-4">
                    Select Result Language:
                    </label>

                    <select 
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="bg-white px-6 py-2 rounded-3xl shadow-md text-sm font-narrAIte font-medium focus:outline-none"
                    >
                        <option value="en">English</option>
                        <option value="tl">Tagalog</option>
                    </select>
                </div>
                <div className="">
                    <button
                    onClick={handleUpload} 
                    disabled={!image || loading} 
                    className="group relative bg-eight h-16 w-64 border-2 border-ten text-one text-base font-bold font-narrAIte rounded-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:border-eight hover:text-three p-3 text-left before:absolute before:w-10 before:h-10 before:content[''] before:right-2 before:top-2 before:z-10 before:bg-indigo-500 before:rounded-full before:blur-lg before:transition-all before:duration-500 after:absolute after:z-10 after:w-16 after:h-16 after:content[''] after:bg-teal-400 after:right-6 after:top-4 after:rounded-full after:blur-lg after:transition-all after:duration-500 hover:before:right-10 hover:before:-bottom-4 hover:before:blur hover:after:-right-6 hover:after:scale-110"
                    >
                    {loading ? t.processing : t.generate}
                    </button>
                </div>

                {error && <p className="mt-3 text-red-500 font-narrAIte text-sm text-center">{error}</p>}
            </div>

            {showModal && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40">
                    <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl w-full mx-6 text-center">
                        <h2 className="text-2xl text-gray-800 font-bold mb-4">{t.descriptionTitle}</h2>
                        <p className="text-gray-700 mb-4">{description}</p>
                        {audioSrc && (
                            <audio controls autoPlay className="w-full mb-6">
                                <source src={audioSrc} type="audio/mpeg" />
                            </audio>
                        )}
                        <button 
                        onClick={handleCloseModal}
                        className="bg-eight text-one font-semibold px-6 py-2 rounded-full hover:bg-six transition">
                        {t.close}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
