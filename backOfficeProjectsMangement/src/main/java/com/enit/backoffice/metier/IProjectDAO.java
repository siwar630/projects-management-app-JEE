package com.enit.backoffice.metier;

import java.util.List;
import jakarta.ejb.Local;
import com.enit.backoffice.entities.Project;


@Local
public interface IProjectDAO {
	
	public void addProject(Project p);
	public void updateProject(Project p);
	public void deleteProject(String codeProject);
	public List<Project> getListProjects();
	public Project getProject(String codeProject);
	
}
