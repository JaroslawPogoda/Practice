import './Table.css'
import React, { Component} from 'react';
import Employee from './Employee/Employee'
import TableHeader from './TableHeader/TableHeader'
import Employees from '../../../Data/Data'
class Table extends Component {
    render() {
        return(
            <div className="Table">
                <table className="EmployeeTable">
                    <TableHeader/>
                    {console.log(Employees)}
                    {Employees.map((employee,index)=><Employee name={employee.name} department={employee.department} salary={employee.salary} key ={index} />)}
                </table>
            </div>
        );
    }
}
export default Table;