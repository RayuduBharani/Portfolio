'use client';

import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import LinkedIn from '../icons/LinkedIn'
import Github from '../icons/Github'
import X from '../icons/X'
import Instagram from '../icons/Instagram'
import Whatsapp from '../icons/Whatsapp'
import { motion } from "framer-motion"
import { ContainerTextFlip } from '../ui/container-text-flip';

export default function HomePage() {
  const socials = [
    {
      name: "LinkedIn",
      icon: <LinkedIn />,
      href: "https://www.linkedin.com/in/rayudu-bharani/"
    },
    {
      name: "GitHub",
      icon: <Github />,
      href: "https://www.github.com/RayuduBharani/"
    },
    {
      name: "X",
      icon: <X />,
      href: "https://www.x.com/rayudu_bharani/"
    },
    {
      name: "Instagram",
      icon: <Instagram />,
      href: "https://www.instagram.com/bharani_rayudu/"
    },
    {
      name: "WhatsApp",
      icon: <Whatsapp />,
      href: "https://wa.me/7075923575"
    }
  ]
    const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-5 max-sm:px-0.5'>
      <Link href="#contact">
        <ContainerTextFlip
          animationDuration={700}
          className='cursor-pointer relative bg-primary/10 text-black dark:text-white dark:bg-primary/10 border-[0.1px] dark:border-yellow-600 shadow-sm '
          words={["open to work", "available for hire", "let's connect", "let's collaborate", "for freelance work"]}
          interval={3000}
        /></Link>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='text-4xl from-primary/100 to-muted bg-gradient-to-r bg-clip-text text-transparent font-bold max-w-3xl text-center max-sm:text-2xl'>
        Hi, I&apos;m Bharani — I don&apos;t just write code I craft digital experiences.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        viewport={{ once: true }}
        className='max-w-xl text-center text-muted-foreground max-sm:max-w-md max-sm:text-sm'>
        <span className='text-foreground font-semibold'>Full-stack developer</span> focused on <span className='text-foreground font-semibold'>MERN</span> Stack, <span className='text-foreground font-semibold'>Next.js</span>, TypeScript, and scalable systems &amp; <span className='text-foreground font-semibold'>Problem Solver</span>.
      </motion.p>

   <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-5"
      >
        {socials.map((social, id) => (
          <motion.div key={id} variants={item}>
            <Button
              asChild
              size="icon"
              variant="outline"
              className="transition-all duration-200 hover:scale-110 hover:border-primary hover:bg-primary/10 dark:hover:bg-primary/10 dark:hover:border-primary"
            >
              <Link href={social.href} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                {social.icon}
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "anticipate" }}
        viewport={{ once: true }}
        className='flex gap-5 md:hidden'>
        <Button asChild variant="default">
          <Link href="https://drive.google.com/file/d/1SlEIWPh4ayZFgCoaVHm45jigzBo2YaOi/view?usp=sharing">Resume</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="#projects">My Work</Link>
        </Button>
      </motion.div>
    </div>
  )
}
