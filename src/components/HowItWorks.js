import { Upload, Cpu, MessageSquare, Volume2 } from "lucide-react";

function Step({ icon, title, description }) {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const steps = [
    {
      icon: <Upload className="w-10 h-10 text-gray-700" />,
      title: "Upload an Image",
      description:
        "Simply upload any photo or picture through our easy-to-use interface.",
    },
    {
      icon: <Cpu className="w-10 h-10 text-gray-700" />,
      title: "AI Processing",
      description:
        "Our advanced AI analyzes the image to identify objects, people, and context.",
    },
    {
      icon: <MessageSquare className="w-10 h-10 text-gray-700" />,
      title: "Generate Description",
      description:
        "The AI creates a detailed, accurate description of what's in the image.",
    },
    {
      icon: <Volume2 className="w-10 h-10 text-gray-700" />,
      title: "Listen to the Story",
      description:
        "Enjoy a narrated story based on the image, tailored for young listeners.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-green-100">
      <div className="bg-green-100 container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            narrAlte makes it simple to transform images into stories in just a
            few steps
          </p>
        </div>

        <div className="bg-green-100 grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <Step
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
