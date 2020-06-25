import React from "react";
import { CirclePicker } from "react-color";
import { Popover, OverlayTrigger, Button } from "react-bootstrap";
import reactCSS from "reactcss";

const defaultColors = {
  black: {
    rgb: {
      r: "0",
      g: "0",
      b: "0",
      a: "100",
    },
  },
  white: {
    rgb: {
      r: "255",
      g: "255",
      b: "255",
      a: "100",
    },
  },
};

export default class ColorWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: {
        r: "0",
        g: "0",
        b: "0",
        a: "0",
      },
      textColor: {
        r: "0",
        g: "0",
        b: "0",
        a: "100",
      },
      darkTheme: false,
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb });
  };

  handleTextColorChange = (color) => {
    this.setState({ textColor: color.rgb });
  };

  handleChangeComplete = (color, event) => {
    this.setState(
      { color: color.rgb, displayColorPicker: !this.state.displayColorPicker },
      () => {
        document.body.style.backgroundColor = `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`;
      }
    );
  };

  handleTextColorChangeComplete = (color, event) => {
    this.setState({
      textColor: color.rgb,
      displayColorPicker: !this.state.displayColorPicker,
    });
  };

  handleDarkThemeClick = () => {
    if (!this.state.darkTheme) {
      this.handleChangeComplete(defaultColors.black);
      this.handleTextColorChangeComplete(defaultColors.white);
    } else {
      this.handleChangeComplete(defaultColors.white);
      this.handleTextColorChangeComplete(defaultColors.black);
    }
    this.setState({ darkTheme: !this.state.darkTheme });
  };

  shouldComponentUpdate(nextState) {
    return this.state.color !== nextState.color;
  }

  render() {
    const styles = reactCSS({
      default: {
        height: {
          minHeight: "95vh",
          color: `rgba(${this.state.textColor.r}, ${this.state.textColor.g}, ${this.state.textColor.b}, ${this.state.textColor.a})`,
          borderColor: `rgba(${this.state.textColor.r}, ${this.state.textColor.g}, ${this.state.textColor.b}, ${this.state.textColor.a})`,
        },
        swatch: {
          paddingRight: "20px",
          border: "none",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
          color: `rgba(${this.state.textColor.r}, ${this.state.textColor.g}, ${this.state.textColor.b}, ${this.state.textColor.a})`,
          textDecoration: "underline",
          cursor: "pointer",
        },
        bottom: {
          fontSize: "20px",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
        clearButton: {
          border: "none",
          background: "none",
          paddingTop: "10px",
          cursor: "pointer",
          textDecoration: "underline",
          color: "black",
        },
      },
    });
    const Pop = (
      <Popover id="popover-basic">
        <Popover.Content>
          <h6>change background color:</h6>
          <CirclePicker
            triangle="hide"
            color={this.state.color}
            onChange={this.handleChange}
            onChangeComplete={this.handleChangeComplete}
          />
          <h6 className="main-content">change text color:</h6>
          <CirclePicker
            triangle="hide"
            color={this.state.textColor}
            onChange={this.handleTextColorChange}
            onChangeComplete={this.handleTextColorChangeComplete}
          />
          {this.state.darkTheme ? (
            <Button
              style={styles.clearButton}
              onClick={this.handleDarkThemeClick}
            >
              light theme
            </Button>
          ) : (
            <Button
              style={styles.clearButton}
              onClick={this.handleDarkThemeClick}
            >
              dark theme
            </Button>
          )}
        </Popover.Content>
      </Popover>
    );
    return (
      <div>
        <div style={styles.height} onClick={this.handleClose}>
          {this.props.children}
        </div>
        <div style={styles.bottom}>
          <OverlayTrigger trigger="click" placement="top" overlay={Pop}>
            <button style={styles.swatch} onClick={this.handleClick}>
              change colors
            </button>
          </OverlayTrigger>
        </div>
      </div>
    );
  }
}
