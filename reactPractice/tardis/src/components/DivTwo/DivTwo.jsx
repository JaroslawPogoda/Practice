import React, { Component} from 'react';
import DivThree from './DivThree/DivThree';
class DivTwo extends Component {
    constructor(props) {
        super(props);
        this.state =this.props.state
        console.log(this.state)
        
    }
    // changeIt = (text) => {
    //     this.setState(this.props.changeIts(text));
    // }
    // changeIt = (text) => {
    //     if (this.state.tardis.caps) {
          
    //       this.setState({
    //         tardis: {
    //           name: text.toLowerCase(),
    //           caps: false
    //         }
    //       })
    //     } else {
    //       console.log(text)
    //       this.setState({
    //         tardis: {
    //           name: text.toUpperCase(),
    //           caps: true
    //         }
    //       })
    //     }
    //   }
    render() {
        return (
            <div className="DivTwo">
                
                <DivThree state={this.props.state} />
                <DivThree state={this.props.state} />
            </div>
        );
    }
}
export default DivTwo;