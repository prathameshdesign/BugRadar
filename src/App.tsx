import React, { useState, useEffect } from 'react';
import { 
  Camera, 
  Zap, 
  Target, 
  GitBranch, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  XCircle,
  Users,
  Clock,
  Shield,
  ChevronDown,
  Plus,
  Minus,
  Bug,
  Radar
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Navbar auto-hide functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY < 10) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    const handleMouseMove = (e) => {
      // Show navbar when cursor is near top of screen
      if (e.clientY <= 50 && window.scrollY >= 10) {
        setNavbarVisible(true);
      } else if (e.clientY > 50 && window.scrollY >= 10) {
        setNavbarVisible(false);
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('scroll', throttledScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "QA Lead",
      company: "TechFlow",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "BugRadar cut our bug triage time by 80%. No more endless back-and-forth emails asking for details.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "Frontend Developer",
      company: "StartupXYZ",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Finally, bug reports that show exactly what's broken. My development velocity has never been higher.",
      rating: 5
    },
    {
      name: "Emma Thompson",
      role: "Product Manager",
      company: "InnovateCorp",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      quote: "Our team went from frustrating back-and-forth to clarity in one sprint. BugRadar cut our triage time by 40%.",
      rating: 5
    }
  ];

  const features = [
    {
      icon: <Camera className="w-8 h-8" strokeWidth={1.5} />,
      title: "Visual Bug Capture",
      description: "Screenshot, annotate, and highlight issues with precision drawing tools and smart markup."
    },
    {
      icon: <Zap className="w-8 h-8" strokeWidth={1.5} />,
      title: "One-Click System Info",
      description: "Automatically capture browser, OS, screen resolution, and console errors with every report."
    },
    {
      icon: <Target className="w-8 h-8" strokeWidth={1.5} />,
      title: "Smart Annotations",
      description: "AI-powered suggestions for bug severity, affected components, and reproduction steps."
    },
    {
      icon: <GitBranch className="w-8 h-8" strokeWidth={1.5} />,
      title: "Direct Dev Integration",
      description: "Seamlessly sync with Jira, GitHub, Linear, and Slack. Your workflow, supercharged."
    }
  ];

  const faqs = [
    {
      question: "Does BugRadar work with Jira, Linear, or other dev tools?",
      answer: "Yes, you can connect BugRadar with Jira, Linear, and most major bug tracking tools in one click."
    },
    {
      question: "Do I need to install or configure anything?",
      answer: "No setup headaches. BugRadar runs in-browser, no download or code required."
    },
    {
      question: "Is it mobile-friendly and optimized for all screen sizes?",
      answer: "Absolutely. BugRadar works seamlessly across mobile, tablet, and desktop."
    },
    {
      question: "I'm not technical. Can I still use BugRadar?",
      answer: "Yes. BugRadar is built for founders, PMs, and marketers so no technical skills needed."
    },
    {
      question: "How fast can I start using it?",
      answer: "BugRadar is ready in under 2 minutes. No training, no fluff just results."
    }
  ];

  // Company logos as SVG components
  const LogoComponents = {
    ProductHunt: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <g fill="#DA552F">
          <path d="M120 0C53.8 0 0 53.8 0 120s53.8 120 120 120 120-53.8 120-120S186.2 0 120 0zM96 156V84h36c19.9 0 36 16.1 36 36s-16.1 36-36 36H96z"/>
          <path d="M132 96H108v24h24c6.6 0 12-5.4 12-12s-5.4-12-12-12z"/>
        </g>
      </svg>
    ),
    YCombinator: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <rect width="240" height="240" fill="#FF6600"/>
        <path d="M120 80l-20 40h-12l24-48h16l24 48h-12l-20-40zm0 48v32h-12v-32h12z" fill="white"/>
      </svg>
    ),
    Linear: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <defs>
          <linearGradient id="linear-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5E6AD2"/>
            <stop offset="100%" stopColor="#C084FC"/>
          </linearGradient>
        </defs>
        <rect width="240" height="240" fill="url(#linear-gradient)" rx="60"/>
        <path d="M60 180L180 60M60 60h120v120" stroke="white" strokeWidth="12" fill="none" strokeLinecap="round"/>
      </svg>
    ),
    Supabase: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <rect width="240" height="240" fill="#3ECF8E" rx="60"/>
        <path d="M120 60v60l-40 40h80l-40-40V60z" fill="white"/>
        <path d="M120 180v-60l40-40H80l40 40v60z" fill="white" opacity="0.7"/>
      </svg>
    ),
    Vercel: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <rect width="240" height="240" fill="black"/>
        <path d="M120 60L180 180H60L120 60z" fill="white"/>
      </svg>
    ),
    GitHub: () => (
      <svg viewBox="0 0 240 240" className="h-8 w-auto">
        <rect width="240" height="240" fill="#24292e" rx="60"/>
        <path d="M120 40c-44.2 0-80 35.8-80 80 0 35.3 22.9 65.3 54.7 75.9 4-.7 5.5-1.7 5.5-3.8 0-1.9-.1-8.2-.1-14.8-20.1 3.9-25.1-5.4-26.7-10.3-1.3-3.4-7.1-13.9-12.1-16.7-4.1-2.2-10-7.6-.1-7.7 9.3-.1 15.9 8.6 18.1 12.1 10.6 17.8 27.5 12.8 34.2 9.7 1.1-7.6 4.1-12.8 7.5-15.7-26.1-3-53.5-13.1-53.5-58.1 0-12.8 4.6-23.3 12.1-31.5-1.2-3-5.2-15.1 1.2-31.5 0 0 9.9-3.2 32.4 12.1 9.4-2.6 19.5-3.9 29.5-3.9s20.1 1.3 29.5 3.9c22.5-15.3 32.4-12.1 32.4-12.1 6.4 16.4 2.4 28.5 1.2 31.5 7.5 8.2 12.1 18.7 12.1 31.5 0 45.1-27.4 55.1-53.6 58.1 4.2 3.6 7.9 10.7 7.9 21.6 0 15.6-.1 28.2-.1 32 0 2.1 1.5 3.1 5.5 3.8C177.1 185.3 200 155.3 200 120c0-44.2-35.8-80-80-80z" fill="white"/>
      </svg>
    )
  };

  const logos = [
    { name: "ProductHunt", component: LogoComponents.ProductHunt },
    { name: "YCombinator", component: LogoComponents.YCombinator },
    { name: "Linear", component: LogoComponents.Linear },
    { name: "Supabase", component: LogoComponents.Supabase },
    { name: "Vercel", component: LogoComponents.Vercel },
    { name: "GitHub", component: LogoComponents.GitHub }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white">
      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-transform duration-300 ease-in-out ${navbarVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center relative">
                {/* Custom Bug + Radar hybrid icon */}
                <div className="relative">
                  {/* Bug body */}
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center relative">
                    <Bug className="w-4 h-4 text-black" strokeWidth={2} />
                    {/* Radar rings */}
                    <div className="absolute inset-0 rounded-full border-2 border-yellow-400 animate-ping opacity-75"></div>
                    <div className="absolute -inset-1 rounded-full border border-yellow-400 opacity-50"></div>
                    <div className="absolute -inset-2 rounded-full border border-yellow-400 opacity-25"></div>
                  </div>
                </div>
              </div>
              <span className="text-xl font-bold pl-1" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif', fontWeight: 700, color: '#2C2C2C' }}>BugRadar</span>
            </div>
            <button className="border-2 border-gray-200 text-gray-600 px-3 sm:px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 hover:border-gray-300 hover:text-gray-700 hover:bg-gray-50">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,215,0,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center min-h-[80vh]">
            <div 
              className={`space-y-8 transition-all duration-1000 ${isVisible['hero-content'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
              data-animate
              id="hero-content"
            >
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 leading-tight mobile-hero-text mx-auto">
                  Bug Reports That{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600">
                    Actually Make Sense
                  </span>
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl mobile-hero-text mx-auto sm:mx-0">
                  Smart bug reports that show everything at once: screenshots, system info, and what actually went wrong.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-8">
                <button className="group bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:from-yellow-400 hover:to-yellow-400 hover:scale-105 flex items-center justify-center gap-2 min-h-[56px] w-full sm:w-auto">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-lg hover:text-gray-900 relative overflow-hidden group min-h-[56px] w-full sm:w-auto">
                  <span className="relative z-10">
                  Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gray-100 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></div>
                </button>
              </div>
              
              {/* Trust Badge - moved under CTA buttons */}
              <div className="flex justify-center sm:justify-start pt-4">
                <div 
                  className={`inline-flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full shadow-sm transition-all duration-300 hover:shadow-md hover:scale-105 ${isVisible['trust-badge'] ? 'animate-fade-in' : 'opacity-0'}`}
                  data-animate
                  id="trust-badge"
                >
                  <Users className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-bold text-gray-800">Used by 10,000+ dev teams</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-gray-500 pt-4 items-center sm:items-start">
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span>2-minute setup</span>
                </div>
                <div className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-purple-500" />
                  <span>GDPR compliant</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-600">app.example.com</div>
                </div>
                <div className="relative p-8 bg-gradient-to-br from-indigo-50 to-purple-50 min-h-[400px]">
                  <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium animate-pulse">
                    Bug Found!
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div className="relative">
                      <div className="h-32 bg-white rounded-lg border-2 border-dashed border-red-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                            <XCircle className="w-4 h-4 text-red-500" />
                          </div>
                          <div className="text-sm text-gray-500">Layout Issue</div>
                        </div>
                      </div>
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-black px-2 py-1 rounded text-xs font-medium">
                        Annotated
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 transform rotate-3 group">
                <div className="text-xs text-gray-500 mb-1">System Info</div>
                <div className="text-sm font-medium">Chrome 120.0 • MacOS 14.2</div>
                <div className="text-sm text-gray-600">1920x1080 • Console: 2 errors</div>
                <div className="absolute -top-2 -left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Yes, even this was auto-captured 😏
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Bar Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-12 transition-all duration-800 ${isVisible['logo-section'] ? 'animate-fade-in' : 'opacity-0'}`}
            data-animate
            id="logo-section"
          >
            <p className="text-lg text-gray-600 font-medium">
              Trusted by fast-moving teams and dev-first startups
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className={`flex items-center justify-center h-12 transition-all duration-300 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 hover:scale-110 ${isVisible['logo-section'] ? 'animate-fade-in' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <logo.component />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              From Chaos to Clarity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how BugRadar transforms your team's workflow from frustrating guesswork to efficient problem-solving.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div 
              className={`space-y-8 transition-all duration-1000 ${isVisible['problem-section'] ? 'animate-slide-in-left' : 'opacity-0 -translate-x-8'}`}
              data-animate
              id="problem-section"
            >
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <XCircle className="w-4 h-4" />
                  The Old Way
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "It's broken, please fix"
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Vague descriptions</div>
                    <div className="text-sm text-gray-600">"The button doesn't work" - which button? where? when?</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Missing context</div>
                    <div className="text-sm text-gray-600">No browser info, device details, or error messages</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-red-200">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Endless back-and-forth</div>
                    <div className="text-sm text-gray-600">Hours wasted asking for details and screenshots</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
              className={`space-y-8 transition-all duration-1000 ${isVisible['solution-section'] ? 'animate-slide-in-right' : 'opacity-0 translate-x-8'}`}
              data-animate
              id="solution-section"
            >
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                  <CheckCircle className="w-4 h-4" />
                  The BugRadar Way
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete context, one click
                </h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">1</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Visual annotations</div>
                    <div className="text-sm text-gray-600">Point, click, annotate. Show exactly what's wrong with visual markup</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">2</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Auto-captured data</div>
                    <div className="text-sm text-gray-600">Browser, OS, screen size, console errors—all captured automatically</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg border border-green-200 shadow-sm">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-black font-bold text-sm">3</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Instant developer handoff</div>
                    <div className="text-sm text-gray-600">Direct integration with your dev tools. No more context switching</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                squash bugs fast
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to make bug reporting effortless and bug fixing lightning-fast.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 bg-white rounded-2xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:shadow-yellow-100/50 transition-all duration-200 hover:-translate-y-2 hover:scale-105 flex flex-col h-full ${isVisible['features-section'] ? 'animate-fade-in-up-smooth' : 'opacity-0 translate-y-12'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-yellow-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-100 transition-colors group-hover:scale-110 duration-200 flex-shrink-0">
                  <div className="text-yellow-600 group-hover:text-yellow-700 transition-colors flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Hidden trigger element for features section */}
          <div 
            data-animate
            id="features-section"
            className="opacity-0 pointer-events-none absolute"
            style={{ top: '50%' }}
          ></div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gray-200"></div>
        </div>
      </div>

      {/* Social Proof Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Loved by teams worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of developers and QA teams who've transformed their bug reporting workflow.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white p-8 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full border border-gray-50 ${isVisible['testimonials-section'] ? 'animate-fade-in-up-smooth' : 'opacity-0 translate-y-12'}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-8 lg:mb-10 text-lg leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-4 mt-auto pt-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full object-cover ring-3 ring-gray-100 shadow-sm"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                    <div className="text-sm text-gray-600 leading-tight">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Hidden trigger element for testimonials section */}
          <div 
            data-animate
            id="testimonials-section"
            className="opacity-0 pointer-events-none absolute"
            style={{ top: '50%' }}
          ></div>
          
          <div className="text-center mt-16">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-8 bg-white px-8 py-4 rounded-2xl shadow-sm">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-gray-600">10,000+ happy users</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">4.9/5 average rating</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-gray-600">99.9% uptime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 pb-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center mb-16 transition-all duration-800 ${isVisible['faq-section'] ? 'animate-fade-in' : 'opacity-0'}`}
            data-animate
            id="faq-section"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about BugRadar
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-md ${isVisible['faq-section'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-4'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <div className="flex-shrink-0 ml-4">
                    {openFaq === index ? (
                      <Minus className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 transition-transform duration-200" />
                    )}
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-6 pb-6 pt-4">
                    <p className="text-gray-600 leading-relaxed mobile-faq-text">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,215,0,0.1),transparent_70%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div 
            className={`space-y-8 transition-all duration-1000 ${isVisible['final-cta'] ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            data-animate
            id="final-cta"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to fix bugs{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500">
                10x faster?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Stop wasting time on unclear bug reports. Join 10,000+ teams who ship better software with BugRadar.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">14</div>
                  <div className="text-sm text-gray-400">Day Trial</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">$0</div>
                  <div className="text-sm text-gray-400">Setup Cost</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-gray-600"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">2</div>
                  <div className="text-sm text-gray-400">Minute Setup</div>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 sm:px-8 py-4 sm:py-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-200 hover:from-yellow-400 hover:to-yellow-400 hover:scale-105 group min-h-[56px] sm:min-h-[64px]">
                Start Your Free Trial Now
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-xs sm:text-sm text-gray-300 mt-4">
                No credit card required • Cancel anytime • Full features included
              </p>
              
              <p className="text-xs text-gray-400 mt-2 italic">
                Still scrolling? Time to squash some bugs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-gray-400 mt-8 sm:mt-12">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <p className="text-base text-white group cursor-pointer inline-block" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              Designed by <span className="border-b-2 border-yellow-400 group-hover:border-yellow-300 transition-colors duration-200">Prathamesh</span>
            </p>
            <p className="text-sm text-gray-400 italic mobile-footer-text" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
              This landing page was built to convert, not just impress.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;