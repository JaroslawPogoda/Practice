import './Employee.css';
import React, { Component} from 'react';
class Employee extends Component {
    render() {
        return(
            <tr className="Employee"><td className="EmployeeName">{this.props.name}</td><td className="EmployeeDepartment">{this.props.department}</td><td className="EmployeeSalary">${this.props.salary}</td></tr>
        );
    }
}
export default Employee;