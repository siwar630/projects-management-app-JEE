package com.enit.backoffice.entities;

import java.io.*;
import java.util.*;

import jakarta.json.bind.annotation.JsonbTransient;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.*; 


@Entity @Table(name="Project")
public class Project implements Serializable{ 
	 @Id @Column(name="CODE_PROJECT")
	 private String codeProject;
	 private String description; 
	 private Date startDate; 
	 @OneToMany(mappedBy="project",fetch=FetchType.EAGER) 
	 private Collection<Task> tasks;
	 public Project(String codeProject, String description, Date sD) 
	 { this.codeProject= codeProject; this.description= description; this.startDate= sD; }
	 public Project() {}
	@JsonbTransient
	 public Collection<Task> getTasks()
	 { return tasks;}
	public String getCodeProject() {
		return codeProject;
	}
	public void setCodeProject(String codeProject) {
		this.codeProject = codeProject;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date sD) {
		this.startDate = sD;
	}
	public void setTasks(Collection<Task> tasks) {
		this.tasks = tasks;
	} 
	
	@Override
	public String toString() {
		return "Project [codeProject=" + codeProject + ", description=" + description + ", startDate=" + startDate + ", Tasks=" + tasks + "]";
	}
	 
}

