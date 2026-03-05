"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Facebook, CheckCircle, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      value: 'contact@nsrdev.com',
      link: 'mailto:contact@nsrdev.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      value: '+88 (013) 1821-4398',
      link: 'tel:+8801318214398',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      value: 'Dhaka, Bangladesh',
      link: '#',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, name: 'Github', link: '#', color: 'hover:text-gray-400' },
    { icon: <Linkedin className="w-5 h-5" />, name: 'LinkedIn', link: '#', color: 'hover:text-blue-400' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', link: '#', color: 'hover:text-sky-400' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', link: '#', color: 'hover:text-pink-400' },
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', link: '#', color: 'hover:text-blue-500' }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Graphics Design',
    'E-Commerce Solution',
    'Other'
  ];

  const budgetRanges = [
    'Under $1,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    '$10,000 - $20,000',
    '$50,000+'
  ];

  const handleSubmit = () => {
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    // Simulate form submission
    setFormStatus({ type: 'success', message: 'Thank you! We\'ll get back to you soon.' });
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: ''
      });
      setFormStatus(null);
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section id="contact" className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
    >
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm text-purple-300">Get In Touch</span>
          </motion.div>
          <motion.h2 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Let's Build Something
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Have a project in mind? Let's discuss how we can help bring your vision to life
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information - Left Side */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
            }}
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="group block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center space-x-4">
                    <motion.div 
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ scale: 1.15, rotate: 5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                      <div className="text-white font-medium">{info.value}</div>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                <motion.div 
                  className="flex items-center space-x-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08 } }
                  }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className={`w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                      title={social.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.4 }}
                      whileHover={{ scale: 1.25, rotate: 10 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form - Right Side */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <motion.div 
                  className="space-y-6"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
                  }}
                >
                  {/* Name & Email */}
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'name' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300`}
                        placeholder="John Doe"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <motion.input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'email' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300`}
                        placeholder="john@example.com"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Phone & Service */}
                  <motion.div 
                    className="grid md:grid-cols-2 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Phone Number
                      </label>
                      <motion.input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'phone' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300`}
                        placeholder="+1 (555) 123-4567"
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: 0.05 }}
                    >
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Service Needed
                      </label>
                      <motion.select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('service')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'service' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors duration-300`}
                        whileFocus={{ scale: 1.02 }}
                      >
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service} className="bg-slate-800">{service}</option>
                        ))}
                      </motion.select>
                    </motion.div>
                  </motion.div>

                  {/* Budget */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Budget
                    </label>
                    <motion.select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'budget' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white focus:outline-none focus:border-purple-500 transition-colors duration-300`}
                      whileFocus={{ scale: 1.02 }}
                    >
                      <option value="" className="bg-slate-800">Select your budget</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-slate-800">{range}</option>
                      ))}
                    </motion.select>
                  </motion.div>

                  {/* Message */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details <span className="text-red-400">*</span>
                    </label>
                    <motion.textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      rows="5"
                      className={`w-full px-4 py-3 bg-white/5 border ${focusedField === 'message' ? 'border-purple-500' : 'border-white/10'} rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none`}
                      placeholder="Tell us about your project..."
                      whileFocus={{ scale: 1.02 }}
                    ></motion.textarea>
                  </motion.div>

                  {/* Status Message */}
                  {formStatus && (
                    <motion.div 
                      className={`flex items-center space-x-2 p-4 rounded-xl ${formStatus.type === 'success' ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      {formStatus.type === 'success' ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-400" />
                      )}
                      <span className={formStatus.type === 'success' ? 'text-green-400' : 'text-red-400'}>
                        {formStatus.message}
                      </span>
                    </motion.div>
                  )}

                  {/* Submit Button */}
                  <motion.button
                    onClick={handleSubmit}
                    className="group w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Send Message</span>
                    <motion.div whileHover={{ x: 3 }}>
                      <Send className="w-5 h-5" />
                    </motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;