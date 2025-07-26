'use client';

import { useState } from 'react';

interface Contact {
  id: string;
  name: string;
  company: string;
  status: 'hot' | 'warm' | 'cold';
  value: string;
  lastContact: string;
}

export default function ContactsManager() {
  const [contacts] = useState<Contact[]>([
    { id: '1', name: 'Sarah Johnson', company: 'TechCorp', status: 'hot', value: '$12.5K', lastContact: '2 hours ago' },
    { id: '2', name: 'Mike Chen', company: 'StartupXYZ', status: 'warm', value: '$8.2K', lastContact: '1 day ago' },
    { id: '3', name: 'Lisa Rodriguez', company: 'GrowthCo', status: 'hot', value: '$15.7K', lastContact: '3 hours ago' },
    { id: '4', name: 'David Park', company: 'InnovateLab', status: 'warm', value: '$6.8K', lastContact: '2 days ago' },
    { id: '5', name: 'Emma Wilson', company: 'ScaleTech', status: 'cold', value: '$4.3K', lastContact: '1 week ago' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'hot': return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'warm': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'cold': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'hot': return '🔥';
      case 'warm': return '⚡';
      case 'cold': return '❄️';
      default: return '○';
    }
  };

  return (
    <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-800/50 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-white flex items-center">
          <span className="mr-2">👥</span>
          Active Contacts
        </h3>
        <button className="bg-gold hover:bg-gold/90 text-black font-medium px-4 py-2 rounded-lg text-sm transition-colors">
          + Add Contact
        </button>
      </div>

      <div className="space-y-3">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-gray-800/60 rounded-lg p-4 border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-gold to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-black text-sm font-bold">
                    {contact.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-white">{contact.name}</div>
                  <div className="text-sm text-gray-400">{contact.company}</div>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className={`px-3 py-1 rounded-full border text-xs font-medium ${getStatusColor(contact.status)}`}>
                  {getStatusIcon(contact.status)} {contact.status.toUpperCase()}
                </div>
                <div className="text-right">
                  <div className="font-semibold text-gold">{contact.value}</div>
                  <div className="text-xs text-gray-400">{contact.lastContact}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
          <div className="text-red-400 font-bold text-lg">2</div>
          <div className="text-xs text-gray-400">Hot Leads</div>
        </div>
        <div className="text-center p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <div className="text-yellow-400 font-bold text-lg">2</div>
          <div className="text-xs text-gray-400">Warm Leads</div>
        </div>
        <div className="text-center p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
          <div className="text-blue-400 font-bold text-lg">1</div>
          <div className="text-xs text-gray-400">Cold Leads</div>
        </div>
      </div>
    </div>
  );
}
