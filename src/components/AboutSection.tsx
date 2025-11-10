import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart3, Users, ArrowRight, Sparkles, Star, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: Target,
      title: 'RE Lead Generation Expert',
      description: 'Specialized in real estate lead generation strategies across Facebook, Instagram, and Google platforms',
      gradient: 'from-blue-600 via-purple-600 to-indigo-600',
      bgGradient: 'from-blue-500/10 via-purple-500/10 to-indigo-500/10',
      iconBg: 'from-blue-500 to-indigo-600',
      stats: 'Dubai Market'
    },
    {
      icon: TrendingUp,
      title: 'Meta & Google Ads Specialist',
      description: 'Expert in creating, managing, and optimizing paid social media and search campaigns',
      gradient: 'from-emerald-600 via-teal-600 to-cyan-600',
      bgGradient: 'from-emerald-500/10 via-teal-500/10 to-cyan-500/10',
      iconBg: 'from-emerald-500 to-cyan-600',
      stats: '$15.22 CPL'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Strategy',
      description: 'ROI-focused approach with comprehensive analytics, A/B testing, and continuous optimization',
      gradient: 'from-orange-600 via-red-600 to-pink-600',
      bgGradient: 'from-orange-500/10 via-red-500/10 to-pink-500/10',
      iconBg: 'from-orange-500 to-pink-600',
      stats: '6+ Years'
    },
    {
      icon: Users,
      title: 'Full-Spectrum Marketing',
      description: 'SEO, social media management, content strategy, and brand development expertise',
      gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
      bgGradient: 'from-violet-500/10 via-purple-500/10 to-fuchsia-500/10',
      iconBg: 'from-violet-500 to-fuchsia-600',
      stats: '5000+ Leads'
    }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-dev-surface-light via-dev-bg-light to-dev-surface-light dark:from-dev-surface-dark dark:via-dev-bg-dark dark:to-dev-surface-dark relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['#3b82f6', '#10b981', '#8b5cf6', '#f97316', '#ef4444', '#06b6d4'][i]
              }, transparent)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          />
        ))}

        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-60"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 relative">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6 sm:mb-8 relative overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />

              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 text-blue-500" />
              <span className="text-blue-500 font-bold text-sm sm:text-base lg:text-lg">Professional Excellence</span>
              <motion.div
                className="ml-2 sm:ml-3 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                About
              </span>
              <br />
              <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                Excellence
              </span>
            </motion.h2>

            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed max-w-4xl mx-auto px-2 sm:px-4 lg:px-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Results-driven Digital Marketing Specialist with 6+ years of experience in lead generation,
              campaign management, and data-driven marketing strategies. Proven track record in the Dubai real estate market.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <motion.div
                className="relative h-full p-6 sm:p-8 lg:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-700 overflow-hidden"
                whileHover={{
                  y: -12,
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5
                }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${highlight.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                  initial={false}
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.5 }}
                />

                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                      }}
                      animate={{
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        y: [0, -20, -40]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-6">
                    <div className="flex items-center">
                      <motion.div
                        className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${highlight.iconBg} flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 shadow-2xl`}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.8, type: "spring" }}
                      >
                        <highlight.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                          {highlight.title}
                        </h4>
                        <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm sm:text-base">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-full border border-gray-300/50 dark:border-gray-600/50"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300">
                        {highlight.stats}
                      </span>
                    </motion.div>
                  </div>

                  <motion.h3
                    className="text-xl sm:text-2xl lg:text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-3 sm:mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-500"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {highlight.title}
                  </motion.h3>

                  <motion.p
                    className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    {highlight.description}
                  </motion.p>

                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-500" />
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${highlight.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-700 -z-10`}
                  initial={false}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 lg:mt-20"
        >
          <motion.div
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />

            <Star className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3 text-blue-500" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold text-sm sm:text-base lg:text-lg">
              Ready to elevate your marketing strategy
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
