import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé!",
      description: "Merci pour votre message! Je vous répondrai bientôt.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "fas fa-envelope",
      label: "Email",
      value: "ibrahima.kebe@univ-thies.sn",
      href: "mailto:ibrahima.kebe@univ-thies.sn",
      color: "from-bright-cyan to-turquoise"
    },
    {
      icon: "fas fa-phone",
      label: "Téléphone",
      value: "+221 77 812 54 50",
      href: "tel:+221778125450",
      color: "from-deep-purple to-bright-cyan"
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Localisation",
      value: "Thiès, Sénégal",
      href: "#",
      color: "from-turquoise to-deep-purple"
    }
  ];

  const socialLinks = [
    {
      icon: "fab fa-github",
      href: "https://github.com/Ibrakebe",
      color: "from-bright-cyan to-turquoise"
    },
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/ibrahima-kebe/",
      color: "from-deep-purple to-bright-cyan"
    },
    {
      icon: "fas fa-globe",
      href: "https://www.reallogicretailsite.com",
      color: "from-turquoise to-deep-purple"
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
    <section id="contact" className="py-20 relative">
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
            CONTACTEZ-MOI
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
          className="grid md:grid-cols-2 gap-8 lg:gap-12"
        >
          <div className="space-y-8">
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-bright-cyan mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center`}>
                      <i className={`${info.icon} text-white`} />
                    </div>
                    <div>
                      <p className="font-jetbrains text-gray-300 text-sm sm:text-base">{info.label}</p>
                      <a
                        href={info.href}
                        className="text-bright-cyan hover:text-turquoise transition-colors text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
            >
              <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-turquoise mb-6">
                Réseaux Sociaux
              </h3>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center`}
                  >
                    <i className={`${social.icon} text-white text-xl`} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div
            variants={itemVariants}
            className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
          >
            <h3 className="text-xl sm:text-2xl font-orbitron font-bold text-bright-cyan mb-6">
              Formulaire de Contact
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-jetbrains mb-2 text-sm sm:text-base">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-black border border-bright-cyan rounded-lg focus:outline-none focus:border-turquoise text-glacial-white font-jetbrains text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-300 font-jetbrains mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-black border border-bright-cyan rounded-lg focus:outline-none focus:border-turquoise text-glacial-white font-jetbrains text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-300 font-jetbrains mb-2 text-sm sm:text-base">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-obsidian-black border border-bright-cyan rounded-lg focus:outline-none focus:border-turquoise text-glacial-white font-jetbrains text-sm sm:text-base"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-300 font-jetbrains mb-2 text-sm sm:text-base">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-obsidian-black border border-bright-cyan rounded-lg focus:outline-none focus:border-turquoise text-glacial-white font-jetbrains resize-none text-sm sm:text-base"
                />
              </div>
              
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-gradient-to-r from-bright-cyan to-turquoise px-6 py-3 rounded-lg font-jetbrains font-semibold text-white pulse-glow text-sm sm:text-base"
              >
                Envoyer le Message
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
