import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { deleteProject, getAllProjects } from '../operationsProjects';
import { Trash2, Edit2, Plus } from 'lucide-react';
import toast from 'react-hot-toast';


const ProjectsList = () => {
  const [projectsList, setProjectsList] = useState([]);
  const [loading, setLoading] = useState(true);

  const displayProjects = () => {
    setLoading(true);
    getAllProjects((res) => {
      setProjectsList(res.data || []);
      setLoading(false);
    });
  }

  const deleteAproject = (codeProject) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      deleteProject(codeProject, () => {
        toast.success('Project deleted successfully');
        displayProjects();
      });
    }
  }

  useEffect(() => {
    displayProjects();
  }, []);
  
  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className='space-y-6'>
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-slate-600 mt-1">Manage and organize your projects</p>
        </div>
        <Link 
          to="/addProject" 
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Project
        </Link>
      </div>

      {/* Projects Table/Cards */}
      {projectsList.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow">
          <p className="text-slate-500 text-lg">No projects found. Create one to get started!</p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">#</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Code</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Description</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Start Date</th>
                <th className="px-6 py-3 text-right text-sm font-semibold text-slate-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {projectsList.map((project, index) => (
                <tr key={index} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3 text-sm text-slate-600">{index + 1}</td>
                  <td className="px-6 py-3 text-sm font-medium text-slate-900">{project.codeProject}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{project.description}</td>
                  <td className="px-6 py-3 text-sm text-slate-600">{new Date(project.startDate).toLocaleDateString()}</td>
                  <td className="px-6 py-3 text-right text-sm space-x-2 flex justify-end">
                    <Link 
                      to="/updateProject" 
                      state={{ project }}
                      className="btn-success inline-flex items-center gap-1"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Link>
                    <button 
                      type="button" 
                      className="btn-danger inline-flex items-center gap-1"
                      onClick={() => deleteAproject(project.codeProject)}
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </td>
                </tr>  
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ProjectsList