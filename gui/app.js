import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
    return (
    <div>Welcome to React App</div>
    );
};

ReactDOM.render(<App />, document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
}
