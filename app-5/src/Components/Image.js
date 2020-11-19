import React,{Component} from 'react'

class Image extends Component {
    constructor(){
        super();
        
    }



    render(){
        return(
            <div>
                <img src={this.props.url} />
                <p>Error 404 Error 599 Order 66</p>
            </div>
        )
    }
}

export default Image