import React, { useState, useEffect } from 'react';

class Example extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      console.log('print log after 1s!');
    }, 1000);
    window.addEventListener('load', this.loadHandle);
  }

  componentWillUnmount() {
    window.removeEventListener('load', this.loadHandle);
  }

  loadHandle() {
    console.log('load document')
  }

  render() {
    return (
      <h3>useEffect</h3>
    )
  }
}

export default Example;