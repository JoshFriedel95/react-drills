import React,{Component} from 'react'

class TextBox extends Component{
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }

    handleChange(value){
        this.setState({ text: value})
    }

    render(){
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)}/>
                <p>{this.state.text}</p>
            </div>
        )

        
    }
}

export default TextBox