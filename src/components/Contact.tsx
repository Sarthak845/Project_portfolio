import { Mail, Linkedin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section className="bg-slate-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-300 mb-12 leading-relaxed">
            Open to opportunities and collaborations in embedded systems, robotics, and EV engineering.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:sarthakroff@gmail.com"
              className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
            >
              <Mail size={20} />
              <span>Email Me</span>
            </a>

            <a
              href="tel:+918459526488"
              className="flex items-center gap-3 bg-green-500 hover:bg-green-400 text-slate-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/50"
            >
              <Phone size={20} />
              <span>Call Me</span>
            </a>

            <a
              href="https://www.linkedin.com/in/sarthak-rahate-b450a9253/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
