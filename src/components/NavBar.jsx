import Logo from "../assets/LogoNoBg.svg";

export default function NavBar() {
    return (
        <div className="NavBar bg-creamyWhite text-softBlack flex justify-between items-center px-20 py-6 shadow-md">
            {/* Branding*/}
            <div className="flex items-center gap-4">
                <img src={Logo} alt="narrAIte Logo" className="h-8" />
                <h1 className="text-softBlack text-2xl font-narrAIte font-bold">narr
                    <span className="text-eight">AI</span>te</h1>
            </div>

            {/* Navigation */}
            <nav className="flex gap-8 text-lg font-narrAIte">
                <a href="/home" className="hover:text-gray-400">Home</a>
                <a href="/collections" className="hover:text-gray-400">Collections</a>
                <a href="/about" className="hover:text-gray-400">About Us</a>
            </nav>

            {/* Upload */}
            <button className="bg-eight hover:bg-six text-white font-narrAIte font-semibold py-2 px-4 rounded-full shadow-md">
                <a href="/upload" className="hover:text-one">Upload</a>
            </button>
        </div>
    );
}
