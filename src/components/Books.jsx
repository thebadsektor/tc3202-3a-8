import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";

export default function Books() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const imagesRef = ref(storage, "storybooks/");

      try {
        const result = await listAll(imagesRef);
        const imagePromises = result.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          const name = itemRef.name;
          return { url, name };
        });

        const imageData = await Promise.all(imagePromises);
        setImages(imageData);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const handleUsePhoto = () => {
    alert(`You used: ${selectedImage.name}`);
    // Handle logic here (e.g. pass URL to another component, save to DB, etc.)
    setSelectedImage(null); // Close modal
  };

  return (
    <div className="Collections bg-gradient-to-br from-one to-six pt-40 min-h-screen min-w-full px-4">
      <h1 className="text-4xl md:text-6xl font-narrAIte font-semibold text-softBlack mb-8 text-center">Collections</h1>

      {loading ? (
        <p className="text-white text-xl text-center">Loading books...</p>
      ) : (
        <div className="flex flex-wrap gap-6 justify-center">
          {images.map((image, index) => (
            <div key={index} className="text-center">
              <img
                src={image.url}
                alt={image.name}
                className="w-[200px] h-[300px] object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(image)}
              />
              <p className="text-softBlack font-semibold font-narrAIte mt-4 text-sm max-w-[200px] mx-auto text-ellipsis overflow-hidden whitespace-normal line-clamp-2">
                {image.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-creamyWhite p-12 rounded-3xl shadow-lg w-full max-w-sm text-center relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-6 text-gray-600 hover:text-black"
            >
              ✕
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.name}
              className="w-[200px] h-[300px] object-cover rounded-lg mb-4 mx-auto"
            />
            <h2 className="text-xl font-narrAIte font-semibold mb-2">{selectedImage.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")}</h2>
            <button
              onClick={handleUsePhoto}
              className="bg-eight text-one font-narrAIte font-semibold px-4 py-2 rounded-3xl hover:bg-six transition"
            >
              Generate Story
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
