import React, { Component } from 'react';

class Home extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      homePage: true,
    };
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
      </div>
    );
  }
}

export default Home;
