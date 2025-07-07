import { motion } from "framer-motion";

export default function SkillsSection() {
  const skills = [
    {
      category: "Langages",
      icon: "fas fa-code",
      color: "from-bright-cyan to-turquoise",
      textColor: "text-bright-cyan",
      skills: [
        { name: "PHP", level: 80 },
        { name: "Java", level: 80 },
        { name: "Python", level: 60 },
        { name: "C", level: 60 },
        { name: "Dart", level: 80 }
      ]
    },
    {
      category: "Frameworks",
      icon: "fas fa-layer-group",
      color: "from-deep-purple to-bright-cyan",
      textColor: "text-deep-purple",
      skills: [
        { name: "Laravel", level: 100 },
        { name: "Angular", level: 80 },
        { name: "Flutter", level: 80 },
        { name: "Bootstrap", level: 100 },
        { name: "TailwindCSS", level: 80 }
      ]
    },
    {
      category: "Outils",
      icon: "fas fa-tools",
      color: "from-turquoise to-deep-purple",
      textColor: "text-turquoise",
      skills: [
        { name: "Git/GitHub", level: 80 },
        { name: "VS Code", level: 100 },
        { name: "Android Studio", level: 80 },
        { name: "Trello", level: 80 },
        { name: "Figma", level: 60 }
      ]
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
    <section id="skills" className="py-20 relative">
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
            COMPÉTENCES TECHNIQUES
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-32 h-1 bg-gradient-to-r from-deep-purple to-turquoise mx-auto"
          />
        </motion.div>
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skills.map((category, index) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${category.icon} text-2xl text-white`} />
                </div>
                <h3 className={`text-lg sm:text-xl font-orbitron font-bold ${category.textColor}`}>
                  {category.category}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-jetbrains text-sm sm:text-base">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: skillIndex * 0.1 + i * 0.1 }}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level / 20 ? 'bg-bright-cyan' : 'bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-bright-cyan to-turquoise rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
