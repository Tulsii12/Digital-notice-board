import React from 'react';
import { Filter } from 'lucide-react';
import { useFilterStore } from '../../store/useFilterStore';
import { NoticeCategory, NoticePriority } from '../../types/notice';

export function FilterPanel() {
  const { categories, priorities, setCategories, setPriorities } = useFilterStore();

  const allCategories: NoticeCategory[] = ['Academic', 'Administrative', 'Events', 'Emergency', 'General'];
  const allPriorities: NoticePriority[] = ['Low', 'Medium', 'High', 'Urgent'];

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center mb-4">
        <Filter className="h-5 w-5 mr-2" />
        <h3 className="font-medium">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Categories</h4>
          <div className="space-y-2">
            {allCategories.map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  checked={categories.includes(category)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setCategories([...categories, category]);
                    } else {
                      setCategories(categories.filter((c) => c !== category));
                    }
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{category}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-2">Priority</h4>
          <div className="space-y-2">
            {allPriorities.map((priority) => (
              <label key={priority} className="flex items-center">
                <input
                  type="checkbox"
                  checked={priorities.includes(priority)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setPriorities([...priorities, priority]);
                    } else {
                      setPriorities(priorities.filter((p) => p !== priority));
                    }
                  }}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm">{priority}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}