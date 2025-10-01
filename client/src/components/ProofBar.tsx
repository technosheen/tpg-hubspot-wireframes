import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Check, X } from "lucide-react";

export default function ProofBar() {
  // todo: remove mock functionality - replace with real client logos
  const clientLogos = [
    "Broadcom", "Island", "Seagate", "HID Global", "Hexagon ETQ", 
    "Threat Modeler", "LRN", "AuthID", "Carasoft", "TD Synnex",
    "Westcon", "Invictus Capital", "Taleo Capital", "Falfurrias Capital Partners"
  ];

  // Create enough logos to ensure complete rows for all responsive breakpoints
  // LCM of 2,3,4,5,6 = 60, so we need 60 logos total for perfect rows
  const extendedLogos = [];
  while (extendedLogos.length < 60) {
    extendedLogos.push(...clientLogos);
  }
  const completeLogos = extendedLogos.slice(0, 60); // Exactly 60 logos

  const comparisonRef = useRef(null);
  const isInView = useInView(comparisonRef, { once: true });

  const comparisonData = [
    {
      competitor: "Basic appointment setting",
      tpg: "Full-funnel SDR-as-a-Service solution",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "Limited data sources",
      tpg: "Access to 28+ validated data sources",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "No buyer intent modeling",
      tpg: "Sophisticated propensity modeling with 1000+ signals",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "Quantity focused KPIs",
      tpg: "Opportunity ROI focused KPIs",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "Limited visibility into performance",
      tpg: "Real-time Control Plane dashboard",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "No talent acquisition path",
      tpg: "Temp-to-perm flexibility for top performers",
      competitorHas: false,
      tpgHas: true,
    },
    {
      competitor: "Legacy technology",
      tpg: "Industry-leading Agentic AI roadmap",
      competitorHas: false,
      tpgHas: true,
    },
  ];

  return (
    <section className="py-16 px-8 border-b">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <p className="text-sm text-muted-foreground font-medium" data-testid="text-trusted-by">
              Trusted by over 125 companies
            </p>
            <div className="relative h-40 overflow-hidden">
              <motion.div
                className="space-y-4"
                animate={{ y: [0, -1200] }}
                transition={{
                  duration: 25,
                  ease: "linear",
                  repeat: Infinity
                }}
              >
                {/* Create multiple complete sets to ensure seamless looping */}
                {Array.from({ length: 3 }, (_, setIndex) => (
                  <div 
                    key={`set-${setIndex}`}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
                  >
                    {completeLogos.map((logo, logoIndex) => (
                      <div 
                        key={`set-${setIndex}-logo-${logoIndex}`}
                        className="bg-muted/30 border border-border rounded-lg p-3 flex items-center justify-center min-h-[60px] hover-elevate transition-all duration-300 opacity-60 hover:opacity-100"
                        data-testid={`text-client-logo-${setIndex}-${logoIndex}`}
                      >
                        <span className="text-xs text-muted-foreground font-medium text-center leading-tight">
                          {logo}
                        </span>
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
              
              {/* Gradient fade effects */}
              <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-background to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
          </div>
          
          <div className="border-t pt-12" ref={comparisonRef}>
            <motion.h3 
              className="text-2xl md:text-3xl font-bold text-center mb-2" 
              data-testid="text-comparison-header"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              See Why Leading Companies Are Making The Switch
            </motion.h3>
            <motion.p 
              className="text-center text-muted-foreground mb-8 text-sm"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Compare what you get with TPG versus traditional outsourced SDR providers
            </motion.p>
            
            <div className="max-w-4xl mx-auto">
              {/* Column Headers */}
              <div className="grid grid-cols-2 gap-0 mb-3 sticky top-0 bg-background z-10">
                <div className="text-center py-2 px-3 text-xs font-bold text-slate-600 uppercase tracking-wide border-b-2 border-slate-300">
                  Other Outsourced Companies
                </div>
                <div className="text-center py-2 px-3 text-xs font-bold text-primary uppercase tracking-wide border-b-2 border-primary">
                  What You Get With TPG
                </div>
              </div>

              {/* Comparison Table */}
              <motion.div
                className="border border-slate-200 rounded-lg overflow-hidden"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {comparisonData.map((item, index) => (
                  <div 
                    key={index} 
                    className={`grid grid-cols-2 ${index % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} ${index !== comparisonData.length - 1 ? 'border-b border-slate-200' : ''}`}
                    data-testid={`comparison-row-${index}`}
                  >
                    {/* Competitor Column */}
                    <div className="flex items-start gap-2 p-3 border-r border-slate-200">
                      <X className="w-3.5 h-3.5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-600 leading-tight">{item.competitor}</p>
                    </div>

                    {/* TPG Column */}
                    <div className="flex items-start gap-2 p-3 bg-primary/[0.02]">
                      <Check className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-slate-800 leading-tight">
                        <span className="font-semibold">{item.tpg.split(' ').slice(0, 3).join(' ')}</span>
                        {item.tpg.split(' ').length > 3 && ` ${item.tpg.split(' ').slice(3).join(' ')}`}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}