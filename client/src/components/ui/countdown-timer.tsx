import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  targetDate, 
  className = '' 
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsEventStarted(false);
      } else {
        setIsEventStarted(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days, color: 'from-blue-500 to-blue-600' },
    { label: 'Hours', value: timeLeft.hours, color: 'from-green-500 to-green-600' },
    { label: 'Minutes', value: timeLeft.minutes, color: 'from-yellow-500 to-yellow-600' },
    { label: 'Seconds', value: timeLeft.seconds, color: 'from-red-500 to-red-600' }
  ];

  if (isEventStarted) {
    return (
      <motion.div
        className={`text-center ${className}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-2xl"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(34, 197, 94, 0.5)",
              "0 0 40px rgba(34, 197, 94, 0.7)",
              "0 0 20px rgba(34, 197, 94, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <h3 className="text-2xl md:text-3xl font-bold">🎉 Event is Live! 🎉</h3>
          <p className="text-lg mt-2">Innovation Week & Entrepreneurship Week</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <motion.div
        className="flex justify-center space-x-2 md:space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <motion.div
              className={`bg-gradient-to-br ${unit.color} text-white rounded-2xl p-3 md:p-4 shadow-xl min-w-[70px] md:min-w-[90px]`}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)"
              }}
              animate={{
                boxShadow: [
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                ]
              }}
              transition={{ 
                boxShadow: { duration: 2, repeat: Infinity },
                scale: { type: "spring", stiffness: 300 }
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={unit.value}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {unit.value.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              
              <div className="text-xs md:text-sm font-medium uppercase tracking-wider mt-1">
                {unit.label}
              </div>
              
              {/* Decorative particles */}
              <motion.div
                className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-70"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.p
        className="text-white/90 text-sm md:text-base mt-4 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Until Innovation Week & Entrepreneurship Week begins!
      </motion.p>
    </div>
  );
};