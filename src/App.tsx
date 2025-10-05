import React, { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, MapPin, Award, ExternalLink, Code } from "lucide-react";
import { motion } from "framer-motion";

// --- Data Structures ---

interface SkillProps {
  name: string;
  level: number;
  color: string;
  category: "Backend" | "Frontend" | "Database" | "DevOps";
}

interface ExperienceProps {
  title: string;
  company: string;
  duration: string;
  location: string;
  achievements: string[];
}

interface EducationProps {
  degree: string;
  institution: string;
  duration: string;
  location: string;
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

// --- Data Definition (From Resume) ---

const name = "SHREYANSH GAUTAM";
const primaryTitle = "Senior Software Engineer";
const email = "shreyansh.24gautam@gmail.com";
const phone = "+91 9481202247";
const location = "JPNagar, Bengaluru";
const profileSummary = "Software Engineer with 5+ Years of Experience in Development and Automation. A results-driven engineer with expertise in building scalable and efficient software solutions. Proven ability to optimize systems, automate workflows, and improve application performance. Strong background in developing web applications, leading end-to-end projects, and driving continuous improvement in both development and deployment processes.";
const excellenceAward = "Received the 'Excellence' Award for outstanding contributions to project innovation, Zeomega.";

const linkedInUrl = "https://www.linkedin.com/in/shreyanshgautam";
const githubUrl = "https://github.com/shreyanshgautam24";
// CRITICAL: This link assumes you place your PDF file in the 'public' folder.
const resumeDownloadUrl = "/Shreyansh-Gautam-Resume.pdf";

const skills: SkillProps[] = [
  { name: "Python", level: 90, color: "bg-yellow-400", category: "Backend" },
  { name: "Django/Flask", level: 85, color: "bg-yellow-400", category: "Backend" },
  { name: "Microservice", level: 80, color: "bg-yellow-400", category: "Backend" },
  //
  // --- UPDATED FRONTEND SKILLS ---
  //
  { name: "Angular 12", level: 85, color: "bg-red-500", category: "Frontend" },
  { name: "React", level: 75, color: "bg-red-500", category: "Frontend" }, // NEW: Added React
  { name: "Responsive Design (Tailwind)", level: 90, color: "bg-red-500", category: "Frontend" }, // NEW: Added Responsive Design
  { name: "State Management (Redux/NgRx)", level: 80, color: "bg-red-500", category: "Frontend" }, // NEW: Added State Management
  //
  // -----------------------------
  //
  { name: "SQL", level: 85, color: "bg-green-500", category: "Database" },
  { name: "Docker", level: 75, color: "bg-blue-500", category: "DevOps" },
  { name: "CI/CD (GitLab)", level: 80, color: "bg-blue-500", category: "DevOps" },
  { name: "AWS", level: 70, color: "bg-blue-500", category: "DevOps" },
];

const experience: ExperienceProps[] = [
  {
    title: 'Senior Product Developer',
    company: 'Epicor',
    duration: 'April 2025 - Present',
    location: 'Bengaluru',
    achievements: [
      'Working on backend development of a retail application using **Django** within the Retail platform, focusing on APIs and database integration.',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company: 'Zeomega Infotech',
    duration: 'Mar 2021 - April 2025',
    location: 'Bengaluru',
    achievements: [
      'Developed and deployed web applications using Flask/Django, integrating APIs and ensuring secure data handling.',
      'Streamlining deployment pipelines with **GitLab CI/CD**.',
      'Conducted performance testing on complex **SQL** queries, achieving up to **25% reduction in query execution time**.',
      'Automated data processing workflows using **Python**, saving **15+ hours per week of manual effort**.',
      'Contributed to maintenance and development on 5+ projects with minimum defect leakage.',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'CIOC FMCG',
    duration: 'April 2019 - April 2020',
    location: 'Bengaluru',
    achievements: [
      'Developed and maintained **eCommerce** web applications using **Angular** for a dynamic and responsive frontend.',
      'Integrated **Django backend** with Angular to handle product listings, user authentication, and secure payment systems, optimizing user experience.',
    ],
  },
];

const education: EducationProps[] = [
  {
    degree: 'Bachelor of Engineering (B.E.) in Computer Science',
    institution: 'JSS Academy of Technology and Engineering',
    duration: '2013 - 2017',
    location: 'Bengaluru (CSE)',
  },
  {
    degree: 'High School (Science & Mathematics)',
    institution: 'Blooms Academy',
    duration: '2009 - 2013',
    location: 'Satna',
  },
];

const portfolioProjects: ProjectProps[] = [
  {
    title: "Django Microservice & API Gateway",
    description: "Built a scalable microservice architecture using Django and Flask, secured with an API Gateway to manage routing, authentication, and rate limiting for high-volume traffic.",
    tags: ["Django", "Flask", "Microservices", "Docker", "AWS API Gateway"],
    liveUrl: "https://project-api-demo.netlify.app",
    githubUrl: "https://github.com/shreyanshgautam24/scalable-api-repo",
  },
  {
    title: "Responsive Full-Stack E-Commerce Clone",
    description: "A modern e-commerce application featuring a responsive Angular 12 frontend, real-time product filtering, and a secure Django backend handling payments and user profiles.",
    tags: ["Angular 12", "Django", "SQL", "Frontend", "Payment Integration"],
    liveUrl: "https://ecommerce-clone.vercel.app",
    githubUrl: "https://github.com/shreyanshgautam24/ecommerce-clone-repo",
  },
  {
    title: "CI/CD & Cloud Deployment Pipeline",
    description: "Developed and maintained a fully automated CI/CD pipeline using GitLab, Docker, and AWS, reducing deployment time for the main application from 45 minutes to under 5 minutes.",
    tags: ["GitLab CI/CD", "Docker", "AWS", "Automation", "DevOps"],
    liveUrl: "https://cicd-dashboard-example.io", // Placeholder for a visualization tool or dashboard
    githubUrl: "https://github.com/shreyanshgautam24/cicd-pipeline-scripts",
  },
];

// --- Utility Functions ---

const getSkillsByCategory = (category: string) => skills.filter(s => s.category === category);
const backendSkills = getSkillsByCategory("Backend");
const frontendSkills = getSkillsByCategory("Frontend");
const devopsSkills = getSkillsByCategory("DevOps").concat(getSkillsByCategory("Database"));

// --- Components ---

const ExperienceBlock: React.FC<{ data: ExperienceProps }> = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6 }}
    className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-8 hover:border-blue-500 transition-colors shadow-lg"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-blue-400">{data.title}</h3>
      <span className="text-sm text-gray-400 whitespace-nowrap">{data.duration}</span>
    </div>
    <div className="flex justify-between items-center mb-4">
      <p className="text-md font-medium text-gray-200">{data.company}</p>
      <div className="flex items-center text-sm text-gray-500">
        <MapPin className="w-4 h-4 mr-1" />
        {data.location}
      </div>
    </div>
    <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
      {data.achievements.map((item, index) => (
        <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
      ))}
    </ul>
  </motion.div>
);

