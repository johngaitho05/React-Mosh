import React, { Component } from "react";

class Counter extends Component {

  render() {
    return (
      <div>
        {this.props.children}
        <span
          // applying styles and classes
          style={{ fontSize: 15, padding: "10px", width: 50 }}
          className={this.getBadgeClasses()}
        >
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.product)}
          className="btn btn-secondary"
        >
          Increment
        </button>
        <button
          className="btn btn-danger m-2"
          onClick={() => this.props.onDelete(this.props.product.id)}
        >
          Delete
        </button>
      </div>
    );
  }
  formatCount = () => {
    const count  = this.props.product.count;
    return count === 0 ? "Zero" : count;
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.product.count === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Counter;
