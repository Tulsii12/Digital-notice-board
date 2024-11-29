import React from 'react';
import { Calendar, Eye, MessageSquare, Pin } from 'lucide-react';
import { Notice } from '../types/notice';
import { format } from 'date-fns';

interface NoticeCardProps {
  notice: Notice;
}

export function NoticeCard({ notice }: NoticeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium
              ${notice.priority === 'Urgent' ? 'bg-red-100 text-red-800' :
                notice.priority === 'High' ? 'bg-orange-100 text-orange-800' :
                notice.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                'bg-green-100 text-green-800'}`}>
              {notice.priority}
            </span>
            <span className="text-sm text-gray-500">{notice.department}</span>
            {notice.isPinned && <Pin className="h-4 w-4 text-blue-500" />}
          </div>
          <h3 className="mt-2 text-lg font-semibold text-gray-900">{notice.title}</h3>
        </div>
      </div>
      
      <p className="mt-2 text-gray-600 line-clamp-2">{notice.content}</p>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {format(notice.publishDate, 'MMM d, yyyy')}
          </div>
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            {notice.views}
          </div>
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            0
          </div>
        </div>
        <span className="text-sm font-medium text-blue-600 hover:text-blue-500">
          Read more
        </span>
      </div>
    </div>
  );
}