import React from 'react';
import { TwitterPicker } from 'react-color';
import reactCSS from 'reactcss';

export default class ColorWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor for color wrapper")
    this.state = {
      displayColorPicker: false,
      color: {
        r: '0',
        g: '0',
        b: '0',
        a: '0',
      },
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker })
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false })
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  handleChangeComplete = (color, event) => {
    this.setState({ color: color.rgb, displayColorPicker: !this.state.displayColorPicker }, () => {
      document.body.style.backgroundColor = `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`;
    });
  };

  shouldComponentUpdate(nextState) {
    return this.state.color !== nextState.color;
  }

  render() {
    const styles = reactCSS({
      'default': {
        height: {
          minHeight: "95vh",
        },
        swatch: {
          paddingRight: '20px',
          border: 'none',
          background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
          textDecoration: 'underline',
          cursor: 'pointer',
        },
        bottom: {
          fontSize: '20px'
        },
        popover: {
          zIndex: '2',
        },
        cover: {
          position: 'fixed',
          top: '0px',
          right: '0px',
          bottom: '0px',
          left: '0px',
        },
      },
    });
    return (
    <div>
      <div style={styles.height}>
        {this.props.children}
      </div>
      <div style={styles.bottom}>
        { this.state.displayColorPicker ? <div style={ styles.popover }>
            <div onClick={ this.handleClose }/>
            <TwitterPicker color={ this.state.color } onChange={ this.handleChange } onChangeComplete={this.handleChangeComplete}/>
          </div> : null }
          <button style={ styles.swatch } onClick={ this.handleClick }>change background color</button>
        </div>
    </div>
    );
  }
}