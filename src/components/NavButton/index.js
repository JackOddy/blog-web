import React from 'react';
import NavButton from './mainButton.jsx';
import NavItems from './NavItems';


export default class extends React.Component {

    constructor(props){
        super(props)
        this.state = {open: this.props.open || false}

        this.changeMenu = this.changeMenu.bind(this)

    }

    changeMenu(){
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }
    render(){
        console.log(this.state)
        return(
                <NavButton onClick={this.changeMenu} color={this.props.color}>
                { NavItems.map( Item => <Item open={this.state.open} />) }
            </NavButton>
        )
    }
}
