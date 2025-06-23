import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Briefcase, GraduationCap, ExternalLink, Calendar, MapPin } from "lucide-react"
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-4xl mx-auto px-2 sm:px-4 py-8 sm:py-12"
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 relative text-primary">
          Experience & Education
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-black rounded-full"></div>
        </h2>
        <p className="text-muted-foreground max-w-xl sm:max-w-2xl mx-auto text-xs sm:text-base">
          My professional journey and academic background in software development and data science
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-xs sm:max-w-md mx-auto mb-6 sm:mb-8 h-10 sm:h-12 bg-muted/50 p-1">
            <TabsTrigger 
              value="experience" 
              className="flex items-center gap-2 h-8 sm:h-10 text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <Briefcase className="w-4 h-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger 
              value="education" 
              className="flex items-center gap-2 h-8 sm:h-10 text-xs sm:text-sm font-medium data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm transition-all"
            >
              <GraduationCap className="w-4 h-4" />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="experience" className="mt-0">
            <div className="space-y-4 sm:space-y-6">
              {/* Freelancer Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute -left-3 sm:-left-4 top-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-4 sm:p-6 rounded-xl border border-border bg-card hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-base sm:text-lg">🚀</span>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            Freelancer – Full-Stack Developer
                          </h3>
                          <div className="flex items-center gap-1 sm:gap-2 text-muted-foreground text-xs sm:text-sm mt-1">
                            <Calendar className="w-3 h-3" />
                            <span>Jan 2024 – Present</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium mt-2 sm:mt-0">
                        Current
                      </div>
                    </div>
                    <div className="pl-8 sm:pl-13 space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          Successfully completed a YouTube Review System project for Telugu TechPod, enabling PDF export, data visualization, and real-time user feedback
                          <a 
                            href="https://freelance-project-gules.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="inline-flex items-center gap-1 text-primary hover:text-primary/80 ml-2 font-medium transition-colors"
                          >
                            Live Demo
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Global Coding Club Experience */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="group relative"
              >
                <div className="absolute -left-3 sm:-left-4 top-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-4 sm:p-6 rounded-xl border border-border bg-card hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-base sm:text-lg">👨‍💻</span>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            Global Coding Club – Project Developer
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground text-xs sm:text-sm mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>Jun 2023 – Present</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>KIET</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-primary/10 text-primary px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium mt-2 sm:mt-0">
                        Current
                      </div>
                    </div>
                    <div className="pl-8 sm:pl-13 space-y-2 sm:space-y-3">
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                          As a member of the Global Coding Club (GCC), I independently led the development of a full-stack Course Management System (CMS), implementing role-based access for admins, coordinators, leads, and students to streamline course management and performance tracking within the club.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>

          <TabsContent value="education" className="mt-0">
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group relative"
              >
                <div className="absolute -left-3 sm:-left-4 top-6 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="p-4 sm:p-6 rounded-xl border border-border bg-card hover:bg-card/80 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-2 sm:gap-3">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <span className="text-base sm:text-lg">🎓</span>
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            B.Tech – Computer Science & Data Science
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-muted-foreground text-xs sm:text-sm mt-1">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              <span>2021 – 2025</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              <span>KIET</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-secondary text-secondary-foreground px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-medium mt-2 sm:mt-0">
                        Final Year
                      </div>
                    </div>
                    <div className="pl-8 sm:pl-13 space-y-2 sm:space-y-3">
                      <p className="text-primary/80 font-medium text-xs sm:text-sm">
                        Kakinada Institute of Engineering and Technology
                      </p>
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                        <div className="text-muted-foreground text-xs sm:text-sm">
                          <span className="font-medium">CGPA:</span> 7.50/10.0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </motion.div>
  )
}