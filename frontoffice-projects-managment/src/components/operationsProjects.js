import Axios from 'axios';
import { format } from 'date-fns';

export const getAllProjects = (callback)=>{
    Axios.get('http://localhost:8084/backOfficeProjectsMangement/projectsRest/projects')
          .then((res)=> callback(res))
          .catch((err)=> console.log("network error"))
}

export const addProject = (codeProject,desc,sD,callback)=>{
    const formattedDate = format(new Date(sD), 'yyyy-MM-dd', { timeZone: 'UTC' });
    Axios.post(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/addProject/${codeProject}/${desc}/${formattedDate}`)
    .then((res) => {
        console.log("Response from server:", res);
        callback(res);
      })
      .catch((err) => {
        console.error("Error from server:", err);
        callback(err);
      }); 
}

export const deleteProject = (codeProject,callback)=>{
    Axios.delete(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/removeProject/${codeProject}`)
    .then((res) => {
        console.log("Response from server:", res);
        callback(res);
      })
      .catch((err) => {
        console.error("Error from server:", err);
        callback(err);
      }); 
}
export const updateProject = (codeProject,desc,sD,callback)=>{
  const formattedDate = format(new Date(sD), 'yyyy-MM-dd', { timeZone: 'UTC' });
  Axios.put(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/updateProject/${codeProject}/${desc}/${formattedDate}`)
      .then((res) => {
          console.log("Response from server:", res);
          callback(res);
        })
        .catch((err) => {
          console.error("Error from server:", err);
          callback(err);
        }); 
}

export const getAllTasks = (callback)=>{
  Axios.get('http://localhost:8084/backOfficeProjectsMangement/projectsRest/tasks')
        .then((res)=> callback(res))
        .catch((err)=> console.log("server error"))
}

export const addTask = (codeProject,codeTask,desc,sD,eD,callback)=>{
  const formattedDateStart = format(new Date(sD), 'yyyy-MM-dd', { timeZone: 'UTC' });
  const formattedDateEnd = format(new Date(eD), 'yyyy-MM-dd', { timeZone: 'UTC' });
  Axios.post(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/addTask/${codeProject}/${codeTask}/${desc}/${formattedDateStart}/${formattedDateEnd}`)
  .then((res) => {
      console.log("Response from server:", res);
      callback(res);
    })
    .catch((err) => {
      console.error("Error from server:", err);
      callback(err);
    }); 
}

export const deleteTask = (codeTask,callback)=>{
  Axios.delete(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/removeTask/${codeTask}`)
  .then((res) => {
      console.log("Response from server:", res);
      callback(res);
    })
    .catch((err) => {
      console.error("Error from server:", err);
      callback(err);
    }); 
}

export const updateTask = (codeProject,codeTask,desc,sD,eD,callback)=>{
  const formattedDateStart = format(new Date(sD), 'yyyy-MM-dd', { timeZone: 'UTC' });
  const formattedDateEnd = format(new Date(eD), 'yyyy-MM-dd', { timeZone: 'UTC' });
  Axios.put(`http://localhost:8084/backOfficeProjectsMangement/projectsRest/updateTask/${codeProject}/${codeTask}/${desc}/${formattedDateStart}/${formattedDateEnd}`)
      .then((res) => {
          console.log("Response from server:", res);
          callback(res);
        })
        .catch((err) => {
          console.error("Error from server:", err);
          callback(err);
        }); 
}