package com.enit.backoffice.entities;

import java.io.Serializable;
import java.util.Date;

import jakarta.persistence.*; 


@Entity @Table(name="Tasks")
public class Task implements Serializable{ 
	@Id @Column(name="TASK_CODE") 
	private String codeTask;  
	private String description; 
	private Date startDate;
	private Date endDate;
	@ManyToOne @JoinColumn(name="CODE_PROJECT") 
	private Project project; 
	public Task(String codeTask, String description, Date sD, Date eD)
	{ this.codeTask= codeTask;this.description= description; this.startDate= sD; this.endDate= eD; } 
	public Task() {}
	public String getCodeTask() {
		return codeTask;
	}
	public void setCodeTask(String codeTask) {
		this.codeTask = codeTask;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String desc) {
		this.description = desc;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date sD) {
		this.startDate = sD;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date eD) {
		this.endDate = eD;
	}
	
	public Project getProject() {
		return project;
	}
	public void setProject(Project project) {
		this.project = project;
	} 
	
	@Override
	public String toString() {
		return "Task [codeTask=" + codeTask + ", description=" + description + ", startDate=" + startDate + ", endDate=" + endDate +", project=" + project +"]";
	}
	 
}
