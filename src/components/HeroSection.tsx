import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MessageCircle, ArrowRight, TrendingUp, Target, BarChart3, Sparkles, Zap, Star, Award } from 'lucide-react';
import { FloatingElements } from './FloatingElements';

export const HeroSection: React.FC = () => {
  const socialLinks = [
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      href: 'https://wa.me/971547634170',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10 hover:bg-green-500/20'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:Atif.qadeerr@gmail.com',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10 hover:bg-blue-500/20'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/atif-qadeer',
      color: 'text-blue-600',
      bgColor: 'bg-blue-500/10 hover:bg-blue-500/20'
    }
  ];

  const techStack = ['Facebook Ads', 'Google Ads', 'SEO', 'Social Media', 'Lead Generation', 'Analytics'];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden pt-16 sm:pt-20 md:pt-24 lg:pt-32">
      <FloatingElements />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-30">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: `
                radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)
              `
            }}
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ scale: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 360],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50]
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.5
            }}
          >
            <div 
              className={`w-4 h-4 sm:w-6 sm:h-6 ${
                i % 3 === 0 ? 'bg-blue-500 rounded-full' :
                i % 3 === 1 ? 'bg-emerald-500 rotate-45' :
                'bg-purple-500 rounded-full'
              }`}
            />
          </motion.div>
        ))}

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6 lg:space-y-8 text-center xl:text-left order-2 xl:order-1"
          >
            {/* Animated Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring", stiffness: 100 }}
              className="relative inline-flex items-center"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue/20 to-dev-accent-emerald/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <div className="relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full bg-dev-accent-blue/10 border border-dev-accent-blue/30 text-dev-accent-blue text-xs sm:text-sm font-semibold backdrop-blur-sm">
                <div className="flex items-center">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2 animate-pulse" />
                  Digital Marketing Specialist
                  <motion.div
                    className="ml-1.5 sm:ml-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-dev-accent-emerald rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Name with Gradient Animation */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 relative leading-tight"
              >
                <motion.span
                  className="bg-gradient-to-r from-dev-text-primary-light via-dev-accent-blue to-dev-accent-emerald dark:from-dev-text-primary-dark dark:via-dev-accent-blue dark:to-dev-accent-emerald bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Atif Qadeer
                </motion.span>
                
                {/* Animated Underline */}
                <motion.div
                  className="absolute -bottom-1 sm:-bottom-2 left-1/2 xl:left-0 transform -translate-x-1/2 xl:translate-x-0 h-0.5 sm:h-1 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: '60%' }}
                  transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                />
              </motion.h1>
            </div>

            {/* Enhanced Animated Role Tags */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-wrap justify-center xl:justify-start items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 lg:mb-6"
            >
              {[
                { icon: Target, text: 'Lead Generation Expert', colors: ['#10b981', '#3b82f6', '#8b5cf6'] },
                { icon: TrendingUp, text: 'Meta & Google Ads', colors: ['#8b5cf6', '#f97316', '#10b981'] },
                { icon: BarChart3, text: 'ROI Optimizer', colors: ['#f97316', '#10b981', '#3b82f6'] }
              ].map((role, index) => (
                <motion.div
                  key={role.text}
                  className="flex items-center bg-dev-card-light/60 dark:bg-dev-card-dark/60 backdrop-blur-xl px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full border border-dev-border-light/50 dark:border-dev-border-dark/50 group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 0.8 }}
                  />
                  
                  <role.icon className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 mr-1.5 sm:mr-2 text-dev-accent-blue group-hover:text-dev-accent-emerald transition-colors duration-300" />
                  <motion.span 
                    className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium text-xs sm:text-sm lg:text-base relative z-10"
                    whileHover={{
                      background: `linear-gradient(45deg, ${role.colors.join(', ')})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      transition: { duration: 1.5, repeat: Infinity }
                    }}
                  >
                    {role.text}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>

            {/* Upwork Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
              className="relative inline-block mb-3 sm:mb-4 lg:mb-6"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 backdrop-blur-sm">
                <div className="flex items-center space-x-2 sm:space-x-3 text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
                  <Award className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-green-500" />
                  <span className="text-xs sm:text-sm lg:text-base">Dubai Based Marketing Pro</span>
                  <div className="flex items-center space-x-0.5 sm:space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + i * 0.1 }}
                      >
                        <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 lg:w-4 lg:h-4 text-yellow-500 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-green-500 font-bold text-xs sm:text-sm lg:text-base">Expert</span>
                </div>
              </div>
            </motion.div>

            {/* Enhanced Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="relative"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto xl:mx-0 text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed px-2 xl:px-0">
                Driving{' '}
                <motion.span
                  className="text-dev-accent-blue font-bold relative cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  high-quality leads
                  <motion.div
                    className="absolute -bottom-0.5 sm:-bottom-1 left-0 right-0 h-0.5 bg-dev-accent-blue/50"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  />
                </motion.span>
                {' '}through{' '}
                <motion.span
                  className="text-dev-accent-emerald font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  data-driven campaigns
                </motion.span>
                ,{' '}
                <motion.span
                  className="text-dev-accent-purple font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  strategic targeting
                </motion.span>
                , and{' '}
                <motion.span
                  className="text-dev-accent-orange font-bold cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                >
                  optimized ad spend
                </motion.span>
                .
              </p>
            </motion.div>

            {/* Stats Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
              className="relative inline-block"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dev-accent-emerald/20 to-dev-accent-blue/20 rounded-full blur-lg"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 border border-dev-accent-emerald/30 backdrop-blur-sm">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold">
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">6+</div>
                    <div className="text-xs opacity-70">Years</div>
                  </div>
                  <div className="w-px h-4 sm:h-6 lg:h-8 bg-dev-accent-emerald/30" />
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">5K+</div>
                    <div className="text-xs opacity-70">Leads</div>
                  </div>
                  <div className="w-px h-4 sm:h-6 lg:h-8 bg-dev-accent-emerald/30" />
                  <div className="text-center">
                    <div className="text-base sm:text-lg md:text-xl lg:text-2xl">$15</div>
                    <div className="text-xs opacity-70">Avg CPL</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Enhanced CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-col items-center xl:items-start gap-3 sm:gap-4 lg:gap-6 pt-4 sm:pt-6 lg:pt-8"
            >
              {/* Primary CTA */}
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-bold rounded-xl sm:rounded-2xl lg:rounded-full shadow-2xl overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <div className="relative flex items-center justify-center w-full sm:w-auto">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="text-sm sm:text-base">Hire Me Now</span>
                  <motion.div
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.div>
                </div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-2 sm:gap-3">
                {socialLinks.slice(1).map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative p-2 sm:p-2.5 lg:p-3 xl:p-4 rounded-xl sm:rounded-2xl lg:rounded-full ${link.bgColor} border border-dev-border-light dark:border-dev-border-dark backdrop-blur-sm transition-all duration-300 ${link.color} group overflow-hidden`}
                    whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 + index * 0.1 }}
                  >
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 0.8 }}
                    />
                    
                    <link.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
                    
                    {/* Hover Glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-full opacity-0 group-hover:opacity-100 blur-md"
                      style={{ backgroundColor: link.color.includes('blue') ? '#3b82f6' : '#6b7280' }}
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
            className="relative order-1 xl:order-2 flex justify-center xl:justify-end mb-6 sm:mb-8 xl:mb-0"
          >
            {/* Floating Background Elements */}
            <div className="absolute inset-0 -z-10">
              {/* Gradient Orbs */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-r from-dev-accent-blue/20 to-dev-accent-emerald/20 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ duration: 8, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-12 h-12 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-r from-dev-accent-purple/20 to-dev-accent-orange/20 rounded-full blur-2xl"
                animate={{ 
                  scale: [1.2, 1, 1.2],
                  rotate: [360, 180, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />
              
              {/* Floating Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-gradient-to-r from-dev-accent-blue to-dev-accent-emerald rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                />
              ))}
            </div>

            {/* Main Avatar Container */}
            <motion.div
              className="relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-dev-accent-blue/30 via-dev-accent-emerald/30 to-dev-accent-purple/30 rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-dev-accent-blue via-dev-accent-emerald to-dev-accent-purple p-0.5 sm:p-1 -z-10"
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full bg-dev-bg-light dark:bg-dev-bg-dark rounded-2xl sm:rounded-3xl" />
              </motion.div>

              {/* Avatar Image - Professional Display */}
              <motion.div
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dev-surface-light to-dev-card-light dark:from-dev-surface-dark dark:to-dev-card-dark"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <img
                  src="/FB_IMG_1762377062818-removebg-preview copy.png"
                  alt="Atif Qadeer - Digital Marketing Specialist"
                  className="w-full h-full object-contain object-center"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                />
                
                {/* Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dev-bg-light/5 via-transparent to-transparent dark:from-dev-bg-dark/5" />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1.5 }}
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -bottom-1 sm:-bottom-2 lg:-bottom-4 -right-1 sm:-right-2 lg:-right-4 px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-gradient-to-r from-dev-accent-emerald to-dev-accent-blue text-white font-bold rounded-full shadow-lg backdrop-blur-sm border border-white/20"
                initial={{ opacity: 0, scale: 0, rotate: -45 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <div className="flex items-center space-x-1 sm:space-x-1.5 lg:space-x-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 lg:w-2 lg:h-2 bg-white rounded-full animate-pulse" />
                  <span className="text-xs sm:text-sm">Available</span>
                </div>
              </motion.div>

              {/* Tech Icons Floating Around */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: '📱', position: 'top-1 sm:top-2 lg:top-4 left-1 sm:left-2 lg:left-4', delay: 1.5 },
                  { icon: '⚡', position: 'top-2 sm:top-4 lg:top-8 right-2 sm:right-4 lg:right-8', delay: 1.7 },
                  { icon: '🚀', position: 'bottom-2 sm:bottom-4 lg:bottom-8 left-2 sm:left-4 lg:left-8', delay: 1.9 },
                  { icon: '💻', position: 'bottom-1 sm:bottom-2 lg:bottom-4 right-4 sm:right-8 lg:right-16', delay: 2.1 }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${item.position} text-base sm:text-lg lg:text-2xl opacity-0 group-hover:opacity-100`}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      rotate: [0, 360, 720],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      delay: item.delay
                    }}
                  >
                    {item.icon}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-3 sm:bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="relative"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-dev-text-secondary-light dark:border-dev-text-secondary-dark rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-0.5 sm:w-1 h-1.5 sm:h-2 lg:h-3 bg-gradient-to-b from-dev-accent-blue to-dev-accent-emerald rounded-full mt-1 sm:mt-1.5 lg:mt-2"
                animate={{ 
                  y: [0, 8, 0],
                  opacity: [1, 0.3, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <motion.div
              className="absolute inset-0 border-2 border-dev-accent-blue/50 rounded-full"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};