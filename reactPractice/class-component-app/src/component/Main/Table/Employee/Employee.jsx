import './Employee.css';
import React, { Component} from 'react';
class Employee extends Component {
    constructor(props) {
        super(props);
        this.state={message : 'Employed'}
    }
    changeEmpoyment(){
        if(this.state.message==="Employed")
        this.setState({message: "Fired"})
        else{
            this.setState({message: "Employed"})
        }
    }
    render() {
        return(
            <tr className="Employee"><td className="EmployeeName">{this.props.name}</td><td className="EmployeeDepartment">{this.props.department}</td><td className="EmployeeSalary">${this.props.salary}</td><td className="EmployeeStatus" onClick={()=>this.changeEmpoyment()}>{this.state.message}</td></tr>
        );
    }
}
export default Employee;