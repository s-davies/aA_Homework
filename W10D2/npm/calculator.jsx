import React from "react";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // your code here
        this.state = { result: 0, num1: "", num2: "" };
        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
    }

    // your code here

    setNum1(e) {
        // your code here
        let num = e.target.value;
        if (num !== "") {
            num = Number(e.target.value);
            if (isNaN(num)) {
                num = "";
            }
        }
        
        this.setState({ num1: num});
    }
    setNum2(e) {
        // your code here
        let num = e.target.value;
        if (num !== "") {
            num = Number(e.target.value);
            if (isNaN(num)) {
                num = "";
            }
        }

        this.setState({ num2: num });
    }

    clear(e) {
        e.preventDefault;
        this.setState({ result: 0, num1: "", num2: "" });
    }

    multiply(e) {
        e.preventDefault;
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        this.setState({ result: num1 * num2 });
    }
    divide(e) {
        e.preventDefault;
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        this.setState({ result: num1 / num2 });
    }
    add(e) {
        e.preventDefault;
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        this.setState({ result: num1 + num2 });
    }
    subtract(e) {
        e.preventDefault;
        let num1 = this.state.num1;
        let num2 = this.state.num2;
        this.setState({ result: num1 - num2 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.result}</h1>
                <input onChange={this.setNum1} value={this.state.num1}></input>
                <input onChange={this.setNum2} value={this.state.num2}></input>
                <button onClick={this.clear.bind(this)}>Clear</button>
                <br/>
                <button onClick={this.add.bind(this)}>+</button>
                <button onClick={this.subtract.bind(this)}>-</button>
                <button onClick={this.multiply.bind(this)}>*</button>
                <button onClick={this.divide.bind(this)}>/</button>
            </div>
        );
    }
}

export default Calculator;