import { Image, BookOpen, Sparkles, Heart } from "lucide-react";
import { FadeInWhenVisible } from "../animations/FadeInWhenVisible";

export default function FullFeatures() {
  const sections = [
    { num: 1, logo: <Sparkles className="w-[50px] h-[100px] mr-4" />, text: "Accessibility", paragraph: "narrAIte is thoughtfully designed with the specific needs of blind and visually impaired children in mind. It features large, high-contrast buttons to enhance usability and reduce accidental taps. Clear audio feedback and support for guided use by a parent or guardian create a safe and empowering learning environment." },
    { num: 2, logo: <Image className="w-[50px] h-[100px] mr-4" />, text: "Image Recognition", paragraph: "Powered by advanced artificial intelligence, the app features a highly accurate image recognition system that can identify a wide range of objects, people, and scenes captured in photos. This technology enables blind and visually impaired children to better understand their surroundings through real-time verbal descriptions generated from images. Whether it’s recognizing everyday household items, distinguishing between different people, or describing the setting of a scene, the AI works seamlessly to convert visual information into meaningful, easy-to-understand audio feedback. This not only enhances awareness but also supports learning and social engagement through a deeper connection with the world around them." },
    { num: 3, logo: <BookOpen className="w-[50px] h-[100px] mr-4" />, text: "Child-Friendly", paragraph: "narrAIte provides a safe, nurturing digital environment filled with age-appropriate, educational content tailored for young minds. Every activity and feature is designed to spark curiosity, encourage exploration, and support early childhood development. From interactive stories to engaging learning games, the content is crafted to stimulate imagination while reinforcing essential skills such as listening, memory, and basic problem-solving. With no exposure to harmful or inappropriate material, parents and guardians can feel confident that their children are learning and having fun in a secure space built just for them." },
    { num: 4, logo: <Heart className="w-[50px] h-[100px] mr-4" />, text: "Storytelling", paragraph: "narrAIte goes beyond simple descriptions by transforming visual content into engaging, age-appropriate stories tailored for blind and visually impaired children. Using intelligent narrative generation, it takes recognized elements from an image such as people, animals, objects, and and weaves them into imaginative stories that are both entertaining and educational. These stories are crafted to spark creativity, build language skills, and encourage active listening. By turning everyday photos into personalized adventures, this creates a fun and meaningful storytelling experience that helps children connect emotionally with the world around them while reinforcing comprehension and memory." },
  ];

  return (
    <div className="bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">
      <div className="bg-gradient-to-br from-one to-six rounded-3xl my-10 p-10 md:px-10 shadow-xl flex flex-col">
        <FadeInWhenVisible>
          <div className="p-10 md:p-10 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-4xl md:text-6xl font-narrAIte font-semibold text-softBlack">
              Features
            </h1>
            {sections.map((item, i) => (
              <div
                key={i}
                className="relative flex flex-row"
              >
                  <div className="py-2 flex flex-col font-narrAIte text-softBlack">
                    <div className="text-4xl md:text-4xl font-semibold flex items-center">
                      {item.logo}
                      {item.text}
                    </div>
                    <p className="">
                      {item.paragraph}
                    </p>
                </div>

                <div className="absolute right-0 bottom-0.5 animate-pulse">
                  <h1 className="md:text-[200px] opacity-5 font-narrAIte font-extrabold">
                    {item.num}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}
