"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatProps {
  value: string;
  label: string;
  width: string;
}

const stats: StatProps[] = [
  { value: "500+", label: "ATTENDEES", width: "w-full" },
  { value: "100+", label: "STARTUPS IDEAS", width: "w-3/4" },
  { value: "30+", label: "EVENTS", width: "w-1/2" },
  { value: "10+", label: "STARTUPS", width: "w-1/4" }
];

const StatsSection: React.FC = () => {
  return (
    <div className="bg-black py-10 px-5 md:px-20">
      <div className="flex flex-col gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -100 }} // Start hidden and move in from the left
            animate={{ opacity: 1, x: 0 }} // Animate to visible and move to the right
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: index * 0.2, // Staggered animation effect
            }}
            className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-lg overflow-hidden"
          >
            {/* Animated Bar */}
            <motion.div
              initial={{ width: "0%" }} // Start with no width
              animate={{ width: stat.width.replace("w-", "") + "%" }} // Animate to actual width
              transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.3 }}
              className="bg-purple-700 h-12 flex items-center justify-between px-4 rounded-lg"
            >
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-white text-3xl md:text-5xl font-bold"
              >
                {stat.value}
              </motion.span>
              <span className="text-white text-sm md:text-lg ml-2">{stat.label}</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
