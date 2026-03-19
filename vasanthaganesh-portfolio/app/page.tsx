import Nav from '@/components/ui/Nav';
import Cursor from '@/components/ui/Cursor';
import HeroReveal from '@/components/hero/HeroReveal';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Diary from '@/components/sections/Diary';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Nav />
      <Cursor />
      <main>
        <HeroReveal />
        <About />
        <Skills />
        <Projects />
        <Diary />
        <Contact />
      </main>
      <footer className="w-full flex justify-between items-center py-8 px-4 border-t border-rule/20 max-w-7xl mx-auto">
        <span className="font-display text-2xl text-ember-dark">VG — 2025</span>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">Built with taste. Deployed with intent.</span>
      </footer>
    </>
  );
}
