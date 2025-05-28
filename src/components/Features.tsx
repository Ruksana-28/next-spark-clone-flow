
import { Zap, Globe, Shield, Smartphone, Database, Paintbrush } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Built-in Optimizations",
      description: "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals."
    },
    {
      icon: Globe,
      title: "Dynamic HTML Streaming",
      description: "Instantly stream UI from the server, integrated with the App Router and React Suspense."
    },
    {
      icon: Shield,
      title: "React Server Components",
      description: "Add components without sending additional client-side JavaScript. Built on the latest React features."
    },
    {
      icon: Smartphone,
      title: "Data Fetching",
      description: "Make your React component async and await your data. Next.js supports both server and client data fetching."
    },
    {
      icon: Database,
      title: "CSS Support",
      description: "Style your application with your favorite tools, including support for CSS Modules, Sass, Tailwind CSS, styled-jsx, and more."
    },
    {
      icon: Paintbrush,
      title: "Client and Server Rendering",
      description: "Flexible rendering and caching options, including Incremental Static Regeneration (ISR), on a per-page level."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything you need to build great products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Next.js provides all the features you need for production: 
            hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
