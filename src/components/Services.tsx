'use client';

export default function Services() {
  const services = [
    {
      id: 'seedling',
      title: 'Seedling Membership',
      subtitle: 'Where Your Family\'s Story Takes Root',
      description: 'Every family has a story waiting to be told—and remembered. The Seedling Membership helps you uncover, document, and celebrate your family\'s legacy through workshops, coaching, and storytelling tools. We\'re not just preserving names and dates—we\'re preserving values, memories, voices, and traditions.',
      image: '/images/Screenshot 2025-09-26 at 2.51.02 PM.png',
      buttonText: 'Click here',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800'
    },
    {
      id: 'virtual-travel',
      title: 'Virtual Travel',
      subtitle: 'Stay Connected, Even When You Can\'t Be There',
      description: 'For many families, travel isn\'t always possible — whether because of distance, finances, health, or the demands of daily life. The ache of not being able to visit loved ones, walk ancestral lands, or take children "back home" can leave families feeling disconnected from their roots. The worry that culture and tradition might fade without these visits is real. That\'s why Douing it created Virtual Travel Experiences — a way to connect across generations and across borders, without ever boarding a plane.',
      image: '/images/Screenshot 2025-09-26 at 2.51.12 PM.png',
      buttonText: 'Start here',
      bgColor: 'bg-green-50',
      textColor: 'text-green-800'
    },
    {
      id: 'coaching',
      title: 'Intercultural Family Coaching',
      subtitle: 'Guidance for Families Bridging Cultures & Generations',
      description: 'Every family is unique, and for many, cultural blending creates both beauty and complexity. Our Intercultural Family Coaching helps parents, grandparents, and children navigate traditions, communication, and legacy-building in ways that honor all parts of their heritage. A guided, high-touch coaching experience that helps individuals and families: Clarify their cultural identity, values, and traditions Create emotional continuity across generations Document a tangible family legacy—through story maps, keepsakes, or guided reflections.',
      image: '/images/Screenshot 2025-09-26 at 2.51.27 PM.png',
      buttonText: '1st Session FREE',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-800'
    },
    {
      id: 'genealogy',
      title: 'Genealogy Navigation Workshop',
      subtitle: 'Curious about where your family\'s story begins?',
      description: 'We provide you the tools, inspiration, and guidance to explore your ancestry, map your blended roots, and create a lasting legacy for the next generation.',
      image: '/images/Screenshot 2025-09-26 at 2.51.43 PM.png',
      buttonText: 'Start here',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800'
    },
    {
      id: 'storytelling',
      title: 'Roots and Reflection Storytelling',
      subtitle: 'Roots & Reflections',
      description: 'Capture your family\'s story before it\'s forgotten. The Legacy Starter Kit is a simple, heartfelt way to preserve your heritage — through guided prompts, shared memories, and meaningful conversations across generations. Plant the seed. Grow the legacy.',
      image: '/images/Screenshot 2025-09-26 at 2.51.57 PM.png',
      buttonText: 'Start here',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800'
    },
    {
      id: 'memory',
      title: 'Memory Preservation',
      subtitle: 'Preserve the Moments That Matter Most',
      description: 'Every family carries precious stories, traditions, and memories that deserve to be remembered. Our Memory Preservation services help you capture those moments — from oral histories and photo archives to cultural traditions and storytelling kits — so they can be passed on with love and intention.',
      image: '/images/Screenshot 2025-09-26 at 2.51.57 PM.png',
      buttonText: 'Start here',
      bgColor: 'bg-pink-50',
      textColor: 'text-pink-800'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how we can help you preserve and celebrate your family's unique legacy
          </p>
        </div>

        <div className="space-y-24">
          {services.map((service, index) => (
            <div key={service.id} className={`${service.bgColor} rounded-2xl p-8 md:p-12`}>
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className={`text-3xl md:text-4xl font-bold ${service.textColor} mb-4`}>
                    {service.title}
                  </h3>
                  <h4 className={`text-xl font-semibold ${service.textColor} mb-6`}>
                    {service.subtitle}
                  </h4>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <button className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg ${service.textColor.replace('text-', 'ring-').replace('-800', '-200')} ring-2`}>
                    {service.buttonText}
                  </button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
