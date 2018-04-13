import React from 'react';
import styled from 'styled-components';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.state = {}
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };

    handleScroll(event) {
        event.pageY > 50 && this.setState({
            shrink: true
        })
    };

    render() {
        const { shrink } = this.state

        return(
            <div onScroll={this.onScroll} className={className}>
                { children }
            </div>
        )
    }
);
