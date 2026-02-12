import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Shield, Camera, AlertTriangle, Ambulance, 
  Car, Bike, Truck, MapPin, Database,
  TrendingUp, Users, Activity, Zap,
  Phone, Siren, Gauge, Lock,
  ArrowRight, Menu, X, Play,
  Star
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import './App.css'

// Feature data
const features = [
  {
    icon: Camera,
    title: "Real-Time Traffic Monitoring",
    description: "AI-powered CCTV cameras continuously monitor traffic flow, detecting congestion and incidents 24/7.",
    color: "blue"
  },
  {
    icon: AlertTriangle,
    title: "Emergency Vehicle Priority",
    description: "Automatic signal override for ambulances, fire trucks, and police with siren detection and green corridor creation.",
    color: "red"
  },
  {
    icon: Siren,
    title: "Crime Detection & Alert",
    description: "AI identifies fights, murders, and illegal activities, instantly alerting nearby police stations with video evidence.",
    color: "orange"
  },
  {
    icon: Gauge,
    title: "Speed Violation Detection",
    description: "Automatic number plate recognition for overspeeding vehicles with instant e-challan generation and license management.",
    color: "purple"
  },
  {
    icon: Database,
    title: "Traffic Data Analytics",
    description: "Collects daily traffic patterns, vehicle types, and pollution data for urban planning and policy making.",
    color: "emerald"
  },
  {
    icon: TrendingUp,
    title: "Vehicle Intelligence",
    description: "Tracks vehicle distribution (EV, petrol, diesel) across regions for automotive industry insights.",
    color: "cyan"
  },
  {
    icon: Lock,
    title: "Anti-Corruption Monitoring",
    description: "Detects traffic police taking bribes and automatically suspends corrupt officers with video proof.",
    color: "rose"
  },
  {
    icon: Activity,
    title: "Unusual Activity Detection",
    description: "Captures and logs any illegal or suspicious activities for forensic analysis and evidence.",
    color: "amber"
  },
  {
    icon: Phone,
    title: "Accident Emergency Response",
    description: "Instantly calls hospitals, alerts nearby police, and broadcasts accident alerts to nearby drivers.",
    color: "indigo"
  }
]

// Stats data
const stats = [
  { label: "Cameras Deployed", value: "50,000+", icon: Camera },
  { label: "Violations Detected", value: "2.5M+", icon: Shield },
  { label: "Emergency Responses", value: "150K+", icon: Ambulance },
  { label: "Cities Covered", value: "120+", icon: MapPin }
]

// How it works steps
const howItWorks = [
  {
    step: 1,
    title: "AI Camera Capture",
    description: "High-resolution CCTV cameras with built-in AI processors capture real-time traffic footage.",
    icon: Camera
  },
  {
    step: 2,
    title: "Intelligent Analysis",
    description: "Edge AI analyzes video streams to detect violations, emergencies, and anomalies instantly.",
    icon: Activity
  },
  {
    step: 3,
    title: "Automated Response",
    description: "System triggers appropriate actions - alerts, e-challans, emergency calls, or signal control.",
    icon: Zap
  },
  {
    step: 4,
    title: "Data Storage",
    description: "All incidents, violations, and traffic data securely stored for analysis and evidence.",
    icon: Database
  }
]

// Testimonials
const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Traffic Commissioner, Delhi",
    content: "Traffic Ranger has reduced traffic violations by 65% in just 6 months. The AI-powered system is a game-changer for urban traffic management.",
    rating: 5
  },
  {
    name: "Dr. Priya Sharma",
    role: "Emergency Response Director",
    content: "The emergency vehicle priority system has reduced ambulance response time by 40%. Lives are being saved every day.",
    rating: 5
  },
  {
    name: "Amit Patel",
    role: "Smart City Project Head",
    content: "The data analytics help us plan better infrastructure. We now understand traffic patterns like never before.",
    rating: 5
  }
]

