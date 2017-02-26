import React from 'react';
import ReactDOM from 'react-dom';

function Application() {
  return (
    <div>
      <h1>Hello React!</h1>
      <p>I was rendered from the application component!</p>
    </div>
  );
}

ReactDOM.render(<Application/>,
    document.getElementById('container'));
