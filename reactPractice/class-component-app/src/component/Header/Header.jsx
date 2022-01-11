import React, { Component} from 'react';
import Hello from './Hello/Hello'
import Wish from './Wish/Wish'
class Header extends Component {
    render() {
        return(
            <div className="Header">
                <Hello name="jack"/>
                <Wish message="nice to see you"/>
            </div>
        );
    }
}
export default Header;