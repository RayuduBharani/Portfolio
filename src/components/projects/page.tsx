import React from 'react'
import { Button } from '../ui/button'
import Github from '../icons/Github'
import Image from 'next/image'

const projects = [
  {
    title: "PrepFlow",
    description: "Smart preparation platform with AI-powered learning tools",
    tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
    image: "/Prepflow.png",
    github: "https://github.com/yourusername/prepflow",
    demo: "https://prepflow.demo"
  },
  {
    title: "Course Management System",
    description: "Comprehensive course management system for educators",
    tech: ["React", "MongoDB" , "Express.js" , "Node.js"],
    image: "/Prepflow.png",
    github: "https://github.com/yourusername/rentbase",
    demo: "https://rentbase.demo"
  },
  {
    title: "Songs downloader",
    description: "A simple and efficient songs downloader",
    tech: ["React", "Node.js" , "Express.js", "Yt-search npm"],
    image: "/Prepflow.png",
    github: "https://github.com/yourusername/windowapp",
    demo: "https://windowapp.demo"
  },
   {
    title: "Youtube review website",
    description: "It is Freelance project for Telugu techpod Youtube channel",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/Prepflow.png",
    github: "https://github.com/yourusername/prepflow",
    demo: "https://prepflow.demo"
  },
  {
    title: "Simple Blog website",
    description: "A simple blog website with a clean design",
    tech: ["React.js", "Node.js", "MongoDB"],
    image: "/Prepflow.png",
    github: "https://github.com/yourusername/rentbase",
    demo: "https://rentbase.demo"
  }
]

export default function ProjectsPage() {
  return (
    <section className='w-full min-h-screen py-8 px-2 pt-24'>
      <div className='max-w-4xl mx-auto space-y-8'>
        <div className='space-y-2'>
          <h1 className='text-[1.3rem] font-bold text-primary text-center'>Projects</h1>
          <p className='text-md text-muted-foreground text-center max-w-2xl mx-auto'>
            Here are some of my featured projects that showcase my skills and experience
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center'>
          {projects.map((project, index) => (
            <div 
              key={index}
              className='group rounded-xl border bg-background overflow-hidden'
            >
              <div className='w-full h-48 overflow-hidden bg-muted'>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className='w-full h-full object-cover'
                  priority={index === 0}
                />
              </div>

              <div className='p-4 space-y-3'>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
