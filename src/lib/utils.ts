import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const items = [
  {
    title: "About",
    href: "#about",
    description: "Learn more about me and my background.",
  },
  {
    title: "Skills",
    href: "#skills",
    description: "Explore my technical skills and expertise.",
  },
  {
    title: "Projects",
    href: "#projects",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title : "Services" ,
    href : "#services"
  },
  {
    title: "Contact Me",
    href: "#contact",
    description: "Visually or semantically separates content.",
  }
]

