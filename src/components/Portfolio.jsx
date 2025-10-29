import React, { useState, useEffect } from 'react';
import { Code, User, Palette, Github, Linkedin, Menu, X, Download, ExternalLink, Mail, Instagram, Music } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Lottie from 'lottie-react';
import carHouseImg from '../assets/carhouse.png';
import loginDashboardImg from '../assets/login-dashboard.png';

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Sample data for charts
  const skillsData = [
    { name: 'JavaScript', value: 90 },
    { name: 'Node.js', value: 80 },
    { name: 'MySQL', value: 90 },
    { name: 'Next.js', value: 85 },
    { name: 'TypeScript', value: 75 },
    { name: 'React', value: 80 },
    { name: 'Git', value: 90 },
  ];

  const projectsData = [
    { month: 'Jan', completed: 2 },
    { month: 'Feb', completed: 1 },
    { month: 'Mar', completed: 3 },
    { month: 'Apr', completed: 1 },
    { month: 'May', completed: 2 },
    { month: 'Jun', completed: 1 },
    { month: 'Jul', completed: 1 },
    { month: 'Aug', completed: 1 },
    { month: 'Sep', completed: 1 }
  ];

  const techDistribution = [
    { name: 'Frontend', value: 35, color: '#a855f7' },
    { name: 'Backend', value: 35, color: '#06b6d4' },
    { name: 'Database', value: 30, color: '#8b5cf6' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Simphiwe-CarWeb',
      description: 'A responsive car showcase website built with modern web technologies, highlighting my skills in front-end development, clean UI design, and interactive user experiences.',
      image: carHouseImg,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'SGitHub Pages'],
      github: 'https://github.com/SimphiweMtshali/Simphiwe-CarWeb.git',
      demo: 'https://simphiwemtshali.github.io/Simphiwe-CarWeb/',
      features: ['Dynamic Car Showcase', 'Responsive Design', 'Search & Filter', 'Modern UI/UX']
    },
    {
      id: 2,
      title: 'Dashboard CRUD with Weather API',
      description: 'A full-stack React/PHP application combining secure task management with weather insights and JWT authentication.',
      image: loginDashboardImg,
      tech: ['React', 'PHP', 'JWT', 'MySQL'],
      github: 'https://github.com/SimphiweMtshali/Data-Analytics-Dashboard.git',
      demo: 'https://simphiwemtshali.github.io/Data-Analytics-Dashboard/',
      features: ['User registration and login', 'CRUD operations for items', 'API Weather display', 'Protected routes using JWT tokens']
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      demo: 'https://demo.com',
      features: ['Team collaboration', 'Task tracking', 'Deadline reminders', 'File sharing']
    }
  ];

  const certificates = [
    { name: 'Bachelor of Science in Information Technology', issuer: 'Richfield College', year: '2022' },
  ];

  const techStack = [
    { category: 'Frontend', techs: ['React', 'Next.js', 'Tailwind CSS', 'TypeScript'] },
    { category: 'Backend', techs: ['Node.js', 'Python', 'Express', 'Django'] },
    { category: 'Database', techs: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL'] },
    { category: 'Tools', techs: ['Git', 'Docker', 'VS Code', 'Figma'] },
    { category: 'Data Analytics', techs: ['Power BI', 'Tableau', 'Pandas', 'NumPy'] }
  ];

  // Helper function to handle image paths for both localhost and GitHub Pages
  const getImagePath = (imageName) => {
    // If it's an absolute URL or data URL, return as is
    if (imageName.startsWith('http') || imageName.startsWith('data:')) {
      return imageName;
    }
    
    // If it's a relative path starting with /, remove the leading slash
    const cleanPath = imageName.startsWith('/') ? imageName.slice(1) : imageName;
    
    // In development (localhost), serve from the public folder root
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      return '/' + cleanPath;
    }
    
    // In production (GitHub Pages), use the full PUBLIC_URL path
    return `${process.env.PUBLIC_URL}/${cleanPath}`;
  };

  // Resolve image paths so that assets in `public/` (which are referenced like "/carhouse.png")
  // work correctly when the app is hosted under a subpath (GitHub Pages, e.g. /portfolio/).
  // Also allow external URLs (http/https/data) to pass through unchanged.
  const resolveImage = (img) => {
    if (!img) return '';
    if (typeof img !== 'string') return img; // already imported/required asset
    if (img.startsWith('http') || img.startsWith('data:')) return img;
    // leading slash points to the site root; use PUBLIC_URL so it includes the homepage base
    if (img.startsWith('/')) return (process.env.PUBLIC_URL || '') + img;
    return img;
  };

  
  if (loading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-pulse">
            Welcome to My Portfolio
          </h1>
          <div className="flex justify-center gap-8 mb-8">
            <div className="animate-bounce" style={{ animationDelay: '0ms' }}>
              <Code className="w-16 h-16 text-purple-400" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '200ms' }}>
              <User className="w-16 h-16 text-cyan-400" />
            </div>
            <div className="animate-bounce" style={{ animationDelay: '400ms' }}>
              <Palette className="w-16 h-16 text-indigo-400" />
            </div>
          </div>
          <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 opacity-50 animate-gradient"></div>
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              SM
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-all relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-white"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800/95 backdrop-blur-lg">
            <div className="px-4 py-4 space-y-4">
              {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Simphiwe Mtshali
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Software Engineer, Full-Stack Engineer, and Web Developer
            </p>
            <p className="text-lg text-gray-400">
              Turning data into decisions and ideas into code
            </p>
            
            <div className="flex gap-4">
              <a
                href="#portfolio"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://github.com/SimphiweMtshali" className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/simphiwe-mtshali-06ba58249" className="p-3 bg-gray-800/50 rounded-full hover:bg-cyan-600/30 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://instagram.com" className="p-3 bg-gray-800/50 rounded-full hover:bg-pink-600/30 hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://tiktok.com" className="p-3 bg-gray-800/50 rounded-full hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                <Music className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <Lottie
                animationData={require('../animated-dashboards.json')}
                loop={true}
                autoplay={true}
                style={{ width: '100%', height: '400px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-500/50">
                  <img src={require('../Gradpic.JPG')} alt="Profile" className="w-full h-full object-cover"/>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate software developer and web specialist with a Bachelor's degree in Information Technology (NQF Level 7) from Richfield College. 
                I specialize in building custom applications and modern web applications and transforming complex data into actionable insights. 
                My journey in tech has equipped me with a unique blend of development and analytical skills.
              </p>

              <div className="flex gap-4">
                <a
                  href="/Simphiwe_Mtshali_CV.pdf"
                  download
                  aria-label="Download CV"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500/10 transition-all"
                >
                  View Projects
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 text-center hover:border-purple-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    10+
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Projects</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 text-center hover:border-cyan-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    1
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Certificates</div>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20 text-center hover:border-blue-500/50 transition-all">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    2+
                  </div>
                  <div className="text-gray-400 text-sm mt-2">Years Exp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {['projects', 'certificates', 'tech stack'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 shadow-lg shadow-purple-500/50'
                    : 'bg-gray-800/50 hover:bg-gray-700/50'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Projects Tab */}
          {activeTab === 'projects' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/50 transition-all group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-400">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-purple-600/20 rounded-full text-sm text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                      >
                        Details
                      </button>
                      <a
                        href={project.demo}
                        className="px-4 py-2 border-2 border-purple-500 rounded-lg font-semibold hover:bg-purple-500/10 transition-all flex items-center gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certificates Tab */}
          {activeTab === 'certificates' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-blue-600/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="font-bold mb-2">{cert.name}</h3>
                  <p className="text-sm text-gray-400">{cert.issuer}</p>
                  <p className="text-sm text-cyan-400 mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tech Stack Tab */}
          {activeTab === 'tech stack' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-lg rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                  <div className="space-y-2">
                    {category.techs.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-purple-600/20 transition-all"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Data Visualization Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Data <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">Skills Proficiency</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={skillsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #6b21a8' }}
                  />
                  <Bar dataKey="value" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-xl font-bold mb-4">Projects Completed</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={projectsData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #06b6d4' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="completed"
                    stroke="#06b6d4"
                    strokeWidth={3}
                    dot={{ fill: '#a855f7', r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/20 md:col-span-2">
              <h3 className="text-xl font-bold mb-4">Technology Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={techDistribution}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {techDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #3b82f6' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Get In <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Message</label>
                <textarea
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-700/50 rounded-lg border border-purple-500/20 focus:border-purple-500 focus:outline-none transition-all resize-none"
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Send Message
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-center">Connect With Me</h3>
              <div className="flex justify-center gap-4">
                <a href="https://github.com/SimphiweMtshali" className="p-4 bg-gray-700/50 rounded-full hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/simphiwe-mtshali-06ba58249" className="p-4 bg-gray-700/50 rounded-full hover:bg-cyan-600/30 hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://instagram.com" className="p-4 bg-gray-700/50 rounded-full hover:bg-pink-600/30 hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://tiktok.com" className="p-4 bg-gray-700/50 rounded-full hover:bg-purple-600/30 hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  <Music className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400">
              © 2025 Simphiwe Mtshali. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
              <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
              <a href="#portfolio" className="text-gray-400 hover:text-purple-400 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-gray-900/80 rounded-full hover:bg-gray-900 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-8 space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {selectedProject.title}
              </h2>

              <p className="text-gray-300 text-lg">{selectedProject.description}</p>

              <div>
                <h3 className="text-xl font-bold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-purple-400 mt-1">✓</span>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 border border-purple-500/30 rounded-full text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.github}
                  className="flex-1 px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                <a
                  href={selectedProject.demo}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 15s ease infinite;
        }
      `}</style>
    </div>
  );
}