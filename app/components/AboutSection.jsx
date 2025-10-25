import React, { useState } from 'react';
import { Target, Eye, Award, TrendingUp, Users, Clock, CheckCircle, Sparkles } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { number: '150+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6" /> },
    { number: '5+', label: 'Years Experience', icon: <Clock className="w-6 h-6" /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Award className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Innovation First',
      description: 'We stay ahead of trends, embracing cutting-edge technologies to deliver future-proof solutions.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Client-Centric',
      description: 'Your success is our priority. We collaborate closely to understand and exceed your expectations.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, ensuring pixel-perfect execution.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Growth Mindset',
      description: 'Continuous learning and improvement drive us to deliver better results every time.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const tabs = [
    { id: 'mission', label: 'Our Mission', icon: <Target className="w-4 h-4" /> },
    { id: 'vision', label: 'Our Vision', icon: <Eye className="w-4 h-4" /> },
    { id: 'approach', label: 'Our Approach', icon: <Sparkles className="w-4 h-4" /> }
  ];

  const content = {
    mission: {
      title: 'Empowering Digital Transformation',
      description: 'At NSR-DEV, our mission is to empower businesses through innovative digital solutions. We believe in transforming ideas into reality by leveraging the latest technologies and creative design principles. Every project we undertake is an opportunity to create something exceptional that drives real business value.',
      highlights: [
        'Delivering excellence in every pixel',
        'Building long-term partnerships',
        'Creating scalable, future-ready solutions',
        'Fostering innovation and creativity'
      ]
    },
    vision: {
      title: 'Leading the Digital Future',
      description: 'We envision a world where technology seamlessly enhances human experiences. Our goal is to become the most trusted digital agency, known for pushing boundaries and setting new standards in web development, mobile applications, and design excellence. We strive to be the go-to partner for businesses seeking transformative digital solutions.',
      highlights: [
        'Setting industry standards',
        'Expanding global reach',
        'Pioneering new technologies',
        'Creating lasting impact'
      ]
    },
    approach: {
      title: 'Strategy Meets Execution',
      description: 'Our approach combines strategic thinking with flawless execution. We start by deeply understanding your business goals, then craft tailored solutions that align with your vision. Through agile methodologies and continuous collaboration, we ensure transparency, flexibility, and exceptional results at every stage of development.',
      highlights: [
        'Discovery & research phase',
        'Collaborative design process',
        'Agile development methodology',
        'Continuous testing & optimization'
      ]
    }
  };

  return (
    <section id="about" className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-300">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Who We Are
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A passionate team dedicated to crafting exceptional digital experiences that drive success
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission/Vision/Approach Tabs */}
        <div className="mb-20">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-purple-500/5 rounded-3xl blur-xl" />
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                {content[activeTab].title}
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                {content[activeTab].description}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {content[activeTab].highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 mt-0.5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-300">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Core Values
            </span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 mb-4 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{value.description}</p>
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;