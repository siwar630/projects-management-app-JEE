import './App.css';
import About from './components/About';
import Home from './components/Home';
import ProjectsList from './components/Project/ProjectsList';
import {BrowserRouter as Router, Routes, Route, Link, useLocation} from "react-router-dom"
import ProjectForm from './components/Project/ProjectForm';
import ProjectFormUpdate from './components/Project/ProjectFormUpdate';
import TasksList from './components/Task/TasksList';
import TaskForm from './components/Task/TaskForm';
import TaskFormUpdate from './components/Task/TaskFormUpdate';
import { Toaster } from 'react-hot-toast';
import { Briefcase, Home as HomeIcon, Info, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', icon: HomeIcon, label: 'Home' },
    { path: '/about', icon: Info, label: 'About' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
    { path: '/tasks', icon: Zap, label: 'Tasks' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Router>
        {/* Navigation Navbar premium */}
        <nav className="navbar-premium sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo avec gradient */}
              <Link to="/" className="navbar-logo-container">
                <div className="navbar-logo-wrapper">
                  <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/capable-deserving-eligible-employee-icon.png" 
                    alt="Logo"
                    className="navbar-logo"
                  />
                  <div className="navbar-branding">
                    <h1 className="navbar-title">Projects Pro</h1>
                    <p className="navbar-subtitle">Manage efficiently</p>
                  </div>
                </div>
              </Link>

              {/* Navigation Links Desktop */}
              <div className="hidden md:flex items-center space-x-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.path}
                      to={link.path} 
                      className={`navbar-link ${isActive(link.path) ? 'navbar-link-active' : ''}`}
                    >
                      <Icon className="navbar-link-icon" />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden navbar-mobile-btn"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
              <div className="navbar-mobile-menu">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link 
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`navbar-mobile-link ${isActive(link.path) ? 'navbar-mobile-link-active' : ''}`}
                    >
                      <Icon size={20} />
                      <span>{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<ProjectsList />} />
            <Route path="/addProject" element={<ProjectForm />} />
            <Route path="/updateProject" element={<ProjectFormUpdate />} />
            <Route path="/tasks" element={<TasksList />} />
            <Route path="/addTask" element={<TaskForm />} />
            <Route path="/updateTask" element={<TaskFormUpdate />} />
          </Routes>
        </main>

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </Router>
    </div>
  );
}

export default App;
