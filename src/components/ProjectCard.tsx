import { Award } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 group">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">
          {project.title}
        </h3>
        {project.isAward && (
          <Award className="text-cyan-500 flex-shrink-0 ml-2" size={24} />
        )}
      </div>

      <p className="text-slate-600 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {project.skills.map((skill, idx) => (
            <span
              key={idx}
              className="text-xs font-medium px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-200">
        {project.tags.map((tag, idx) => (
          <span
            key={idx}
            className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
