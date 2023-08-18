import React, {Component} from 'react'

class Card2 extends Component{
    render(){
        return(
            <h3>Hello From card 2</h3>,
            <p>{this.props.name}</p>
        );
    }
}

export default Card2;
