import React from 'react';
import '../style.css';

class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handler = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };
  render() {
    const { x, y } = this.state;
    return (
      <div className="mouse" onMouseMove={this.handler}>
        <p>Move the mouse around</p>
        <p>
          Mouse position is x : {x} and y : {y}
        </p>
        {/* <img
          src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
          style={{ width: '250px', position: 'absolute', left: x, top: y }}
        /> */}
        {this.props.render(this.state)}
      </div>
    );
  }
}

export default Mouse;
