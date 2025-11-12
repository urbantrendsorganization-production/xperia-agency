import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import logo from '/xperia-main.png';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['Home', 'About Us', 'Services', 'Portfolio', 'Contact'];
  
  const services = [
    'Event Planning',
    'Brand Activations',
    'Exhibitions',
    'Corporate Events',
    'Entertainment Management'
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' }
  ];

  return (
    <div className="w-full relative bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-black text-white">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00]" />

      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and Info */}
          <div>
            <img
              src={logo}
              alt="Xperia Agency Logo"
              className="h-12 w-auto mb-6"
            />
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              We combine <span className="text-[#FFD700] font-semibold">creativity</span>, precision, 
              and passion to craft stories that connect, inspire, and leave lasting 
              impressions across Africa.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-gradient-to-r hover:from-[#FFD700] hover:to-[#B8860B] flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/10 hover:border-transparent text-[#FFD700]"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300 text-sm flex items-center group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 relative inline-block bg-gradient-to-r from-[#FFD700] via-[#B8860B] to-[#7E6A00] bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:contact@xperiaagency.com"
                className="flex items-start gap-3 text-gray-400 hover:text-[#FFD700] transition-colors duration-300 text-sm"
              >
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[#FFD700]" />
                <span>contact@xperiaagency.com</span>
              </a>
              <a
                href="tel:+254700000000"
                className="flex items-start gap-3 text-gray-400 hover:text-[#FFD700] transition-colors duration-300 text-sm"
              >
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[#FFD700]" />
                <span>+254 700 000000</span>
              </a>
              <div className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#FFD700]" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-[#FFD700] focus:outline-none text-sm text-white placeholder-gray-500 transition-colors"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-lg font-medium text-sm text-black hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 hover:scale-105">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {new Date().getFullYear()} <span className="text-[#FFD700] font-semibold">Xperia Agency</span>. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#FFD700] to-[#B8860B] rounded-full flex items-center justify-center shadow-lg hover:shadow-yellow-500/30 transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300 text-black" />
      </button>
    </div>
  );
}

export default Footer;
