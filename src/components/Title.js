import React, { Component } from 'react';

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
           
        };
    }

    render() {
        return (
            <div className="page-header customtitle">
                <h1>TO DO LIST<small>by TS</small></h1>
            </div>
        );
    }
}

export default Title;
