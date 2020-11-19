import React,{Component} from 'react'

class Array extends Component{
    constructor(){
        super();

        this.state = {
            arr: ['Gym', 'Games', 'Family', 'Web Development']
        }
    }


    render(){
        let favoriteThings = this.state.arr.map((element, index) => {
         return <h1 key={index}>{element}</h1>;
        });

        return <div>{favoriteThings}</div>
    }
}

export default Array