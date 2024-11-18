import React from "react";
import { motion } from "framer-motion";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    className="bg-gray-900 text-white p-6 mt-10"
  >
    <div className="flex justify-between items-center">
      <p>© 2024 Xurya Inc. All rights reserved</p>
      <div className="space-x-4">
        <a href="#terms" className="text-gray-400 hover:text-white">
          Terms of Service
        </a>
        <a href="#privacy" className="text-gray-400 hover:text-white">
          Privacy Policy
        </a>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
