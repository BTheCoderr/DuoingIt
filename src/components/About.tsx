export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About DouingIt
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe every family has a story worth preserving and celebrating
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At DouingIt, we understand that your family's legacy is more than just names and dates—it's the values, traditions, stories, and connections that make your family unique. We're passionate about helping families preserve these precious elements across generations.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our approach combines modern technology with time-honored storytelling techniques to create meaningful experiences that bring families together, whether they're across the street or across the world.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Preserving family traditions and cultural heritage</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Connecting generations through shared experiences</span>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                </div>
                <span className="text-gray-700">Making family history accessible and engaging</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div>
            <div className="relative">
              <img
                src="/images/Seedling in the sun (1).png"
                alt="Family legacy and growth"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
