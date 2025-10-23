import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { Poppins } from "next/font/google";
import Navbar from "@/components/navbar/navbar";

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A portfolio website showcasing my work and skills.",
  verification: {
    google: "ihoz1zUg40vn3eEUAVe9NYCopYvdRTUjlJWljX9U8rM",
  },
  openGraph: {
    title: "Portfolio Website",
    description: "A portfolio website showcasing my work and skills.",
    url: "https://your-portfolio-url.com",
    siteName: "Portfolio Website",
    images: [
      {
        url: "https://rayudubharani.vercel.app/",
        width: 1200,
        height: 630,
        alt: "Portfolio Website OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
