import { Card } from "@/components/ui/card";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { MousePointer, ChevronRight } from "lucide-react";

export default function ProblemSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [currentView, setCurrentView] = useState("overview");

  // Auto-cycle through executive dashboard views
  useEffect(() => {
    const sequence = [
      { view: "overview", delay: 3000 },
      { view: "disposition", delay: 3500 },
      { view: "pipeline", delay: 3500 },
      { view: "performance", delay: 3500 }
    ];
    
    let timeoutId: NodeJS.Timeout;
    let currentIndex = 0;
    
    const runSequence = () => {
      const current = sequence[currentIndex];
      setCurrentView(current.view);
      
      timeoutId = setTimeout(() => {
        currentIndex = (currentIndex + 1) % sequence.length;
        runSequence();
      }, current.delay);
    };
    
    runSequence();
    
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-medium text-foreground" data-testid="text-reporting-headline">
                Bloomberg Terminal-Style Reporting
              </h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium text-foreground" data-testid="text-reporting-subheading">
                  Visibility You've Never Seen Before
                </h3>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  <p data-testid="text-reporting-description-1">
                    Real-time dashboards with infinite drill-down capabilities. Every interaction, every touchpoint, every conversion tracked and visualized with institutional-grade precision.
                  </p>
                  <p data-testid="text-reporting-description-2">
                    From 30,000-foot pipeline overviews to granular activity tracking—click any metric to expose the underlying data streams, attribution models, and performance indicators.
                  </p>
                  <p className="font-medium text-foreground" data-testid="text-reporting-conclusion">
                    <span style={{ color: 'hsl(25 95% 53%)' }}>Complete transparency.</span> Every dollar tracked. Every decision data-driven.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Modern Analytics Dashboard */}
            <Card className="p-6 bg-slate-900 border-slate-700">
              <AnimatePresence mode="wait">
                {/* Executive Overview */}
                {currentView === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                  >
                    <div className="h-8 flex items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Executive Overview</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <motion.div 
                        className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <div className="text-xs text-gray-400 mb-1">Total Pipeline</div>
                        <div className="text-2xl font-bold text-white">$12.4M</div>
                        <div className="text-xs" style={{ color: 'hsl(25 95% 53%)' }}>↑ 12.4%</div>
                      </motion.div>
                      <motion.div 
                        className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <div className="text-xs text-gray-400 mb-1">Avg Deal Size</div>
                        <div className="text-2xl font-bold text-white">$284K</div>
                        <div className="text-xs" style={{ color: 'hsl(25 95% 53%)' }}>↑ 8.3%</div>
                      </motion.div>
                      <motion.div 
                        className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="text-xs text-gray-400 mb-1">Win Rate</div>
                        <div className="text-2xl font-bold text-white">42.8%</div>
                        <div className="text-xs" style={{ color: 'hsl(25 95% 53%)' }}>↑ 4.2%</div>
                      </motion.div>
                      <motion.div 
                        className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        <div className="text-xs text-gray-400 mb-1">Avg Sales Cycle</div>
                        <div className="text-2xl font-bold text-white">38 days</div>
                        <div className="text-xs" style={{ color: 'hsl(25 95% 53%)' }}>↓ 8 days</div>
                      </motion.div>
                    </div>
                    
                    {/* Pipeline Funnel & Key Metrics */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {/* Funnel Chart */}
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                        <div className="text-sm font-medium text-white mb-4">Pipeline by Stage</div>
                        <div className="space-y-2">
                          {[
                            { stage: "Discovery", value: "$3.8M", width: 100, color: "bg-blue-500" },
                            { stage: "Qualification", value: "$3.4M", width: 85, color: "bg-purple-500" },
                            { stage: "Proposal", value: "$2.9M", width: 70, color: "bg-indigo-500" },
                            { stage: "Negotiation", value: "$2.3M", width: 55, color: "bg-green-500" }
                          ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                              <motion.div
                                className={`${item.color} rounded h-10 flex items-center justify-center`}
                                style={{ width: `${item.width}%` }}
                                initial={{ width: 0 }}
                                animate={{ width: `${item.width}%` }}
                                transition={{ delay: i * 0.15, duration: 0.6 }}
                              >
                                <span className="text-white text-xs font-medium">{item.stage}</span>
                              </motion.div>
                              <span className="text-xs text-gray-400 mt-1">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Top Opportunities */}
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                        <div className="text-sm font-medium text-white mb-4">Top Opportunities</div>
                        <div className="space-y-3">
                          {[
                            { company: "Acme Corp", value: "$450K", stage: "Negotiation" },
                            { company: "TechStart", value: "$380K", stage: "Proposal" },
                            { company: "SecureNet", value: "$295K", stage: "Qualification" }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              className="flex justify-between items-center"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div>
                                <div className="text-sm text-white font-medium">{item.company}</div>
                                <div className="text-xs text-gray-400">{item.stage}</div>
                              </div>
                              <div className="text-sm font-bold text-white">{item.value}</div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Lead Disposition */}
                {currentView === "disposition" && (
                  <motion.div
                    key="disposition"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="h-8 flex items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Lead Disposition</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { status: "Qualified", percentage: "48.2%", count: "1,372", color: "bg-green-500" },
                        { status: "Nurturing", percentage: "32.4%", count: "922", color: "bg-blue-500" },
                        { status: "Disqualified", percentage: "14.8%", count: "421", color: "bg-red-500" },
                        { status: "Unresponsive", percentage: "4.6%", count: "131", color: "bg-gray-500" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="text-xs text-gray-400 mb-1">{item.status}</div>
                          <div className="text-2xl font-bold text-white">{item.percentage}</div>
                          <div className="text-xs text-gray-400">{item.count} leads</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Pie Chart & Lead Quality */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                      {/* Pie Chart */}
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                        <div className="text-sm font-medium text-white mb-4">Lead Status Distribution</div>
                        <div className="flex items-center justify-center">
                          <div className="relative w-32 h-32">
                            {/* Simple pie chart representation using conic gradient */}
                            <motion.div
                              className="w-full h-full rounded-full"
                              style={{
                                background: `conic-gradient(
                                  #22c55e 0% 48%,
                                  #3b82f6 48% 80%,
                                  #ef4444 80% 95%,
                                  #6b7280 95% 100%
                                )`
                              }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.6 }}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-4">
                          {[
                            { label: "Qualified", value: "48%", color: "bg-green-500" },
                            { label: "Nurturing", value: "32%", color: "bg-blue-500" },
                            { label: "Disqualified", value: "15%", color: "bg-red-500" },
                            { label: "Unresponsive", value: "5%", color: "bg-gray-500" }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                              <div className={`w-2 h-2 ${item.color} rounded-full`} />
                              <span className="text-xs text-gray-400">{item.label}</span>
                              <span className="text-xs text-white font-medium">{item.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Lead Quality Metrics */}
                      <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                        <div className="text-sm font-medium text-white mb-4">Lead Quality Score</div>
                        <div className="space-y-3">
                          {[
                            { metric: "ICP Match", score: 94, color: "text-green-500" },
                            { metric: "Engagement", score: 87, color: "text-blue-500" },
                            { metric: "Intent Signals", score: 82, color: "text-purple-500" },
                            { metric: "Budget Fit", score: 78, color: "text-indigo-500" }
                          ].map((item, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className="text-xs text-gray-400">{item.metric}</span>
                                <span className={`text-sm font-bold ${item.color}`}>{item.score}</span>
                              </div>
                              <div className="bg-slate-700 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                  className="h-full bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                                  initial={{ width: "0%" }}
                                  animate={{ width: `${item.score}%` }}
                                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                                />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Pipeline Health */}
                {currentView === "pipeline" && (
                  <motion.div
                    key="pipeline"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div className="h-8 flex items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Pipeline Health</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { metric: "Response Time", value: "< 2 hrs", status: "Excellent", color: "bg-green-500" },
                        { metric: "Stage Velocity", value: "6.8 days", status: "Excellent", color: "bg-green-500" },
                        { metric: "Data Complete", value: "96%", status: "Strong", color: "bg-green-500" },
                        { metric: "Stale Leads", value: "8%", status: "Good", color: "bg-green-500" }
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="text-xs text-gray-400 mb-1">{item.metric}</div>
                          <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                          <div className="flex items-center gap-1.5">
                            <div className={`w-1.5 h-1.5 ${item.color} rounded-full`} />
                            <span className="text-xs text-gray-400">{item.status}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Conversion Rates */}
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4">
                      <div className="text-sm font-medium text-white mb-3">Stage Conversion Rates</div>
                      <div className="space-y-2.5">
                        {[
                          { from: "Lead → Qualified", rate: 72, color: "bg-blue-500" },
                          { from: "Qualified → Proposal", rate: 58, color: "bg-purple-500" },
                          { from: "Proposal → Negotiation", rate: 68, color: "bg-indigo-500" },
                          { from: "Negotiation → Close", rate: 54, color: "bg-green-500" }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">{item.from}</span>
                              <span className="text-white font-medium">{item.rate}%</span>
                            </div>
                            <div className="bg-slate-700 h-2 rounded-full">
                              <motion.div
                                className={`${item.color} h-full rounded-full`}
                                initial={{ width: "0%" }}
                                animate={{ width: `${item.rate}%` }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Performance Summary */}
                {currentView === "performance" && (
                  <motion.div
                    key="performance"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                  >
                    <div className="h-8 flex items-center mb-4">
                      <h3 className="text-lg font-semibold text-white">Performance Summary</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Monthly Quota", value: "$3.2M", color: "bg-blue-500" },
                        { label: "Forecast", value: "$3.4M", color: "bg-green-500" },
                        { label: "Booked Revenue", value: "$2.8M", color: "bg-purple-500" },
                        { label: "At Risk", value: "$280K", color: "bg-yellow-500" }
                      ].map((metric, i) => (
                        <motion.div
                          key={i}
                          className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover-elevate"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                          <div className="text-xs text-gray-400">Target</div>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Team Performance */}
                    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 mt-4">
                      <div className="text-sm font-medium text-white mb-3">Team Performance vs Targets</div>
                      <div className="space-y-2.5">
                        {[
                          { team: "Enterprise Sales", achievement: 106, target: "$3.2M", color: "bg-green-500" },
                          { team: "Mid-Market", achievement: 98, target: "$1.8M", color: "bg-green-500" },
                          { team: "SMB", achievement: 92, target: "$950K", color: "bg-blue-500" },
                          { team: "Channel Partners", achievement: 88, target: "$720K", color: "bg-blue-500" }
                        ].map((item, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-400">{item.team}</span>
                              <span className="text-white font-medium">{item.achievement}% ({item.target})</span>
                            </div>
                            <div className="bg-slate-700 h-2 rounded-full">
                              <motion.div
                                className={`${item.color} h-full rounded-full`}
                                initial={{ width: "0%" }}
                                animate={{ width: `${Math.min(item.achievement, 100)}%` }}
                                transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}