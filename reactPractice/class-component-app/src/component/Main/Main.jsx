import './Main.css'
import React, { Component} from 'react';
import Table from './Table/Table'
class Main extends Component {
    render() {
        return(
            <div className="Main">
                <Table/>
            </div>
        );
    }
}
export default Main;