import AboutPage from "@/components/about/page";
import ContactPage from "@/components/contact/page";
// import Footer from "@/components/footer/page";
import HomePage from "@/components/home/page";
import ProjectsPage from "@/components/projects/page";
import SkillsPage from "@/components/skills/page";

export default function Home() {
  return (
    <div className="bg-background">
      <div id="home" className="w-full h-screen ">
        <HomePage />
      </div>
      <div id="about" className="w-full h-fit pt-[4.2rem]">
        <AboutPage />
      </div>
      <div id="skills" className="w-full h-fit pt-[4.2rem]">
        <SkillsPage />
      </div>
      <div id="projects" className="w-full h-fit pt-[4.2rem]">
        <ProjectsPage />
      </div>
      <div id="contact" className="w-full h-fit pt-[4.2rem]">
        <ContactPage />
      </div>
      {/* <div id="footer" className="w-full h-fit pt-[4.2rem]">
        <Footer />
      </div> */}
    </div>
  );
}
