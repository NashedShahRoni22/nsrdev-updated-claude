import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleClick = (e) => {
      const newRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(r => r.id !== newRipple.id));
      }, 1500);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 overflow-hidden">
      {/* Animated background gradient */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`
        }}
      />
      
      {/* Water ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="absolute pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)'
          }}
        >
          <div className="w-4 h-4 rounded-full bg-purple-400/30 animate-ping" />
          <div className="absolute inset-0 w-4 h-4 rounded-full border-2 border-purple-400/50 animate-pulse" />
        </div>
      ))}
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6 backdrop-blur-sm w-fit">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Welcome to NSR-DEV Agency</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Crafting Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                Experiences
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 max-w-2xl mb-10">
              We transform ideas into stunning digital solutions. From web development to mobile apps, UI/UX design to graphics - we bring your vision to life.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href='#contact' className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href='#projects' className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300">
                View Our Work
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Content - 3D Digital Transformation Visual (visible on lg+) */}
          <div className="hidden lg:flex items-center justify-center perspective-1000">
            <div className="relative w-full h-[600px]" style={{ perspective: '1000px' }}>
              {/* Central 3D glowing sphere representing "ideas" */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 preserve-3d">
                <div className="relative w-40 h-40" style={{ transformStyle: 'preserve-3d', animation: 'rotate3d 20s linear infinite' }}>
                  {/* Multiple sphere layers for 3D depth */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse" />
                  <div className="absolute inset-2 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 rounded-full blur-2xl opacity-60" />
                  <div className="absolute inset-4 bg-gradient-to-br from-white via-purple-200 to-pink-200 rounded-full shadow-2xl shadow-purple-500/50" />
                  <div className="absolute inset-6 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full" />
                  <div className="absolute inset-8 bg-gradient-to-br from-white to-purple-100 rounded-full" />
                  
                  {/* Inner core glow */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full animate-pulse" />
                </div>
              </div>

              {/* 3D Orbiting service spheres */}
              <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                {/* Web Development - Blue sphere (top orbit) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'orbit1 15s linear infinite', transformStyle: 'preserve-3d' }}>
                  <div className="relative" style={{ transform: 'translateZ(80px) translateY(-180px)' }}>
                    <div className="w-20 h-20 relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-2 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full shadow-2xl shadow-blue-500/50" />
                      <div className="absolute inset-4 bg-gradient-to-br from-blue-300 to-cyan-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-cyan-300 text-xs font-semibold whitespace-nowrap">Web Dev</div>
                    </div>
                  </div>
                </div>

                {/* Mobile Apps - Purple sphere (right orbit) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'orbit2 18s linear infinite', transformStyle: 'preserve-3d' }}>
                  <div className="relative" style={{ transform: 'translateZ(60px) translateX(180px)' }}>
                    <div className="w-20 h-20 relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full shadow-2xl shadow-purple-500/50" />
                      <div className="absolute inset-4 bg-gradient-to-br from-purple-300 to-pink-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-pink-300 text-xs font-semibold whitespace-nowrap">Mobile</div>
                    </div>
                  </div>
                </div>

                {/* UI/UX Design - Orange sphere (bottom orbit) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'orbit3 16s linear infinite', transformStyle: 'preserve-3d' }}>
                  <div className="relative" style={{ transform: 'translateZ(70px) translateY(180px)' }}>
                    <div className="w-20 h-20 relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-2 bg-gradient-to-br from-orange-500 to-red-600 rounded-full shadow-2xl shadow-orange-500/50" />
                      <div className="absolute inset-4 bg-gradient-to-br from-orange-300 to-red-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 6a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-orange-300 text-xs font-semibold whitespace-nowrap">UI/UX</div>
                    </div>
                  </div>
                </div>

                {/* Graphics Design - Green sphere (left orbit) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animation: 'orbit4 20s linear infinite', transformStyle: 'preserve-3d' }}>
                  <div className="relative" style={{ transform: 'translateZ(50px) translateX(-180px)' }}>
                    <div className="w-20 h-20 relative group cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute inset-2 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-2xl shadow-emerald-500/50" />
                      <div className="absolute inset-4 bg-gradient-to-br from-emerald-300 to-teal-400 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-emerald-300 text-xs font-semibold whitespace-nowrap">Graphics</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3D Connecting energy beams */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 600" style={{ mixBlendMode: 'screen' }}>
                <defs>
                  <linearGradient id="beam1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                    <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient id="beam2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
                    <stop offset="50%" stopColor="#a855f7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="200" y1="120" x2="200" y2="300" stroke="url(#beam1)" strokeWidth="3" className="animate-pulse" />
                <line x1="320" y1="300" x2="200" y2="300" stroke="url(#beam2)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <line x1="200" y1="480" x2="200" y2="300" stroke="url(#beam1)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
                <line x1="80" y1="300" x2="200" y2="300" stroke="url(#beam2)" strokeWidth="3" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
              </svg>

              {/* Floating 3D particles */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float3d ${4 + Math.random() * 4}s ease-in-out infinite`,
                      animationDelay: `${Math.random() * 3}s`,
                      transform: `translateZ(${Math.random() * 100}px)`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <style>{`
            @keyframes rotate3d {
              0% { transform: rotateY(0deg) rotateX(0deg); }
              100% { transform: rotateY(360deg) rotateX(360deg); }
            }
            @keyframes orbit1 {
              0% { transform: rotateY(0deg) rotateX(20deg); }
              100% { transform: rotateY(360deg) rotateX(20deg); }
            }
            @keyframes orbit2 {
              0% { transform: rotateY(0deg) rotateX(-20deg); }
              100% { transform: rotateY(360deg) rotateX(-20deg); }
            }
            @keyframes orbit3 {
              0% { transform: rotateY(0deg) rotateZ(10deg); }
              100% { transform: rotateY(360deg) rotateZ(10deg); }
            }
            @keyframes orbit4 {
              0% { transform: rotateY(0deg) rotateZ(-10deg); }
              100% { transform: rotateY(360deg) rotateZ(-10deg); }
            }
            @keyframes float3d {
              0%, 100% { 
                transform: translateY(0px) translateZ(0px) scale(1);
                opacity: 0.6;
              }
              50% { 
                transform: translateY(-30px) translateZ(50px) scale(1.2);
                opacity: 0.9;
              }
            }
          `}</style>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-purple-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;