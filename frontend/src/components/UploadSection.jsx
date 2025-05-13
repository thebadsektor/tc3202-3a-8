import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import BookAnimation from "../assets/Books.json";
import {FadeInWhenVisible} from "../animations/FadeInWhenVisible";

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
    const [abortController, setAbortController] = useState(null);

    const translations = {
        en: {
            uploadImage: "Upload Your Image",
            generate: "Generate",
            processing: "Processing...",
            selected: "Selected",
            descriptionTitle: "Short Story",
            close: "Close",
            cancel: "Cancel",
            messages: ["Generating Description...", "Converting to Audio...", "Please Wait..."],
        },
        tl: {
            uploadImage: "I-Upload ang Imahe",
            generate: "Lumikha ng Kwento",
            processing: "Pinoproseso...",
            selected: "Napili",
            descriptionTitle: "Maikling Kwento",
            close: "Isara",
            cancel: "Ikansela",
            messages: ["Lumilikha ng Kwento...", "Ginagawang tunog...", "Maghintay..."],
        }
    };

    const t = translations[language];

    const handleCloseLoading = () => {
        const confirmClose = window.confirm(
            language === "en"
                ? "Are you sure you want to close this? Unsaved results will be lost."
                : "Sigurado ka ba? Lahat ng resulta ay mawawala."
        );
        if (confirmClose) {
            if (abortController) {
                abortController.abort();
            }
            setLoading(false);
        }
    };

    const handleCloseModal = () => {
        const confirmClose = window.confirm(
            language === "en"
                ? "Are you sure you want to close this? Unsaved results will be lost."
                : "Sigurado ka ba? Lahat ng resulta ay mawawala."
        );
        if (confirmClose) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (loading) {
            const interval = setInterval(() => {
                setMessageIndex((prev) => (prev + 1) % t.messages.length);
            }, 10000);
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
    
        const controller = new AbortController();
        setAbortController(controller);        
    
        try {
            const formData = new FormData();
            formData.append("file", image);
    
            const response = await fetch(`http://127.0.0.1:8000/create-story/?language=${language}`, {
                method: "POST",
                body: formData,
                signal: controller.signal, 
            });
    
            if (!response.ok) throw new Error("Failed to process image");
    
            const data = await response.json();
            setDescription(data.description || (language === "en" ? "No description found." : "Bigong Nagawa."));
            setAudioSrc(`data:audio/mpeg;base64,${data.audio_base64}`);
            setShowModal(true);
        } catch (err) {
            if (err.name === "AbortError") {
                setError(language === "en" ? "Generation cancelled." : "Paglikha ay kinansela");
            } else {
                setError(err.message);
            }
        } finally {
            setLoading(false);
            setAbortController(null);
        }
    };    

    return (

        <div className="Background bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">
            
            <FadeInWhenVisible>
            <div className="upload-section p-10 flex flex-col items-center rounded-3xl md:mt-10 justify-center gap-4 bg-gradient-to-br from-one to-six relative">

            {loading && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white rounded-2xl p-10 flex flex-col items-center justify-center shadow-2xl">
                        <Lottie animationData={BookAnimation} className="w-52 h-52" />
                        <p className="text-gray-700 text-sm font-semibold italic font-narrAIte mb-6 text-center">
                            {t.messages[messageIndex]}
                        </p>
                        <button 
                            onClick={handleCloseLoading}
                            className="bg-eight text-one font-semibold px-6 py-2 rounded-full hover:bg-six transition">
                            {t.cancel}
                        </button>
                    </div>
                </div>
            )}

            <div className="UploadCard bg-white rounded-3xl px-12 py-10 shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-narrAIte font-bold text-softBlack mb-6 text-center">{t.uploadImage}</h2>

                <div className="flex mb-8 bg-gray-100 rounded-full p-1 w-64 mx-auto">
                    <button 
                        onClick={() => setLanguage('en')} 
                        className={`flex-1 py-2 rounded-full text-sm font-narrAIte font-medium transition-all duration-300 ${language === 'en' ? 'bg-eight text-white shadow-md' : 'text-gray-600'}`}
                    >
                        English
                    </button>
                    <button 
                        onClick={() => setLanguage('tl')} 
                        className={`flex-1 py-2 rounded-full text-sm font-narrAIte font-medium transition-all duration-300 ${language === 'tl' ? 'bg-eight text-white shadow-md' : 'text-gray-600'}`}
                    >
                        Tagalog
                    </button>
                </div>

                <div className="w-full mb-6">
                <label className="block cursor-pointer">
                    <div className="w-full h-40 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center hover:border-eight transition-all duration-300">
                        {imagePreview ? (
                            <div className="relative w-full h-full">
                                <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-xl">
                                    <span className="text-white font-narrAIte font-medium text-sm">Change Image</span>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center">
                                <svg className="w-10 h-10 mx-auto mb-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                </svg>
                                <p className="text-sm text-gray-500 font-narrAIte">{t.uploadImage}</p>
                            </div>
                        )}
                    </div>
                    <input 
                        type="file" 
                        accept="image/*" 
                        onChange={handleImageChange} 
                        className="hidden"
                    />
                </label>
                
                {image && (
                    <p className="text-gray-500 font-narrAIte text-sm text-center mt-2">
                        <span className="font-medium text-eight">{image.name}</span>
                    </p>
                )}
            </div>

                <div className="flex justify-center mt-6">
                    <button
                        onClick={handleUpload} 
                        disabled={!image || loading} 
                        className="relative bg-eight text-white text-base font-bold font-narrAIte rounded-full overflow-hidden py-3 px-8 w-full max-w-xs hover:shadow-lg transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        <div className="relative z-10 flex items-center justify-center">
                            {loading ? (
                                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <span className="mr-2"></span>
                            )}
                            {loading ? t.processing : t.generate}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-eight to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </button>
                </div>

                {error && <p className="mt-3 text-red-500 font-narrAIte text-sm text-center">{error}</p>}
            </div>

            {showModal && (
                <div className="modal fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
                    <div className="bg-creamyWhite p-6 md:p-10 rounded-3xl shadow-2xl mt-20 mb-10 flex flex-col md:flex-row w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="w-1/2 pr-6 flex flex-col">
                            <div className="Preview rounded-xl flex-grow">
                                {imagePreview && <img src={imagePreview} alt="Preview" className="w-full h-96 object-cover rounded-xl mx-auto" />}
                                {image && <p className="text-md font-bold font-narrAIte text-eight italic mt-4 text-center">{image.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")}
                                </p>}
                            </div>
                            <div className="mt-6">
                                {audioSrc && (
                                    <audio controls autoPlay className="w-full">
                                        <source src={audioSrc} type="audio/mpeg" />
                                    </audio>
                                )}
                            </div>
                        </div>
                        <div className="w-1/2 pl-6">
                            <div className="Description shadow-3xl rounded-xl h-full flex flex-col">
                                <h2 className="text-2xl text-softBlack font-narrAIte font-bold mb-4">{t.descriptionTitle}</h2>
                                <div className="overflow-y-auto max-h-96 pr-2 flex-grow mb-4">
                                    <p className="text-softBlack font-narrAIte">{description}</p>
                                </div>
                                <div className="text-right mt-2">
                                    <button 
                                        onClick={handleCloseModal}
                                        className="bg-eight text-one font-semibold font-narrAIte px-6 py-2 rounded-full hover:bg-six transition">
                                        {t.close}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
            </FadeInWhenVisible>
        </div>
        
    );
}
