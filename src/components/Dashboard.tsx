import React from 'react';
import { NoticeCard } from './NoticeCard';
import { FilterPanel } from './filters/FilterPanel';
import { EventCalendar } from './calendar/EventCalendar';
import { useFilterStore } from '../store/useFilterStore';
import { Notice } from '../types/notice';

const sampleNotices: Notice[] = [
  {
    id: '1',
    title: 'Semester Final Examination Schedule',
    content: 'The final examination schedule for Spring 2024 has been released. Please check your respective department section for detailed information.',
    category: 'Academic',
    priority: 'High',
    author: 'Examination Controller',
    department: 'Academic Affairs',
    publishDate: new Date('2024-03-15'),
    views: 1250,
    isPinned: true
  },
  {
    id: '2',
    title: 'Campus Career Fair 2024',
    content: 'Join us for the annual Career Fair featuring top companies from various industries. Great opportunity for networking and job placements.',
    category: 'Events',
    priority: 'Medium',
    author: 'Career Services',
    department: 'Student Affairs',
    publishDate: new Date('2024-03-14'),
    views: 890,
    isPinned: false
  },
  {
    id: '3',
    title: 'Library Hours Extended During Finals',
    content: 'The university library will extend its operating hours during the final examination period to support student preparation.',
    category: 'General',
    priority: 'Low',
    author: 'Library Administration',
    department: 'Library Services',
    publishDate: new Date('2024-03-13'),
    views: 567,
    isPinned: false
  }
];

export function Dashboard() {
  const { categories, priorities, searchQuery } = useFilterStore();

  const filteredNotices = sampleNotices.filter((notice) => {
    const matchesCategory = categories.length === 0 || categories.includes(notice.category);
    const matchesPriority = priorities.length === 0 || priorities.includes(notice.priority);
    const matchesSearch = !searchQuery || 
      notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesPriority && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:ml-64">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Recent Notices</h2>
        <p className="mt-1 text-sm text-gray-500">Stay updated with the latest announcements</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="grid gap-6 md:grid-cols-2">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        </div>
        
        <div className="space-y-6">
          <FilterPanel />
          <EventCalendar notices={sampleNotices} />
        </div>
      </div>
    </div>
  );
}