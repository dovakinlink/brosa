import React from 'react';
import CSSModules from 'react-css-modules';

import {
  City,
  Masthead,
} from 'brosa/components';

import styles from 'brosa/components/Home/home-style';

@CSSModules(styles)
export default class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      windowHeight: 0,
      windowWidth: 0,
      clientX: 0,
      clientY: 0,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  }

  handleMouseMove(event) {
    this.setState({
      clientX: event.clientX,
      clientY: event.clientY,
    });
  }

  componentDidMount() {
    // After we're mounted on the client we need to force
    // a resize so our windowHeight and windowWidth aren't 0.
    // We can't access window on the server.
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <div styleName='cover'
        onMouseMove={this.handleMouseMove}>
        <Masthead />
        <City
          height={this.state.windowHeight}
          width={this.state.windowWidth}
          clientX={this.state.clientX}
          clientY={this.state.clientY} />
      </div>
    )
  }
}
