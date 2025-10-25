import React, { useState } from 'react';
import { ExternalLink, Code, Smartphone, ShoppingCart, Building2, Globe, Package, Plane, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'landing', label: 'Landing Pages' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Bumrungrad Discover',
      category: 'web',
      type: 'Hospital Management System',
      description: 'Complete hospital management website with admin panel for managing doctors, reports, and appointments. Full-featured doctor appointment and management system.',
      tags: ['Healthcare', 'Admin Panel', 'Appointment System', 'Reports'],
      icon: <Building2 className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      image: '🏥'
    },
    {
      id: 2,
      title: 'Laminax',
      category: 'ecommerce',
      type: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with comprehensive admin panel for product management, orders, and customer relationships.',
      tags: ['E-Commerce', 'Admin Panel', 'Product Management', 'Orders'],
      icon: <ShoppingCart className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-500',
      image: '🛍️'
    },
    {
      id: 3,
      title: 'EnayaMall',
      category: 'ecommerce',
      type: 'E-Commerce Platform - Dubai',
      description: 'E-commerce website and admin panel designed for the Dubai market with localization and multi-currency support.',
      tags: ['E-Commerce', 'Dubai Market', 'Multi-Currency', 'Admin Panel'],
      icon: <Globe className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-500',
      image: '🏪'
    },
    {
      id: 4,
      title: 'Talukdar Homes',
      category: 'ecommerce',
      type: 'E-Commerce Platform - Australia',
      description: 'E-commerce platform tailored for the Australian market with regional shipping and payment integrations.',
      tags: ['E-Commerce', 'Australia Market', 'Shipping', 'Payments'],
      icon: <Package className="w-6 h-6" />,
      gradient: 'from-green-500 to-emerald-500',
      image: '🏡'
    },
    {
      id: 5,
      title: 'Visa Booking & Counselling',
      category: 'mobile',
      type: 'Mobile Application',
      description: 'Mobile app for visa booking services and immigration counselling with appointment scheduling and document management.',
      tags: ['Mobile App', 'Visa Services', 'Booking System', 'Counselling'],
      icon: <Plane className="w-6 h-6" />,
      gradient: 'from-indigo-500 to-purple-500',
      image: '✈️'
    },
    {
      id: 6,
      title: 'Jimamu',
      category: 'mobile',
      type: 'Parcel Sharing Mobile App - Canada',
      description: 'Innovative parcel sharing mobile application designed for the Canadian market, connecting users for efficient package delivery.',
      tags: ['Mobile App', 'Canada Market', 'Sharing Economy', 'Logistics'],
      icon: <Smartphone className="w-6 h-6" />,
      gradient: 'from-pink-500 to-rose-500',
      image: '📦'
    },
    {
      id: 7,
      title: 'Business Landing Pages',
      category: 'landing',
      type: 'Multiple Landing Pages',
      description: 'Collection of high-converting landing pages for various businesses, optimized for lead generation and conversions.',
      tags: ['Landing Pages', 'Lead Generation', 'Conversion Optimized', 'SEO'],
      icon: <Code className="w-6 h-6" />,
      gradient: 'from-teal-500 to-cyan-500',
      image: '🚀'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="relative bg-slate-950 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <span className="text-sm text-purple-300">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of successful projects across various industries and platforms
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image/Icon Area */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                <div className="text-7xl">{project.image}</div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="px-6 py-3 bg-white text-gray-900 rounded-full font-medium flex items-center space-x-2 transform scale-90 group-hover:scale-100 transition-transform">
                    <span>View Details</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Icon & Category */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{project.type}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom gradient line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="relative mt-16">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-3xl blur-xl" />
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  7+
                </div>
                <div className="text-gray-400">Major Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  3
                </div>
                <div className="text-gray-400">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-400">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center space-x-2">
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;