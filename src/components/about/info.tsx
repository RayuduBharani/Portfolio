"use client"

import React from 'react'
import Image from "next/image"
import LeetcodePage from './leetcode'
import { motion } from "framer-motion"

export default function AboutInfo({ 
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
  return (
    <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 lg:space-y-16 py-4 px-4 sm:px-6 md:py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='space-y-2 flex flex-col items-center'
      >
        <p className='text-lg sm:text-xl md:text-[1.3rem] font-bold text-primary text-center relative inline-block
          after:content-[""] after:absolute after:left-1/2 after:bottom-0
          after:-translate-x-1/2 after:h-[3px] after:w-[50%] after:bg-foreground after:rounded-lg
          after:transition-all after:duration-500 hover:after:w-full'>About Me</p>        </motion.div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-lg overflow-hidden flex-shrink-0"
        >
          <Image
            width={256}
            height={256}
            src="/img.jpeg"
            alt="Bharani Rayudu"
            className="w-full h-full rounded-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-full"
        >
          <h2 className="text-lg sm:text-xl font-semibold mb-3 md:mb-4 text-center md:text-left">Hello, I&apos;m Bharani Rayudu</h2>
          <div className="space-y-3 md:space-y-4 text-muted-foreground text-sm sm:text-base text-center md:text-left">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Full-Stack Web Developer from Andhra Pradesh with a passion for building scalable and efficient web applications. Currently pursuing B.Tech in Computer Science & Data Science at KIET.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              I focus on creating solutions that make a real difference, constantly learning and improving my craft through diverse projects—from responsive websites to complex full-stack applications.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-xs sm:text-sm italic opacity-80 pt-2"
            >
              &quot;Code with passion, learn with purpose, and build a future that inspires.&quot; - Bharani
            </motion.p>
          </div>
        </motion.div>
      </div>


      {/* LeetCode Section */}
      <LeetcodePage leetcodeProfileInfo={leetcodeProfileInfo} recentSubmissions={recentSubmissions} />
    </div>
  )
}
