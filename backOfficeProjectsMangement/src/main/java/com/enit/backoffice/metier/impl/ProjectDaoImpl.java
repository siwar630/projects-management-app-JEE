package com.enit.backoffice.metier.impl;

import java.util.List;

import jakarta.ejb.Stateless;
import jakarta.persistence.*; 
import com.enit.backoffice.entities.Project;
import com.enit.backoffice.metier.IProjectDAO;


@Stateless(name="PRO")
public class ProjectDaoImpl implements IProjectDAO {
	@PersistenceContext(unitName="projectsUnit")
	EntityManager em;
	
	@Override
	public void addProject(Project p) {
		em.persist(p);
	}
	
	@Override
	public void updateProject(Project p) {
		em.merge(p);
	}
	
	@Override
	public List<Project> getListProjects(){
		String queryJPQL="select p from Project p";
		Query q = em.createQuery(queryJPQL);
		List<Project> projects= (List<Project>)q.getResultList();
		return projects;
	}
	
	@Override
	public Project getProject(String codeProject) {
		Project p=em.find(Project.class, codeProject);
		return(p);
	}
	
	@Override
	public void deleteProject(String codeProject) {
		Project p=getProject(codeProject);
		em.remove(p);
	}

}
