import UploadSection from "./UploadSection";

// Try It section component
export default function TryIt() {
  return (
    <section id="try-it" className="py-20 bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Try narrAlte</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload an image and let our AI create a story for you
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <UploadSection />
        </div>
      </div>
    </section>
  );
}
