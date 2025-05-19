"use client"
import { motion } from "framer-motion"


export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-10">
      <div className="space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center space-y-2"
        >
          <h1 className="text-xl font-bold text-primary 
          relative inline-block
          after:content-[''] after:absolute after:left-1/2 after:bottom-0
          after:-translate-x-1/2 after:h-[3px] after:w-[50%] after:bg-foreground after:rounded-lg
          after:transition-all after:duration-500 hover:after:w-full">About Me</h1>
          <p className="text-muted-foreground text-md">
            Turning Ideas into Digital Reality
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 h-fit"
          >
            <div className="rounded-full bg-muted overflow-hidden shadow-lg mx-auto w-[22rem] h-[22rem]">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5">
                <img src="https://media.licdn.com/dms/image/v2/D5635AQF0gv8e5YVacA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1736394263992?e=1748268000&v=beta&t=OJ11PpAKTE5Naps2z1wkjoFzqz-0QzT_vH1IkCkOpyA" alt="" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <div className="prose prose-gray dark:prose-invert">
              <h2 className="text-xl font-semibold mb-4 max-sm:text-center max-md:text-center">👋 Hi, I&apos;m Bharani Rayudu</h2>
              <p className="text-md text-muted-foreground max-sm:text-center max-md:text-center">
                A passionate Full-Stack Developer from Andhra Pradesh, currently pursuing B.Tech
                in Computer Science & Data Science at KIET. I specialize in building modern,
                scalable web applications that make a difference.
              </p>
              <p className="text-md text-muted-foreground mt-4 max-sm:text-center max-md:text-center">
                My journey began in my first year of college, inspired by my friends like Ashok and
                Guru Brahmam. From simple pages to full-stack applications, every project has been
                a stepping stone in my growth.
              </p>
            </div>

            <div className="border-l-4 border-primary/50 pl-4">
              <p className="text-lg italic font-semibold text-muted-foreground">
                &ldquo;Success doesn’t come from where you start — it comes from never giving up...&rdquo;
              </p>
              <p className="text-sm text-primary mt-2">– Bharani Rayudu</p>
            </div>
          </motion.div>
        </div>
        <p className="text-center text-sm text-muted-foreground">Working on improving DSA skills, solving LeetCode problems, and preparing for
          Software Engineer roles at product-based companies. When not coding, you&apos;ll
          find me gaming or watching coding tutorials on YouTube 😄</p>
      </div>
    </div>
  )
}