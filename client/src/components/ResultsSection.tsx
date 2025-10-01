import { Card } from "@/components/ui/card";
import { Target, BarChart3, Zap, TrendingUp, Activity, Database } from "lucide-react";
import dashboardImage from "@assets/generated_images/Analytics_dashboard_visualization_051e7bd7.png";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function ResultsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeFeature, setActiveFeature] = useState(0);
  const [liveMetrics, setLiveMetrics] = useState({
    deals: 127,
    conversion: 34.2,
    revenue: 2840000
  });

  // Auto-cycle through features and simulate live data
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
      
      // Simulate live dashboard data updates
      setLiveMetrics(prev => ({
        deals: prev.deals + Math.floor(Math.random() * 3),
        conversion: +(prev.conversion + (Math.random() - 0.5) * 0.5).toFixed(1),
        revenue: prev.revenue + Math.floor(Math.random() * 10000)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, [isInView]);

  const features = [
    {
      icon: Target,
      title: "Full-funnel execution",
      description: "From first touch to closed deal, TPG provides on-demand xDR teams and proprietary AI tooling.",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      metrics: ["Active Campaigns: 47", "Response Rate: 34.2%", "Pipeline Value: $2.8M"]
    },
    {
      icon: BarChart3,
      title: "Data-driven GTM insights",
      description: "Our Bloomberg Terminal-like dashboards and AI copilot help identify pricing objections, market headwinds/tailwinds, and conversation trends in real time.",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      metrics: ["Data Points: 847K", "Patterns Detected: 23", "Accuracy: 94.7%"]
    },
    {
      icon: Zap,
      title: "Built for PE-backed speed",
      description: "We partner with financial sponsors and growth leaders to turn portfolio-wide GTM into a competitive advantage.",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      metrics: ["Time to Market: 14 days", "ROI Increase: 312%", "Portfolio Companies: 15"]
    }
  ];

  return (
    <section ref={sectionRef} id="results" className="py-24 px-8 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="space-y-16">
          {/* Animated Header */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-medium text-foreground" data-testid="text-results-headline">
              How We Deliver Results
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Features List */}
            <div className="space-y-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                const isActive = activeFeature === index;
                
                return (
                  <motion.div
                    key={index}
                    className={`group relative p-6 rounded-xl border transition-all duration-500 cursor-pointer hover-elevate ${
                      isActive 
                        ? 'border-primary/50 bg-primary/5' 
                        : 'border-border hover:border-primary/30'
                    }`}
                    data-testid={`feature-${index}`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    onMouseEnter={() => setActiveFeature(index)}
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Terminal-style indicator */}
                    <div className={`absolute left-0 top-0 w-1 h-full rounded-r transition-all duration-500 ${
                      isActive ? 'bg-gradient-to-b ' + feature.color : 'bg-border'
                    }`} />
                    
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <motion.div 
                          className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                            isActive ? feature.bgColor : 'bg-muted'
                          }`}
                          animate={{ rotate: isActive ? [0, 5, -5, 0] : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className={`w-7 h-7 transition-colors duration-500 ${
                            isActive ? 'text-primary' : 'text-muted-foreground'
                          }`} />
                        </motion.div>
                      </div>
                      <div className="space-y-3 flex-1">
                        <h3 className={`text-xl font-medium transition-colors duration-300 ${
                          isActive ? 'text-foreground' : 'text-foreground/80'
                        }`}>
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
                        </p>
                        
                        {/* Live metrics display */}
                        <motion.div 
                          className={`grid grid-cols-1 gap-2 mt-4 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                          animate={{ opacity: isActive ? 1 : 0, height: isActive ? 'auto' : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {feature.metrics.map((metric, metricIndex) => (
                            <div key={metricIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                              <span className="font-mono text-muted-foreground">{metric}</span>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Clean minimalist space */}
            <div className="flex items-center justify-center h-96">
              <motion.div
                className="text-center space-y-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Interactive dashboard experiences are best demonstrated live
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}