import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'brosa/components/City/city-style';

@CSSModules(styles)
export default class City extends React.Component {
  static propTypes = {
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    clientX: React.PropTypes.number.isRequired,
    clientY: React.PropTypes.number.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    this.maxRotationX = 0.5;
    this.maxRotationY = 1.5;
  }

  render() {
    const halfWindowW = this.props.width * 0.5;
    const halfWindowH = this.props.height * 0.5;

    let rotateY = ((-this.props.clientX + halfWindowW) / halfWindowW) * this.maxRotationY;
    let rotateX = ((this.props.clientY - halfWindowH) / halfWindowH) * this.maxRotationX;

    if( rotateY > this.maxRotationY) rotateY = this.maxRotationY;
    if( rotateY < -this.maxRotationY ) rotateY = -this.maxRotationY;
    if( rotateX > this.maxRotationX) rotateX = this.maxRotationX;
    if( rotateX < -this.maxRotationX ) rotateX = -this.maxRotationX;

    return (
      <div styleName="city-background-wrapper">
        <div styleName="city-floating-background"
          style={{
            transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
            WebkitTransform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
            msTransform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)',
          }}>
          <img styleName="city-edmonton"
            src={require("brosa/assets/edmonton.svg")} />
          <img styleName="city-edmonton-front"
            src={require("brosa/assets/edmonton_front.svg")} />
        </div>
      </div>
    );
  }
}
