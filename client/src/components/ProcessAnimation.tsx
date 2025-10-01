import { motion, AnimatePresence, useAnimate } from "framer-motion";
import { useState, useEffect } from "react";
import { Phone, Users, Calendar, Building2, DollarSign, Mic, MousePointerClick, PartyPopper } from "lucide-react";

export default function ProcessAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [stageText, setStageText] = useState("Qualified Lead");
  const [dateLabel, setDateLabel] = useState("Meeting Date:");
  const [dateValue, setDateValue] = useState("Oct 15, 2025");
  const totalSteps = 5;

  
  // Keep these constants for other slides (not slide 4)
  const GREEN_START = 3.2;
  const GREEN_DURATION = 0.3;
  const GREEN_EASING = "easeOut";
  const BOUNCE_S = 2.5;
  
  // Live Call timing constants
  const SARAH_INDEX = 1;
  const DIAL_ROW_DELAY = 0.3; // Must match list item delay
  const SARAH_BG_DURATION = 2.0; // Must match Sarah's row duration
  const LIVE_CALL_DELAY = SARAH_INDEX * DIAL_ROW_DELAY + SARAH_BG_DURATION; // 2.8s - exactly when Sarah turns green
  
  // Proper duration for each step to allow animations to complete
  const stepDurations = [3500, 3800, 3500, 4500, 6000]; // [AI Dialer, Conversation, Calendar, Meeting→CRM→ClosedWon, Sales Chart]

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentStep((prev) => (prev + 1) % totalSteps);
    }, stepDurations[currentStep]);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  // Simple slide 4 state management
  useEffect(() => {
    if (currentStep === 3) {
      // Reset to initial state
      setStageText("Qualified Lead");
      setDateLabel("Meeting Date:");
      setDateValue("Oct 15, 2025");
      
      // Simple timing for state changes
      const dateTimeout = setTimeout(() => {
        setDateLabel("Close Date:");
        setDateValue("Nov 15, 2025");
      }, 1000);
      
      const stageTimeout = setTimeout(() => {
        setStageText("Closed Won");
      }, 3000);
      
      return () => {
        clearTimeout(dateTimeout);
        clearTimeout(stageTimeout);
        setStageText("Qualified Lead");
      };
    }
  }, [currentStep]);


  return (
    <div className="relative w-full max-w-5xl mx-auto h-[500px] overflow-hidden" data-testid="process-animation">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          
          {/* Step 1: Multiple AI Calls */}
          {currentStep === 0 && (
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="text-center">
                {/* Multiple Phone Calls with AI hub */}
                <div className="relative flex items-center justify-center">
                  {/* Prospect List */}
                  <div className="relative mr-12">
                    <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 w-60">
                      <div className="space-y-2">
                        {[
                          { name: "John Smith", title: "CISO, TechCorp", state: "dialing" },
                          { name: "Sarah Johnson", title: "Security Director", state: "connected" },
                          { name: "Mike Wilson", title: "IT Manager", state: "dialing" },
                          { name: "Lisa Chen", title: "VP Security", state: "dialing" }
                        ].map((prospect, index) => (
                          <motion.div
                            key={index}
                            className="relative"
                            data-testid={`prospect-card-${index}`}
                          >
                            {/* Connection line to AI hub */}
                            <motion.div
                              className="absolute right-full top-1/2 w-8 h-0.5"
                              style={{
                                background: 'hsl(220 10% 70%)',
                                transformOrigin: 'left center'
                              }}
                              initial={{ scaleX: 0 }}
                              animate={{
                                scaleX: 1,
                                background: index === 1 ? [
                                  'hsl(220 10% 70%)',
                                  'hsl(220 10% 70%)',
                                  'hsl(142 71% 60%)'
                                ] : 'hsl(220 10% 70%)'
                              }}
                              transition={{
                                scaleX: { delay: 0.5 + index * 0.2, duration: 0.4 },
                                background: { delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 }
                              }}
                            >
                              {/* Pulse indicator */}
                              <motion.div
                                className="absolute -right-1 -top-1 w-2 h-2 rounded-full"
                                animate={{
                                  backgroundColor: index === 1 ? [
                                    'hsl(25 95% 60%)',
                                    'hsl(25 95% 60%)',
                                    'hsl(142 71% 60%)'
                                  ] : 'hsl(25 95% 60%)',
                                  scale: [1, 1.4, 1],
                                  opacity: [0.6, 1, 0.6]
                                }}
                                transition={{
                                  backgroundColor: { delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 },
                                  scale: { duration: 1.8, repeat: Infinity, delay: index * 0.3 },
                                  opacity: { duration: 1.8, repeat: Infinity, delay: index * 0.3 }
                                }}
                              />
                            </motion.div>
                            
                            <motion.div
                              className="flex items-center justify-between p-2 rounded-lg transition-all duration-500"
                              style={{
                                backgroundColor: 'hsl(220 10% 98%)',
                                borderLeft: '3px solid transparent'
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                                backgroundColor: index === 1 ? [
                                  'hsl(220 10% 98%)',
                                  'hsl(220 10% 98%)', 
                                  'hsl(142 71% 95%)'
                                ] : 'hsl(220 10% 98%)',
                                borderLeftColor: index === 1 ? [
                                  'hsl(220 10% 95%)',
                                  'hsl(220 10% 95%)',
                                  'hsl(142 71% 60%)'
                                ] : 'hsl(220 10% 95%)'
                              }}
                              transition={{
                                opacity: { delay: index * 0.1 + 0.3, duration: 0.4 },
                                x: { delay: index * 0.1 + 0.3, duration: 0.4 },
                                backgroundColor: { delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 },
                                borderLeftColor: { delay: index === 1 ? GREEN_START : 0, duration: GREEN_DURATION, ease: GREEN_EASING }
                              }}
                              initial={{ opacity: 0, x: -10 }}
                            >
                              <div className="flex items-center space-x-2">
                                <motion.div
                                  className="w-6 h-6 rounded-full border-2 flex items-center justify-center"
                                  style={{
                                    borderColor: 'hsl(220 10% 70%)',
                                    backgroundColor: 'hsl(220 10% 95%)'
                                  }}
                                  animate={{
                                    borderColor: index === 1 ? [
                                      'hsl(220 10% 70%)',
                                      'hsl(220 10% 70%)',
                                      'hsl(142 71% 70%)'
                                    ] : 'hsl(220 10% 70%)',
                                    backgroundColor: index === 1 ? [
                                      'hsl(220 10% 95%)',
                                      'hsl(220 10% 95%)',
                                      'hsl(142 71% 90%)'
                                    ] : 'hsl(220 10% 95%)'
                                  }}
                                  transition={{
                                    borderColor: { delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 },
                                    backgroundColor: { delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 }
                                  }}
                                >
                                  <motion.div
                                    animate={{
                                      color: index === 1 ? [
                                        'hsl(220 10% 50%)',
                                        'hsl(220 10% 50%)',
                                        'hsl(142 71% 50%)'
                                      ] : 'hsl(220 10% 50%)'
                                    }}
                                    transition={{ delay: index === 1 ? LIVE_CALL_DELAY : 0, duration: 0.4 }}
                                  >
                                    <Users className="w-3 h-3" />
                                  </motion.div>
                                </motion.div>
                                
                                <div className="text-xs">
                                  <div className="font-medium text-gray-800 dark:text-gray-200">
                                    {prospect.name}
                                  </div>
                                  <div className="text-gray-500 dark:text-gray-400">
                                    {prospect.title}
                                  </div>
                                </div>
                              </div>
                              
                              {/* Connected indicator */}
                              {index === 1 && (
                                <motion.div
                                  className="flex items-center space-x-1 bg-green-50 dark:bg-green-900/30 px-1.5 py-0.5 rounded-full"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  transition={{ delay: LIVE_CALL_DELAY, duration: 0.3, ease: "backOut" }}
                                  data-testid="connected-indicator"
                                >
                                  {/* Live waveform */}
                                  <div className="flex items-center space-x-0.5">
                                    {[...Array(3)].map((_, i) => (
                                      <motion.div
                                        key={i}
                                        className="w-0.5 bg-green-600 dark:bg-green-400 rounded-full"
                                        style={{ height: '6px' }}
                                        animate={{
                                          scaleY: [1, 2, 0.5, 1.5, 1],
                                          opacity: [0.6, 1, 0.7, 1, 0.6]
                                        }}
                                        transition={{
                                          duration: 1,
                                          repeat: Infinity,
                                          delay: i * 0.1
                                        }}
                                      />
                                    ))}
                                  </div>
                                  <span className="text-xs font-medium text-green-600 dark:text-green-400">Live</span>
                                </motion.div>
                              )}
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* AI Dialer Center */}
                  <motion.div
                    className="relative"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 w-40 shadow-lg">
                      <div className="text-center">
                        <motion.div 
                          className="w-28 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden" 
                          style={{ 
                            background: 'linear-gradient(135deg, hsl(220 100% 50%) 0%, hsl(260 100% 60%) 100%)', 
                            color: 'white'
                          }}
                          animate={{ 
                            boxShadow: [
                              '0 0 0 0 hsla(25, 95%, 53%, 0.3)',
                              '0 0 0 20px hsla(25, 95%, 53%, 0)',
                              '0 0 0 0 hsla(25, 95%, 53%, 0)'
                            ]
                          }}
                          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                        >
                          {/* Neural network pattern background */}
                          <motion.div 
                            className="absolute inset-0 opacity-20"
                            animate={{ 
                              backgroundPosition: ['0% 0%', '100% 100%'],
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                            style={{
                              backgroundImage: `radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                              radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3) 1px, transparent 1px),
                                              radial-gradient(circle at 40% 70%, rgba(255,255,255,0.2) 1px, transparent 1px)`,
                              backgroundSize: '20px 20px, 25px 25px, 15px 15px'
                            }}
                          />
                          
                          {/* Central AI Circle - properly centered */}
                          <motion.div 
                            className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-10"
                            style={{ background: 'linear-gradient(to bottom right, hsl(25 95% 53%), hsl(30 85% 45%))' }}
                            animate={{
                              scale: [1, 1.05, 1],
                              filter: [
                                'drop-shadow(0 0 5px rgba(255,255,255,0.5))',
                                'drop-shadow(0 0 15px rgba(255,255,255,0.8))',
                                'drop-shadow(0 0 5px rgba(255,255,255,0.5))'
                              ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            data-testid="ai-hub"
                          >
                            <span className="font-bold text-lg text-white tracking-wider">AI</span>
                          </motion.div>
                          
                          {/* Animated data streams */}
                          <motion.div 
                            className="absolute top-2 right-2 w-1 h-1 rounded-full bg-cyan-300"
                            animate={{ 
                              scale: [0, 1.5, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div 
                            className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-green-300"
                            animate={{ 
                              scale: [0, 1.2, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
                          />
                          <motion.div 
                            className="absolute top-3 left-3 w-0.5 h-0.5 rounded-full bg-yellow-300"
                            animate={{ 
                              scale: [0, 1.8, 0],
                              opacity: [0, 1, 0]
                            }}
                            transition={{ duration: 2.2, repeat: Infinity, delay: 1.2 }}
                          />
                        </motion.div>
                        {/* Active call counter that transitions */}
                        <motion.div
                          className="relative h-5"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.8 }}
                        >
                          {/* Connecting text */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: [0.7, 1, 0.7, 1, 0] }}
                            transition={{ duration: LIVE_CALL_DELAY, times: [0, 0.2, 0.5, 0.7, 1] }}
                          >
                            <div className="bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full flex items-center space-x-1.5">
                              <motion.div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: 'hsl(220 100% 60%)' }}
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              />
                              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">connecting...</span>
                            </div>
                          </motion.div>
                          
                          {/* "Live Call" text with green dot */}
                          <motion.div
                            className="absolute inset-0 flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: LIVE_CALL_DELAY, duration: GREEN_DURATION, ease: GREEN_EASING }}
                          >
                            <div className="bg-green-50 dark:bg-green-900/30 px-2 py-1 rounded-full flex items-center space-x-1.5">
                              <motion.div
                                className="w-2 h-2 rounded-full"
                                style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <span className="text-xs font-medium text-green-600 dark:text-green-400">Live Call</span>
                            </div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Live Conversation */}
          {currentStep === 1 && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Clean conversation bubbles - no box */}
              <div className="space-y-3">
                {/* Live call indicator */}
                <motion.div
                  className="flex items-center justify-center mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Live Call</span>
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full ml-2"
                    style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Sales rep message */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700" style={{ backgroundColor: 'hsl(142 71% 95%)', color: 'hsl(142 71% 25%)' }}>
                    Hi Sarah! We help cybersecurity companies scale. How's sales going?
                  </div>
                </motion.div>

                {/* Prospect message */}
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.0, duration: 0.4 }}
                >
                  <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700" style={{ backgroundColor: 'hsl(220 100% 95%)', color: 'hsl(220 100% 25%)' }}>
                    Struggling to reach CISOs and security directors.
                  </div>
                </motion.div>

                {/* Sales rep response */}
                <motion.div
                  className="flex justify-end"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.8, duration: 0.4 }}
                >
                  <div className="max-w-xs px-3 py-2 rounded-lg text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700" style={{ backgroundColor: 'hsl(142 71% 95%)', color: 'hsl(142 71% 25%)' }}>
                    We 3x demo bookings. Quick demo next week?
                  </div>
                </motion.div>
              </div>
            </div>
          )}

          {/* Step 3: Calendar Booking */}
          {currentStep === 2 && (
            <div className="relative w-full h-full flex items-center justify-center">

              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              >
                {/* Calendar Interface - Blended Style */}
                <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 w-72">
                  
                  {/* Simplified Calendar Header */}
                  <motion.div 
                    className="text-center mb-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                  >
                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-300">Calendar - Oct 15, 2025</h3>
                  </motion.div>
                  
                  {/* Time Slots - Compact Layout */}
                  <div className="space-y-2">
                    {/* 10am slot - Busy */}
                    <motion.div
                      className="flex items-center h-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4, duration: 0.4 }}
                    >
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400">10am</div>
                      <div className="flex-1 rounded text-white text-xs px-2 py-1 font-medium" style={{ backgroundColor: 'hsl(142 71% 45%)' }}>
                        Busy
                      </div>
                    </motion.div>

                    {/* 11am slot - Busy */}
                    <motion.div
                      className="flex items-center h-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.4 }}
                    >
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400">11am</div>
                      <div className="flex-1 rounded text-white text-xs px-2 py-1 font-medium" style={{ backgroundColor: 'hsl(142 71% 45%)' }}>
                        Busy
                      </div>
                    </motion.div>

                    {/* 12pm slot - Available, then gets booked */}
                    <motion.div
                      className="flex items-center h-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.4 }}
                    >
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400">12pm</div>
                      <motion.div
                        className="flex-1 rounded text-white text-xs px-2 py-1 font-medium relative overflow-hidden"
                        initial={{ backgroundColor: 'hsl(0 0% 100% / 0)', border: '1px dashed #d1d5db' }}
                        animate={{ backgroundColor: 'hsl(25 95% 53%)' }}
                        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                      >
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.3 }}
                        >
                          Meeting Booked
                        </motion.span>
                      </motion.div>
                    </motion.div>

                    {/* 1pm slot - Available */}
                    <motion.div
                      className="flex items-center h-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7, duration: 0.4 }}
                    >
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400">1pm</div>
                      <div className="flex-1 border border-dashed border-gray-300 dark:border-gray-600 rounded h-full"></div>
                    </motion.div>

                    {/* 2pm slot - Available */}
                    <motion.div
                      className="flex items-center h-7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.4 }}
                    >
                      <div className="w-12 text-xs text-gray-500 dark:text-gray-400">2pm</div>
                      <div className="flex-1 border border-dashed border-gray-300 dark:border-gray-600 rounded h-full"></div>
                    </motion.div>
                  </div>

                  {/* Simple meeting confirmation */}
                  <motion.div
                    className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700 text-xs text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.4 }}
                  >
                    <div className="text-gray-600 dark:text-gray-400">
                      <span style={{ color: 'hsl(142 71% 45%)' }}>✓</span> Initial Meeting - Oct 15, 12pm
                    </div>
                  </motion.div>
                </div>

                {/* Success badge */}
                <motion.div
                  className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
                  style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                  initial={{ scale: 0, opacity: 0, rotate: -180 }}
                  animate={{ scale: 1, opacity: 1, rotate: 0 }}
                  transition={{ delay: 2.2, type: "spring", stiffness: 400, damping: 15 }}
                >
                  <span className="text-white font-bold text-sm">✓</span>
                </motion.div>
              </motion.div>
            </div>
          )}

          {/* Step 4: Salesforce Opportunity Creation → Closed Won */}
          {currentStep === 3 && (
            <div className="relative w-full h-full flex items-center justify-center mb-16">
              
              {/* Salesforce Opportunity Card */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                {/* CRM Opportunity Card */}
                <motion.div
                  className="bg-white dark:bg-gray-900 border-2 rounded-lg p-5 relative w-96"
                  initial={{ borderColor: 'hsl(25 95% 53%)' }}
                  animate={{ 
                    borderColor: stageText === 'Closed Won' ? 'hsl(142 71% 45%)' : 'hsl(25 95% 53%)',
                    boxShadow: stageText === 'Closed Won' 
                      ? [
                          '0 0 0 0 hsl(142 71% 45% / 0.4)',
                          '0 0 0 10px hsl(142 71% 45% / 0.1)', 
                          '0 0 20px 15px hsl(142 71% 45% / 0.05)',
                          '0 0 0 0 hsl(142 71% 45% / 0)'
                        ]
                      : '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    scale: stageText === 'Closed Won' ? [1, 1.02, 1] : 1,
                    y: stageText === 'Closed Won' ? [0, -5, 0] : 0
                  }}
                  transition={{ 
                    borderColor: { duration: 0.3 },
                    boxShadow: { duration: 1.5, delay: stageText === 'Closed Won' ? 0.1 : 0 },
                    scale: { delay: 0, duration: 0.6, ease: "easeOut" },
                    y: { delay: 0, duration: 0.6, ease: "easeOut" }
                  }}
                >
                  {/* Simple Salesforce Opportunity Header */}
                  <div className="text-center border-b pb-3 mb-4">
                    <h3 
                      className="text-lg font-bold"
                      style={{ 
                        color: stageText === 'Closed Won' ? 'hsl(142 71% 45%)' : 'hsl(25 95% 53%)'
                      }}
                    >
                      Sales Opportunity
                    </h3>
                  </div>

                  {/* Opportunity Fields */}
                  <div className="space-y-3 text-sm">
                    
                    {/* Contact Field */}
                    <motion.div
                      className="flex justify-between items-center p-2 rounded"
                      style={{ 
                        backgroundColor: stageText === 'Closed Won' ? 'hsl(142 71% 95%)' : 'hsl(25 95% 95%)'
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">Contact:</span>
                      </div>
                      <span className="font-medium">Sarah Johnson</span>
                    </motion.div>

                    {/* Date Field */}
                    <motion.div
                      className="flex justify-between items-center p-2 rounded"
                      style={{ 
                        backgroundColor: stageText === 'Closed Won' ? 'hsl(142 71% 95%)' : 'hsl(25 95% 95%)'
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.3 }}
                    >
                      <span className="text-gray-600 dark:text-gray-400">{dateLabel}</span>
                      <span className="font-medium">{dateValue}</span>
                    </motion.div>

                    {/* Value Field */}
                    <motion.div
                      className="flex justify-between items-center p-2 rounded"
                      style={{ 
                        backgroundColor: stageText === 'Closed Won' ? 'hsl(142 71% 95%)' : 'hsl(25 95% 95%)'
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">Value:</span>
                      </div>
                      <span className="font-medium">$50,000</span>
                    </motion.div>

                    {/* Stage Field - The key field that changes */}
                    <motion.div
                      className="flex justify-between items-center p-3 rounded cursor-pointer relative"
                      style={{ 
                        backgroundColor: stageText === 'Closed Won' ? 'hsl(142 71% 95%)' : 'hsl(25 95% 95%)'
                      }}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0
                      }}
                      transition={{ 
                        opacity: { delay: 1.1, duration: 0.3 },
                        y: { delay: 1.1, duration: 0.3 }
                      }}
                    >
                      <span className="text-gray-600 dark:text-gray-400">Stage:</span>
                      <span 
                        className={`font-medium ${stageText === 'Closed Won' ? 'font-bold' : ''}`}
                        style={{ color: stageText === 'Closed Won' ? 'hsl(142 71% 45%)' : 'inherit' }}
                      >
                        {stageText}
                      </span>


                      {/* CRM Selection Indicator */}
                      <AnimatePresence>
                        {stageText === 'Qualified Lead' && (
                          <motion.div
                            className="absolute inset-0 border-2 border-blue-500 rounded-md pointer-events-none"
                            initial={{ opacity: 0 }}
                            animate={{ 
                              opacity: [0, 0.6, 0.6, 0],
                              scale: [1, 1.02, 1.02, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              delay: 2.3,
                              times: [0, 0.2, 0.8, 1]
                            }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>

                  {/* Celebration Particles */}
                  <AnimatePresence>
                    {stageText === 'Closed Won' && (
                      <>
                        {/* Success Message */}
                        <motion.div
                          className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-green-600 dark:bg-green-500 text-white dark:text-gray-900 px-4 py-2 rounded-lg font-bold text-sm whitespace-nowrap flex items-center space-x-2"
                          data-testid="text-deal-closed"
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ 
                            opacity: [0, 1, 1, 0],
                            y: [10, -5, -5, -15],
                            scale: [0.8, 1.1, 1, 0.9]
                          }}
                          transition={{ 
                            duration: 2.5,
                            delay: 0.5,
                            times: [0, 0.3, 0.8, 1]
                          }}
                          exit={{ opacity: 0, scale: 0.8 }}
                        >
                          <PartyPopper className="w-4 h-4" />
                          <span>Deal Closed! $50,000 Won</span>
                        </motion.div>


                      </>
                    )}
                  </AnimatePresence>

                  {/* CRM Icon Badge */}
                  <motion.div
                    className="absolute -top-3 -right-3 w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ 
                      backgroundColor: stageText === 'Closed Won' ? 'hsl(142 71% 45%)' : 'hsl(25 95% 53%)'
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: stageText === 'Closed Won' ? [1, 1.3, 1.1, 1] : 1,
                      opacity: 1,
                      rotate: stageText === 'Closed Won' ? [0, 10, -10, 0] : 0
                    }}
                    transition={{ 
                      scale: { delay: 0.3, type: "spring", stiffness: 400, damping: 15 },
                      opacity: { delay: 0.3, type: "spring", stiffness: 400, damping: 15 },
                      rotate: { delay: stageText === 'Closed Won' ? 0.5 : 0, duration: 0.6 }
                    }}
                  >
                    {stageText === 'Closed Won' ? (
                      <motion.span 
                        className="text-white font-bold text-lg"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 500, damping: 15 }}
                      >
                        ✓
                      </motion.span>
                    ) : (
                      <Building2 className="w-6 h-6 text-white" />
                    )}
                  </motion.div>
                </motion.div>

              </motion.div>
            </div>
          )}

          {/* Step 5: Sales Achievement - 3 Months of Pipeline Success */}
          {currentStep === 4 && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* 3-Month pipeline performance chart */}
              <motion.div
                className="relative flex items-end space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                {/* Month 1 - October */}
                <div className="flex flex-col items-center">
                  <div className="flex items-end space-x-2">
                    {/* Target bar */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(25 95% 53%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 80 }}
                      transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    {/* Achievement bar */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 95 }}
                      transition={{ delay: 0.5, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-400">Oct</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">$190K</div>
                  </div>
                </div>

                {/* Month 2 - November */}
                <div className="flex flex-col items-center">
                  <div className="flex items-end space-x-2">
                    {/* Target bar */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(25 95% 53%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 90 }}
                      transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    {/* Achievement bar */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 110 }}
                      transition={{ delay: 0.8, duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-400">Nov</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">$220K</div>
                  </div>
                </div>

                {/* Month 3 - December (Current month with animation) */}
                <div className="flex flex-col items-center">
                  <div className="flex items-end space-x-2">
                    {/* Target bar */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(25 95% 53%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 100 }}
                      transition={{ delay: 0.9, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                    {/* Achievement bar - with growth animation */}
                    <motion.div
                      className="w-8 rounded-t-lg"
                      style={{ backgroundColor: 'hsl(142 71% 45%)' }}
                      initial={{ height: 0 }}
                      animate={{ height: 130 }}
                      transition={{ delay: 1.2, duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-bold text-gray-600 dark:text-gray-400">Dec</div>
                    <div className="text-xs text-gray-500 dark:text-gray-500">$260K</div>
                  </div>
                </div>

                {/* Legend */}
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(25 95% 53%)' }} />
                    <div className="text-xs font-bold" style={{ color: 'hsl(25 95% 53%)' }}>Target</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(142 71% 45%)' }} />
                    <div className="text-xs font-bold whitespace-nowrap" style={{ color: 'hsl(142 71% 45%)' }}>The Pipeline Group</div>
                  </div>
                </div>

              </motion.div>
            </div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* Step indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {[...Array(totalSteps)].map((_, index) => (
          <motion.div
            key={index}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: index === currentStep ? 'hsl(25 95% 53%)' : 'hsl(220 8% 60%)'
            }}
            animate={{
              scale: index === currentStep ? 1.5 : 1,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
}