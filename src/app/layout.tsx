import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: {
    default: "Rayudu Bharani - Full Stack Developer | Web Developer Portfolio",
    template: "%s | Rayudu Bharani Portfolio"
  },
  description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, skills, and professional experience. Available for freelance and full-time opportunities.",
  keywords: [
    "Rayudu Bharani",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "UI/UX Developer"
  ],
  authors: [{ name: "Rayudu Bharani" }],
  creator: "Rayudu Bharani",
  publisher: "Rayudu Bharani",
  metadataBase: new URL("https://rayudubharani.vercel.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "ihoz1zUg40vn3eEUAVe9NYCopYvdRTUjlJWljX9U8rM",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rayudubharani.vercel.app",
    siteName: "Rayudu Bharani Portfolio",
    title: "Rayudu Bharani - Full Stack Developer | Web Developer Portfolio",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my projects, skills, and professional experience.",
    images: [
      {
        url: "/logo-light.png",
        width: 512,
        height: 512,
        alt: "Rayudu Bharani - Full Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Rayudu Bharani - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
    images: ["/logo-light.png"],
    creator: "@RayuduBharani",
  },
  icons: {
    icon: [
      { url: "/logo-dark.png", media: "(prefers-color-scheme: dark)" },
      { url: "/logo-light.png", media: "(prefers-color-scheme: light)" },
    ],
  },
};
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${poppins.variable} antialiased w-full h-dvh overflow-x-hidden`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
