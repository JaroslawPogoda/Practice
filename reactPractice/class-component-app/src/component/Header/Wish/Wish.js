import React, {Component} from 'react'

class Wish extends Component {
    render() {
        return(
            <div className="Wish">
                <p><center>{this.props.message}</center></p>
            </div>
        );
    }
}
export default Wish;
// class components props as employee name, employee department and employee salary
