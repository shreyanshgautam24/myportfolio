import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Stars setup
    const stars = Array.from({ length: 250 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5,
      speed: Math.random() * 0.2 + 0.05,
      alpha: Math.random(),
      twinkleSpeed: Math.random() * 0.02 + 0.005,
    }));

    // Shooting stars setup
    const shootingStars = [];

    function createShootingStar() {
      // Occasionally spawn a shooting star
      if (Math.random() < 0.02) {
        shootingStars.push({
          x: Math.random() * width,
          y: Math.random() * height * 0.5,
          len: Math.random() * 300 + 100,
          speed: Math.random() * 10 + 6,
          angle: Math.PI / 4, // diagonal angle
          opacity: 1,
        });
      }
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 15, 0.4)"; // space-like dark blue tint
      ctx.fillRect(0, 0, width, height);

      // Draw twinkling stars
      stars.forEach((star) => {
        star.y += star.speed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }

        // Twinkle effect
        star.alpha += star.twinkleSpeed * (Math.random() > 0.5 ? 1 : -1);
        star.alpha = Math.max(0.3, Math.min(1, star.alpha));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      // Draw shooting stars
      for (let i = 0; i < shootingStars.length; i++) {
        const s = shootingStars[i];
        const tailX = s.x - Math.cos(s.angle) * s.len;
        const tailY = s.y - Math.sin(s.angle) * s.len;

        const grad = ctx.createLinearGradient(s.x, s.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity})`);
        grad.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        // Move shooting star
        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.02;

        // Remove faded stars
        if (s.opacity <= 0) {
          shootingStars.splice(i, 1);
        }
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Space background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/90 z-1"></div>

      {/* Hero Text */}
      <motion.div
        className="text-center relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-4 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 animate-pulse">
          Shreyansh Gautam
        </h1>
        <p className="text-2xl md:text-4xl mb-6 text-gray-200">
          <span className="text-blue-400">Python</span> &{" "}
          <span className="text-red-400">Angular</span> Developer
        </p>
        <p className="text-gray-400 mb-8">
          Full Stack Engineer | Bengaluru, India
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-transform shadow-lg"
        >
          View Achievements
        </motion.button>
      </motion.div>
    </section>
  );
}
