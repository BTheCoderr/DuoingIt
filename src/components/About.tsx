export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Our Website
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how our website looks and functions
          </p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-2xl p-4 sm:p-8 text-center shadow-lg max-w-5xl w-full">
            <div className="mb-6">
              <img
                src="/images/Screenshot 2025-09-26 at 2.50.49 PM.png"
                alt="DouingIt Website Screenshot"
                className="w-full h-auto rounded-lg mx-auto border border-gray-200"
              />
            </div>
            <div className="text-left max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Our Website Overview
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This screenshot shows our main website interface, featuring the DouingIt logo, 
                the powerful seedling imagery, and our core message about family legacy. 
                The design emphasizes growth, heritage, and the importance of preserving 
                family traditions across generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