// Vehicle types detected
const vehicleTypes = [
  { name: "Cars", icon: Car, count: "1.2M" },
  { name: "Bikes", icon: Bike, count: "800K" },
  { name: "Trucks", icon: Truck, count: "350K" },
  { name: "Auto", icon: Users, count: "200K" },
  { name: "Buses", icon: Users, count: "45K" },
  { name: "Emergency", icon: Ambulance, count: "12K" }
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("features")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Traffic Ranger
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('features')} className="text-slate-300 hover:text-white transition-colors">Features</button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-slate-300 hover:text-white transition-colors">How It Works</button>
              <button onClick={() => scrollToSection('technology')} className="text-slate-300 hover:text-white transition-colors">Technology</button>
              <button onClick={() => scrollToSection('impact')} className="text-slate-300 hover:text-white transition-colors">Impact</button>
              <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-t border-slate-800"
            >
              <div className="px-4 py-4 space-y-3">
                <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 text-slate-300">Features</button>
                <button onClick={() => scrollToSection('how-it-works')} className="block w-full text-left py-2 text-slate-300">How It Works</button>
                <button onClick={() => scrollToSection('technology')} className="block w-full text-left py-2 text-slate-300">Technology</button>
                <button onClick={() => scrollToSection('impact')} className="block w-full text-left py-2 text-slate-300">Impact</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-blue-300 text-sm font-medium">AI-Powered Traffic Enforcement</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Traffic</span>{' '}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Ranger
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto">
              The next-generation AI traffic enforcement system that monitors, detects, and responds to traffic violations and emergencies in real-time.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8">
                Explore Features
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-700"
                >
                  <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-blue-400 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 border-blue-400/30 mb-4">FEATURES</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Intelligent Traffic Management
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our AI-powered system handles everything from routine monitoring to emergency response, making roads safer for everyone.
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-3 md:grid-cols-5 gap-2 bg-slate-800/50 p-2 mb-8">
              <TabsTrigger value="features" className="data-[state=active]:bg-blue-500">All Features</TabsTrigger>
              <TabsTrigger value="enforcement" className="data-[state=active]:bg-blue-500">Enforcement</TabsTrigger>
              <TabsTrigger value="emergency" className="data-[state=active]:bg-blue-500">Emergency</TabsTrigger>
              <TabsTrigger value="analytics" className="data-[state=active]:bg-blue-500">Analytics</TabsTrigger>
              <TabsTrigger value="monitoring" className="data-[state=active]:bg-blue-500">Monitoring</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-slate-800/50 border-slate-700 hover:border-blue-500/50 transition-all duration-300 h-full group">
                      <CardContent className="p-6">
                        <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-slate-400">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="enforcement" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.filter(f => ['Speed Violation Detection', 'Anti-Corruption Monitoring'].includes(f.title)).map((feature) => (
                  <Card key={feature.title} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="emergency" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.filter(f => ['Emergency Vehicle Priority', 'Crime Detection & Alert', 'Accident Emergency Response'].includes(f.title)).map((feature) => (
                  <Card key={feature.title} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.filter(f => ['Traffic Data Analytics', 'Vehicle Intelligence'].includes(f.title)).map((feature) => (
                  <Card key={feature.title} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="monitoring" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.filter(f => ['Real-Time Traffic Monitoring', 'Unusual Activity Detection'].includes(f.title)).map((feature) => (
                  <Card key={feature.title} className="bg-slate-800/50 border-slate-700">
                    <CardContent className="p-6">
                      <div className={`w-14 h-14 rounded-xl bg-${feature.color}-500/20 flex items-center justify-center mb-4`}>
                        <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-400/30 mb-4">PROCESS</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Traffic Ranger Works
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              A seamless 4-step process from detection to action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500" />
                )}
                <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4 mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{step.step}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 text-sm">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-purple-500/20 text-purple-300 border-purple-400/30 mb-4">TECHNOLOGY</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Cutting-Edge AI Technology
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Traffic Ranger uses state-of-the-art artificial intelligence and computer vision to deliver unmatched accuracy and speed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0">
                    <Camera className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">4K AI Cameras</h3>
                    <p className="text-slate-400">High-resolution cameras with built-in AI processors for edge computing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Deep Learning Models</h3>
                    <p className="text-slate-400">Trained on millions of traffic scenarios for 99.5% accuracy</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Real-Time Processing</h3>
                    <p className="text-slate-400">Sub-second response time for critical situations</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Database className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Cloud Integration</h3>
                    <p className="text-slate-400">Secure cloud storage with instant access to historical data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-3xl" />
              <div className="relative bg-slate-800/50 rounded-3xl p-8 border border-slate-700">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Vehicle Detection Accuracy</h3>
                <div className="space-y-6">
                  {vehicleTypes.map((vehicle, index) => (
                    <div key={vehicle.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <vehicle.icon className="w-5 h-5 text-blue-400" />
                          <span className="text-white font-medium">{vehicle.name}</span>
                        </div>
                        <span className="text-cyan-400 font-bold">{vehicle.count}</span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <motion.div 
                          className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(parseInt(vehicle.count) / 1200) * 100}%` }}
                          transition={{ delay: index * 0.1, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-slate-700/50 rounded-xl">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Overall Accuracy</span>
                    <span className="text-2xl font-bold text-emerald-400">99.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-24 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-orange-500/20 text-orange-300 border-orange-400/30 mb-4">IMPACT</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Making Roads Safer
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Real results from cities using Traffic Ranger
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl p-8 border border-emerald-500/30 text-center"
            >
              <div className="text-5xl font-bold text-emerald-400 mb-2">65%</div>
              <div className="text-white font-semibold mb-1">Reduction in Violations</div>
              <div className="text-slate-400 text-sm">Traffic violations decreased significantly</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl p-8 border border-blue-500/30 text-center"
            >
              <div className="text-5xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-white font-semibold mb-1">Faster Emergency Response</div>
              <div className="text-slate-400 text-sm">Ambulance arrival time reduced</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl p-8 border border-purple-500/30 text-center"
            >
              <div className="text-5xl font-bold text-purple-400 mb-2">2.5M+</div>
              <div className="text-white font-semibold mb-1">Violations Detected</div>
              <div className="text-slate-400 text-sm">Across 120+ cities in India</div>
            </motion.div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-slate-400">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your City's Traffic?
          </h2>
          <p className="text-xl text-slate-400 mb-8">
            Join 120+ cities already using Traffic Ranger to make their roads safer and more efficient.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-lg px-8">
              Schedule a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8">
              <Phone className="mr-2 w-5 h-5" />
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Traffic Ranger</span>
              </div>
              <p className="text-slate-400 text-sm">
                AI-powered traffic enforcement system making roads safer across India.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API Reference</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © 2025 Traffic Ranger. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
