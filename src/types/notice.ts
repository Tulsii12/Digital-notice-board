export type NoticeCategory = 'Academic' | 'Administrative' | 'Events' | 'Emergency' | 'General';
export type NoticePriority = 'Low' | 'Medium' | 'High' | 'Urgent';

export interface Notice {
  id: string;
  title: string;
  content: string;
  category: NoticeCategory;
  priority: NoticePriority;
  author: string;
  department: string;
  publishDate: Date;
  expiryDate?: Date;
  attachments?: string[];
  views: number;
  isPinned: boolean;
}