import React, { Component } from 'react'


class Coin extends Component{
    render(){
        return (
            <img scr={this.props.info.imgSrc} alt="Coin" />
        )
    }
}

export default Coin;