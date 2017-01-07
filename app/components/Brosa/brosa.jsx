import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'brosa/components/Brosa/brosa-style';

@CSSModules(styles)
export default class Brosa extends React.Component {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.arrayOf(React.PropTypes.node),
      React.PropTypes.node
    ])
  };

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
