import React, { Component } from "react";

class Basics extends Component {
  // A collection of data that dictates how the template should be rendered
  state = {
    imageUrl: "https://picsum.photos/200",
    languages: [
      { id: 1, name: "HTML" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Python" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <h4 style={{ fontWeight: 800 }}>My fav Image</h4>
        <img src={this.state.imageUrl} alt="" />
        {/* coditional header (only rendered if there is at least one language) */}
        {this.state.languages.length !== 0 && (
          <h4 style={{ fontWeight: 800 }}>My skills</h4>
        )}
        {/* onditional rendering of list items */}
        {this.renderLanguagesList()}
      </React.Fragment>
    );
  }
  renderLanguagesList() {
    if (this.state.languages.length === 0)
      return <p>Ops! languages could not be loaded</p>;
    return (
      <ul>
        {this.state.languages.map(lang => (
          <li key={lang.id}>{lang.name}</li>
        ))}
      </ul>
    );
  }
}

export default Basics;
