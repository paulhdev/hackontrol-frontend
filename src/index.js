import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.css';
import Routes from './routes';

class Root extends React.Component {
	render() {
		return (
			<>
				<Routes />
			</>
		);
	}
}

ReactDOM.render(<Root />, document.getElementById('root'));
