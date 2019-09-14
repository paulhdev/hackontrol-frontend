import React from 'react';

import GlobalStyle from './styles/Global';
import Header from './components/header';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Header />
				{this.props.children}
				{/* Implementar o footer */}
				{/* <Footer /> */}
			</>
		);
	}
}

export default App;
