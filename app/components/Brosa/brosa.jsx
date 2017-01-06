import React from 'react';
import CSSModules from 'react-css-modules';

import {
  Home
} from 'brosa/components';

import styles from 'brosa/components/Brosa/brosa-style';

@CSSModules(styles)
export default class Brosa extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
