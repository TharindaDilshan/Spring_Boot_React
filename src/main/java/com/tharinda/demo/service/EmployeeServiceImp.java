package com.tharinda.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tharinda.demo.dao.EmployeeDAO;
import com.tharinda.demo.modal.Employee;

@Service
public class EmployeeServiceImp implements EmployeeService {
	
	@Autowired
	private EmployeeDAO employeeDao;

	@Transactional
	@Override
	public List<Employee> get() {
		// TODO Auto-generated method stub
		return employeeDao.get();
	}

	@Transactional
	@Override
	public Employee get(int id) {
		// TODO Auto-generated method stub
		return employeeDao.get(id);
	}

	@Transactional
	@Override
	public void save(Employee employee) {
		// TODO Auto-generated method stub
		employeeDao.save(employee);
	}

	@Transactional
	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		employeeDao.delete(id);
	}

}
