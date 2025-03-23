import {Image, BookOpen, Sparkles, Heart} from "lucide-react";

export default function Features() {

    const features = [
        {
            icon: <Image className="w-10 h-10 mb-4" />,
            title: "Image Recognition",
            description: "Advanced AI that accurately identifies objects, people, and scenes in photos.",
        },
        {
            icon: <BookOpen className="w-10 h-10 mb-4" />,
            title: "Storytelling",
            description: "Transforms visual content into engaging, age-appropriate stories.",
        },
        {
            icon: <Sparkles className="w-10 h-10 mb-4" />,
            title: "Accessibility",
            description: "Designed specifically for blind children with intuitive audio feedback.",
        },
        {
            icon: <Heart className="w-10 h-10 mb-4" />,
            title: "Child-Friendly",
            description: "Safe, educational content that sparks imagination and learning.",
        },
    ]

    return (

        <section id="features" className="py-20">
            <div className="container mx-full px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-5xl text-softBlack font-narrAIte font-semibold mb-4">Features</h2>
                    <p className="text-sm text-softBlack max-w-xl mx-auto">
                    Explore how narrAlte transforms visual content into an immersive, joyful experience for blind children, making stories and illustrations come to life through sound.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {features.map((feature, index) => (
                    <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
                ))}
                </div>
            </div>
        </section>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="border rounded-xl p-8 hover:shadow-xl transition-shadow">
            {icon}
            <h3 className="text-eight text-2xl font-narrAIte font-bold mb-2">{title}</h3>
            <p className="text-softBlack">{description}</p>
        </div>
    )
}