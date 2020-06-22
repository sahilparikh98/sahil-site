import React from 'react';
import { BlockPicker } from 'react-color';
import reactCSS from 'reactcss';

export default class ColorWrapper extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor for color wrapper")
    this.state = {
      displayColorPicker: false,
      color: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
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
    this.setState({ color: color.rgb });
  };

  shouldComponentUpdate(nextState) {
    return this.state.color !== nextState.color;
  }

  render() {
    console.log("rerender")
    const styles = reactCSS({
      'default': {
        color: {
          minHeight: "100vh",
          backgroundColor: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
        },
        swatch: {
          padding: '5px',
          background: '#fff',
          borderRadius: '1px',
          boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
          display: 'inline-block',
          cursor: 'pointer',
        },
        popover: {
          position: 'absolute',
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
    <div style={styles.color}>
      {this.props.children}
      <button style={ styles.swatch } onClick={ this.handleClick }>color</button>
      { this.state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ this.handleClose }/>
          <BlockPicker color={ this.state.color } onChange={ this.handleChange } onChangeComplete={this.handleChangeComplete}/>
        </div> : null }
    </div>);
  }
} 