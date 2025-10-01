import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, Database, Mic, Settings, FileText, Globe, Shield, TrendingUp } from "lucide-react";

export default function CompactCostSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  const visibleCosts = [
    { label: "Base Salary", cost: "$50K" },
    { label: "Commission", cost: "$30K" },
  ];

  const hiddenCosts = [
    { 
      icon: Users, 
      label: "MANAGEMENT", 
      description: "Dedicated Manager + Ops Support",
      details: ["$80K+ manager salary", "Operations overhead", "Performance tracking"],
      cost: "$95K/year",
    },
    { 
      icon: Database, 
      label: "DATA & TOOLS", 
      description: "Lead databases + enrichment tools",
      details: ["Multiple data subscriptions", "Contact verification", "CRM licensing"],
      cost: "$25K/year",
    },
    { 
      icon: Mic, 
      label: "VOICE SYSTEMS", 
      description: "Dialer + phone infrastructure",
      details: ["Auto-dialer licensing", "Phone lines", "Call recording"],
      cost: "$15K/year",
    },
    { 
      icon: Settings, 
      label: "TECH STACK", 
      description: "Integration + automation tools",
      details: ["CRM integration", "Workflow automation", "Reporting systems"],
      cost: "$20K/year",
    },
    { 
      icon: FileText, 
      label: "CONTENT CREATION", 
      description: "Messaging + script development",
      details: ["Email template creation", "Call script writing", "A/B testing"],
      cost: "$18K/year",
    },
    { 
      icon: Globe, 
      label: "COMPLIANCE", 
      description: "Legal + regulatory requirements",
      details: ["TCPA compliance", "Legal review", "Training programs"],
      cost: "$12K/year",
    },
    { 
      icon: Shield, 
      label: "BACKUP & RISK", 
      description: "Coverage for sick days, turnover",
      details: ["Replacement costs", "Training new hires", "Performance gaps"],
      cost: "$35K/year",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-orange-50/30" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Compact Section Header */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">TPG was founded to solve the hidden cost problem in the pipeline generation industry.</h2>
          </motion.div>

          {/* Cost Summary Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-6">
              <div className="space-y-4">
                {/* Cost Breakdown Bar */}
                <div className="relative">
                  <div className="flex rounded-lg overflow-hidden h-16 shadow-inner">
                    {/* Visible Portion (26.7%) */}
                    <motion.div 
                      className="bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white font-bold text-sm overflow-hidden" 
                      style={{ width: '26.7%' }}
                      initial={{ x: -200, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    >
                      <span>Visible: $80K</span>
                    </motion.div>
                    {/* Hidden Portion (73.3%) */}
                    <motion.div 
                      className="bg-gradient-to-r from-red-500 to-red-600 flex items-center justify-center text-white font-bold text-sm overflow-hidden" 
                      style={{ width: '73.3%' }}
                      initial={{ x: 200, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                    >
                      <span>Hidden Infrastructure: $220K</span>
                    </motion.div>
                  </div>
                  
                  {/* Ratio Pill */}
                  <motion.div
                    className="absolute -top-2 right-0 bg-slate-800 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    Hidden = 2.75× Visible
                  </motion.div>
                </div>

                {/* Total Cost Display */}
                <div className="flex justify-between items-center pt-4 border-t">
                  <span className="text-lg font-semibold text-slate-700">True Total Cost</span>
                  <span className="text-3xl font-bold text-primary">$300K</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Hidden Cost Breakdown Accordion */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="hidden-costs" className="border rounded-lg">
                <AccordionTrigger 
                  className="px-6 py-4 hover:no-underline hover-elevate"
                  data-testid="button-expand-hidden-costs"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg font-bold text-red-600">Where does the $220K go?</span>
                    <div className="text-sm text-muted-foreground">(7 cost categories)</div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {hiddenCosts.map((cost, index) => {
                      const Icon = cost.icon;
                      return (
                        <motion.div
                          key={index}
                          className="p-4 border rounded-lg hover-elevate cursor-pointer group"
                          data-testid={`cost-category-${cost.label.toLowerCase().replace(/\s+/g, '-')}`}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="p-2 bg-red-50 rounded-lg">
                              <Icon className="w-5 h-5 text-red-600" />
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <h4 className="font-bold text-sm text-slate-800">{cost.label}</h4>
                                <span className="font-bold text-red-600 text-sm">{cost.cost}</span>
                              </div>
                              <p className="text-xs text-slate-600 mb-2">{cost.description}</p>
                            </div>
                          </div>
                          {/* Details List */}
                          <div className="space-y-1 pl-11">
                            {cost.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="flex items-center gap-2 text-xs text-slate-500">
                                <div className="w-1 h-1 bg-red-400 rounded-full flex-shrink-0" />
                                <span>{detail}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>

          {/* Compact TPG Solution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-orange-50/30 border-primary/20">
              <div className="text-center space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  With TPG, You Get Everything
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  All infrastructure, management, and support included. One transparent price.
                </p>
                
                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-white/60 rounded-lg border border-primary/20">
                    <div className="font-bold text-primary mb-1">All-Inclusive</div>
                    <p className="text-sm text-slate-600">Everything covered under one roof</p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-lg border border-primary/20">
                    <div className="font-bold text-primary mb-1">Transparent</div>
                    <p className="text-sm text-slate-600">No hidden fees or surprise costs</p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-lg border border-primary/20">
                    <div className="font-bold text-primary mb-1">Proven</div>
                    <p className="text-sm text-slate-600">Dedicated team with built-in redundancy</p>
                  </div>
                </div>
                
                {/* CTA */}
                <motion.button
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-lg hover-elevate transition-all duration-300 shadow-lg mt-6"
                  data-testid="button-see-solution"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>See our solution</span>
                  <TrendingUp className="w-4 h-4" />
                </motion.button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}