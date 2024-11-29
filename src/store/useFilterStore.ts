import { create } from 'zustand';
import { NoticeCategory, NoticePriority } from '../types/notice';

interface FilterState {
  categories: NoticeCategory[];
  priorities: NoticePriority[];
  searchQuery: string;
  dateRange: { start: Date | null; end: Date | null };
  setCategories: (categories: NoticeCategory[]) => void;
  setPriorities: (priorities: NoticePriority[]) => void;
  setSearchQuery: (query: string) => void;
  setDateRange: (range: { start: Date | null; end: Date | null }) => void;
}

export const useFilterStore = create<FilterState>((set) => ({
  categories: [],
  priorities: [],
  searchQuery: '',
  dateRange: { start: null, end: null },
  setCategories: (categories) => set({ categories }),
  setPriorities: (priorities) => set({ priorities }),
  setSearchQuery: (searchQuery) => set({ searchQuery }),
  setDateRange: (dateRange) => set({ dateRange }),
}));