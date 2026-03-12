import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Skills } from "@/components/Skills";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="projects">
        <ProjectGrid />
      </div>

      <section id="about" className="pt-24 lg:pt-32 pb-12 bg-black/5">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-sm font-bold tracking-[0.3em] opacity-40 mb-12 uppercase text-center">The Narrative</h2>
          <div className="space-y-8 text-center md:text-left">
            <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed">
              I started my journey with a degree in Computer Science, where I learned the logic behind how things are built. But I soon realized that my real curiosity wasn&apos;t just in the &apos;how,&apos; but in the &apos;why&apos;—why we build certain features and how they actually impact the people using them. Today, I&apos;ve evolved into a Product Manager who bridges that technical gap, handling enterprise-scale products where strategic thinking and precision are non-negotiable.
            </p>
            <p className="text-xl md:text-2xl text-foreground opacity-60 font-medium leading-relaxed">
              My approach is rooted in intentional prototyping and a deep empathy for user pain points. I don&apos;t just move tickets; I dive into the product strategy to ensure every feature serves a clear purpose. Whether it&apos;s driving retention for an EdTech giant or piloting a new service for a quick-commerce leader, I focus on building high-impact solutions that feel seamless and intuitive.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black/5 pb-24 lg:pb-32">
        <Skills />
      </section>

      <section id="contact" className="py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] opacity-40 mb-4 uppercase">Let&apos;s Talk Product</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Open to new opportunities.</h1>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <a
              href="mailto:sharaddtiwari@gmail.com"
              className="bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 active:scale-95 transition-all flex items-center gap-3 shadow-2xl group"
            >
              <Mail size={20} className="group-hover:rotate-12 transition-transform" />
              Get in Touch
            </a>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/sharaddd"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full border border-black/5 hover:bg-black hover:text-white transition-all duration-300 shadow-sm"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sharaddd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-full border border-black/5 hover:bg-[#0077b5] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-black/5 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.2em] text-foreground/40">
            <a href="#projects" className="hover:text-foreground transition-colors">Work</a>
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/sharaddd" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/20 hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
            <a href="https://www.linkedin.com/in/sharaddd/" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/20 hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
          <p className="text-[10px] font-medium text-foreground/30 tracking-widest mt-4 uppercase">
            © {new Date().getFullYear()} Sharad Tiwari. Thought by me • Coded by Cursor.
          </p>
        </div>
      </footer>
    </main>
  );
}
