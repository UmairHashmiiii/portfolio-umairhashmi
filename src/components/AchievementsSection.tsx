import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Award, TrendingUp, Briefcase, BookOpen } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  const achievements = [
    {
      icon: CheckCircle,
      title: '5000+ High-Quality Leads Generated',
      description: 'Successfully generated and delivered qualified leads across multiple real estate campaigns',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: TrendingUp,
      title: 'Achieved $15.22 Average Cost Per Lead',
      description: 'Optimized campaigns to deliver exceptional ROI with industry-leading cost efficiency',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Meta Ads Platform Expert',
      description: 'Managed campaigns generating 5-8 million impressions with 95%+ CTR achievement',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Google & Facebook Certified',
      description: '5+ Google Coursera certifications and advanced digital marketing qualifications',
      color: 'from-purple-500 to-indigo-500'
    }
  ];

  const stats = [
    { number: '6+', label: 'Years Experience' },
    { number: '5000+', label: 'Leads Generated' },
    { number: '$15.22', label: 'Avg CPL' },
    { number: '8M+', label: 'Impressions' }
  ];

  const certifications = [
    'Google Coursera: Assess for Success - Marketing Analytics',
    'Google Coursera: From Likes to Leads - Online Customer Engagement',
    'Google Coursera: Think Outside the Inbox - Email Marketing',
    'Google Coursera: Attract & Engage Customers with Digital Marketing',
    'Google Coursera: Foundation of Digital Marketing & E-commerce'
  ];

  return (
    <section id="achievements" className="py-24 bg-dev-surface-light dark:bg-dev-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6">
            Achievements & Impact
          </h2>
          <p className="text-xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-3xl mx-auto">
            Proven track record of delivering exceptional marketing results and continuous professional development.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-lg transition-all duration-300"
            >
              <motion.div
                className="text-3xl md:text-4xl font-bold text-dev-accent-blue mb-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <motion.div
                className="p-8 bg-dev-card-light dark:bg-dev-card-dark rounded-2xl border border-dev-border-light dark:border-dev-border-dark hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center flex-shrink-0`}>
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-indigo-500/10 backdrop-blur-sm rounded-2xl border border-blue-500/20 p-8 md:p-12"
        >
          <div className="flex items-center mb-8">
            <BookOpen className="w-8 h-8 text-blue-500 mr-3" />
            <h3 className="text-2xl md:text-3xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Professional Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start p-4 bg-white/50 dark:bg-gray-900/50 rounded-lg backdrop-blur-sm"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark">
                  {cert}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-dev-accent-emerald/10 to-dev-accent-blue/10 rounded-full border border-dev-accent-emerald/30">
            <Briefcase className="w-5 h-5 mr-3 text-dev-accent-emerald" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-semibold">
              Ready to scale your marketing and drive high-quality leads
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
