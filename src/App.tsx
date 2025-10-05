import React, { useEffect, useRef } from "react";
import { Mail, Phone, Linkedin, Github, Twitter, Facebook } from "lucide-react";
import { motion } from "framer-motion";

interface SkillProps {
  name: string;
  level: number;
  color: string;
  category: "Backend" | "Frontend" | "Database" | "DevOps";
}

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

const App: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 🌌 Starry space background with shooting stars
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

      // Twinkling stars
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

      // Shooting stars
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

  // Portfolio Data
  const name = "SHREYANSH GAUTAM";
  const title = "Senior Software Engineer";
  const email = "shreyansh.24gautam@gmail.com";
  const phone = "+91 9481202247";
  const location = "JPNagar, Bengaluru";
  const profileSummary =
    "A results-driven engineer with 6+ years of experience in development and automation. Proven ability to build scalable and efficient software solutions, optimize systems, automate workflows, and drive continuous improvement in development and deployment processes.";

  const skills: SkillProps[] = [
    { name: "Python", level: 90, color: "bg-yellow-400", category: "Backend" },
    { name: "Django/Flask", level: 85, color: "bg-yellow-400", category: "Backend" },
    { name: "Microservice", level: 80, color: "bg-yellow-400", category: "Backend" },
    { name: "Angular 12", level: 85, color: "bg-red-500", category: "Frontend" },
    { name: "SQL", level: 85, color: "bg-green-500", category: "Database" },
    { name: "Docker", level: 75, color: "bg-blue-500", category: "DevOps" },
    { name: "CI/CD (GitLab)", level: 80, color: "bg-blue-500", category: "DevOps" },
    { name: "AWS", level: 70, color: "bg-blue-500", category: "DevOps" },
  ];

  const projects: ProjectProps[] = [
    {
      title: "Performance Optimized SQL & Data Automation",
      description:
        "Conducted performance testing on complex SQL queries, achieving up to 25% reduction in query execution time. Automated data workflows with Python, saving 15+ hours weekly.",
      tags: ["Python", "SQL", "Automation", "Performance Tuning"],
      image:
        "https://csspicker.dev/api/image/?q=data+optimization+dashboard&image_type=photo",
    },
    {
      title: "E-Commerce Platform Development (Angular/Django)",
      description:
        "Developed and maintained a responsive eCommerce app using Angular frontend and Django backend for secure APIs and payments.",
      tags: ["Angular", "Django", "Frontend", "E-Commerce"],
      image:
        "https://csspicker.dev/api/image/?q=responsive+e-commerce+site&image_type=photo",
    },
    {
      title: "Retail Application Backend & CI/CD",
      description:
        "Developed backend APIs using Django and implemented GitLab CI/CD for automated deployments.",
      tags: ["Django", "APIs", "Database Integration", "GitLab CI/CD"],
      image:
        "https://csspicker.dev/api/image/?q=backend+api+integration&image_type=photo",
    },
  ];

  const backendSkills = skills.filter((s) => s.category === "Backend");
  const frontendSkills = skills.filter((s) => s.category === "Frontend");
  const devopsSkills = skills.filter((s) => s.category === "DevOps" || s.category === "Database");

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-1"></div>

        <motion.div
          className="text-center relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
            {name}
          </h1>
          <p className="text-2xl md:text-4xl mb-6 text-gray-200">
            <span className="text-blue-400">Fullstack</span><span className="text-red-400"> Developer</span>
          </p>
          <p className="text-gray-400 mb-8">{title} | {location}</p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-transform shadow-lg"
          >
            View Achievements
          </motion.button>
        </motion.div>
      </section>

      {/* About Me */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://csspicker.dev/api/image/?q=professional+developer+portrait&image_type=photo"
            alt="Profile"
            className="w-64 h-64 rounded-lg object-cover"
          />
          <div className="flex-1">
            <p className="text-gray-300 leading-relaxed mb-4">{profileSummary}</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Received the <strong>"Excellence Award"</strong> for innovation at Zeomega.
            </p>
            <div className="flex gap-4 mt-6">
              <Github className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Backend", color: "text-yellow-400", list: backendSkills },
            { title: "Frontend", color: "text-red-400", list: frontendSkills },
            { title: "DevOps / Data", color: "text-blue-400", list: devopsSkills },
          ].map((cat, i) => (
            <div key={i} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
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
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Key Projects & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-blue-500 transition-colors">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-8 bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-gray-400 mb-12">I'm currently based in {location}. Feel free to reach out!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4"><Mail className="w-8 h-8" /></div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400 text-sm">{email}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4"><Phone className="w-8 h-8" /></div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-400 text-sm">{phone}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 p-4 rounded-full mb-4"><Linkedin className="w-8 h-8" /></div>
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400 text-sm">linkedin.com/in/shreyanshgautam</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 {name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
