import React from 'react';

class Tickler extends React.Component {
 
  tickle = () => {
    console.log('Tee hee!');
	}
 
  render() {
    return (
      // <button>Tickle me!</button>
			<button onClick={this.tickle}>Tickle me!</button>
    );
  }
}

export default Tickler;