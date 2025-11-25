import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Target, Users, Eye, DollarSign, MousePointerClick, Calendar, Award, Sparkles, ExternalLink, Mail, Phone, MapPin, BarChart3, Activity, Zap } from 'lucide-react';

export const CampaignsSection: React.FC = () => {
  const [activeCampaign, setActiveCampaign] = useState<number | null>(null);
  const [showMetrics, setShowMetrics] = useState(false);

  const primaryCampaigns = [
    {
      name: 'REBU Primary Leads Dubai',
      platform: 'Lead-Ad-Facebook',
      results: '670 Meta leads',
      reach: '1,103,744',
      impressions: '4,243,874',
      costPerResult: '$97.74',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      icon: Target
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #1',
      platform: 'Paid-Facebook',
      results: '537 Meta leads',
      reach: '503,181',
      impressions: '1,397,104',
      costPerResult: '$95.58',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      icon: Users
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #2',
      platform: 'Paid-Facebook',
      results: '1,138 Meta leads',
      reach: '804,474',
      impressions: '2,882,722',
      costPerResult: '$42.32',
      color: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      icon: TrendingUp,
      highlight: true
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #3',
      platform: 'Paid-Facebook',
      results: '538 Meta leads',
      reach: '196,988',
      impressions: '571,725',
      costPerResult: '$71.24',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      icon: Activity
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #4',
      platform: 'Paid-Facebook',
      results: '1,340 Meta leads',
      reach: '644,133',
      impressions: '2,196,175',
      costPerResult: '$27.39',
      color: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      icon: Zap,
      highlight: true
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #5',
      platform: 'Paid-Facebook',
      results: '1,081 Meta leads',
      reach: '1,022,795',
      impressions: '3,495,590',
      costPerResult: '$33.07',
      color: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
      icon: BarChart3
    },
    {
      name: 'RE.Sales UAE Dubai Website',
      platform: 'Paid-Facebook',
      results: 'Traffic Campaign',
      reach: '980,671',
      impressions: '4,690,676',
      costPerResult: '—',
      color: 'from-amber-500 to-yellow-500',
      bgGradient: 'from-amber-500/10 to-yellow-500/10',
      icon: MousePointerClick
    },
    {
      name: 'RE.Sales UAE Dubai LeadAds #6',
      platform: 'Paid-Facebook',
      results: '554 Meta leads',
      reach: '650,019',
      impressions: '2,012,814',
      costPerResult: '$60.16',
      color: 'from-sky-500 to-blue-500',
      bgGradient: 'from-sky-500/10 to-blue-500/10',
      icon: Target
    }
  ];

  const otherCampaigns = [
    { name: 'Event: Dubai Property Show 2025', status: 'Off', results: '998 Event responses', reach: '93,285', frequency: '4.94', costPerResult: '$0.50' },
    { name: 'Atif - Project Leads - 7th August', status: 'Active', results: '858 Meta leads', reach: '1,301,171', frequency: '2.24', costPerResult: '$15.22' },
    { name: 'Asia', status: 'Active', results: '620 Follows/Likes', reach: '10,559', frequency: '1.48', costPerResult: '$0.39' },
    { name: 'Atif - Generic Leads Overseas', status: 'Off', results: '479 Meta leads', reach: '126,061', frequency: '1.83', costPerResult: '$25.06' },
    { name: 'Atif - New Project Based Leads - 31st May', status: 'Off', results: '399 Meta leads', reach: '276,257', frequency: '2.25', costPerResult: '$22.73' },
    { name: 'Turkey Roadshow', status: 'Off', results: '260 Meta leads', reach: '122,738', frequency: '2.98', costPerResult: '$50.35' },
    { name: '10JulyLeads', status: 'Active', results: '123 Link Clicks', reach: '11,590', frequency: '1.47', costPerResult: '—' },
    { name: 'Atif - USA/Canada - Leads', status: 'Off', results: '83 Meta leads', reach: '33,098', frequency: '2.02', costPerResult: '$185.21' },
    { name: 'UKTraffic', status: 'Active', results: '69 Link Clicks', reach: '4,032', frequency: '1.04', costPerResult: '$1.48' },
    { name: 'SingaporeTraffic', status: 'Active', results: '57 Link Clicks', reach: '5,877', frequency: '1.09', costPerResult: '$1.52' }
  ];

  const stats = [
    { label: 'Total Leads', value: '6,916+', icon: Users, color: 'text-blue-500' },
    { label: 'Total Reach', value: '5.9M+', icon: Eye, color: 'text-emerald-500' },
    { label: 'Impressions', value: '21M+', icon: TrendingUp, color: 'text-purple-500' },
    { label: 'Campaigns', value: '18', icon: Target, color: 'text-orange-500' }
  ];

  const skills = [
    'RE Lead Generation Strategies',
    'Facebook Ads Creation & Management',
    'Google Ads Creation & Management',
    'SEO Planning & Implementation',
    'Social Media Content Strategy'
  ];

  return (
    <section id="campaigns" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden relative">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Gradient Orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-64 h-64 sm:w-96 sm:h-96 rounded-full opacity-10 blur-3xl"
            style={{
              background: `radial-gradient(circle, ${
                ['#3b82f6', '#10b981', '#8b5cf6', '#f97316', '#ef4444', '#06b6d4', '#8b5cf6', '#f59e0b'][i]
              }, transparent)`
            }}
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.2, 0.05]
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 2
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.div
            className="inline-flex items-center px-4 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-xl rounded-full border border-blue-500/20 mb-6 sm:mb-8 relative overflow-hidden"
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
            
            <Target className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
            <span className="text-blue-500 font-bold text-sm sm:text-base md:text-lg">Performance Marketing Expert</span>
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 sm:mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Meta Ads
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Campaign Performance
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Proven track record in driving real estate leads through strategic Meta advertising campaigns. 
            Specialized in lead generation, audience targeting, and ROI optimization.
          </motion.p>

          {/* Enhanced Stats Row */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-500 relative overflow-hidden"
                  whileHover={{ rotateY: 5, rotateX: 5 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1 sm:mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm lg:text-base text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="tel:+971547634170"
              className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>+971 54 763 4170</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
            </motion.a>

            <motion.a
              href="mailto:Atif.qadeerr@gmail.com"
              className="group inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold rounded-full shadow-2xl hover:shadow-3xl border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 relative overflow-hidden text-sm sm:text-base"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>Atif.qadeerr@gmail.com</span>
            </motion.a>

            <motion.div
              className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium rounded-full border border-gray-200/50 dark:border-gray-700/50 text-sm sm:text-base"
            >
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              <span>Dubai, UAE</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Primary Campaigns Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6 sm:mb-8">
            Primary Campaigns
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {primaryCampaigns.map((campaign, index) => (
              <motion.div
                key={campaign.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <motion.div
                  className={`p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border ${
                    campaign.highlight ? 'border-blue-500/50 ring-2 ring-blue-500/20' : 'border-gray-200/50 dark:border-gray-700/50'
                  } shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden cursor-pointer`}
                  whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
                  onClick={() => setActiveCampaign(activeCampaign === index ? null : index)}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {campaign.highlight && (
                    <motion.div
                      className="absolute top-4 right-4 flex items-center px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Award className="w-3 h-3 mr-1" />
                      Top Performer
                    </motion.div>
                  )}

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1 }}
                  />
                  
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${campaign.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center flex-1">
                        <motion.div 
                          className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${campaign.color} flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-2xl`}
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.8, type: "spring" }}
                        >
                          <campaign.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-base sm:text-lg lg:text-xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1 truncate">
                            {campaign.name}
                          </h4>
                          <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-xs sm:text-sm">
                            {campaign.platform}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/20">
                        <div className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-1">Results</div>
                        <div className="text-sm sm:text-base font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                          {campaign.results}
                        </div>
                      </div>
                      <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                        <div className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-1">Cost/Result</div>
                        <div className="text-sm sm:text-base font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                          {campaign.costPerResult}
                        </div>
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {activeCampaign === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50"
                        >
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <div className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-1">Reach</div>
                              <div className="text-sm font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                                {campaign.reach}
                              </div>
                            </div>
                            <div>
                              <div className="text-xs text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-1">Impressions</div>
                              <div className="text-sm font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
                                {campaign.impressions}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Campaigns Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 md:mb-20"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6 sm:mb-8">
            Other Campaigns Overview
          </h3>
          
       <div className="overflow-x-auto flex gap-4 justify-center p-6">
  <img src="/public/first.png" alt="Campaign Overview 1" className="rounded-2xl shadow-xl w-full max-w-md object-contain" />
  <img src="/public/second.png" alt="Campaign Overview 2" className="rounded-2xl shadow-xl w-full max-w-md object-contain" />
</div>

    </section>
  );
};
