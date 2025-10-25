"use client";
import React, { useState } from 'react';
import { Code, Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Facebook, ArrowRight, Heart, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState(null);

  const handleSubscribe = () => {
    if (!email) {
      setSubscribeStatus({ type: 'error', message: 'Please enter your email' });
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubscribeStatus({ type: 'error', message: 'Please enter a valid email' });
      return;
    }

    setSubscribeStatus({ type: 'success', message: 'Thank you for subscribing!' });
    setTimeout(() => {
      setEmail('');
      setSubscribeStatus(null);
    }, 3000);
  };

  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile App Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Graphics Design', href: '#services' },
    { name: 'E-Commerce Solutions', href: '#services' },
    { name: 'Custom Software', href: '#services' }
  ];

  const resources = [
    { name: 'Blog', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Pricing', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Careers', href: '#' }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: 'Github', href: '#', color: 'hover:bg-gray-700' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', href: '#', color: 'hover:bg-blue-600' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', href: '#', color: 'hover:bg-sky-500' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', href: '#', color: 'hover:bg-pink-600' },
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', href: '#', color: 'hover:bg-blue-700' }
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: 'hello@nsrdev.com', href: 'mailto:hello@nsrdev.com' },
    { icon: <Phone className="w-4 h-4" />, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: <MapPin className="w-4 h-4" />, text: 'Dhaka, Bangladesh', href: '#' }
  ];

  return (
    <footer className="relative bg-slate-950 border-t border-white/10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info - Takes 2 columns */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NSR-DEV
              </span>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. We craft innovative solutions that drive business growth and engage audiences worldwide.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                    {info.icon}
                  </div>
                  <span className="text-sm">{info.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-white ${social.color} transition-all duration-300 hover:scale-110`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Resources</h3>
            <ul className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href={resource.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-0.5 bg-purple-400 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="pb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Subscribe to Our Newsletter
                  </h3>
                  <p className="text-gray-400">
                    Get the latest updates, insights, and exclusive offers delivered to your inbox
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <div className="flex gap-2">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <button
                      onClick={handleSubscribe}
                      className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 flex items-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                  {subscribeStatus && (
                    <p className={`mt-2 text-sm ${subscribeStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                      {subscribeStatus.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <span>© {new Date().getFullYear()} NSR-DEV. All rights reserved. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>in Bangladesh</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;