import React from 'react';
import { Button } from './ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = ({ data }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1604781109199-ced99b89b0f6?w=1920&q=80"
          alt="Coding workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Greeting */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-medium tracking-wider uppercase">
              Full Stack Developer
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm <span className="text-green-400">{data.name}</span>
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 font-light">
            {data.subtitle} specializing in building exceptional digital experiences
          </p>

          {/* Description */}
          <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
            {data.summary}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-green-500 hover:bg-green-600 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-green-400" />
            </a>
            <a
              href={`https://github.com/${data.github.split('/').pop()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
            >
              <Github className="h-6 w-6 text-gray-400 group-hover:text-green-400" />
            </a>
            <a
              href={`mailto:${data.email}`}
              className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-500/20 hover:border-green-500/50 transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 text-gray-400 group-hover:text-green-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-green-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-green-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
