package com.enit.backoffice.webservices;

import java.text.DateFormat;
import java.util.Date; 
import java.util.List;

import com.enit.backoffice.entities.*;
import com.enit.backoffice.metier.*;
import jakarta.ejb.*; 
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;


@Stateless
@Path("/projectsRest")
public class ProjectsRestServices {
	
	@EJB
	IProjectDAO projectDAO;
	
	@EJB
	ITaskDAO taskDAO;
	
	@GET
	 @Path("projects")
	 @Produces(MediaType.APPLICATION_JSON) 
	public List<Project> getAllProjectsWEB(){
		 return projectDAO.getListProjects();
		
	}
	
	
	 @POST
	 @Path("addProject/{codeProject}/{desc}/{startDate}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public void addProject( @PathParam(value="codeProject")String codeProject, @PathParam(value="desc")String desc, @PathParam(value="startDate")DateParam startDate)
	 {
		 Project p=new Project(codeProject, desc, startDate.getDate());
		 projectDAO.addProject(p);
	 }
	 
	 @PUT
	 @Path("updateProject/{codeProject}/{desc}/{startDate}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public void updateProject( @PathParam(value="codeProject")String codeProject, @PathParam(value="desc")String desc, @PathParam(value="startDate")DateParam startDate)
	 {
		 Project p=new Project(codeProject, desc, startDate.getDate());
		 projectDAO.updateProject(p);
	 }
	 
	 @GET
	 @Path("displayProject/{codeProject}")
	 @Produces(MediaType.APPLICATION_JSON) 
	public Project displayProject(@PathParam(value="codeProject")String codeProject){
		 return projectDAO.getProject(codeProject);
		
	}
	 
	 @DELETE
	 @Path("removeProject/{codeProject}")
	 @Produces(MediaType.APPLICATION_JSON) 
	public void removeProject(@PathParam(value="codeProject")String codeProject){
		 projectDAO.deleteProject(codeProject);
		
	}
	
	 
	 @GET
	 @Path("tasks")
	 @Produces(MediaType.APPLICATION_JSON) 
	public List<Task> getAllTasksWEB(){
		 return taskDAO.getListTasks();
		
	}
	 
	 @POST
	 @Path("addTask/{codeProject}/{codeTask}/{desc}/{startDate}/{endDate}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public void addTask(@PathParam(value="codeProject")String codeProject, @PathParam(value="codeTask")String codeTask, @PathParam(value="desc")String desc, @PathParam(value="startDate")DateParam startDate,@PathParam(value="endDate")DateParam endDate)
	 {
		 Task t=new Task(codeTask, desc, startDate.getDate(),endDate.getDate());
		 taskDAO.addTask(codeProject,t);
	 }
	 
	 @PUT
	 @Path("updateTask/{codeProject}/{codeTask}/{desc}/{startDate}/{endDate}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public void updateTask( @PathParam(value="codeProject")String codeProject,@PathParam(value="codeTask")String codeTask, @PathParam(value="desc")String desc, @PathParam(value="startDate")DateParam startDate, @PathParam(value="endDate")DateParam endDate)
	 {
		 Task t=new Task(codeTask, desc, startDate.getDate(),endDate.getDate());
		 Project p= projectDAO.getProject(codeProject);
		 t.setProject(p);
		 taskDAO.updateTask(t);
	 }
	 
	 @GET
	 @Path("displayTask/{codeTask}")
	 @Produces(MediaType.APPLICATION_JSON) 
	public Task displayTask(@PathParam(value="codeTask")String codeTask){
		 return taskDAO.getTask(codeTask);
		
	}
	 
	 @DELETE
	 @Path("removeTask/{codeTask}")
	 @Produces(MediaType.APPLICATION_JSON) 
	public void removetask(@PathParam(value="codeTask")String codeTask){
		 taskDAO.deleteTask(codeTask);
		
	}
	 
	 @GET
	 @Path("displayTaskOfProject/{codeProject}")
	 @Produces(MediaType.APPLICATION_JSON) 
	public List<Task> displayTaskOfProject(@PathParam(value="codeProject")String codeProject){
		 return taskDAO.getTasksOfOneProject(codeProject);
		
	}

}
