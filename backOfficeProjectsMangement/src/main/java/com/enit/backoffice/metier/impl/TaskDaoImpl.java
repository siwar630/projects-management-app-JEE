package com.enit.backoffice.metier.impl;

import java.util.List;

import jakarta.ejb.Stateless;
import jakarta.persistence.*; 
import com.enit.backoffice.entities.Project;
import com.enit.backoffice.entities.Task;
import com.enit.backoffice.metier.ITaskDAO;

@Stateless(name="TASK")
public class TaskDaoImpl implements ITaskDAO {
	@PersistenceContext(unitName="projectsUnit")
	EntityManager em;
	
	@Override
	public void addTask(String c,Task t){
		Project p=em.find(Project.class, c);
		t.setProject(p);
		em.persist(t);
	}
	
	@Override
	public void updateTask(Task t) {
		em.merge(t);
	}
	
	@Override
	public List<Task> getListTasks(){
		String queryJPQL="select t from Task t";
		Query q = em.createQuery(queryJPQL);
		List<Task> tasks= (List<Task>)q.getResultList();
		return tasks;
	}
	
	@Override
	public Task getTask(String codeTask) {
		Task t=em.find(Task.class, codeTask);
		return(t);
	}
	
	@Override
	public void deleteTask(String codeTask) {
		Task t=getTask(codeTask);
		em.remove(t);
	}
	
	@Override
	public List<Task> getTasksOfOneProject(String codeProject) {
		String queryJPQL="select t from Task t where t.project.codeProject= :code";
		Query query=em.createQuery(queryJPQL);
		query.setParameter("code", codeProject);
		List<Task> tasks=(List<Task>)query.getResultList();
		return tasks;
		
	}
}