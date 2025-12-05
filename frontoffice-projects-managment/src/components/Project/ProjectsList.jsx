import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"
import { deleteProject, getAllProjects } from '../operationsProjects';


const ProjectsList = () => {
  const [projectsList,setProjectsList]=useState([]);
  const displayProjects = () => getAllProjects((res)=>{
   setProjectsList(res.data);
  })

  const deleteAproject =(codeProject)=>{
    deleteProject(codeProject,()=>{
        console.log("project removed");
    })
  }

  useEffect(()=>{
    displayProjects();
  },[projectsList]);
  
  return (
    <div className='container my-5'>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Project Code</th>
                    <th scope="col">Description</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
            {projectsList.map((project,index) => (
                <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{project.codeProject}</td>
                    <td>{project.description}</td>
                    <td>{project.startDate}</td>
                    <td>
                        
                            <Link to="/updateProject" className="btn btn-success mx-2">Edit</Link>
                            <button type="button" className="btn btn-danger mx-2" onClick={()=>{deleteAproject(project.codeProject)}}>delete</button>
                       
                    </td>
                </tr>  
                ))}
            </tbody>
        </table>
        <Link className="btn btn-primary" to="/addProject">Add Project</Link>
      
       
    </div>
  )
}

export default ProjectsList
