import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

export const Navigation: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Campaigns', href: '#campaigns' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-dev-bg-light/80 dark:bg-dev-bg-dark/80 backdrop-blur-md border-b border-dev-border-light dark:border-dev-border-dark"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          <motion.div
            className="font-bold text-lg sm:text-xl text-dev-text-primary-light dark:text-dev-text-primary-dark"
            whileHover={{ scale: 1.05 }}
          >
            Atif Qadeer
          </motion.div>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark hover:text-dev-accent-blue transition-colors text-sm lg:text-base"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
          
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};