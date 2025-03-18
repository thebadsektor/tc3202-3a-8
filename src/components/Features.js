import { Eye, Book, Sparkles, Heart } from "lucide-react";

function FeatureCard({ icon, title, description }) {
  // This is a helper component to avoid repeating code
  return (
    <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
      {icon}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Features() {
  // Feature data - makes it easy to add/remove features
  const features = [
    {
      icon: <Eye className="w-10 h-10 mb-4" />,
      title: "Image Recognition",
      description:
        "Advanced AI that accurately identifies objects, people, and scenes in photos.",
    },
    {
      icon: <Book className="w-10 h-10 mb-4" />,
      title: "Storytelling",
      description:
        "Transforms visual content into engaging, age-appropriate stories.",
    },
    {
      icon: <Sparkles className="w-10 h-10 mb-4" />,
      title: "Accessibility",
      description:
        "Designed specifically for blind children with intuitive audio feedback.",
    },
    {
      icon: <Heart className="w-10 h-10 mb-4" />,
      title: "Child-Friendly",
      description:
        "Safe, educational content that sparks imagination and learning.",
    },
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Features</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how narrAlte makes visual content accessible and enjoyable
            for blind children
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map through the features array to create cards */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
