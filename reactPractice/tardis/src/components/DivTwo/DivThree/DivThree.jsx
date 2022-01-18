import React, { Component} from 'react';

class DivThree extends Component {
    constructor(props) {
        super(props);
        this.state =this.props.state
        console.log(this.props.state.tardis.name)

        }
    //     changeIt=(text)=> {
    //       this.props.changeIt(text)
    //   }
      changeIt = (text) => {
        if (this.state.tardis.caps) {
          console.log(text)
          this.setState({
            tardis: {
              name: text.toLowerCase(),
              caps: false
            }
          })
        } else {
          this.setState({
            tardis: {
              name: text.toUpperCase(),
              caps: true
            }
          })
        }
      }
    render() {
        return (
            <div className="DivThree">
                <h3 className="tardis" onClick={()=>this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
            </div>
        );
    }
}
export default DivThree;