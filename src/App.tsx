import React from 'react';
import { Mail, Phone, Linkedin, Github, Twitter, Facebook } from 'lucide-react';

interface SkillProps {
  name: string;
  level: number;
  color: string;
  category: 'Backend' | 'Frontend' | 'Database' | 'DevOps'; // Added category for flexible display
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const App = () => {
  // --- UPDATED DATA FROM RESUME ---
  const name = "SHREYANSH GAUTAM";
  const title = "Senior Software Engineer";
  const email = "shreyansh.24gautam@gmail.com";
  const phone = "+91 9481202247"; // Formatted with country code
  const location = "JPNagar, Bengaluru";
  const profileSummary = "A results-driven engineer with 5+ years of experience in development and automation. Proven ability to build scalable and efficient software solutions, optimize systems, automate workflows, and drive continuous improvement in development and deployment processes." // Summarized from resume

  // Updated skills list based on resume data (using estimated levels for progress bars)
  const skills: SkillProps[] = [
    // Backend
    { name: 'Python', level: 90, color: 'bg-yellow-400', category: 'Backend' },
    { name: 'Django/Flask', level: 85, color: 'bg-yellow-400', category: 'Backend' },
    { name: 'Microservice', level: 80, color: 'bg-yellow-400', category: 'Backend' },
    // Frontend
    { name: 'Angular 12', level: 85, color: 'bg-red-500', category: 'Frontend' },
    // Database
    { name: 'SQL', level: 85, color: 'bg-green-500', category: 'Database' },
    // DevOps
    { name: 'Docker', level: 75, color: 'bg-blue-500', category: 'DevOps' },
    { name: 'CI/CD (GitLab)', level: 80, color: 'bg-blue-500', category: 'DevOps' },
    { name: 'AWS', level: 70, color: 'bg-blue-500', category: 'DevOps' },
  ];

  // Translating key work experience achievements into ProjectProps format
  const projects: ProjectProps[] = [
    {
      title: 'Performance Optimized SQL & Data Automation',
      description: 'Conducted performance testing on complex SQL queries, achieving up to 25% reduction in query execution time. Also automated data processing workflows using Python, saving 15+ hours per week of manual effort. Contributed to 5+ projects with minimum defect leakage.',
      tags: ['Python', 'SQL', 'Automation', 'Performance Tuning'],
      image: 'https://csspicker.dev/api/image/?q=data+optimization+dashboard&image_type=photo'
    },
    {
      title: 'E-Commerce Platform Development (Angular/Django)',
      description: 'Developed and maintained a responsive eCommerce web application using Angular for the frontend. Integrated a secure Django backend to handle product listings, user authentication, and payment systems.',
      tags: ['Angular', 'Django', 'Frontend', 'E-Commerce'],
      image: 'https://csspicker.dev/api/image/?q=responsive+e-commerce+site&image_type=photo'
    },
    {
      title: 'Retail Application Backend & CI/CD',
      description: 'Worked on backend development of a core retail application using Django, focusing on APIs and database integration. Streamlined deployment pipelines by implementing GitLab CI/CD for rapid and secure deployments.',
      tags: ['Django', 'APIs', 'Database Integration', 'GitLab CI/CD'],
      image: 'https://csspicker.dev/api/image/?q=backend+api+integration&image_type=photo'
    },
  ];

  // Grouping skills for the three-column layout in the Skills section
  const backendSkills = skills.filter(s => s.category === 'Backend');
  const frontendSkills = skills.filter(s => s.category === 'Frontend');
  const devopsSkills = skills.filter(s => s.category === 'DevOps' || s.category === 'Database');

  // --- COMPONENT RENDER ---

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-gradient-radial from-blue-900/20 to-transparent"></div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">{name}</h1>
          <p className="text-4xl mb-6">
            <span className="text-blue-500">Python</span> & <span className="text-red-500">Angular</span> Developer
          </p>
          <p className="text-gray-400 mb-8">{title} | {location}</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View Achievements
          </button>
        </div>
      </section>

      {/* About Me Section (Professional Summary) */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-shrink-0">
            <img
              src="https://csspicker.dev/api/image/?q=professional+developer+portrait&image_type=photo"
              alt="Profile"
              className="w-64 h-64 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed mb-4">
              {profileSummary}
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Received the **"Excellence" Award** for outstanding contributions to project innovation at Zeomega.
            </p>
            <div className="flex gap-4 mt-6">
              {/* Placeholder for actual links from your resume */}
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
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
              <h3 className="text-xl font-semibold mb-6 text-yellow-400">Backend / Architecture</h3>
              <div className="space-y-4">
                {backendSkills.map((skill, index) => (
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
                {frontendSkills.map((skill, index) => (
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

            {/* DevOps / Database */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">DevOps / Data</h3>
              <div className="space-y-4">
                {devopsSkills.map((skill, index) => (
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

      {/* Featured Projects (Work Experience) Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Key Projects & Achievements</h2>
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

      {/* Let's Work Together Section (Contact) */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-12">I'm currently based in {location}. Feel free to reach out to discuss collaborations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">{email}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">{phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/shreyanshgautam</p>
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
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 {name}. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Placeholder for actual links */}
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