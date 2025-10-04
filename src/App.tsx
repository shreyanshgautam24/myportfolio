import React from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Facebook } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const App = () => {
  const skills: SkillProps[] = [
    { name: 'Python', level: 90, color: 'bg-blue-500' },
    { name: 'Django', level: 85, color: 'bg-blue-500' },
    { name: 'FastAPI', level: 80, color: 'bg-blue-500' },
    { name: 'Angular', level: 85, color: 'bg-red-500' },
    { name: 'TypeScript', level: 80, color: 'bg-red-500' },
    { name: 'RxJS', level: 75, color: 'bg-red-500' },
    { name: 'PostgreSQL', level: 85, color: 'bg-green-500' },
    { name: 'MongoDB', level: 80, color: 'bg-green-500' },
    { name: 'Redis', level: 75, color: 'bg-green-500' },
  ];

  const projects: ProjectProps[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with Django and Angular, featuring real-time inventory management and payment integration.',
      tags: ['Django', 'Angular', 'PostgreSQL'],
      image: 'https://csspicker.dev/api/image/?q=ecommerce+dashboard&image_type=photo'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time analytics dashboard with interactive charts and data visualization for business intelligence.',
      tags: ['FastAPI', 'React', 'MongoDB'],
      image: 'https://csspicker.dev/api/image/?q=analytics+dashboard&image_type=photo'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features.',
      tags: ['Python', 'Angular', 'Redis'],
      image: 'https://csspicker.dev/api/image/?q=task+management&image_type=photo'
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">Full Stack Developer</h1>
          <p className="text-4xl mb-6">
            <span className="text-blue-500">Python</span> & <span className="text-cyan-400">Angular</span>
          </p>
          <p className="text-gray-400 mb-8">Building scalable web applications with modern technologies</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View My Work
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="https://csspicker.dev/api/image/?q=professional+developer&image_type=photo"
              alt="Profile"
              className="w-64 h-64 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed mb-4">
              I'm a passionate Full Stack Developer with expertise in Python and Angular. With over 5 years of experience, I specialize in building scalable web applications that solve real-world problems.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              My journey in software development started with a curiosity for how things work, and has evolved into a career focused on creating efficient, user-friendly applications.
            </p>
            <div className="flex gap-4 mt-6">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Backend Development */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Backend Development</h3>
              <div className="space-y-4">
                {skills.slice(0, 3).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend Development */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-red-400">Frontend Development</h3>
              <div className="space-y-4">
                {skills.slice(3, 6).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Database Design */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Database Design</h3>
              <div className="space-y-4">
                {skills.slice(6, 9).map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Work Together Section */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-12">Have a project in mind? Let's discuss how we can work together.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">contact@developer.com</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/developer</p>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Get In Touch
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Full Stack Developer. All rights reserved.</p>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;