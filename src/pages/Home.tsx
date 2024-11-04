import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, Users } from 'lucide-react';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">
          Learn & Play for a Better Planet
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Join our community of eco-warriors. Take quizzes, learn from courses, and challenge your friends
          while making a real difference for our environment.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </Link>
          <Link
            to="/quizzes"
            className="bg-white text-green-600 border-2 border-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition"
          >
            Try a Quiz
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid md:grid-cols-3 gap-8 px-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Award className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Interactive Quizzes</h3>
          <p className="text-gray-600">
            Test your knowledge with fun, engaging quizzes on various environmental topics.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <BookOpen className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">In-Depth Lessons</h3>
          <p className="text-gray-600">
            Learn from comprehensive courses designed by environmental experts.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Users className="h-12 w-12 text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Social Learning</h3>
          <p className="text-gray-600">
            Connect with friends, compete on leaderboards, and learn together.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-green-50 py-12 px-4 rounded-xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">10K+</div>
              <div className="text-gray-600">Active Learners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-gray-600">Environmental Quizzes</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <div className="text-gray-600">Expert-Led Courses</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;