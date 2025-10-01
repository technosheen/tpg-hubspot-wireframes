import { Eye, TrendingUp, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function SolutionsSection() {
  const solutionsRef = useRef(null);
  const isInView = useInView(solutionsRef, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);
  const [showDataFlow, setShowDataFlow] = useState(false);
  const [hasCompletedFirstCycle, setHasCompletedFirstCycle] = useState(false);

  // Auto-cycle through steps with creative animations
  useEffect(() => {
    if (!isInView) return;
    
    let isActive = true;
    let timeoutIds: NodeJS.Timeout[] = [];
    
    const delay = (ms: number) => {
      return new Promise<void>((resolve) => {
        const id = setTimeout(() => {
          if (isActive) resolve();
        }, ms);
        timeoutIds.push(id);
      });
    };
    
    const runSequence = async () => {
      while (isActive) {
        // Initial delay
        await delay(1000);
        if (!isActive) break;
        
        // Step 1: Data Collection
        setActiveStep(1);
        await delay(2500);
        if (!isActive) break;
        
        // Show data flowing to step 2
        setShowDataFlow(true);
        await delay(800);
        if (!isActive) break;
        
        // Step 2: Pattern Recognition
        setActiveStep(2);
        setShowDataFlow(false);
        await delay(2500);
        if (!isActive) break;
        
        // Show insights flowing to step 3
        setShowDataFlow(true);
        await delay(800);
        if (!isActive) break;
        
        // Step 3: GTM Steering
        setActiveStep(3);
        setShowDataFlow(false);
        await delay(2500);
        if (!isActive) break;
        
        // Reset and loop
        setActiveStep(0);
        setHasCompletedFirstCycle(true);
        await delay(1500);
      }
    };
    
    runSequence();
    
    // Cleanup function
    return () => {
      isActive = false;
      timeoutIds.forEach(id => clearTimeout(id));
      setActiveStep(0);
      setShowDataFlow(false);
    };
  }, [isInView]);

  const processSteps = [
    {
      step: "01",
      icon: Eye,
      title: "See It All",
      description: "Gain 100% visibility across your go-to-market efforts. Every lead dispositioned. Every action tracked.",
      detail: "Complete data capture across all touchpoints",
      color: "blue-500, cyan-500"
    },
    {
      step: "02",
      icon: TrendingUp,
      title: "Spot the Patterns",
      description: "Uncover the plays, behaviors, and disciplines that consistently convert or block progress.",
      detail: "AI-powered pattern recognition and insights",
      color: "green-500, emerald-500"
    },
    {
      step: "03",
      icon: Navigation,
      title: "Steer the GTM",
      description: "Direct people, processes, and investment where they matter most so pipeline turns into predictable revenue.",
      detail: "Data-driven optimization and resource allocation",
      color: "orange-500, red-500"
    }
  ];


  return (
    <section id="solutions" className="py-24 px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-16">
          

          <motion.div 
            ref={solutionsRef}
            className="space-y-8 relative"
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary/20 rounded-full"
                  initial={{ 
                    x: Math.random() * 1000, 
                    y: Math.random() * 600,
                    scale: 0 
                  }}
                  animate={isInView ? {
                    y: [null, Math.random() * 600 - 50],
                    scale: [0, 1, 0],
                    opacity: [0, 0.6, 0]
                  } : {}}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>

            <motion.h3 
              className="text-2xl font-medium text-foreground relative z-10" 
              data-testid="text-our-solutions"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                animate={isInView ? { backgroundSize: "100% 100%" } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="bg-gradient-to-r from-primary/20 to-primary/10 bg-no-repeat bg-left-bottom"
                style={{ backgroundImage: `linear-gradient(120deg, hsl(25 95% 53% / 0.3) 0%, transparent 100%)` }}
              >
                Our Process
              </motion.span>
            </motion.h3>
            
            {/* Process Flow Subtitle */}
            <motion.p 
              className="text-muted-foreground text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              A systematic approach to transforming your go-to-market engine into a predictable revenue machine
            </motion.p>
            
            {/* Creative Animated Process Flow */}
            <div className="relative z-10 min-h-[600px] flex items-center justify-center">
              {/* Process Flow Container */}
              <div className="relative w-full max-w-5xl">
                {/* Timeline Base */}
                <motion.div 
                  className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-muted to-muted/50 rounded-full transform -translate-y-1/2"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Progress Indicator */}
                <motion.div 
                  className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-primary to-primary/80 rounded-full transform -translate-y-1/2 z-10"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { 
                    scaleX: activeStep === 0 ? 0 : 
                           activeStep === 1 ? 0.33 : 
                           activeStep === 2 ? 0.66 : 1 
                  } : { scaleX: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                {/* Current Step Status - Above Icons */}
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <motion.div 
                    className="text-xl font-medium text-foreground mb-2"
                    key={activeStep}
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 1.05 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {activeStep === 0 && (
                      <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                        {hasCompletedFirstCycle ? 
                          "🔄 Reiterate, and continually improve" : 
                          "✨ Watch our process unfold..."
                        }
                      </span>
                    )}
                    {activeStep === 1 && (
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                        🔍 Capturing every data point across your GTM
                      </span>
                    )}
                    {activeStep === 2 && (
                      <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                        🧠 AI analyzing patterns and identifying opportunities
                      </span>
                    )}
                    {activeStep === 3 && (
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        🎯 Optimizing and steering your revenue engine
                      </span>
                    )}
                  </motion.div>
                  
                  {/* Animated underline */}
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: activeStep > 0 ? "200px" : "100px",
                      opacity: 1 
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.div>

                {/* Process Steps */}
                <div className="flex justify-between items-center relative z-20">
                  {processSteps.map((step, index) => {
                    const stepNumber = index + 1;
                    const Icon = step.icon;
                    const isActive = activeStep === stepNumber;
                    const isCompleted = activeStep > stepNumber;

                    return (
                      <div key={index} className="flex flex-col items-center relative">
                        {/* Step Node */}
                        <motion.div
                          className="relative mb-8"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={isInView ? { 
                            scale: isActive ? 1.2 : 1, 
                            opacity: 1 
                          } : { scale: 0.8, opacity: 0 }}
                          transition={{ 
                            duration: 0.6, 
                            delay: index * 0.2,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          {/* Pulsing Ring for Active Step */}
                          {isActive && (
                            <motion.div
                              className="absolute inset-0 rounded-full blur-md bg-primary/40"
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.7, 0.3]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          )}

                          {/* Step Circle */}
                          <motion.div
                            className={`w-24 h-24 rounded-full flex items-center justify-center relative z-10 border-4 ${
                              isActive ? 'bg-primary border-white' :
                              isCompleted ? 'bg-primary border-primary' :
                              'bg-muted border-border'
                            }`}
                            animate={{
                              boxShadow: isActive ? 
                                '0 0 40px hsl(25 95% 53% / 0.5)' : 
                                '0 0 0px hsl(25 95% 53% / 0)'
                            }}
                            transition={{ duration: 0.4 }}
                          >
                            {/* Step Number Badge */}
                            <motion.div 
                              className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm z-20 bg-primary ${
                                isActive ? 'shadow-lg shadow-primary/60' : ''
                              }`}
                              animate={{
                                scale: isActive ? 1.1 : 1,
                                rotate: isActive ? 360 : 0
                              }}
                              transition={{ duration: 0.6 }}
                            >
                              {step.step}
                            </motion.div>

                            {/* Icon */}
                            <motion.div
                              animate={{
                                scale: isActive ? 1.1 : 1,
                                rotate: isActive ? [0, 10, -10, 0] : 0
                              }}
                              transition={{ 
                                scale: { duration: 0.3 },
                                rotate: { duration: 1, repeat: isActive ? Infinity : 0 }
                              }}
                            >
                              <Icon 
                                className={`w-10 h-10 ${
                                  isActive || isCompleted ? 'text-white' : 'text-muted-foreground'
                                }`}
                              />
                            </motion.div>
                          </motion.div>

                          {/* Floating Particles for Active Step */}
                          {isActive && Array.from({ length: 8 }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-primary rounded-full"
                              initial={{ 
                                x: 0, 
                                y: 0,
                                scale: 0,
                                opacity: 0
                              }}
                              animate={{
                                x: Math.cos(i * 45 * Math.PI / 180) * 80,
                                y: Math.sin(i * 45 * Math.PI / 180) * 80,
                                scale: [0, 1, 0],
                                opacity: [0, 1, 0]
                              }}
                              transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </motion.div>

                        {/* Step Card */}
                        <motion.div
                          initial={{ opacity: 0, y: 30, scale: 0.9 }}
                          animate={{
                            opacity: isActive ? 1 : 0.4,
                            y: isActive ? 0 : 30,
                            scale: isActive ? 1 : 0.9
                          }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="relative"
                        >
                          <Card className={`w-72 p-6 text-center space-y-4 relative overflow-hidden ${
                            isActive ? 'border-primary shadow-2xl bg-primary/5' : 'border-muted bg-card'
                          }`}>
                            {/* Spotlight Effect for Active Step */}
                            {isActive && (
                              <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                              />
                            )}

                            <div className="relative z-10">
                              <motion.h4 
                                className={`text-lg font-semibold ${
                                  isActive ? 'text-foreground' : 'text-muted-foreground'
                                }`}
                                animate={{
                                  scale: isActive ? 1.05 : 1
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {step.title}
                              </motion.h4>
                              
                              <motion.p 
                                className="text-sm leading-relaxed text-muted-foreground"
                                animate={{
                                  opacity: isActive ? 1 : 0.6
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {step.description}
                              </motion.p>

                              <motion.div
                                className="text-xs font-medium text-primary"
                                animate={{
                                  opacity: isActive ? 1 : 0.4,
                                  scale: isActive ? 1 : 0.95
                                }}
                                transition={{ duration: 0.3 }}
                              >
                                {step.detail}
                              </motion.div>
                            </div>
                          </Card>
                        </motion.div>

                        {/* Data Flow Animation */}
                        {showDataFlow && index < processSteps.length - 1 && activeStep === stepNumber && (
                          <motion.div
                            className="absolute top-12 left-full w-32 h-1 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          >
                            {Array.from({ length: 8 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-primary rounded-full"
                                initial={{ x: -10, scale: 0 }}
                                animate={{ 
                                  x: 140,
                                  scale: [0, 1, 0]
                                }}
                                transition={{
                                  duration: 0.8,
                                  delay: i * 0.1,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </motion.div>
                        )}
                      </div>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-medium rounded-lg hover-elevate transition-all duration-300 shadow-lg hover:shadow-xl group"
              data-testid="button-see-full-process"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>See our full process</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}