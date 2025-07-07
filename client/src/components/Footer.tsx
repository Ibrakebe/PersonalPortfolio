import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-bright-cyan/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 font-jetbrains text-sm sm:text-base">
            © 2024 Ibrahima Kebe. Tous droits réservés.
          </p>
          <p className="text-bright-cyan font-jetbrains mt-2 text-sm sm:text-base">
            Développé avec passion et technologies futuristes ✨
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
