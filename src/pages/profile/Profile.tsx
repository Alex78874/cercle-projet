import React from 'react';
import { useAuthStore } from '../../lib/store';
import { User, Award, BookOpen, Trophy } from 'lucide-react';

function Profile() {
  const { user } = useAuthStore();

  if (!user) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-3 rounded-full">
            <User className="h-8 w-8 text-green-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.username}</h1>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Trophy className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Points</h2>
          </div>
          <p className="text-3xl font-bold text-green-600">{user.points}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <Award className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Quizzes</h2>
          </div>
          <p className="text-3xl font-bold text-green-600">12</p>
          <p className="text-sm text-gray-600 mt-1">Completed</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-4">
            <BookOpen className="h-6 w-6 text-green-600" />
            <h2 className="text-xl font-semibold">Lessons</h2>
          </div>
          <p className="text-3xl font-bold text-green-600">8</p>
          <p className="text-sm text-gray-600 mt-1">Completed</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Completed "Climate Change Basics" quiz</p>
              <p className="text-sm text-gray-600">Score: 90/100</p>
            </div>
            <span className="text-sm text-gray-500">2 days ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b">
            <div>
              <p className="font-medium">Finished "Waste Management" lesson</p>
              <p className="text-sm text-gray-600">Earned 50 points</p>
            </div>
            <span className="text-sm text-gray-500">5 days ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;