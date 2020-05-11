package com.tharinda.demo.dao;

import java.util.List;

import com.tharinda.demo.modal.Employee;

public interface EmployeeDAO {
	List<Employee> get();
	
	Employee get(int id);
	
	void save(Employee employee);
	
	void delete(int id);
}
