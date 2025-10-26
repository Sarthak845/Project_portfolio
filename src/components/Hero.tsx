import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Sarthak Rahate
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-cyan-400 mb-6">
            Embedded Systems & Robotics Engineer
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Building intelligent systems at the intersection of hardware and software.
            Specializing in EV Powertrains, Autonomous Robotics, and Power Electronics.
          </p>
          <button
            onClick={scrollToProjects}
            className="group bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50"
          >
            View Projects
          </button>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 hover:text-cyan-400 transition-colors animate-bounce"
        aria-label="Scroll to projects"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
