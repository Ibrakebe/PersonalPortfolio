import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8
      }
    }
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-4"
          >
            À PROPOS DE MOI
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-bright-cyan to-turquoise mx-auto"
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-bright-cyan mb-4">Mission</h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Diplômé en génie logiciel, passionné par le développement d'applications 
                web et mobiles robustes. Figurant en force de proposition, je 
                cherche à intégrer une équipe dynamique afin de contribuer à des projets 
                innovants et à forte impact.
              </p>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-turquoise mb-4">Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 neumorphism rounded-xl">
                  <i className="fas fa-code text-2xl sm:text-3xl text-bright-cyan mb-2" />
                  <div className="text-xs sm:text-sm font-jetbrains">Développement Web</div>
                </div>
                <div className="text-center p-4 neumorphism rounded-xl">
                  <i className="fas fa-mobile-alt text-2xl sm:text-3xl text-turquoise mb-2" />
                  <div className="text-xs sm:text-sm font-jetbrains">Applications Mobile</div>
                </div>
                <div className="text-center p-4 neumorphism rounded-xl">
                  <i className="fas fa-database text-2xl sm:text-3xl text-deep-purple mb-2" />
                  <div className="text-xs sm:text-sm font-jetbrains">Base de Données</div>
                </div>
                <div className="text-center p-4 neumorphism rounded-xl">
                  <i className="fas fa-project-diagram text-2xl sm:text-3xl text-bright-cyan mb-2" />
                  <div className="text-xs sm:text-sm font-jetbrains">Gestion de Projet</div>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-bright-cyan mb-6">Formation</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-4 h-4 bg-bright-cyan rounded-full mt-2"
                  />
                  <div>
                    <h4 className="font-jetbrains font-semibold text-glacial-white text-sm sm:text-base">
                      Licence en génie logiciel
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Université Iba Der Thiam de Thiès</p>
                    <p className="text-turquoise text-xs sm:text-sm">2022 - 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                    className="w-4 h-4 bg-turquoise rounded-full mt-2"
                  />
                  <div>
                    <h4 className="font-jetbrains font-semibold text-glacial-white text-sm sm:text-base">
                      Baccalauréat scientifique série S2
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Lycée Sagatta Dioloff</p>
                    <p className="text-turquoise text-xs sm:text-sm">2021</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-turquoise mb-6">Langues</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="font-jetbrains text-sm sm:text-base">Français</span>
                  <span className="text-bright-cyan text-sm sm:text-base">Courant</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jetbrains text-sm sm:text-base">Anglais</span>
                  <span className="text-turquoise text-sm sm:text-base">Technique</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-jetbrains text-sm sm:text-base">Wolof</span>
                  <span className="text-deep-purple text-sm sm:text-base">Maternel</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
