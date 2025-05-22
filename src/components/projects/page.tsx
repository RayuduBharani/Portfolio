"use client"
import React from 'react'
import { Button } from '../ui/button'
import Github from '../icons/Github'
import Image from 'next/image'
import { motion } from "framer-motion"

const projects = [
  {
    title: "PrepFlow",
    description: "Smart preparation platform with AI-powered learning tools",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "/Prepflow.png",
    github: "https://github.com/RayuduBharani/prepflow",
    demo: "https://prepflow.vercel.app"
  },
  {
    title: "Songs downloader",
    description: "A simple and efficient songs downloader",
    tech: ["React", "Node.js" , "Express.js", "Yt-search npm"],
    image: "/ytsongs.png",
    github: "https://github.com/RayuduBharani/songs-download",
    demo: "https://songs-download.vercel.app/"
  },
  {
    title: "Course Management System",
    description: "Comprehensive course management system for educators",
    tech: ["React", "MongoDB" , "Express.js" , "Node.js"],
    image: "/CMS.png",
    github: "https://github.com/RayuduBharani/Course_management_system",
    demo: "https://cms-bharani.vercel.app"
  },
   {
    title: "Youtube review website",
    description: "It is Freelance project for Telugu techpod Youtube channel",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/ytReview.png",
    github: "https://github.com/RayuduBharani/YT_Reviews",
    demo: "https://telugu-techpad.vercel.app/"
  },
  {
    title: "Simple Blog website",
    description: "A simple blog website with a clean design",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: "/blog.png",
    github: "https://github.com/RayuduBharani/Next_Blog",
    demo: "https://bharani-blog.vercel.app/"
  },
  {
    title : "HireQuest" ,
    description : "A platform to connect job seekers and employers" ,
    tech : ["Next.js" , "TypeScript" , "Tailwind CSS" , "MongoDB"],
    image : "/Hirequest.png" ,
    github : "https://github.com/RayuduBharani/HireQuest_Portel",
    demo : "https://hirequest-six.vercel.app/"
  }
]

export default function ProjectsPage() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className='w-full min-h-screen py-8 max-sm:px-4 pt-24'>
      <div className='max-w-4xl mx-auto space-y-8'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 , delay: 0.5 }}
          className='space-y-2 flex flex-col items-center'
        >
          <p className='text-[1.3rem] font-bold text-primary text-center relative inline-block
          after:content-[""] after:absolute after:left-1/2 after:bottom-0
          after:-translate-x-1/2 after:h-[3px] after:w-[50%] after:bg-foreground after:rounded-lg
          after:transition-all after:duration-500 hover:after:w-full'>Projects</p>
          <p className='text-md text-muted-foreground text-center max-w-2xl mx-auto'>
            Here are some of my featured projects that showcase my skills and experience
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={item}
              className='group rounded-xl border bg-background overflow-hidden w-full'
            >
              <div className='w-full h-48 overflow-hidden bg-muted border-2'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className='w-full h-full object-cover'
                  priority={index === 0}
                />
              </div>

              <div className='p-4 space-y-2'>
                <h3 className='text-lg font-semibold text-foreground line-clamp-1'>{project.title}</h3>
                <p className='text-muted-foreground text-sm line-clamp-2'>{project.description}</p>
                
                <div className='flex flex-wrap gap-2'>
                  {project.tech.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className='px-2.5 py-0.5 bg-primary/10 text-primary rounded-full text-xs font-medium'
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className='flex gap-3 pt-2'>
                  <Button asChild variant="outline" size="sm" className='gap-2'>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
