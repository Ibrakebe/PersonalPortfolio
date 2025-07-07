import { motion } from "framer-motion";

export default function ProjectsSection() {
  const projects = [
    {
      title: "SeedPass",
      icon: "fas fa-seedling",
      color: "from-bright-cyan to-turquoise",
      textColor: "text-bright-cyan",
      description: "Plateforme de traçabilité agricole avec développement d'une solution web/mobile pour l'enregistrement, la vérification et la certification sécurisée de lots de semences via QR code.",
      technologies: ["Flutter", "Laravel", "QR Code"]
    },
    {
      title: "Gestion des Recettes",
      icon: "fas fa-utensils",
      color: "from-deep-purple to-bright-cyan",
      textColor: "text-deep-purple",
      description: "Système complet pour l'enregistrement, le suivi et la comptabilité des recettes municipales, avec génération automatique de quittances et rapports budgétaires.",
      technologies: ["PHP", "MySQL", "Bootstrap"]
    },
    {
      title: "Application BFEM",
      icon: "fas fa-graduation-cap",
      color: "from-turquoise to-deep-purple",
      textColor: "text-turquoise",
      description: "Application facilitant la centralisation des notes, le calcul automatique des moyennes, la génération de procès-verbaux et l'édition des relevés de notes.",
      technologies: ["Java", "SQLite", "Desktop"]
    },
    {
      title: "Event Manager",
      icon: "fas fa-calendar-alt",
      color: "from-bright-cyan to-deep-purple",
      textColor: "text-bright-cyan",
      description: "Application web interactive pour la planification, le suivi et l'inscription à des événements, intégrant calendrier dynamique et tableau de bord responsive.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Portfolio Futuriste",
      icon: "fas fa-globe",
      color: "from-turquoise to-bright-cyan",
      textColor: "text-turquoise",
      description: "Site web personnel avec interface futuriste, animations avancées, effets holographiques et optimisation mobile complète.",
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      title: "API REST",
      icon: "fas fa-server",
      color: "from-deep-purple to-turquoise",
      textColor: "text-deep-purple",
      description: "Développement d'APIs RESTful sécurisées pour applications mobiles et web, avec authentification JWT et documentation complète.",
      technologies: ["Laravel", "JWT", "Swagger"]
    }
  ];

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
    <section id="portfolio" className="py-20 relative">
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
            PROJETS RÉALISÉS
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-turquoise to-bright-cyan mx-auto"
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border cursor-pointer group"
            >
              <div className="hexagon w-16 h-16 bg-gradient-to-r from-bright-cyan to-turquoise mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                <i className={`${project.icon} text-white text-2xl`} />
              </div>
              
              <h3 className={`text-lg sm:text-xl font-orbitron font-bold ${project.textColor} mb-4 text-center`}>
                {project.title}
              </h3>
              
              <p className="text-gray-300 text-xs sm:text-sm mb-4 text-center leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-deep-purple text-white rounded-full text-xs font-jetbrains"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
