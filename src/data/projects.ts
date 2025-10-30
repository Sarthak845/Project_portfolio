import { useState } from 'react';
import { Category } from '../types';
import { Search, Filter, Award, ExternalLink, Github, Zap, Cpu, Battery, Car, Drone, Bot } from 'lucide-react';

export const categories: Category[] = [
  // ... your existing categories data remains the same ...
];

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  // Get all unique skills for filter
  const allSkills = Array.from(new Set(
    categories.flatMap(category => 
      category.projects.flatMap(project => project.skills)
    )
  )).sort();

  // Filter projects based on search, category, and skills
  const filteredCategories = categories.map(category => ({
    ...category,
    projects: category.projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || category.id === selectedCategory;
      
      const matchesSkills = selectedSkills.length === 0 || 
                           selectedSkills.every(skill => project.skills.includes(skill));
      
      return matchesSearch && matchesCategory && matchesSkills;
    })
  })).filter(category => category.projects.length > 0);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'ev-systems': return <Car className="w-5 h-5" />;
      case 'electronics-power': return <Battery className="w-5 h-5" />;
      case 'robotics': return <Bot className="w-5 h-5" />;
      case 'drones-uav': return <Drone className="w-5 h-5" />;
      case 'theoretical': return <Cpu className="w-5 h-5" />;
      default: return <Zap className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Project <span className="bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Explore {categories.flatMap(c => c.projects).length}+ technical projects spanning electric vehicles, robotics, embedded systems, and more.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 mb-8 border border-slate-700">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none"
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Clear Filters */}
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSkills([]);
              }}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-xl font-medium transition-all duration-300 hover:scale-105"
            >
              Clear Filters
            </button>
          </div>

          {/* Skills Filter */}
          <div className="mt-6">
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              Filter by Skills:
            </h3>
            <div className="flex flex-wrap gap-2">
              {allSkills.map(skill => (
                <button
                  key={skill}
                  onClick={() => toggleSkill(skill)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                    selectedSkills.includes(skill)
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                      : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {filteredCategories.map(category => (
            <div key={category.id} className="group">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 p-6 bg-slate-800/30 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-500">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  {getCategoryIcon(category.id)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {category.name}
                  </h2>
                  <p className="text-slate-400 text-lg">
                    {category.description}
                  </p>
                </div>
                <div className="text-slate-400 text-sm font-medium bg-slate-700/50 px-3 py-1 rounded-full">
                  {category.projects.length} projects
                </div>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {category.projects.map(project => (
                  <div
                    key={project.id}
                    className="group/project relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border-2 border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 transform hover:-translate-y-2"
                  >
                    {/* Award Badge */}
                    {project.isAward && (
                      <div className="absolute -top-3 -right-3">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Award Winner
                        </div>
                      </div>
                    )}

                    {/* Project Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover/project:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.skills.slice(0, 3).map(skill => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-slate-700/50 border border-slate-600 rounded-full text-xs text-slate-300 font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {project.skills.length > 3 && (
                          <span className="px-3 py-1 bg-slate-700/30 border border-slate-600 rounded-full text-xs text-slate-400 font-medium">
                            +{project.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-6">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded text-xs text-cyan-300 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                      <button className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        View Details
                      </button>
                      
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="text-slate-400 hover:text-white transition-colors"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="text-slate-400 hover:text-cyan-400 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-amber-500/0 group-hover/project:from-cyan-500/5 group-hover/project:to-amber-500/5 rounded-2xl transition-all duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-20">
            <div className="w-24 h-24 mx-auto mb-6 bg-slate-800 rounded-2xl flex items-center justify-center">
              <Search className="w-10 h-10 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-slate-400 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSelectedSkills([]);
              }}
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-white rounded-xl font-medium transition-all duration-300 transform hover:scale-105"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Stats Footer */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
              {categories.flatMap(c => c.projects).length}+
            </div>
            <div className="text-slate-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-2">
              {categories.flatMap(c => c.projects).filter(p => p.isAward).length}
            </div>
            <div className="text-slate-400 text-sm">Award Winning</div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">
              {categories.length}
            </div>
            <div className="text-slate-400 text-sm">Categories</div>
          </div>
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">
              {allSkills.length}+
            </div>
            <div className="text-slate-400 text-sm">Technologies</div>
          </div>
        </div>
      </div>
    </div>
  );
}