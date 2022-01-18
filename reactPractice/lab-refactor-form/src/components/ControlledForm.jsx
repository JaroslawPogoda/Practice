import React, { Component } from 'react';
import { useState } from 'react';
function ControlledForm(props){
    let [ data, setValue] = useState({username: '', password:'',email:''})
    const handleChange = event => {
    
        setValue(value=> {
            console.log(value)
            return{...value,[event.target.id]: event.target.value}
        })
    }
    const handleSubmit = event => {      ///    onClick ... onChange ... onSubmit
        event.preventDefault()
        props.getData(data)
        
        
    }
        return (  
            <form onSubmit={event =>{handleSubmit(event)}} className='cf'>
                <label htmlFor="username">username:</label>
                <input 
                    id="username"
                    onChange={handleChange}
                    value={data.username}
                />
                <label htmlFor="password">password:</label>
                <input 
                    id="password" 
                    onChange={handleChange}
                    value={data.password} 
                    type="password"
                />
                <label htmlFor="email">email:</label>
                <input 
                    id="email" 
                    onChange={handleChange} 
                    value={data.email}
                    type="email"
                />
                <button>Submit</button>
            </form>
        );
    
}
export default ControlledForm;