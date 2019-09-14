import React from 'react';

import GlobalStyle from './styles/Global';
import Header from './components/common/header';
import Footer from './components/common/footer';

class App extends React.Component {
	render() {
		return (
			<>
				<GlobalStyle />
				<Header />
				{this.props.children}
				<Footer />
			</>
		);
	}
}

export default App;
