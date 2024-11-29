import React from 'react';
import Calendar from 'react-calendar';
import { Notice } from '../../types/notice';
import { format } from 'date-fns';

interface EventCalendarProps {
  notices: Notice[];
}

export function EventCalendar({ notices }: EventCalendarProps) {
  const eventDates = notices.reduce((acc, notice) => {
    const dateStr = format(notice.publishDate, 'yyyy-MM-dd');
    acc[dateStr] = (acc[dateStr] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="font-medium mb-4">Event Calendar</h3>
      <Calendar
        className="rounded-lg border-0"
        tileContent={({ date }) => {
          const dateStr = format(date, 'yyyy-MM-dd');
          const count = eventDates[dateStr];
          return count ? (
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-blue-500 rounded-full" />
          ) : null;
        }}
      />
    </div>
  );
}