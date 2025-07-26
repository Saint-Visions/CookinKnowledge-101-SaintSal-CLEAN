'use client';
import { useState } from 'react';

interface Project {
  id: string;
  name: string;
  client: string;
  status: 'planning' | 'active' | 'review' | 'completed' | 'paused';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  progress: number;
  revenue: number;
  deadline: string;
  team: string[];
  tags: string[];
}

interface ProjectPipelineProps {
  className?: string;
}

export default function ProjectPipeline({ className = '' }: ProjectPipelineProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [statusFilter, setStatusFilter] = useState('all');

  const projects: Project[] = [
    {
      id: '1',
      name: 'AI Training Integration',
      client: 'TechStartup Inc',
      status: 'active',
      priority: 'high',
      progress: 75,
      revenue: 12500,
      deadline: '2025-08-15',
      team: ['Sarah', 'Mike', 'Alex'],
      tags: ['AI', 'Integration', 'Training']
    },
    {
      id: '2',
      name: 'CRM Automation Setup',
      client: 'Digital Agency Co',
      status: 'review',
      priority: 'medium',
      progress: 90,
      revenue: 8500,
      deadline: '2025-08-01',
      team: ['Lisa', 'David'],
      tags: ['CRM', 'Automation', 'GHL']
    },
    {
      id: '3',
      name: 'Business Dashboard Design',
      client: 'Rodriguez Consulting',
      status: 'planning',
      priority: 'medium',
      progress: 25,
      revenue: 5500,
      deadline: '2025-08-30',
      team: ['Sarah', 'Marcus'],
      tags: ['Dashboard', 'Design', 'Analytics']
    },
    {
      id: '4',
      name: 'Enterprise Security Audit',
      client: 'Creative Studio LLC',
      status: 'active',
      priority: 'urgent',
      progress: 60,
      revenue: 15000,
      deadline: '2025-07-28',
      team: ['Alex', 'Mike', 'Lisa', 'David'],
      tags: ['Security', 'Audit', 'Enterprise']
    },
    {
      id: '5',
      name: 'Voice Integration Module',
      client: 'InnovateTech',
      status: 'completed',
      priority: 'low',
      progress: 100,
      revenue: 3500,
      deadline: '2025-07-20',
      team: ['Marcus'],
      tags: ['Voice', 'AI', 'Module']
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'active': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'review': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'completed': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'paused': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent': return 'bg-red-500 text-white';
      case 'high': return 'bg-orange-500 text-white';
      case 'medium': return 'bg-yellow-500 text-black';
      case 'low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 60) return 'bg-yellow-500';
    if (progress >= 40) return 'bg-orange-500';
    return 'bg-red-500';
  };

  const filteredProjects = projects.filter(project => 
    statusFilter === 'all' || project.status === statusFilter
  );

  const totalRevenue = filteredProjects.reduce((sum, project) => sum + project.revenue, 0);
  const avgProgress = filteredProjects.reduce((sum, project) => sum + project.progress, 0) / filteredProjects.length;

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">Project Pipeline</h2>
          <p className="text-gray-400">Track active projects and deliverables across your client base</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <span>+</span>
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-400">💰</span>
            <span className="text-gray-400 text-sm">Pipeline Value</span>
          </div>
          <p className="text-2xl font-bold text-white">${totalRevenue.toLocaleString()}</p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-400">📊</span>
            <span className="text-gray-400 text-sm">Avg Progress</span>
          </div>
          <p className="text-2xl font-bold text-white">{avgProgress.toFixed(1)}%</p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-yellow-400">⚡</span>
            <span className="text-gray-400 text-sm">Active Projects</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {projects.filter(p => p.status === 'active').length}
          </p>
        </div>
        
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-purple-400">✅</span>
            <span className="text-gray-400 text-sm">Completed</span>
          </div>
          <p className="text-2xl font-bold text-white">
            {projects.filter(p => p.status === 'completed').length}
          </p>
        </div>
      </div>

      {/* Filters and View Toggle */}
      <div className="flex items-center justify-between bg-gray-900/40 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
        <div className="flex items-center space-x-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-gold/50"
            title="Filter by status"
          >
            <option value="all">All Status</option>
            <option value="planning">Planning</option>
            <option value="active">Active</option>
            <option value="review">Review</option>
            <option value="completed">Completed</option>
            <option value="paused">Paused</option>
          </select>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'grid' ? 'bg-gold text-black' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            ⚏
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-lg transition-colors ${
              viewMode === 'list' ? 'bg-gold text-black' : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Projects Grid/List */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6 hover:border-gold/30 transition-colors">
              
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                  <p className="text-gray-400 text-sm">{project.client}</p>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                  {project.priority.toUpperCase()}
                </span>
              </div>

              {/* Status and Progress */}
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <span className="text-gray-400 text-sm">{project.progress}%</span>
                </div>
                
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${getProgressColor(project.progress)}`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Revenue and Deadline */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-green-400 font-semibold">${project.revenue.toLocaleString()}</p>
                  <p className="text-gray-500 text-xs">Revenue</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-300 text-sm">{project.deadline}</p>
                  <p className="text-gray-500 text-xs">Deadline</p>
                </div>
              </div>

              {/* Team and Tags */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-gray-400 text-xs">Team:</span>
                  <div className="flex -space-x-1">
                    {project.team.slice(0, 3).map((member, index) => (
                      <div key={index} className="w-6 h-6 bg-gradient-to-br from-gold to-orange-500 rounded-full flex items-center justify-center text-black text-xs font-bold border-2 border-gray-900">
                        {member[0]}
                      </div>
                    ))}
                    {project.team.length > 3 && (
                      <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 text-xs border-2 border-gray-900">
                        +{project.team.length - 3}
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 overflow-hidden">
          <div className="p-4 border-b border-gray-800/50 grid grid-cols-12 gap-4 text-sm font-medium text-gray-400">
            <div className="col-span-3">Project</div>
            <div className="col-span-2">Client</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Priority</div>
            <div className="col-span-2">Progress</div>
            <div className="col-span-2">Revenue</div>
            <div className="col-span-1">Deadline</div>
          </div>
          
          <div className="divide-y divide-gray-800/50">
            {filteredProjects.map((project) => (
              <div key={project.id} className="p-4 grid grid-cols-12 gap-4 items-center hover:bg-gray-800/20 transition-colors">
                <div className="col-span-3">
                  <p className="text-white font-medium">{project.name}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-gray-300">{project.client}</p>
                </div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="col-span-1">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(project.priority)}`}>
                    {project.priority}
                  </span>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getProgressColor(project.progress)}`}
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-400">{project.progress}%</span>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="text-green-400 font-semibold">${project.revenue.toLocaleString()}</p>
                </div>
                <div className="col-span-1">
                  <p className="text-gray-300 text-sm">{project.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
