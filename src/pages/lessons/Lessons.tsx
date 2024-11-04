import React from 'react';
import { BookOpen, Clock, Tag } from 'lucide-react';

const lessons = [
  {
    id: 1,
    title: 'Introduction to Sustainability',
    description: 'Learn the basic principles of environmental sustainability',
    category: 'Fundamentals',
    duration: '30 mins',
    level: 'Beginner',
  },
  {
    id: 2,
    title: 'Waste Management',
    description: 'Understanding waste reduction and recycling practices',
    category: 'Practical Skills',
    duration: '45 mins',
    level: 'Intermediate',
  },
  {
    id: 3,
    title: 'Biodiversity Conservation',
    description: 'Exploring ecosystems and species preservation',
    category: 'Advanced Topics',
    duration: '60 mins',
    level: 'Advanced',
  },
];

function Lessons() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Environmental Lessons</h1>
        <p className="mt-2 text-gray-600">Expand your knowledge about our environment</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{lesson.title}</h3>
              <p className="text-gray-600 mb-4">{lesson.description}</p>
              
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500">
                  <Tag className="h-4 w-4 mr-2" />
                  <span>{lesson.category}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{lesson.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <BookOpen className="h-4 w-4 mr-2" />
                  <span>Level: {lesson.level}</span>
                </div>
              </div>

              <button className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition">
                Start Lesson
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;