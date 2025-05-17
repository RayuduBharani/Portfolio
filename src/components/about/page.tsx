import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about me and my journey",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 max-w-4xl py-10">
      <div className="space-y-12">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-xl font-bold text-primary">About Me</h1>
          <p className="text-muted-foreground text-md">
            Turning Ideas into Digital Reality
          </p>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Column - Image and Quick Info */}
          <div className="space-y-6 h-fit">
            <div className="aspect-square rounded-2xl bg-muted overflow-hidden shadow-lg">
              {/* Replace with your image */}
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5" />
            </div>
            {/* Quick Connect Section */}
            <div className="bg-muted/30 p-6 rounded-lg space-y-3">              <h3 className="font-semibold">Let&apos;s Connect!</h3>
              <p className="text-sm text-muted-foreground">
                Always open to interesting projects, collaborations, or just a good tech chat.
              </p>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="prose prose-gray dark:prose-invert">
              <h2 className="text-xl font-semibold mb-4">👋 Hi, I&apos;m Bharani Rayudu</h2>
              <p className="text-base leading-relaxed">
                A passionate Full-Stack Developer from Andhra Pradesh, currently pursuing B.Tech 
                in Computer Science & Data Science at KIET. I specialize in building modern, 
                scalable web applications that make a difference.
              </p>
              <p className="text-base leading-relaxed mt-4">
                My journey began in my first year of college, inspired by my friends like Ashok and 
                Guru Brahmam. From simple pages to full-stack applications, every project has been 
                a stepping stone in my growth.
              </p>
            </div>

            {/* Quote Section */}
            <div className="border-l-4 border-primary/50 pl-4 py-2 my-6">              
              <p className="text-lg italic text-muted-foreground">
                &ldquo;Success doesn’t come from where you start — it comes from never giving up...&rdquo;
              </p>
              <p className="text-sm text-primary mt-2">– Bharani Rayudu</p>
            </div>

            {/* Current Focus */}
            <div className="bg-muted/30 p-6 rounded-lg space-y-3">
              <h3 className="text-xl font-semibold">🎯 Current Focus</h3>
              <p className="text-sm text-muted-foreground">
                Working on improving DSA skills, solving LeetCode problems, and preparing for 
                Software Engineer roles at product-based companies. When not coding, you&apos;ll 
                find me gaming or watching coding tutorials on YouTube 😄
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}