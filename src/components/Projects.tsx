import { categories } from '../data/projects';
import CategorySection from './CategorySection';

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-slate-900 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">Projects</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Explore my work across embedded systems, robotics, electric vehicles, and avionics technology.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
