import { Card } from "@/components/ui/card";
import { Quote, Star, TrendingUp, CheckCircle, Building2, Users, Zap } from "lucide-react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showMetrics, setShowMetrics] = useState(false);

  const testimonials = [
    {
      quote: "TPG gave us complete visibility and a 3.5x ROI in less than a year.",
      author: "CMO",
      company: "Island",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      metrics: ["ROI: 3.5x", "Visibility: 100%", "Timeline: 11 months"],
      rating: 5
    },
    {
      quote: "Every lead now has an owner and next step. No more black holes.",
      author: "CRO", 
      company: "Broadcom",
      icon: CheckCircle,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      metrics: ["Lead Coverage: 100%", "Response Time: 2hr", "Conversion: +45%"],
      rating: 5
    },
    {
      quote: "The Bloomberg Terminal-like insights helped us identify pricing objections we never saw coming.",
      author: "VP Sales",
      company: "Seagate",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      metrics: ["Insights: 847", "Objections ID'd: 23", "Win Rate: +34%"],
      rating: 5
    }
  ];

  // Auto-cycle through testimonials
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);

    // Show metrics after first cycle
    const metricsTimeout = setTimeout(() => {
      setShowMetrics(true);
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(metricsTimeout);
    };
  }, [isInView, testimonials.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 px-8 bg-card relative overflow-hidden">
      {/* Background terminal effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,#ffffff08_1px,transparent_1px)] bg-[size:30px_30px]" />
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <div className="space-y-16">
          {/* Enhanced Header */}
          <motion.div 
            className="text-center space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl font-medium text-foreground" data-testid="text-testimonials-headline">
              Trusted by Industry Leaders
            </h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-primary fill-primary" />
                  </motion.div>
                ))}
              </div>
              <span className="text-muted-foreground ml-2">5.0 from industry leaders</span>
            </div>
          </motion.div>

          {/* Live metrics dashboard */}
          <AnimatePresence>
            {showMetrics && (
              <motion.div
                className="flex justify-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-background/50 backdrop-blur-sm border rounded-lg p-4 flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono text-foreground">3 Fortune 500</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-green-500" />
                    <span className="text-sm font-mono text-foreground">$12B+ Portfolio</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-mono text-foreground">312% Avg ROI</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Enhanced Testimonials Horizontal Scroll */}
          <motion.div 
            className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent hover:scrollbar-thumb-primary/40"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ scrollbarWidth: 'thin' }}
          >
            {testimonials.map((testimonial, index) => {
              const Icon = testimonial.icon;
              const isActive = activeTestimonial === index;
              
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="relative flex-shrink-0 w-[calc(100vw-6rem)] sm:w-[calc(100vw-8rem)] md:w-[360px] snap-center"
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  <Card 
                    className={`relative p-8 space-y-6 transition-all duration-500 cursor-pointer group overflow-hidden ${
                      isActive 
                        ? 'border-primary/50 bg-primary/5 scale-105' 
                        : 'hover-elevate'
                    }`}
                    data-testid={`card-testimonial-${index}`}
                  >
                    {/* Animated background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${
                      isActive ? 'opacity-10' : ''
                    } ${testimonial.color}`} />

                    {/* Quote icon with enhanced styling */}
                    <div className="flex items-center gap-3">
                      <motion.div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-500 ${
                          isActive ? testimonial.bgColor : 'bg-muted'
                        }`}
                        animate={{ 
                          rotate: isActive ? [0, 5, -5, 0] : 0,
                          scale: isActive ? [1, 1.1, 1] : 1
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className={`w-6 h-6 transition-colors duration-500 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </motion.div>
                      <Quote className={`w-6 h-6 transition-colors duration-500 ${
                        isActive ? 'text-primary' : 'text-primary/30'
                      }`} />
                    </div>

                    {/* Enhanced quote text */}
                    <blockquote className={`text-lg leading-relaxed font-medium transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-foreground/90'
                    }`}>
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author info with rating */}
                    <div className="space-y-3">
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <div className="font-medium">{testimonial.author}</div>
                        <div className="flex items-center gap-2">
                          <Building2 className="w-3 h-3" />
                          {testimonial.company}
                        </div>
                      </div>
                    </div>

                    {/* Hover scanning line */}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress indicators */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeTestimonial === index 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-primary/50'
                }`}
                onClick={() => setActiveTestimonial(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}