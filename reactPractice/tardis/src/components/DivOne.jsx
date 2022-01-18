import React, { Component} from 'react';
import DivTwo from './DivTwo/DivTwo';
class DivOne extends Component {
    constructor(props) {
        super(props);
        this.state ={
            tardis: {
                name: 'Time and Relative Dimension in Space',
                caps: false
              }
        }
    }
    // changeIt (text) {
    //     if (this.state.tardis.caps) {
    //       console.log(text)
    //       this.setState({
    //         tardis: {
    //           name: text.toLowerCase(),
    //           caps: false
    //         }
    //       })
    //     } else {
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
            <div className="DivOne">
                <DivTwo state={this.state} />
            </div>
        );
    }
}
export default DivOne;