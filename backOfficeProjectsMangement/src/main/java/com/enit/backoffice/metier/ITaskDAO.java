package com.enit.backoffice.metier;

import java.util.List;
import jakarta.ejb.Local;
import com.enit.backoffice.entities.Task;

@Local
public interface ITaskDAO {
	
	public void addTask(String c,Task t);
	public void updateTask(Task t);
	public void deleteTask(String codeTask);
	public List<Task> getListTasks();
	public Task getTask(String c);
	public List<Task> getTasksOfOneProject(String codeProject); 
}