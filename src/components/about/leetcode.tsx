import React, { useEffect, useRef, useState } from 'react'
import LeetCodeIcon from '../icons/LeetCode'
import { motion } from 'framer-motion'

export default function LeetcodePage({ leetcodeProfileInfo }: {
    leetcodeProfileInfo: {
        solved: {
            all: number;
            easy: number;
            medium: number;
            hard: number;
        };
    }
}) {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const hardStroke = (leetcodeProfileInfo.solved.hard / 842) * 283;
    const mediumStroke = (leetcodeProfileInfo.solved.medium / 1858) * 283;
    const easyStroke = (leetcodeProfileInfo.solved.easy / 880) * 283;    
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(false);
                    setTimeout(() => setIsVisible(true), 50);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = containerRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className='flex items-center gap-2 w-full justify-center pt-10 pb-3'
            >
                <LeetCodeIcon className="w-4 h-4" />
                <h3 className='text-md font-bold text-primary'>LeetCode Stats</h3>
            </motion.div>
            <div className='w-full flex flex-col md:flex-row py-4 justify-center items-center gap-8' ref={containerRef}>
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-[250px] h-[250px] relative bg-muted/60 rounded-2xl p-6"
                >
                    <div className="w-full h-full relative">
                        <svg className="w-full h-full absolute top-0 left-0 rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                strokeWidth="4"
                                stroke="#3535"
                                fill="none"
                                className="transform origin-center"
                            />
                        </svg>

                        <svg className="w-full h-full absolute top-0 left-0 rotate-[-90deg]" viewBox="0 0 100 100">
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                strokeWidth="4"
                                stroke="#FF375F"
                                fill="none"
                                strokeDasharray={`${hardStroke} 283`}
                                className={`transform origin-center ${isVisible ? 'transition-all duration-1000 ease-out' : ''}`}
                                strokeLinecap="round"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                strokeWidth="4"
                                stroke="#FFA116"
                                fill="none"
                                strokeDasharray={`${mediumStroke} 283`}
                                strokeDashoffset={-hardStroke}
                                className={`transform origin-center ${isVisible ? 'transition-all duration-1000 ease-out delay-[200ms]' : ''}`}
                                strokeLinecap="round"
                            />
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                strokeWidth="4"
                                stroke="#00B8A3"
                                fill="none"
                                strokeDasharray={`${easyStroke} 283`}
                                strokeDashoffset={-(hardStroke + mediumStroke)}
                                className={`transform origin-center ${isVisible ? 'transition-all duration-1000 ease-out delay-[400ms]' : ''}`}
                                strokeLinecap="round"
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-lg font-semibold text-primary">{leetcodeProfileInfo.solved.all} <span className='text-foreground'>/3580</span> </div>
                            <div className="flex items-center gap-1 text-foreground mt-1 text-sm">
                                <svg viewBox="0 0 24 24" className="w-4 h-4  fill-current">
                                    <path d="M9.688 15.898l-3.98-3.98a1 1 0 00-1.415 1.414l4.687 4.688a1 1 0 001.415 0l9.896-9.897a1 1 0 00-1.414-1.414l-9.189 9.189z" />
                                </svg>
                                Solved
                            </div>
                            <div className="text-sm text-[#808080] mt-1">
                                <span className="">{leetcodeProfileInfo.solved.medium + leetcodeProfileInfo.solved.hard}</span> Attempting
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex gap-5 flex-col max-sm:flex-row px-10 h-full"
                >
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="sm:px-12 sm:py-3.5 p-3 rounded-lg text-center bg-muted/60"
                    >
                        <div className="text-[#00B8A3] text-sm font-bold">Easy</div>
                        <div className="text-foreground text-sm font-semibold">{leetcodeProfileInfo.solved.easy}/880</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="sm:px-12 sm:py-3.5 p-3 rounded-lg text-center bg-muted/60"
                    >
                        <div className="text-[#FFA116] text-sm font-bold">Med.</div>
                        <div className="text-foreground text-sm font-semibold">{leetcodeProfileInfo.solved.medium}/1858</div>
                    </motion.div>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="sm:px-12 sm:py-3.5 p-3 rounded-lg text-center bg-muted/60"
                    >
                        <div className="text-[#FF375F] text-sm font-bold">Hard</div>
                        <div className="text-foreground text-sm font-semibold">{leetcodeProfileInfo.solved.hard}/842</div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
