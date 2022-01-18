import React, { Component } from 'react';

class FormControl extends Component {

    constructor() {
        super()

        this.state = {  
            username: '',
            password: '',
            email: '',
            comment: '',
            submitted: false
        }
    }

    handleChange = event => {
        /*
        if (event.target.id === 'username') {

            this.setState({ username: event.target.value })

        } else if (event.target.id === 'password') {

            this.setState({ password: event.target.value })

        } else {

            this.setState({ email: event.target.value })
        }
        */

        // Computed property name
        this.setState({ [event.target.id]: event.target.value })
        this.setState({submitted: true})
    }

    handleSubmit = event => {      ///    onClick ... onChange ... onSubmit
        event.preventDefault()
        console.log(this.state)
    }

    render() { 
  
        return (  
            <form onSubmit={this.handleSubmit} className='cf'>

                <label htmlFor="username">username:</label>
                <input 
                    id="username"
                    onChange={this.handleChange}
                    value={this.state.username}
                />

                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    onChange={this.handleChange}
                    value={this.state.password} 
                    type="password"
                />

                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    onChange={this.handleChange} 
                    value={this.state.email}
                    type="email"
                />
                <label htmlFor="comment">comment:</label>
                <input 
                    id="comment" 
                    onChange={this.handleChange} 
                    value={this.state.comment}
                    type="comment"
                />

                <button>Submit</button>

            </form>
        );
    }
}
 
export default FormControl;