import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import appReducer from './reducers/'

// the following import allows us to use bootstrap across our entire project
// we will not be using this directly, but we will be using it through 
// the react-boostrap package
import 'bootstrap/dist/css/bootstrap.css';

// here we create the store for redux from our combined reducers - Will

const store = createStore(appReducer);

ReactDOM.render(
	// here we set up the router for react-router to work properly for client side routing
	// we also set the store for redux and pass it to the Provider - Will
	<Provider store={store}>
		<Router>
			<App />
		</Router>
	</Provider>, document.getElementById('root'));
registerServiceWorker();
