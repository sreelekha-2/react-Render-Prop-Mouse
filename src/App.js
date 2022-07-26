import React from 'react';
import './style.css';
import Mouse from './components/Mouse';

export default function App() {
  return (
    <div>
      <Mouse
        render={(mouse) => {
          return (
            <img
              style={{
                width: '250px',
                position: 'absolute',
                left: mouse.x,
                top: mouse.y,
              }}
              src="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
            />
          );
        }}
      />
    </div>
  );
}
