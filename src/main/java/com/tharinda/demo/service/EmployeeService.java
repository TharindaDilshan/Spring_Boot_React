package com.tharinda.demo.service;

import java.util.List;

import com.tharinda.demo.modal.Employee;

public interface EmployeeService {
	List<Employee> get();
	Employee get(int id);
	void save(Employee employee);
	void delete(int id);
}
