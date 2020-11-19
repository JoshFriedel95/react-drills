import React,{Component} from 'react'

class ToDo extends Component{
    render(){
        return <p>{this.props.task}</p>
    }
}

export default ToDo

// function App() {
//     return (
//       <div className="App">
//         <ToDo/>
  
//       </div>
//     );
//   }