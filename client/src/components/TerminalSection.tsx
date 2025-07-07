import { motion } from "framer-motion";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export default function TerminalSection() {
  const commands = [
    { command: "whoami", output: "Ibrahima Kebe - Développeur Web et Mobile passionné" },
    { command: "ls skills/", output: "php/ java/ python/ flutter/ laravel/ angular/ mysql/ git/" },
    { command: "cat motivation.txt", output: "\"L'innovation naît de la passion pour résoudre les défis complexes avec des solutions élégantes.\"" }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glassmorphism p-6 sm:p-8 rounded-2xl tech-border"
        >
          <div className="bg-input rounded-lg p-4 sm:p-6 font-jetbrains">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <span className="ml-4 text-gray-400 text-sm sm:text-base">
                terminal@ibrahima-kebe:~$
              </span>
            </div>
            
            <div className="text-bright-cyan text-sm sm:text-base">
              {commands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
                  className="mb-4"
                >
                  <div className="mb-2">
                    <span className="text-gray-400">$</span> {cmd.command}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.5 + 0.2 }}
                    className="text-foreground mb-2"
                  >
                    {cmd.output}
                  </motion.div>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: commands.length * 0.5 }}
                className="mb-2"
              >
                <span className="text-gray-400">$</span> 
                <span className="typing-cursor ml-1" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
