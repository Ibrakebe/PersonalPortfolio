import { motion } from "framer-motion";
import { useScrollToSection } from "@/hooks/useScrollToSection";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export default function HeroSection() {
  const scrollToSection = useScrollToSection();
  const typedText = useTypingEffect("DÉVELOPPEUR WEB ET MOBILE", 100);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative tech-grid">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 0
          }}
          className="absolute top-1/4 left-1/4 w-1 h-1 bg-bright-cyan rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 2
          }}
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-turquoise rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 4
          }}
          className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-deep-purple rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: 6
          }}
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-bright-cyan rounded-full"
        />
      </div>

      <div className="text-center z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-bright-cyan pulse-glow">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400"
              alt="Ibrahima Kebe"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-orbitron font-bold mb-4 gradient-text hologram"
        >
          IBRAHIMA KEBE
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg sm:text-xl md:text-2xl font-jetbrains mb-8 text-metallic-silver min-h-[2rem]"
        >
          <span className="typing-cursor">{typedText}</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Ibrakebe"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism p-4 rounded-full pulse-glow"
          >
            <i className="fab fa-github text-2xl text-bright-cyan" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/ibrahima-kebe/"
            target="_blank"
            rel="noopener noreferrer"
            className="glassmorphism p-4 rounded-full pulse-glow"
          >
            <i className="fab fa-linkedin text-2xl text-bright-cyan" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="mailto:ibrahima.kebe@univ-thies.sn"
            className="glassmorphism p-4 rounded-full pulse-glow"
          >
            <i className="fas fa-envelope text-2xl text-bright-cyan" />
          </motion.a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("about")}
            className="bg-gradient-to-r from-deep-purple to-bright-cyan px-6 sm:px-8 py-3 rounded-full font-jetbrains font-semibold text-white pulse-glow text-sm sm:text-base"
          >
            Découvrir mon parcours
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
