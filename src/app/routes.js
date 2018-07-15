import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Bubbles from './containers/Bubbles';
import PageNotFound from './components/page-not-found';

export default (
	<Switch>
		<Route exact path="/" component={Bubbles} />
		<Route exact path="/bubble" component={Bubbles} />
		<Route path="*" component={PageNotFound} />
	</Switch>
);
