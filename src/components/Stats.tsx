
const Stats = () => {
  const stats = [
    { number: "1M+", label: "Developers" },
    { number: "500K+", label: "Projects" },
    { number: "100B+", label: "Requests per month" },
    { number: "99.99%", label: "Uptime" }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Loved by developers worldwide
          </h2>
          <p className="text-xl text-gray-400">
            Join millions of developers building the next generation of web applications
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
