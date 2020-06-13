import React, { Component } from "react";
import Counter from "./counter";


class Counters extends Component {
 
  render() {
      const {products, onReset, onDelete, onIncrement} = this.props;
    return (
      <div>
        <button className="btn btn-default" onClick={onReset}>Reset</button>
        {products.map((product) => (
          <Counter
            key={product.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            product={product}
          >
            <h4>{product.desc}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
