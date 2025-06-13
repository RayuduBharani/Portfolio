"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SkillsPage() {
  const tecnologies = [
    {
      name: "HTML",
      icon: "/html.png"
    },
    {
      name: "CSS",
      icon: "/css.png"
    },
    {
      name: "Tailwind",
      icon: "/tailwind.png"
    },
    {
      name: "JavaScript",
      icon: "/js.png"
    },
    {
      name: "TypeScript",
      icon: "/TS.png"
    },
    {
      name: "Node.js",
      icon: "/node.png"
    },
    {
      name: "MongoDB",
      icon: "/mongodb.png"
    },
    {
      name: "React.js",
      icon: "/react.png"
    },
    {
      name: "Next.js",
      icon: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000"
    },
    {
      name: "Express.js",
      icon: "/express.png"
    },
    {
      name: "MySQL",
      icon: "/mySQL.png"
    },
    {
      name: "Python",
      icon: "/python.png"
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

  const skillItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-14 px-2'>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='flex flex-col items-center justify-center'
      >
        <p className="text-xl text-primary font-bold text-center relative inline-block
          after:content-[''] after:absolute after:left-1/2 after:bottom-0
          after:-translate-x-1/2 after:h-[3px] after:w-[65%] after:bg-foreground after:rounded-lg
          after:transition-all after:duration-500 hover:after:w-full">Skills &amp; Technologies</p>
        <p className='mt-1 text-sm text-center'>Showcasing My Expertise And Technical Proficiencies</p>
      </motion.div>

      <div className='w-full h flex items-center justify-center'>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='w-full h-auto max-w-4xl flex items-center justify-center gap-5 flex-wrap'
        >
          {tecnologies.map((tech, id) => (
            <motion.div 
              key={id} 
              variants={skillItem}
              className='min-w-[10rem] h-[3.5rem] border rounded-lg flex shadow-sm py-2 px-3 items-center flex-1 justify-center gap-3 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out hover:bg-primary/10'
            >
              <div className='w-[2.3rem] rounded-lg overflow-hidden relative'>
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={37}
                  height={37}
                  className='w-full h-full object-fill'
                  unoptimized={tech.icon.startsWith('http')}
                />
              </div>
              <p className='font-semibold'>{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
