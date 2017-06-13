import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ToggleButton from './components/ToggleButton';
import Address from './components/Address';
import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';
import Tickler from './components/Tickler';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

ReactDOM.render(
 	<div>
	  <ToggleButton />
		<Address street="Servant St" city="Bedford" />
		<element />
	</div>,
	document.getElementById('root2')
);

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root3')
  );
	
	ReactDOM.render(
		<ImageSlider />,
		document.getElementById('root4')
	);
	
	ReactDOM.render(
		<Bomb />,
		document.getElementById('root5')
	);

	// ReactDOM.render(
	// 	<ProductTable products={PRODUCTS} />,
	// 	document.getElementById('container')
	// );
	
	ReactDOM.render(
		<Tickler />,
		document.getElementById('root8')
	);
}

setInterval(tick, 1500);
