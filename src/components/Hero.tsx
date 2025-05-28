
import { ArrowRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-white mb-8">
            <Zap className="w-4 h-4 mr-2 text-blue-400" />
            The React Framework for Production
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          The React
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Framework
          </span>
          <br />
          for the Web
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Used by some of the world's largest companies, Next.js enables you to create 
          full-stack Web applications by extending the latest React features.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-all duration-200 transform hover:scale-105 flex items-center">
            Get Started
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200 backdrop-blur-sm">
            Learn Next.js
          </button>
        </div>
        
        <div className="mt-16 text-sm text-gray-400">
          npx create-next-app@latest
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
