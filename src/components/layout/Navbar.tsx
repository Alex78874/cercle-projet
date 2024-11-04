import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../lib/store';
import { Leaf, LogOut, User, Award, BookOpen, Users, Trophy, Home } from 'lucide-react';

function Navbar() {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-green-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="font-bold text-xl">EcoLearn</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-1 hover:text-green-200">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link to="/quizzes" className="flex items-center space-x-1 hover:text-green-200">
              <Award className="h-4 w-4" />
              <span>Quizzes</span>
            </Link>
            <Link to="/lessons" className="flex items-center space-x-1 hover:text-green-200">
              <BookOpen className="h-4 w-4" />
              <span>Lessons</span>
            </Link>
            <Link to="/friends" className="flex items-center space-x-1 hover:text-green-200">
              <Users className="h-4 w-4" />
              <span>Friends</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-green-200">
              <Trophy className="h-4 w-4" />
              <span>Leaderboard</span>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Link to="/profile" className="flex items-center space-x-1 hover:text-green-200">
                  <User className="h-4 w-4" />
                  <span>{user.username}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 hover:text-green-200"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-white text-green-600 px-4 py-2 rounded-lg hover:bg-green-50"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;