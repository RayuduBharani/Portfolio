import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap } from "lucide-react"
import { motion } from "framer-motion"
import Link from 'next/link'

export default function Experience() {
  return (
    <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 pt-10"
        >
          <h2 className="text-xl font-bold text-primary text-center relative inline-block w-full
            after:content-[''] after:absolute after:left-1/2 after:bottom-0
            after:-translate-x-1/2 after:h-[3px] after:w-[50px] after:bg-foreground after:rounded-lg
            after:transition-all after:duration-500 hover:after:w-[100px]">
            Experience & Education
          </h2>

          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-[300px] mx-auto">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </TabsTrigger>
            </TabsList>

            <TabsContent value="experience" className="mt-6">
              <div className="space-y-6">
                {/* Freelancer Experience */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">🚀 Freelancer – Full-Stack Developer</h3>
                        <span className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">Jan 2024 – Present</span>
                      </div>
                      <ul className="list-disc list-inside space-y-3 text-muted-foreground text-sm mt-3">
                        <li>Successfully completed a YouTube Review System project for Telugu TechPod, enabling PDF export, data visualization, and real-time user feedback
                            <Link href="https://freelance-project-gules.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-primary ml-3' prefetch={true}>
                                (Live Demo)
                            </Link>
                        </li>
                        
                      </ul>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="group"
                >
                  <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-md">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">👨‍💻 Global Coding Club – Project Developer</h3>
                        <span className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">Jun 2023 – Present</span>
                      </div>
                      <p className="text-muted-foreground">Kakinada Institute of Engineering & Technology</p>
                      <ul className="list-disc list-inside space-y-3 text-muted-foreground text-sm mt-3">
                        <li>
                            As a member of the Global Coding Club (GCC), I independently led the development of a full-stack Course Management System (CMS), implementing role-based access for admins, coordinators, leads, and students to streamline course management and performance tracking within the club.
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-6">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="group"
                >
                  <div className="p-6 rounded-lg border border-border bg-card">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">🎓 B.Tech – Computer Science & Data Science</h3>
                        <span className="text-primary text-sm bg-primary/10 px-3 py-1 rounded-full">2021 – 2025</span>
                      </div>
                      <p className="text-primary/80">Kakinada Institute of Engineering and Technology (KIET)</p>
                      <ul className="list-disc list-inside space-y-3 text-muted-foreground text-sm mt-3">
                        <li>CGPA - 7.50</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
  )
}
