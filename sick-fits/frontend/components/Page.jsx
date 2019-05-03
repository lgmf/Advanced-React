import React, { Component } from 'react';

import Header from './Header';
import Meta from './Meta';

class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Page;
