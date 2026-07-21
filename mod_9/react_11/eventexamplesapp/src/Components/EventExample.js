import React, { Component } from "react";

class EventExample extends Component {

    constructor() {
        super();

        this.state = {
            count: 0
        };
    }

    increment = () => {

        this.setState({

            count: this.state.count + 1

        });

    };

    decrement = () => {

        this.setState({

            count: this.state.count - 1

        });

    };

    sayHello = () => {

        alert("Hello! Have a nice day.");

    };

    handleIncrement = () => {

        this.increment();
        this.sayHello();

    };

    sayWelcome = (message) => {

        alert(message);

    };

    syntheticEvent = () => {

        alert("I was clicked");

    };

    render() {

        return (

            <div>

                <h2>Counter : {this.state.count}</h2>

                <button onClick={this.handleIncrement}>
                    Increment
                </button>

                &nbsp;

                <button onClick={this.decrement}>
                    Decrement
                </button>

                <br/><br/>

                <button onClick={() => this.sayWelcome("Welcome")}>
                    Say Welcome
                </button>

                <br/><br/>

                <button onClick={this.syntheticEvent}>
                    OnPress
                </button>

            </div>

        );

    }

}

export default EventExample;