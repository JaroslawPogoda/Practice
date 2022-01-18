import React, { Component} from 'react';
import './Switch.css'
class Switch extends Component {
    handleSwitch= event =>{
        event.preventDefault()
        this.props.switchVisibilityForm(true)
    }
    handleSwitch1= event =>{
        event.preventDefault()
        this.props.switchVisibilityForm(false)
    }
   
    render() {
    return(

        <div className="Switch">
        <form action="" className="Switch" onSubmit={this.handleSwitch}>
            
            <button className="isForm" >
                Form
            </button>
            </form>
            <form action="" className="Switch" onSubmit={this.handleSwitch1}>
            
            <button className="isForm" >
                Posts
            </button>
            </form>
            {/* <button className="isForm" onClick={this.props.switchVisibilityForm(false)}>
                Posts
            </button> */}
            
            </div>
    );    
    }
}
export default Switch;