import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ToggleButton from './components/ToggleButton';
import Address from './components/Address';
import ImageSlider from './components/ImageSlider';
import Bomb from './components/Bomb';
import Product from './components/Product';
import Tickler from './components/Tickler';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';
import Clicker from './components/SyntheticEvent';
import DigitalClicker from './components/DigitalClicker';
import YouTubeDebugger from './components/YouTubeDebugger';
import ControlledInput from './components/ControlledInput';
import EssayForm from './components/EssayForm';
import FlavorForm from './components/FlavorForm';

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
		
	ReactDOM.render(
		<Tickler />,
		document.getElementById('root8')
	);
	
	ReactDOM.render(
		<Keypad />,
		document.getElementById('root9')
	);
	
	ReactDOM.render(
		<EyesOnMe />,
		document.getElementById('root10')
	);
	
	ReactDOM.render(
		<Clicker />,
		document.getElementById('root11')
	);
	
	ReactDOM.render(
		<DigitalClicker />,
		document.getElementById('root12')
	);
	
	ReactDOM.render(
		<YouTubeDebugger />,
		document.getElementById('root13')
	);
	
	ReactDOM.render(
		<ControlledInput />,
		document.getElementById('root14')
	);
	
	ReactDOM.render(
		<EssayForm />,
		document.getElementById('root15')
	);
	
	ReactDOM.render(
		<FlavorForm />,
		document.getElementById('root16')
	);
}

setInterval(tick, 1500);
