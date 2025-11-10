import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, ArrowRight, Code, Database, Layers, Cpu, FileText, Settings, Zap, CheckCircle, ExternalLink, Download, Star, Sparkles, Award } from 'lucide-react';

export const CampaignsSection: React.FC = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [showCodeExample, setShowCodeExample] = useState(false);

  const architectureLayers = [
    {
      name: 'View Layer',
      icon: Layers,
      description: 'UI Components & Widgets',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      details: 'Stateless/Stateful widgets, Custom painters, Responsive design with flutter_screenutil',
      files: ['home_view.dart', 'profile_view.dart', 'settings_view.dart'],
      code: `class HomeView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GetBuilder<HomeController>(
      builder: (controller) => Scaffold(
        body: controller.isLoading 
          ? LoadingWidget()
          : HomeContent(),
      ),
    );
  }
}`
    },
    {
      name: 'Controller Layer',
      icon: Cpu,
      description: 'Business Logic & State Management',
      color: 'from-emerald-500 to-teal-500',
      bgGradient: 'from-emerald-500/10 to-teal-500/10',
      details: 'GetX controllers, State management, Business logic separation',
      files: ['home_controller.dart', 'auth_controller.dart', 'profile_controller.dart'],
      code: `class HomeController extends GetxController {
  final HomeService _service = Get.find();
  
  RxBool isLoading = false.obs;
  RxList<User> users = <User>[].obs;
  
  @override
  void onInit() {
    fetchUsers();
    super.onInit();
  }
  
  Future<void> fetchUsers() async {
    isLoading.value = true;
    try {
      final response = await _service.getUsers();
      users.value = response.data;
    } catch (e) {
      Get.snackbar('Error', e.toString());
    } finally {
      isLoading.value = false;
    }
  }
}`
    },
    {
      name: 'Service Layer',
      icon: Code,
      description: 'API Integration & Data Processing',
      color: 'from-purple-500 to-indigo-500',
      bgGradient: 'from-purple-500/10 to-indigo-500/10',
      details: 'HTTP services, Data transformation, Error handling, Response parsing',
      files: ['home_service.dart', 'auth_service.dart', 'https_service.dart'],
      code: `class HomeService {
  final HttpsService _httpsService = Get.find();
  
  Future<ApiResponse<List<User>>> getUsers() async {
    try {
      final response = await _httpsService.get(
        AppUrls.users,
        headers: {'Authorization': 'Bearer \${token}'}
      );
      
      return ApiResponse<List<User>>.fromJson(
        response.data,
        (json) => (json as List)
          .map((e) => User.fromJson(e))
          .toList()
      );
    } catch (e) {
      throw ServiceException(e.toString());
    }
  }
}`
    },
    {
      name: 'Repository Layer',
      icon: Database,
      description: 'Data Source Management',
      color: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10',
      details: 'Local storage, Remote APIs, Caching strategies, Data synchronization',
      files: ['user_repository.dart', 'auth_repository.dart', 'local_storage.dart'],
      code: `class UserRepository {
  final ApiService _apiService = Get.find();
  final LocalStorage _localStorage = Get.find();
  
  Future<List<User>> getUsers({bool forceRefresh = false}) async {
    if (!forceRefresh) {
      final cached = await _localStorage.getUsers();
      if (cached.isNotEmpty) return cached;
    }
    
    final users = await _apiService.fetchUsers();
    await _localStorage.saveUsers(users);
    return users;
  }
}`
    }
  ];

  const features = [
    {
      icon: Settings,
      title: 'Auto-Generated Structure',
      description: 'Complete MVVM directory structure with GetX integration',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Zap,
      title: 'Built-in Services',
      description: 'HttpsService, SharedPreferencesHelper, JsonExtractor included',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FileText,
      title: 'Response Models',
      description: 'Pre-configured API response and body models',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'SOLID principles with clear separation of concerns',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { label: 'Downloads', value: '167+', icon: Download, color: 'text-blue-500' },
    { label: 'Pub Points', value: '160', icon: CheckCircle, color: 'text-emerald-500' },
    { label: 'Likes', value: '20+', icon: '❤️', color: 'text-red-500' },
    { label: 'Version', value: '2.0.0', icon: Package, color: 'text-purple-500' }
  ];

  return (
    <section id="layerx" className="py-16 sm:py-24 md:py-32 bg-gradient-to-br from-dev-bg-light via-dev-surface-light to-dev-bg-light dark:from-dev-bg-dark dark:via-dev-surface-dark dark:to-dev-bg-dark overflow-hidden relative">
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

        {/* Floating Code Elements */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`code-${i}`}
            className="absolute text-xs font-mono text-blue-400/20 dark:text-blue-400/30"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: 0
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              opacity: [0, 0.5, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              delay: i * 1
            }}
          >
            {['class', 'extends', 'Widget', 'GetX', 'Controller', 'Service', 'Repository', 'Model'][i % 8]}
          </motion.div>
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
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
            
            <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
            <span className="text-blue-500 font-bold text-sm sm:text-base md:text-lg">Open Source Innovation</span>
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
              LayerX
            </span>
            <br />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
              Architecture
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-dev-text-secondary-light dark:text-dev-text-secondary-dark max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            A production-optimized Flutter architecture that revolutionizes development workflows. 
            Clean, scalable, and maintainable code structure for enterprise applications.
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
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1 }}
                  />
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"
                    initial={false}
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
          
          <motion.a
            href="https://pub.dev/packages/layerx_generator"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3" />
            <span className="font-mono text-sm sm:text-base">layerx_generator: ^2.0.0</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 opacity-70" />
            
            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              initial={{ x: '-100%' }}
              animate={{ x: '200%' }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
            />
          </motion.a>
        </motion.div>

        {/* Architecture Flow & Features */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-12 sm:mb-16 md:mb-20">
          {/* Interactive Architecture Layers */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6 sm:mb-8 text-center">
              Architecture Flow
            </h3>
            
            <div className="space-y-4 sm:space-y-6 relative">
              {/* Connection Lines */}
              <svg className="absolute left-6 sm:left-8 top-16 sm:top-20 w-0.5 h-full z-0" style={{ height: 'calc(100% - 5rem)' }}>
                <motion.line
                  x1="0" y1="0" x2="0" y2="100%"
                  stroke="url(#gradient)"
                  strokeWidth="3"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 1 }}
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="33%" stopColor="#10b981" />
                    <stop offset="66%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#f97316" />
                  </linearGradient>
                </defs>
              </svg>

              {architectureLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <motion.div
                    className={`group cursor-pointer p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden ${
                      activeLayer === index ? 'ring-2 ring-blue-500 shadow-4xl' : ''
                    }`}
                    whileHover={{ scale: 1.02, x: 10, rotateY: 5 }}
                    onClick={() => setActiveLayer(activeLayer === index ? null : index)}
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Background Gradient */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${layer.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      initial={false}
                    />
                    
                    {/* Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '200%' }}
                      transition={{ duration: 1.2 }}
                    />
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <motion.div 
                            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-20 xl:h-20 rounded-xl sm:rounded-2xl bg-gradient-to-r ${layer.color} flex items-center justify-center mr-3 sm:mr-4 lg:mr-6 shadow-2xl`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                          >
                            <layer.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="text-lg sm:text-xl lg:text-2xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-1">
                              {layer.name}
                            </h4>
                            <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm sm:text-base">
                              {layer.description}
                            </p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: activeLayer === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-dev-text-secondary-light dark:text-dev-text-secondary-dark" />
                        </motion.div>
                      </div>
                      
                      <AnimatePresence>
                        {activeLayer === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200/50 dark:border-gray-700/50"
                          >
                            <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark mb-3 sm:mb-4 text-sm sm:text-base">
                              {layer.details}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                              {layer.files.map((file) => (
                                <span
                                  key={file}
                                  className="px-2 sm:px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-mono rounded-full border border-blue-500/20"
                                >
                                  {file}
                                </span>
                              ))}
                            </div>
                            <motion.button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowCodeExample(!showCodeExample);
                              }}
                              className="text-blue-500 hover:text-purple-500 font-medium text-sm flex items-center transition-colors duration-300"
                              whileHover={{ x: 5 }}
                            >
                              View Code Example
                              <Code className="w-4 h-4 ml-1" />
                            </motion.button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>

                  {/* Data Flow Arrows */}
                  {index < architectureLayers.length - 1 && (
                    <motion.div
                      className="flex justify-center my-4 sm:my-6"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.15 + 0.5 }}
                    >
                      <motion.div
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 3, 
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </motion.div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced Features & Code Example */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Code Example */}
            <AnimatePresence>
              {(showCodeExample && activeLayer !== null) && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 shadow-2xl overflow-hidden relative"
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center">
                      <div className="flex space-x-1.5 sm:space-x-2">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-red-500 rounded-full" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-500 rounded-full" />
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full" />
                      </div>
                      <span className="ml-3 sm:ml-4 text-xs sm:text-sm text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-mono">
                        {architectureLayers[activeLayer].files[0]}
                      </span>
                    </div>
                    <motion.button
                      onClick={() => setShowCodeExample(false)}
                      className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark hover:text-dev-text-primary-light dark:hover:text-dev-text-primary-dark transition-colors"
                      whileHover={{ scale: 1.1, rotate: 90 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      ✕
                    </motion.button>
                  </div>
                  
                  <motion.pre
                    className="text-xs sm:text-sm font-mono text-dev-text-primary-light dark:text-dev-text-primary-dark overflow-x-auto bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg sm:rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <code>{architectureLayers[activeLayer].code}</code>
                  </motion.pre>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Enhanced Features Grid */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-6 sm:mb-8">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <motion.div
                      className="p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden"
                      whileHover={{ y: -8, scale: 1.02, rotateY: 5 }}
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 1 }}
                      />
                      
                      {/* Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl sm:rounded-3xl`}
                        initial={false}
                      />
                      
                      <div className="relative z-10">
                        <div className="flex items-start">
                          <motion.div
                            className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${feature.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0 shadow-2xl`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.8, type: "spring" }}
                          >
                            <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                          </motion.div>
                          <div>
                            <h4 className="font-bold text-base sm:text-lg lg:text-xl text-dev-text-primary-light dark:text-dev-text-primary-dark mb-2">
                              {feature.title}
                            </h4>
                            <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark text-sm sm:text-base">
                              {feature.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Installation Command */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-4 sm:p-6 lg:p-8 shadow-2xl relative overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                animate={{ x: '200%' }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3 }}
              />
              
              <h4 className="font-bold text-lg sm:text-xl lg:text-2xl text-dev-text-primary-light dark:text-dev-text-primary-dark mb-3 sm:mb-4">
                Quick Installation
              </h4>
              <div className="bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl font-mono text-xs sm:text-sm lg:text-base border border-gray-200/50 dark:border-gray-700/50">
                <div className="text-emerald-500 mb-2"># Add to pubspec.yaml</div>
                <div className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                  dependencies:<br />
                  &nbsp;&nbsp;layerx_generator: ^2.0.0
                </div>
                <div className="text-emerald-500 mt-4 mb-2"># Generate structure</div>
                <div className="text-dev-text-primary-light dark:text-dev-text-primary-dark">
                  dart run layerx_generator --path .
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dev-text-primary-light dark:text-dev-text-primary-dark mb-8 sm:mb-12">
            Why Choose LayerX?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { text: 'Clean separation of concerns', icon: '🎯' },
              { text: 'Testable and maintainable code', icon: '🧪' },
              { text: 'Scalable for enterprise applications', icon: '🚀' },
              { text: 'Optimized for Flutter performance', icon: '⚡' }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <motion.div
                  className="p-4 sm:p-6 lg:p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-2xl hover:shadow-4xl transition-all duration-500 overflow-hidden relative"
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Shimmer Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1 }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">{benefit.icon}</div>
                    <p className="text-dev-text-secondary-light dark:text-dev-text-secondary-dark font-medium text-sm sm:text-base">
                      {benefit.text}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
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
            
            <Award className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-blue-500" />
            <span className="text-dev-text-primary-light dark:text-dev-text-primary-dark font-bold text-sm sm:text-base md:text-lg">
              Trusted by Flutter developers worldwide
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};