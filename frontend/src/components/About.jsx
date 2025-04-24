import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight } from "../animations/variants";
import BG from "../assets/AboutPic.png";

export default function About() {
  return (
    <div className="Background bg-creamyWhite pt-14 mx-6 md:mx-40 md:pt-20 md:pb-2">
      <div className="Hero relative bg-gradient-to-br from-gray-500 to-softBlack via-softBlack rounded-3xl my-10 p-10 md:p-20 md:pl-10 shadow-xl overflow-hidden flex flex-col md:flex-row">

        <motion.div
          {...fadeInLeft}
          className="Title z-10 flex flex-col justify-center max-w-screen md:w-1/2"
        >
          <p className="about text-creamyWhite text-sm md:-mb-5 font-semibold font-narrAIte">
                About
          </p>
          <h1 className="narrAite text-6xl mb-2 md:text-8xl text-creamyWhite font-narrAIte font-bold">
            narr<span className="text-four">AI</span>te
          </h1>
          <p className="shortdes text-creamyWhite mb-4 text-sm md:text-base font-narrAIte leading-relaxed">
          At narrAIte, we believe every kid should have the chance to explore, imagine, and connect with the world, whether they can see it or not. It was created to help blind children experience the visual world through stories. With the help of smart AI and machine learning, it looks at pictures and turns them into fun and meaningful stories.
          </p>
          <p className="shortdes text-creamyWhite text-sm md:text-base font-narrAIte leading-relaxed">
          narrAIte isn’t just a tool. It’s something parents, teachers, and caregivers can use to share the beauty of the world with blind kids. It’s about making sure no child misses out on the magic of a story just because they can’t see the images. With narrAIte, we’re not just telling stories. We’re helping kids be curious, dream big, and see the world in their own way.
          </p>
        </motion.div>

        <motion.div {...fadeInRight} 
        className="absolute inset-0 flex justify-end items-center pointer-events-none">
          <img
            src={BG}
            className="hidden md:block h-full object-cover md:w-1/2"
            style={{
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)",
              maskImage: "linear-gradient(to right, transparent 0%, black 30%, black 100%)"
            }}
            alt="About Background"
          />
        </motion.div>
      </div>

    </div>
  );
}
