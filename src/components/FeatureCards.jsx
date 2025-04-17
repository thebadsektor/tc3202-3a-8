import {Image, BookOpen, Sparkles, Heart} from "lucide-react";
import { Link } from "react-router-dom"; 
import FadeInWhenVisible from "../animations/variants";

export default function Features() {

    const features = [
        {
            icon: <Sparkles className="w-10 h-10 mb-4" />,
            title: "Accessibility",
            description: "Designed specifically for blind children with intuitive audio feedback.",
            link: "/features/accessibility",
        },
        {
            icon: <Heart className="w-10 h-10 mb-4" />,
            title: "Child-Friendly",
            description: "Safe, educational content that sparks imagination and learning.",
            link: "/features/child-friendly",
        },
        {
            icon: <Image className="w-10 h-10 mb-4" />,
            title: "Image Recognition",
            description: "Advanced AI that accurately identifies objects, people, and scenes in photos.",
            link: "/features/image-recognition",
        },
        {
            icon: <BookOpen className="w-10 h-10 mb-4" />,
            title: "Storytelling",
            description: "Transforms visual content into engaging, age-appropriate stories.",
            link: "/features/storytelling",
        },
    ]    

    return (

        <FadeInWhenVisible>
            <section id="features" className="py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-softBlack font-narrAIte font-semibold mb-4">Features</h2>
                    <h5 className="text-sm font-narrAIte text-softBlack max-w-2xl mx-auto">
                    Explore how <span className="font-bold">narr</span><span className="font-bold text-eight">AI</span><span className="font-bold">te </span> 
                    transforms visual content into an immersive, joyful experience, making short stories and illustrations come to life through sound.
                    </h5>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        link={feature.link}
                    />
                ))}
                </div>
            </div>
        </section>
        </FadeInWhenVisible>
    )
}

function FeatureCard({ icon, title, description, link }) {
    return (
        <div className="border rounded-xl border-four p-8 hover:shadow-xl transition-shadow flex flex-col justify-between h-full">
            <div>
                {icon}
                <h3 className="text-eight text-2xl font-narrAIte font-bold mb-2">{title}</h3>
                <p className="text-softBlack mb-4">{description}</p>
            </div>
            <Link
                to={link}
                className="mt-4 inline-block text-eight font-semibold hover:underline"
            >
                Learn More →
            </Link>
        </div>
    );
}
