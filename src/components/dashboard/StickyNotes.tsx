'use client';
import { useState } from 'react';

interface StickyNote {
  id: string;
  title: string;
  content: string;
  color: 'yellow' | 'blue' | 'green' | 'purple' | 'orange';
  tags: string[];
  isPinned: boolean;
  createdAt: string;
  updatedAt: string;
}

interface StickyNotesProps {
  className?: string;
}

export default function StickyNotes({ className = '' }: StickyNotesProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [colorFilter, setColorFilter] = useState('All Colors');
  const [showCreateForm, setShowCreateForm] = useState(false);

  const [notes, setNotes] = useState<StickyNote[]>([
    {
      id: '1',
      title: 'Lead Follow-up',
      content: 'Remember to call John Smith about the enterprise package. He seemed very interested and mentioned budget approval next week.',
      color: 'yellow',
      tags: ['sales', 'follow-up'],
      isPinned: true,
      createdAt: '1/15/2024',
      updatedAt: '1/15/2024'
    },
    {
      id: '2',
      title: 'Product Idea',
      content: 'AI-powered email sequence generator that adapts based on recipient engagement patterns. Could integrate with CRM data.',
      color: 'blue',
      tags: ['product', 'ai', 'idea'],
      isPinned: false,
      createdAt: '1/14/2024',
      updatedAt: '1/14/2024'
    },
    {
      id: '3',
      title: 'Meeting Notes',
      content: 'Team sync - Q1 goals discussed. Focus on customer acquisition and product improvements. Next review in 2 weeks.',
      color: 'green',
      tags: ['meeting', 'team'],
      isPinned: false,
      createdAt: '1/12/2024',
      updatedAt: '1/12/2024'
    },
    {
      id: '4',
      title: 'Bug Report',
      content: 'Users reporting slow load times on dashboard. Need to investigate database queries and optimize.',
      color: 'orange',
      tags: ['bug', 'performance'],
      isPinned: true,
      createdAt: '1/10/2024',
      updatedAt: '1/10/2024'
    }
  ]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'yellow': return 'bg-yellow-400/20 border-yellow-400/40 text-yellow-100';
      case 'blue': return 'bg-blue-400/20 border-blue-400/40 text-blue-100';
      case 'green': return 'bg-green-400/20 border-green-400/40 text-green-100';
      case 'purple': return 'bg-purple-400/20 border-purple-400/40 text-purple-100';
      case 'orange': return 'bg-orange-400/20 border-orange-400/40 text-orange-100';
      default: return 'bg-gray-400/20 border-gray-400/40 text-gray-100';
    }
  };

  const getTagColor = (tag: string) => {
    const colors = [
      'bg-red-500/20 text-red-400',
      'bg-blue-500/20 text-blue-400',
      'bg-green-500/20 text-green-400',
      'bg-yellow-500/20 text-yellow-400',
      'bg-purple-500/20 text-purple-400',
      'bg-cyan-500/20 text-cyan-400'
    ];
    return colors[tag.length % colors.length];
  };

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesColor = colorFilter === 'All Colors' || note.color === colorFilter.toLowerCase();
    
    return matchesSearch && matchesColor;
  });

  const pinnedNotes = filteredNotes.filter(note => note.isPinned);
  const regularNotes = filteredNotes.filter(note => !note.isPinned);

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gold mb-2">Sticky Notes</h2>
          <p className="text-gray-400">Quick notes & ideas</p>
        </div>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="bg-gold hover:bg-gold/90 text-black px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
        >
          <span>+</span>
          <span>New Note</span>
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-400 focus:outline-none focus:border-gold/50"
            />
            <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
          </div>
          
          <select
            value={colorFilter}
            onChange={(e) => setColorFilter(e.target.value)}
            className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-gold/50"
            title="Filter by color"
          >
            <option value="All Colors">All Colors</option>
            <option value="Yellow">Yellow</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Purple">Purple</option>
            <option value="Orange">Orange</option>
          </select>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 text-center">
          <p className="text-2xl font-bold text-white">{notes.length}</p>
          <p className="text-gray-400 text-sm">Total Notes</p>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 text-center">
          <p className="text-2xl font-bold text-yellow-400">{pinnedNotes.length}</p>
          <p className="text-gray-400 text-sm">Pinned</p>
        </div>
        <div className="bg-gray-900/60 backdrop-blur-sm rounded-lg border border-gray-800/50 p-4 text-center">
          <p className="text-2xl font-bold text-gray-300">{regularNotes.length}</p>
          <p className="text-gray-400 text-sm">Regular</p>
        </div>
      </div>

      {/* Pinned Notes */}
      {pinnedNotes.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
            <span className="mr-2">📌</span>
            Pinned Notes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pinnedNotes.map((note) => (
              <div key={note.id} className={`rounded-lg border-2 p-4 hover:scale-105 transition-transform cursor-pointer ${getColorClasses(note.color)}`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold truncate flex-1">{note.title}</h4>
                  <div className="flex items-center space-x-1 ml-2">
                    <button className="text-yellow-400 hover:text-yellow-300">📌</button>
                    <button className="text-gray-400 hover:text-white">⋯</button>
                  </div>
                </div>
                
                <p className="text-sm mb-3 line-clamp-3">{note.content}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {note.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}>
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>⭐</span>
                  <span>{note.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regular Notes */}
      {regularNotes.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">All Notes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regularNotes.map((note) => (
              <div key={note.id} className={`rounded-lg border-2 p-4 hover:scale-105 transition-transform cursor-pointer ${getColorClasses(note.color)}`}>
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold truncate flex-1">{note.title}</h4>
                  <div className="flex items-center space-x-1 ml-2">
                    <button className="text-gray-400 hover:text-yellow-400">📌</button>
                    <button className="text-gray-400 hover:text-white">⋯</button>
                  </div>
                </div>
                
                <p className="text-sm mb-3 line-clamp-3">{note.content}</p>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {note.tags.map((tag, index) => (
                    <span key={index} className={`px-2 py-1 rounded text-xs font-medium ${getTagColor(tag)}`}>
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>📝</span>
                  <span>{note.updatedAt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Auto-save indicator */}
      <div className="text-center">
        <div className="inline-flex items-center space-x-2 text-sm text-gray-400">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Auto-saved</span>
        </div>
      </div>
    </div>
  );
}
