import React from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = ({ data }) => {
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            Portfolio
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-green-400">Projects</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work in full stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {data.map((project, index) => (
            <Card
              key={project.id}
              className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 overflow-hidden group"
            >
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video lg:aspect-auto lg:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>
                </div>

                {/* Project Details */}
                <CardContent className={`p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="mb-4">
                    <span className="text-green-400 font-semibold text-sm tracking-wider uppercase">
                      {project.subtitle}
                    </span>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <ArrowRight className="h-4 w-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 5).map((tech, idx) => (
                      <Badge
                        key={idx}
                        className="bg-green-500/10 text-green-400 border-green-500/30 px-3 py-1 text-xs"
                        variant="outline"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      className="border-green-500 text-green-400 hover:bg-green-500/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </Button>
                    <Button
                      className="bg-green-500 hover:bg-green-600 text-black"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
