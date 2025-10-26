import { Category } from '../types';
import ProjectCard from './ProjectCard';

interface CategorySectionProps {
  category: Category;
}

export default function CategorySection({ category }: CategorySectionProps) {
  return (
    <div className="mb-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {category.name}
        </h2>
        <p className="text-slate-400 text-lg">
          {category.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
