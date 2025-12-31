import React from 'react';
import { Code2, Database, Layers, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = ({ data }) => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "Expert in React.js, Redux, and Next.js with focus on responsive, user-friendly interfaces"
    },
    {
      icon: Database,
      title: "Backend Engineering",
      description: "Proficient in Node.js, Express.js, and RESTful API design with scalable architecture"
    },
    {
      icon: Layers,
      title: "Full Stack Solutions",
      description: "End-to-end development from database design to frontend deployment"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Proven track record of improving application performance by 30-50%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            About Me
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Building Digital Solutions with <span className="text-green-400">Precision</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {data.summary}
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="mb-4 p-3 bg-green-500/10 rounded-lg w-fit group-hover:bg-green-500/20 transition-colors duration-300">
                    <Icon className="h-8 w-8 text-green-400" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
