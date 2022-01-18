import React, { useState, useRef } from 'react'
import './App.css';

function App() {

  let [count, setCount] = useState(0) ///  [state, setState]
  let [count2, setCount2] = useState(0)
  
  /*

   CLASS COMPONENT 

    this.state = {
      count: 0,
      name: 'bob,
      job: 'builder
    }

    this.setState({ count: this.state.count + 1 })


    FUNCTIONAL COMPONENT

    let [myObj, setMyObj] = useState({ count: 0, name: 'bob', job: 'builder' })

    setMyObj({ ...myObj, name: 'george' })

  */

  const increment = () => {
    // count = 0 
    /*
    setCount(count + 1) // 0 + 1
    setCount(count + 1) // 0 + 1
    setCount(count + 1) // 0 + 1
    */

    /*
    setCount(prevState => {
      return { ...prevState, count: prevState.count + 1 }
    }) // 1 + 1
    */
    setCount(sophie => sophie + 1) // 2 + 1    
  }

  const decrement = () => setCount(count - 1)

  const reset = () => setCount(0)

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Subtract</button>
      <button onClick={reset}>Reset</button>

      <h3>Second Count: {count2}</h3>
      <button onClick={() => setCount2(prevCount => prevCount + 1)}>Add</button>
      <button onClick={() => setCount2(prevCount => prevCount - 1)}>Subtract</button>
      <button onClick={() => setCount2(0)}>Reset</button>
    </div>
  );
}

export default App;

// useRef hook 
// let ref = useRef()
this.state = {  
    username: '',
    password: '',
    email: '',
    submitted: false
}
import React, { Component, createRef } from 'react';
​
class FormUncontrol extends Component {
​
    constructor() {
        super()
​
        this.userNameRef = createRef()  //   { current: null }
        this.passwordRef = createRef()
        this.emailRef = createRef()
    }
​
    handleSubmit = event => {
        event.preventDefault()
​
        let formData = {
            username: this.userNameRef.current.value,
            password: this.passwordRef.current.value,
            email: this.emailRef.current.value
        }
​
        console.log(this.userNameRef)
​
        console.log(formData)
    }
​
    render() {
        
        return (  
            <form onSubmit={this.handleSubmit} className='ucf'>
​
                <label htmlFor="username1">username:</label>
                <input 
                    id="username1"
                    ref={this.userNameRef}   //  { current: inputelement }
                />
​
                <label htmlFor="password1">password:</label>
                <input 
                    id="password1"
                    ref={this.passwordRef} 
                    type="password"
                />
​
                <label htmlFor="email1">email:</label>
                <input 
                    id="email1"
                    ref={this.emailRef}
                    type="email"
                />
​
                <button>Submit</button>
​
            </form>
        );
    }
}
 
export default FormUncontrol;
​
​
​
// ref={element => this.email = element}  