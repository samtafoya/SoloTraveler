import React, { Component } from 'react'
import ValidatedLoginForm from './ValidatedLoginForm';
import Suggest from './suggest';
import Blog from './blog';
//import '/Users/sammitafoya/SoloTraveler/src/css/styles.css'


class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'CamperBot',
            test: 'sammi'
        }
        //this.handleClick = this.handleClick.bind(this);
    }

    setName(nameFromComp) {
        this.setState({ name: nameFromComp });
    }

    render() {
        return (
            <div>

            </div>
        )
    }
    /*
<div>
                    <ValidatedLoginForm name={this.state.name} setName={this.setName.bind(this)} />
                </div>
                <div>
                    <Suggest name={this.state.name} setName={this.setName.bind(this)} />
                </div>
    */
}

export default Test
