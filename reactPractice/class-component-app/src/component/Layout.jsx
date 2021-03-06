import React, { Component } from 'react';
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Main from "./Main/Main";
class Layout extends Component {
    render() {
        return(
            <div className="layout">
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}
export default Layout;