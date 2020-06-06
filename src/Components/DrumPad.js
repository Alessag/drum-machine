import React from "react";

class Drumpad extends React.Component {
  componentDidMount() {
    console.log(this.audio);
    document.addEventListener("keydown", this.handleKeydown);
    window.focus();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeydown);
  }

  handleClick = () => {
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.handleDisplay(this.props.id);
  };

  handleKeydown = (e) => {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play();
      this.audio.currentTime = 0;
      this.props.handleDisplay(this.props.id);
    }
  };
  render() {
    return (
      <div className="drum-pad" id={this.props.id} onClick={this.handleClick}>
        <h1>{this.props.letter}</h1>
        <audio
          id={this.props.letter}
          className="clip"
          src={this.props.src}
          ref={(ref) => (this.audio = ref)}
        ></audio>
      </div>
    );
  }
}

export default Drumpad;
