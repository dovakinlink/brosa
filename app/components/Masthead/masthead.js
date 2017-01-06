import React from 'react';
import CSSModules from 'react-css-modules';

import styles from 'brosa/components/Masthead/masthead-style';

@CSSModules(styles)
export default class Masthead extends React.Component {
  render() {
    return (
      <div styleName="masthead">
        <h1 styleName="name">Jesse Farebrother</h1>
        <h3 styleName="descript">
          Computer Science student at the <a href="https://ualberta.ca">University of Alberta</a>.
        </h3>
        <h2 styleName="moreToCome">
          More to come <span styleName="dotStyle">.</span>
        </h2>
        <table styleName="nav">
          <tbody>
            <tr>
              <td>
                <span><a href="/about">about</a></span>
                <span><a href="/blog">blog</a></span>
                <span><a href="/resume">résumé</a></span>
                <span><a href="/contact">contact</a></span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}
