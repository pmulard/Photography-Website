import React from 'react';
import './Photography.css';

export default class Photography extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            array: []
        };
    }

    // When app loads for the first time
    componentDidMount() {
        
    }

    render() {
        return (
            <div>Hello World</div>
        );
    }

}