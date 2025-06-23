import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle, Code, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LeetCodeProgress({ leetcodeProfileInfo }: { leetcodeProfileInfo: LeetCodeProfile }) {
  const totals = {
    all: 3586,
    easy: 882,
    medium: 1861,
    hard: 843,
  };

  const easyProgress = (leetcodeProfileInfo.solved.easy / totals.easy) * 100;
  const mediumProgress = (leetcodeProfileInfo.solved.medium / totals.medium) * 100;
  const hardProgress = (leetcodeProfileInfo.solved.hard / totals.hard) * 100;
  const totalProgress = (leetcodeProfileInfo.solved.all / totals.all) * 100;

  const circumference = 2 * Math.PI * 90; 
  const gapSize = 8;

  const totalProblems = totals.easy + totals.medium + totals.hard;
  const easyProportion = totals.easy / totalProblems;
  const mediumProportion = totals.medium / totalProblems;
  const hardProportion = totals.hard / totalProblems;

  const availableCircumference = circumference - gapSize * 3;
  const easySegmentLength = availableCircumference * easyProportion;
  const mediumSegmentLength = availableCircumference * mediumProportion;
  const hardSegmentLength = availableCircumference * hardProportion;

  const easyStroke = (easyProgress / 100) * easySegmentLength;
  const mediumStroke = (mediumProgress / 100) * mediumSegmentLength;
  const hardStroke = (hardProgress / 100) * hardSegmentLength;

  const easyStart = 0;
  const mediumStart = easySegmentLength + gapSize;
  const hardStart = easySegmentLength + mediumSegmentLength + gapSize * 2;

  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-3xl mx-auto p-2 sm:p-4 rounded-lg bg-background text-foreground"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg text-primary sm:text-xl font-bold mb-2 text-center"
      >
        LeetCode Progress
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4"
      >
        <Link
          href={`https://leetcode.com/${leetcodeProfileInfo.username}/`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-semibold hover:underline flex items-center gap-1 text-sm sm:text-base"
        >
          <Code className="w-4 h-4" />
          {leetcodeProfileInfo.username}
        </Link>
        <span className="text-muted-foreground text-xs sm:text-sm">
          Rank: <span className="font-medium">{leetcodeProfileInfo.ranking ?? '-'}</span>
        </span>
        <span className="text-muted-foreground text-xs sm:text-sm">
          Country: India
        </span>
      </motion.div>

      <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6" ref={containerRef}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative flex-shrink-0 mb-4 lg:mb-0"
        >
          {/* Circular Progress */}
          <div className="w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 relative mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgb(55, 65, 81)"
                strokeWidth="8"
                strokeDasharray={`${easySegmentLength} ${gapSize} ${mediumSegmentLength} ${gapSize} ${hardSegmentLength} ${circumference}`}
                strokeDashoffset="0"
              />
              {/* Easy progress (green) */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgb(34, 197, 94)"
                strokeWidth="8"
                strokeDasharray={`${isVisible ? easyStroke : 0} ${circumference - easyStroke}`}
                strokeDashoffset={-easyStart}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out"
              />
              {/* Medium progress (yellow) */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgb(234, 179, 8)"
                strokeWidth="8"
                strokeDasharray={`${isVisible ? mediumStroke : 0} ${circumference - mediumStroke}`}
                strokeDashoffset={-mediumStart}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out delay-300"
              />
              {/* Hard progress (red) */}
              <circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="rgb(239, 68, 68)"
                strokeWidth="8"
                strokeDasharray={`${isVisible ? hardStroke : 0} ${circumference - hardStroke}`}
                strokeDashoffset={-hardStart}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out delay-500"
              />
            </svg>
            {/* Center content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-2xl xs:text-3xl sm:text-4xl font-bold text-foreground mb-1">
                {leetcodeProfileInfo.solved.all}
              </div>
              <div className="text-gray-400 text-xs xs:text-sm sm:text-base">
                /{totals.all}
              </div>
              <div className="flex items-center gap-1 mt-1">
                <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500" />
                <span className="text-muted-foreground text-xs sm:text-sm">Solved</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto"
        >
          {/* Stats Cards */}
          {/* Easy Card */}
          <div
            className="bg-gray-800 rounded-lg p-3 sm:p-4 min-w-0 flex-1 sm:min-w-[120px] md:min-w-[160px] transform transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
              border: '1px solid rgba(34, 197, 94, 0.3)'
            }}
          >
            <div className="text-green-400 font-semibold text-xs sm:text-sm mb-1">Easy</div>
            <div className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">
              {leetcodeProfileInfo.solved.easy}/{totals.easy}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-1 mb-1 sm:h-1.5">
              <div
                className="bg-green-500 h-1 rounded-full sm:h-1.5 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${easyProgress}%` : '0%',
                  transitionDelay: '200ms'
                }}
              />
            </div>
            <div className="text-gray-400 text-xs">
              {easyProgress.toFixed(1)}%
            </div>
          </div>

          {/* Medium Card */}
          <div
            className="bg-gray-300 rounded-lg p-3 sm:p-4 min-w-0 flex-1 sm:min-w-[120px] md:min-w-[160px] transform transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.1) 0%, rgba(234, 179, 8, 0.05) 100%)',
              border: '1px solid rgba(234, 179, 8, 0.3)'
            }}
          >
            <div className="text-yellow-400 font-semibold text-xs sm:text-sm mb-1">Med.</div>
            <div className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">
              {leetcodeProfileInfo.solved.medium}/{totals.medium}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-1 mb-1 sm:h-1.5">
              <div
                className="bg-yellow-500 h-1 rounded-full sm:h-1.5 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${mediumProgress}%` : '0%',
                  transitionDelay: '400ms'
                }}
              />
            </div>
            <div className="text-gray-400 text-xs">
              {mediumProgress.toFixed(1)}%
            </div>
          </div>

          {/* Hard Card */}
          <div
            className="bg-gray-800 rounded-lg p-3 sm:p-4 min-w-0 flex-1 sm:min-w-[120px] md:min-w-[160px] transform transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(239, 68, 68, 0.05) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)'
            }}
          >
            <div className="text-red-400 font-semibold text-xs sm:text-sm mb-1">Hard</div>
            <div className="text-base sm:text-lg md:text-xl font-bold text-foreground mb-1">
              {leetcodeProfileInfo.solved.hard}/{totals.hard}
            </div>
            <div className="w-full bg-gray-300 rounded-full h-1 mb-1 sm:h-1.5">
              <div
                className="bg-red-500 h-1 rounded-full sm:h-1.5 transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${hardProgress}%` : '0%',
                  transitionDelay: '600ms'
                }}
              />
            </div>
            <div className="text-gray-400 text-xs">
              {hardProgress.toFixed(1)}%
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mt-4 sm:mt-6 text-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-muted rounded-lg border border-border">
          <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
          <span className="text-xs sm:text-sm text-muted-foreground">
            {totalProgress.toFixed(1)}% solved
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}