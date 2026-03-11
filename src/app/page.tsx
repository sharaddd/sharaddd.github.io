import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div id="projects">
        <ProjectGrid />
      </div>

      {/* Additional sections can be added here as the portfolio grows */}
      <section id="about" className="py-20 bg-black/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <p className="text-lg text-foreground/60 leading-relaxed font-medium">
            I am a product-focused engineer with a passion for building intuitive and impactful digital experiences.
            I prioritize product logic and strategic thinking to create meaningful solutions.
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-sm font-bold tracking-[0.3em] opacity-40 mb-4 uppercase">Let's Talk</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter">Have a Project?</h1>

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
            © {new Date().getFullYear()} Sharad Tiwari. Crafted with pride.
          </p>
        </div>
      </footer>
    </main>
  );
}