const EducationBlock: React.FC<{ data: EducationProps }> = ({ data }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-4 hover:border-blue-500 transition-colors"
  >
    <div className="flex justify-between items-start mb-1">
      <h3 className="text-lg font-semibold text-white">{data.degree}</h3>
      <span className="text-sm text-gray-400 whitespace-nowrap">{data.duration}</span>
    </div>
    <div className="flex justify-between items-center text-sm text-gray-300">
      <p className="font-medium text-blue-300">{data.institution}</p>
      {data.location !== 'N/A' && (
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="w-3 h-3 mr-1" />
          {data.location}
        </div>
      )}
    </div>
  </motion.div>
);

const ProjectCard: React.FC<{ data: ProjectProps; index: number }> = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors shadow-xl"
  >
    <img
      src={`https://csspicker.dev/api/image/?q=${data.tags.join('+')}&image_type=photo&size=small`}
      alt={data.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-3 text-blue-300">{data.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{data.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {data.tags.map((tag, tIdx) => (
          <span key={tIdx} className="bg-yellow-600/20 text-yellow-400 px-3 py-1 rounded-full text-xs font-medium">{tag}</span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
        </a>
        <a href={data.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-colors">
          <Code className="w-4 h-4 mr-2" /> Code
        </a>
      </div>
    </div>
  </motion.div>
);


// --- Main App Component ---

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 🌌 Starry space background with shooting stars (User's original logic)
  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.2 + 0.05,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    const shootingStars: any[] = [];

    function createShootingStar() {
      if (Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          len: Math.random() * 300 + 100,
          speed: Math.random() * 10 + 6,
          angle: Math.PI / 4,
          opacity: 1,
        });
      }
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 15, 0.4)";
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
        star.alpha += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.alpha = Math.max(0.3, Math.min(1, star.alpha));
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;
        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.02;

        if (s.opacity <= 0) shootingStars.splice(i, 1);
      }

      createShootingStar();
      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-1"></div>

        <motion.div
          className="text-center relative z-10 p-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
            {name}
          </h1>
          <p className="text-2xl md:text-4xl mb-6 text-gray-200">
            <span className="text-blue-400">{primaryTitle}</span>
          </p>
          <p className="text-gray-400 mb-8 font-light">{location}</p>

          <div className="flex justify-center gap-6 mt-8">
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.1 }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform shadow-lg inline-block"
            >
              View Work History
            </motion.a>
            <motion.a
              href={resumeDownloadUrl}
              download // This attribute forces a download instead of opening in a new tab
              whileHover={{ scale: 1.1 }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-transform shadow-lg inline-block"
            >
              Download Resume (PDF)
            </motion.a>
          </div>

        </motion.div>
      </section>

      <hr className="border-gray-800" />

      {/* About Me / Summary */}
      <section className="py-20 px-8 max-w-6xl mx-auto" id="about">
        <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Professional Summary</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Profile Picture Placeholder */}
          <motion.img
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            src="https://csspicker.dev/api/image/?q=professional+developer+portrait&image_type=photo"
            alt="Profile"
            className="w-64 h-64 rounded-full object-cover shadow-2xl border-4 border-gray-700"
          />

          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed mb-4 text-lg">
              {profileSummary}
            </p>
            <div className="bg-yellow-900/30 border-l-4 border-yellow-500 p-4 rounded-md flex items-center mt-6">
              <Award className="w-6 h-6 text-yellow-500 mr-3 flex-shrink-0" />
              <p className="font-medium text-yellow-300">
                **Excellence Award:** {excellenceAward}
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
              </a>
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin className="w-8 h-8 text-gray-400 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Technical Skills Section */}
      <section className="py-20 px-8 bg-gray-900/50" id="skills">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Backend & API", color: "text-yellow-400", list: backendSkills },
              { title: "Frontend & UI", color: "text-red-400", list: frontendSkills },
              { title: "DevOps, Cloud & Data", color: "text-blue-400", list: devopsSkills },
            ].map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-xl"
              >
                <h3 className={`text-xl font-semibold mb-6 ${cat.color}`}>{cat.title}</h3>
                {cat.list.map((skill, idx) => (
                  <div key={idx} className="mb-4">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Projects Section - NEW ADDITION */}
      <section className="py-20 px-8" id="projects">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Showcase Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioProjects.map((project, index) => (
              <ProjectCard key={index} data={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Professional Experience Section */}
      <section className="py-20 px-8 bg-gray-900/50" id="experience">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Work Experience</h2>
          <div className="md:w-3/4 mx-auto">
            {experience.map((job, index) => (
              <ExperienceBlock key={index} data={job} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Education Section - NEW/CONFIRMED */}
      <section className="py-20 px-8" id="education">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-blue-400">Education</h2>
          <div className="md:w-3/4 mx-auto">
            {education.map((edu, index) => (
              <EducationBlock key={index} data={edu} />
            ))}
          </div>
        </div>
      </section>

      <hr className="border-gray-800" />

      {/* Contact */}
      <section className="py-20 px-8 bg-gray-900/50" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-blue-400">Let's Connect</h2>
          <p className="text-gray-400 mb-12 text-lg">I'm currently based in {location}. Feel free to reach out to discuss future opportunities.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50">
              <a href={`mailto:${email}`} aria-label="Email Me">
                <div className="bg-blue-600 p-4 rounded-full mb-4 hover:bg-blue-700 transition-colors"><Mail className="w-8 h-8" /></div>
              </a>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">{email}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50">
              <div className="bg-blue-600 p-4 rounded-full mb-4"><Phone className="w-8 h-8" /></div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">{phone}</p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50">
              <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <div className="bg-blue-600 p-4 rounded-full mb-4 hover:bg-blue-700 transition-colors"><Linkedin className="w-8 h-8" /></div>
              </a>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">/in/shreyanshgautam</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
              <Github className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;