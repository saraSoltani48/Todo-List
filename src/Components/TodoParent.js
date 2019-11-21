import React, { Component } from 'react';
import "./App.css";
class Input extends Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: "",
        list: [
          {
            myInput: "buy tabac",
            complet: false
          }
        ]
      };
    }
    changeUserInput(input) {
      this.setState({
        userInput: input
      });
    }
    addToList(input) {
      if (this.state.userInput.length > 0) {
        let listArray = this.state.list;
        listArray.push({ myInput: input, complet: false });
        this.setState({
          list: listArray,
          userInput: ""
        });
      } else {
        alert("Is empty");
      }
    }
    deletItem = i => {
      this.setState({
        list: this.state.list.filter(index => index !== i)
      });
    };
    complete = i => {
      let arr = this.state.list;
      arr[i].complet = true;
      this.setState({
        list: arr
      });
    };
    render() {
      return (
        <div className="todo">
          <div className="work-todo">
            <div className="title">
              <h1>To-Do App!</h1>
              <p>Add New To-Do</p>
            </div>
            <div className="traitement">
              <input
                onChange={el => this.changeUserInput(el.target.value)}
                value={this.state.userInput}
                type="text"
                className="enter-new"
                placeholder="Enter new task"
              />
              <button
                onClick={() => this.addToList(this.state.userInput)}
                className="but-add"
              >
                Add
              </button>
            </div>
          </div>
          <h2 className="disp-zone">Let's get some work done!</h2>
          <ul className="mylist">
            {this.state.list.map((val, i) => (
              <li  className="li" key={i}>
                <span className={val.complet ? "complete" : "uncomplete"}>
                  {val.myInput}
                </span>
                <button onClick={() => this.complete(i)}>
                  {val.complet ? "undo" : "Complete"}
                </button>
                <button onClick={() => this.deletItem(i)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
  export default Input;