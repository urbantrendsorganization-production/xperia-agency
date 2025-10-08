import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Mail, Phone, MapPin, Check, Star, Zap, Music, Lightbulb, Box, Building, Video, Power, Users } from 'lucide-react';

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    services: [],
    date: '',
    location: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 'audio',
      title: 'Audio Solutions',
      icon: Music,
      description: 'Crystal-clear sound systems, wireless mics, and professional audio engineering for events of any scale.',
      features: ['Line Array Systems', 'Wireless Microphones', 'Sound Engineering', 'DJ Equipment']
    },
    {
      id: 'lighting',
      title: 'Lighting Design',
      icon: Lightbulb,
      description: 'Transform your venue with intelligent lighting, LED walls, and atmospheric effects.',
      features: ['Moving Head Lights', 'LED Par Cans', 'Uplighting', 'Laser Shows']
    },
    {
      id: 'staging',
      title: 'Staging & Truss',
      icon: Box,
      description: 'Modular stage platforms, trussing systems, and custom stage designs.',
      features: ['Modular Stages', 'Aluminum Truss', 'Stage Skirting', 'Ramps & Stairs']
    },
    {
      id: 'structures',
      title: 'Event Structures',
      icon: Building,
      description: 'Tents, marquees, and temporary structures for outdoor and large-scale events.',
      features: ['Frame Tents', 'Marquees', 'Canopies', 'Weather Protection']
    },
    {
      id: 'visuals',
      title: 'Visual Production',
      icon: Video,
      description: 'LED screens, projectors, and live video production for immersive experiences.',
      features: ['LED Video Walls', 'Projectors', 'Live Streaming', 'Content Creation']
    },
    {
      id: 'power',
      title: 'Power Solutions',
      icon: Power,
      description: 'Reliable power generation and distribution for seamless event operations.',
      features: ['Generators', 'Power Distribution', 'UPS Systems', 'Cable Management']
    },
    {
      id: 'interactive',
      title: 'Interactive Setups',
      icon: Users,
      description: 'Engaging interactive displays, photo booths, and experiential technology.',
      features: ['Photo Booths', 'Touch Screens', 'VR Experiences', 'Interactive Displays']
    }
  ];

  const galleryImages = [
    { id: 1, category: 'corporate', title: 'Corporate Summit 2024', color: 'from-blue-500 to-purple-600' },
    { id: 2, category: 'concert', title: 'Music Festival Main Stage', color: 'from-pink-500 to-orange-500' },
    { id: 3, category: 'private', title: 'Luxury Wedding Reception', color: 'from-purple-500 to-pink-500' },
    { id: 4, category: 'corporate', title: 'Tech Product Launch', color: 'from-cyan-500 to-blue-600' },
    { id: 5, category: 'concert', title: 'Outdoor Concert Series', color: 'from-red-500 to-pink-600' },
    { id: 6, category: 'private', title: 'Private Gala Evening', color: 'from-indigo-500 to-purple-600' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', company: 'TechCorp', text: 'Outstanding service! They transformed our product launch into an unforgettable experience.' },
    { name: 'Michael Chen', company: 'Music Events Ltd', text: 'Professional, reliable, and creative. Our festival was a massive success thanks to their team.' },
    { name: 'Emily Roberts', company: 'Elite Weddings', text: 'Attention to detail is exceptional. They made our dream wedding come to life beautifully.' }
  ];

  const handleServiceToggle = (checked, serviceId) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, serviceId]
        : prev.services.filter(s => s !== serviceId)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        eventType: '',
        services: [],
        date: '',
        location: '',
        message: ''
      });
    }, 5000);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              xperia Agency
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg">
            <div className="px-4 pt-4 pb-6 space-y-4">
              {['Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 hover:text-purple-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-pink-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-fade-in font-custom">
            Elevate Your Events
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-playfair">
            Premium audio, lighting, staging, and production services for unforgettable experiences
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 flex items-center gap-2 mx-auto"
          >
            Request a Quote
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg">Complete event production solutions tailored to your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                >
                  <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  
                  {activeService === service.id && (
                    <ul className="space-y-2 mt-4 border-t border-gray-700 pt-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-300">
                          <Check size={16} className="text-purple-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Portfolio
            </h2>
            <p className="text-gray-400 text-lg">Showcasing our finest work across diverse events</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map(image => (
              <div
                key={image.id}
                onClick={() => setSelectedGalleryImage(image)}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${image.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-xs uppercase tracking-wider mb-3">
                      {image.category}
                    </span>
                    <h3 className="text-xl font-bold">{image.title}</h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      {selectedGalleryImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedGalleryImage(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video rounded-2xl overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${selectedGalleryImage.color}`}></div>
            <div className="absolute inset-0 flex items-center justify-center text-center p-8">
              <div>
                <span className="inline-block px-4 py-2 bg-black/50 rounded-full text-sm uppercase tracking-wider mb-4">
                  {selectedGalleryImage.category}
                </span>
                <h3 className="text-3xl font-bold">{selectedGalleryImage.title}</h3>
              </div>
            </div>
            <button
              onClick={() => setSelectedGalleryImage(null)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 rounded-full p-2"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creating Memorable Experiences Since 2010
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                We're a team of passionate event production professionals dedicated to bringing your vision to life. With over a decade of experience, we've powered thousands of successful events across corporate, entertainment, and private sectors.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Our commitment to excellence, cutting-edge technology, and personalized service makes us the preferred choice for event planners and organizers who demand the best.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-1">1000+</div>
                  <div className="text-sm text-gray-400">Events Delivered</div>
                </div>
                <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-4 border border-purple-500/30">
                  <div className="text-3xl font-bold text-purple-400 mb-1">500+</div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-700">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Create Something Amazing
            </h2>
            <p className="text-gray-400 text-lg">Get in touch and let's discuss your next event</p>
          </div>

          {formSubmitted ? (
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-2xl p-8 text-center">
              <Check size={48} className="mx-auto mb-4 text-green-400" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300">We've received your inquiry and will contact you soon.</p>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type *</label>
                  <select
                    required
                    value={formData.eventType}
                    onChange={(e) => setFormData({...formData, eventType: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  >
                    <option value="">Select event type</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="concert">Concert/Festival</option>
                    <option value="private">Private Event</option>
                    <option value="wedding">Wedding</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Services Needed</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {services.map(service => (
                    <label key={service.id} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service.id)}
                        onChange={(e) => handleServiceToggle(e.target.checked, service.id)}
                        className="w-4 h-4 rounded border-gray-700 bg-black/50 text-purple-600 focus:ring-purple-500"
                      />
                      <span className="text-sm">{service.title.split(' ')[0]}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Additional Details</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="4"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50"
              >
                Submit Request
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Mail size={24} />
              </div>
              <div className="text-sm text-gray-400">Email</div>
              <div className="font-semibold">info@eventpro.com</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Phone size={24} />
              </div>
              <div className="text-sm text-gray-400">Phone</div>
              <div className="font-semibold">+254 700 123 456</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <MapPin size={24} />
              </div>
              <div className="text-sm text-gray-400">Location</div>
              <div className="font-semibold">Nairobi, Kenya</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-4">
              EventPro
            </div>
            <p className="text-gray-400 text-sm">
              © 2025 EventPro. All rights reserved. Creating unforgettable experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;