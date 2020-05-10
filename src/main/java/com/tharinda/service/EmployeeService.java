package com.tharinda.service;

import java.util.List;

import com.tharinda.modal.Employee;

public interface EmployeeService {
	List<Employee> get();
	Employee get(int id);
	void save(Employee employee);
	void delete(int id);
}
