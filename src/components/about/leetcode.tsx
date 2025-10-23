import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function LeetCodeProgress({ 
  leetcodeProfileInfo,
  recentSubmissions 
}: { 
  leetcodeProfileInfo: LeetCodeProfile,
  recentSubmissions: Array<{
    title: string;
    titleSlug: string;
    time: string;
    status: string;
    language: string;
  }>
}) {
  // Use dynamic data from leetcodeProfileInfo
  const totals = leetcodeProfileInfo.totals;
  const submissions = leetcodeProfileInfo.submissions;
  const successRate = leetcodeProfileInfo.successRate;
  const percentageRank = leetcodeProfileInfo.percentageRank;

  const easyProgress = (leetcodeProfileInfo.solved.easy / totals.easy) * 100;
  const mediumProgress = (leetcodeProfileInfo.solved.medium / totals.medium) * 100;
  const hardProgress = (leetcodeProfileInfo.solved.hard / totals.hard) * 100;

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

    const currentRef = containerRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const circumference = 2 * Math.PI * 45;
  const totalSolved = leetcodeProfileInfo.solved.all;

  // Calculate segments for three-colored circle
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="w-full max-w-7xl mx-auto p-4 rounded-xl"
      ref={containerRef}
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-2 mb-6"
      >
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z" className="fill-primary"/>
        </svg>
        <h2 className="text-xl font-bold text-foreground">LeetCode Statistics</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Left Column - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Profile Link */}
          <Link
            href={`https://leetcode.com/${leetcodeProfileInfo.username}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors text-sm"
          >
            <code className="text-xs text-foreground">&lt;/&gt;</code>
            <span className="text-foreground font-medium">Profile</span>
            <ExternalLink className="w-3 h-3 text-muted-foreground" />
          </Link>

          {/* Circular Progress */}
          <div className="relative w-32 h-32 mx-auto">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              {/* Background circles for segments (gray) */}
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="rgb(55, 65, 81)"
                strokeWidth="5"
                strokeDasharray={`${easySegmentLength} ${gapSize} ${mediumSegmentLength} ${gapSize} ${hardSegmentLength} ${circumference}`}
                strokeDashoffset="0"
              />
              {/* Easy progress (green) */}
              <circle
                cx="50"
                cy="50"
                r="45"
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
                cx="50"
                cy="50"
                r="45"
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
                cx="50"
                cy="50"
                r="45"
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
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground mb-1">{percentageRank}%</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-2">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">{totalSolved}</div>
              <div className="text-xs text-muted-foreground">of {totals.all} solved</div>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Submissions</span>
              <span className="font-semibold text-foreground">{submissions}</span>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-muted-foreground">Success Rate</span>
              <span className="font-semibold text-foreground">{successRate}%</span>
            </div>
          </div>
        </motion.div>

        {/* Middle Column - Difficulty Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-3"
        >
          {/* Easy Card */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-lg p-4 border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-600 dark:text-green-400 font-semibold text-sm">Easy</span>
              <span className="ml-auto text-2xl font-bold text-foreground">{leetcodeProfileInfo.solved.easy}</span>
              <span className="text-lg text-muted-foreground">/{totals.easy}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mb-2">
              <div
                className="bg-green-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${easyProgress}%` : '0%',
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{easyProgress.toFixed(1)}% solved</span>
              <span>{((leetcodeProfileInfo.solved.easy / totalSolved) * 100).toFixed(1)}% accepted</span>
            </div>
          </motion.div>

          {/* Medium Card */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg p-4 border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <span className="text-yellow-600 dark:text-yellow-400 font-semibold text-sm">Medium</span>
              <span className="ml-auto text-2xl font-bold text-foreground">{leetcodeProfileInfo.solved.medium}</span>
              <span className="text-lg text-muted-foreground">/{totals.medium}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mb-2">
              <div
                className="bg-yellow-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${mediumProgress}%` : '0%',
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{mediumProgress.toFixed(1)}% solved</span>
              <span>{((leetcodeProfileInfo.solved.medium / totalSolved) * 100).toFixed(1)}% accepted</span>
            </div>
          </motion.div>

          {/* Hard Card */}
          <motion.div
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="rounded-lg p-4 border bg-card hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-red-600 dark:text-red-400 font-semibold text-sm">Hard</span>
              <span className="ml-auto text-2xl font-bold text-foreground">{leetcodeProfileInfo.solved.hard}</span>
              <span className="text-lg text-muted-foreground">/{totals.hard}</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 mb-2">
              <div
                className="bg-red-500 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: isVisible ? `${hardProgress}%` : '0%',
                }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{hardProgress.toFixed(1)}% solved</span>
              <span>{hardProgress.toFixed(1)}% accepted</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Recent Submissions */}
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-lg p-4 border bg-card md:col-span-2 lg:col-span-1"
        >
          <h3 className="text-base font-bold text-foreground mb-1">
            Recent Submissions <span className="text-muted-foreground text-xs font-normal">(10 latest)</span>
          </h3>
          
          <ScrollArea className="h-[260px] mt-4 pr-4">
            <div className="space-y-3">
              {recentSubmissions.length > 0 ? recentSubmissions.map((submission, index) => {
                const isAccepted = submission.status === 'Accepted';
                const statusColor = isAccepted 
                  ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' 
                  : 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20';
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    className="border-l-2 border-border pl-3 py-1 bg-secondary/50 rounded hover:bg-accent/50 transition-colors cursor-pointer"
                  >
                    <div className="text-sm font-medium text-foreground mb-1.5 line-clamp-2">{submission.title}</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`px-2 py-0.5 rounded text-xs border ${statusColor}`}>
                        {submission.status}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                        {submission.language}
                      </span>
                    </div>
                    <div className="text-muted-foreground text-xs mt-1.5">{submission.time}</div>
                  </motion.div>
                );
              }) : (
                <div className="text-center text-muted-foreground text-sm py-4">
                  No recent submissions found
                </div>
              )}
            </div>
          </ScrollArea>
        </motion.div>
      </div>
    </motion.div>
  );
}