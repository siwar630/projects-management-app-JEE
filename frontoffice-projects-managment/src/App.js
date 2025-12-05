import './App.css';
import About from './components/About';
import Home from './components/Home';
import ProjectsList from './components/Project/ProjectsList';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import ProjectForm from './components/Project/ProjectForm';
import ProjectFormUpdate from './components/Project/ProjectFormUpdate';
import TasksList from './components/Task/TasksList';
import TaskForm from './components/Task/TaskForm';
import TaskFormUpdate from './components/Task/TaskFormUpdate';


function App() {
  return (
    <div className="container-fluid">
      <Router>
        <nav className="navbar navbar-expand-lg bg-info ">
          <div className="container-fluid ">
            <a className="navbar-brand text-secondary ms-5" href="#d"><img src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/capable-deserving-eligible-employee-icon.png" className="img" alt="..." /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item mx-5">
                  <Link className="nav-link fw-bold text-secondary active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item mx-5">
                  <Link className="nav-link fw-bold text-secondary"  to="/about">About</Link>
                </li>
                <li className="nav-item mx-5">
                  <Link className="nav-link fw-bold text-secondary" to="/projects">Projects</Link>
                </li>
                <li className="nav-item mx-5">
                  <Link className="nav-link fw-bold text-secondary" to="/tasks">Tasks</Link>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>

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
      </Router>
      
      
    </div>
  );
}

export default App;
