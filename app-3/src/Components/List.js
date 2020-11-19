import React,{Component} from 'react'

class List extends Component{
    constructor(){
        super();
        this.state = {
            filterString: '',
            stuff: ['Games', 'Gym', 'Family', 'Food']
        }
    }
    handleChange(filter){
        this.setState({ filterString: filter})
    }



    render(){
        let goodStuff = this.state.stuff.filter((element, index) => {
            return element.includes(this.state.filterString)
        })
        .map((element, index) => {
            return <h1 key={index}>{element}</h1>
        })

        return (
            <div>
                <input onChange={e => this.handleChange(e.target.value)} type='text' />
                {goodStuff}
            </div>
        )
    }
}



export default List