import './TableHeader.css'
import React, { Component} from 'react';
class TableHeader extends Component {
    render() {
        return(
            <tr className="TableHeader"><th className="EmployeeName">Name</th><th className="EmployeeDepartment">Department</th><th className="EmployeeSalary">Salary</th><th className="EmployeeStatus">Employment Status</th></tr>
        );
    }
}
export default TableHeader;