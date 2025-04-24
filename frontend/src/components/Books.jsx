import React, { useEffect, useState } from "react";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { storage } from "../firebase";
import { fadeInUp, scaleOnHover, containerVariants } from "../animations/variants";
import FadeInBounce from "../animations/FadeInBounce";
import { motion } from "framer-motion";

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

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = selectedImage.url;
    link.download = selectedImage.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSelectedImage(null);
  };  

  return (
      <div className="Background bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">

        <div className="Title relative bg-gradient-to-br from-one to-six rounded-3xl my-10 p-10 md:p-20 shadow-xl overflow-hidden flex flex-col">
          <motion.div {...fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-narrAIte font-semibold text-softBlack mb-2 text-center">Collections</h1>
            <p className="text-center font-narrAIte md:line-clamp-2 max-w-2xl mx-auto text-softBlack">Explore our curated collection of book covers. Pick one that inspires you and let
            <span className="font-bold"> narr</span><span className="font-bold text-eight">AI</span><span className="font-bold">te</span> craft a unique story from it.
            </p>
          </motion.div>
        </div>


        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-6 justify-center mb-6 md:mb-12"
        >
          {images.map((image, index) => (
            <FadeInBounce key={index} delay={index * 0.05}>
              <div className="text-center">
                <img
                  src={image.url}
                  alt={image.name}
                  className="w-[150px] h-[250px] md:w-[220px] md:h-[350px] object-cover rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => setSelectedImage(image)}
                />
                <p className="text-softBlack font-semibold font-narrAIte mt-4 text-sm max-w-24 md:max-w-[200px] mx-auto text-ellipsis whitespace-normal line-clamp-2">
                  {image.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")}
                </p>
              </div>
            </FadeInBounce>
          ))}
        </motion.div>

        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="backdrop-blur-xl border-2 border-creamyWhite mx-6 md:mx-0 p-10 rounded-3xl shadow-lg w-full max-w-sm text-center relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-6 text-xl text-creamyWhite hover:text-gray-300"
              >
                ✕
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.name}
                className="w-[150px] h-[250px] md:w-[220px] md:h-[350px] border-2 border-creamyWhite object-cover rounded-lg mb-4 mx-auto"
              />
              <h2 className="text-xl text-creamyWhite font-narrAIte font-semibold mb-2">{selectedImage.name.replace(/\.(jpg|jpeg|png|gif)$/i, "")}</h2>
              <motion.div {...scaleOnHover}>
                <button
                  onClick={handleDownloadImage}
                  className="background-blur-xl border-creamyWhite text-creamyWhite font-narrAIte border-2 rounded-3xl py-2 px-4 mt-2 text-center hover:text-one transition-all"
                >
                  Download Image
                </button>
            </motion.div>
            </div>
          </div>
        )}
        </div>
  );
}
