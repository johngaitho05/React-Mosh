import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    products: [
      { id: 1, desc: "Shoe", count: 0 },
      { id: 2, desc: "Watch", count: 3 },
      { id: 3, desc: "Smart TV", count: 0 },
    ],
  };

  // LIFECYCLE HOOKS
  constructor(props) {
    super(props);
    /*This is an inbult method. It is called only once before the component is rendered. 
    This the perfect place to dynamically set the state of the component based on the props
    Don't forget to pass props as a parameter on both the constructor and the super methods */
    /* setting the state of the component dynamically */
    // this.state = this.props.something
  }
  componentDidMount() {
    /* This method is called when the component is rendered into the DOM
    This is the perfect place to make an Ajax call to get data from the server */
    //Ajax call
    //this.setState({data})
  }
  componentDidUpdate(prevProps, prevState) {
    /* Called when the component's state or props is updated. You can compare the previous states/props
    with the current state/props and perform the necessary action e.g making an ajax request  */
  }
  componentWillUnmount() {
    /* called before  a component is removed from the DOM.
    We can use it to do any sort of clean-ups such as clearing any set timers/EventListeners*/
  }

  handleReset = () => {
    const products = this.state.products.map((p) => {
      p.count = 0;
      return p;
    });
    this.setState({ products });
  };
  handleIncrement = (product) => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index].count++;
    this.setState({ products });
  };
  handleDelete = (prodId) => {
    const products = this.state.products.filter((c) => c.id !== prodId);
    this.setState({ products });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalProducts={this.state.products.filter((p) => p.count > 0).length}
        />
        <main className="container">
          <Counters
            products={this.state.products}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
