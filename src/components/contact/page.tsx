"use client"

import React from 'react'
import Github from '../icons/Github'
import Instagram from '../icons/Instagram'
import LinkedIn from '../icons/LinkedIn'
import Whatsapp from '../icons/Whatsapp'
import X from '../icons/X'
import { Button } from '../ui/button'
import { motion } from "framer-motion"
import Link from 'next/link'

export default function ContactPage() {
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
      href: "https://www.instagram.com/rayudu_bharani/"
    },
    {
      name: "WhatsApp",
      icon: <Whatsapp />,
      href: "https://wa.me/7075923575"
    }
  ]

  // Animation variants for container
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
    <div className="flex flex-col items-center justify-center p-4">
      {/* Header animation */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center space-y-4"
      >
        <h1 className="text-xl text-primary font-bold mb-2 relative inline-block
          after:content-[''] after:absolute after:left-1/2 after:bottom-0
          after:-translate-x-1/2 after:h-[3px] after:w-[50%] after:bg-foreground after:rounded-lg
          after:transition-all after:duration-500 hover:after:w-full">Let&apos;s Connect</h1>
        <p className="text-muted-foreground text-center mb-7">
          Feel free to reach out through any of these platforms. I&apos;ll get back to you as soon as possible.
        </p>
      </motion.div>
      
      {/* Social links with staggered animation */}
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
    </div>
  )
}
