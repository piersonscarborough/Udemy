import React, {Component} from 'react';

class EventAndState extends Component{

    constructor(){
        super();
        this.state ={
            inputText: ''
        }
    }

    handleClick = () =>{
        console.log('Test')
        this.setState({
            inputText: ""
        })
    }

    handleChange = (event) => {
        this.setState({
            inputText: event.target.value
        })
        console.dir(event.target.value)
        console.log(this.state.inputText)
    }

    handleSubmit = (event) => {
        console.log('user submitted')
        this.setState({
            inputText: "State is cool"
        })
        event.preventDefault();
    }

    render(){
        return(
            <div> 
                <h1>{this.state.inputText}</h1>
                <form onSubmit={this.handleSubmit}>
                    <button onClick={this.handleClick}className="btn">Click Me!</button>
                    <input onChange={this.handleChange} type="text" placeholder='Enter some text'/>
                </form>
            </div>
        )
    }
}

export default EventAndState;


