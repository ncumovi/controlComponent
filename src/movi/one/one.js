import React, { Component } from 'react';
import { render } from 'react-dom';

class Child extends Component{
    render() {
        console.log('child render')
        return (
            <div>
                {this.props.name}
            </div>
        );
    }
 
    componentDidUpdate(prevProps, prevState) {
        console.log('child update')
    }
 
}
 
class Parent extends Component{
    state = {
        name: 'aaa'
    }
    render() {
        console.log('parent render')
        return (
            <div>
                <Child name={this.state.name}/>
                <button onClick={e => {
 
                    this.setState({name:'bbb'})
                }}>change</button>
            </div>
        );
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('parent update')
    }
}

export default Parent;