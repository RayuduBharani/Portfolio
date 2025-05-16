import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my journey",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground">
            Passionate about creating meaningful digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Left Column - Image and Quick Info */}
          <div className="space-y-6">
            <div className="aspect-square rounded-lg bg-muted overflow-hidden">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>📍 Based in Your Location</li>
                <li>💻 Full Stack Developer</li>
                <li>🎓 Your Education</li>
                <li>🌟 Your Years of Experience</li>
              </ul>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <div className="prose prose-gray dark:prose-invert">
              <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
              <p className="text-muted-foreground">
                I'm a passionate developer with a keen eye for creating elegant solutions to complex problems. 
                My journey in technology began [Your Story Here]. I specialize in building modern web applications 
                and am constantly exploring new technologies and methodologies.
              </p>
              <p className="text-muted-foreground mt-4">
                When I'm not coding, you can find me [Your Interests/Hobbies]. I believe in continuous learning 
                and staying up-to-date with the latest industry trends and best practices.
              </p>
            </div>

            {/* Skills Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "Your Skills"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center pt-8">
          <h3 className="text-lg font-semibold mb-4">Let's Connect</h3>
          <p className="text-muted-foreground mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
} 