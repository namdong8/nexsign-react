const React = require("react");
const { Component } = React;

class App extends Component{
    state = {
        name  : 'hello webpack'
    };

    render(){
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

module.exports = App;