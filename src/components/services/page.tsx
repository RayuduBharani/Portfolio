"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function ServicesPage() {
    const services = [
        {
            title: "Full-Stack Web Development",
            description: "Building scalable and responsive web applications using Next.js, React, Node.js, and MongoDB or PostgreSQL — from frontend design to backend APIs and databases.",
            icon: "🌐"
        },
        {
            title: "Frontend Development",
            description: "Specializing in building modern UIs using Next.js , React.js and Tailwind CSS. Focusing on clean design, performance, and responsiveness across devices.",
            icon: "⚛️"
        },
        {
            title: "Backend/API Development",
            description: "Building RESTful APIs and integrating authentication, authorization, and databases using Node.js, Express, Prisma, and MongoDB/PostgreSQL.",
            icon: "🔧"
        },
        {
            title: "Freelance Website Projects",
            description: "Creating custom personal, business, or portfolio websites that match your brand and work across all devices.",
            icon: "💼"
        },
        {
            title: "Technical Consultation & Debugging",
            description: "Helping you plan, debug, or set up your tech stack when you're stuck on a bug or don't know how to start your project.",
            icon: "🔍"
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
        <div className="container mx-auto py-16 px-4 max-w-4xl">
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 , delay: 0.2 }}
                className="text-center mb-12"
            >
                <h1 className="text-xl text-primary font-bold mb-2 relative inline-block
                    after:content-[''] after:absolute after:left-1/2 after:bottom-0
                    after:-translate-x-1/2 after:h-[3px] after:w-[50%] after:bg-foreground after:rounded-lg
                    after:transition-all after:duration-500 hover:after:w-full">What I Can Do For You</h1>
                <p className="text-muted-foreground mx-auto">
                    Delivering high-quality web development solutions tailored to your needs
                </p>
            </motion.div>
            <motion.div 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                    >
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                            <CardHeader>
                                <div className="text-4xl mb-4">{service.icon}</div>
                                <CardTitle>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}