// Footer component
function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div>
            <h3 className="text-xl font-bold mb-4">narrAlte</h3>
            <p className="text-gray-400">
              AI-powered image descriptions and storytelling for blind children
            </p>
          </div>
          {/* Contact information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@narralte.com</li>
              <li>Phone: (123) 456-7890</li>
              <li>Address: 123 AI Street, Tech City</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
