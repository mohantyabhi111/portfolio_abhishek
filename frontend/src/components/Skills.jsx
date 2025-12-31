import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const Skills = ({ data }) => {
  const skillCategories = [
    { title: "Frontend", skills: data.frontend, color: "bg-blue-500/10 text-blue-400 border-blue-500/30" },
    { title: "Backend", skills: data.backend, color: "bg-green-500/10 text-green-400 border-green-500/30" },
    { title: "Databases", skills: data.databases, color: "bg-purple-500/10 text-purple-400 border-purple-500/30" },
    { title: "Languages", skills: data.languages, color: "bg-orange-500/10 text-orange-400 border-orange-500/30" },
    { title: "Core CS", skills: data.coreCS, color: "bg-pink-500/10 text-pink-400 border-pink-500/30" },
    { title: "Tools", skills: data.tools, color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30" }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0f0f10]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-green-400 tracking-wider uppercase mb-3">
            Technical Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="text-green-400">Tech Stack</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive set of technologies I work with to build modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-[#1a1a1b] border-gray-800 hover:border-green-500/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`${category.color} border px-4 py-2 text-sm font-medium hover:scale-105 transition-transform duration-200`}
                      variant="outline"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
