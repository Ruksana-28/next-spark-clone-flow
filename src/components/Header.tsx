
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">Next.js</div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Showcase</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Analytics</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Commerce</a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">Templates</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white transition-colors">
              Deploy
            </button>
            <button className="bg-white text-black px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors">
              Start Building
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Showcase</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Docs</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Blog</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Analytics</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Commerce</a>
              <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Templates</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
