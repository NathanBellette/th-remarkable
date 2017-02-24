import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {RouterStore, syncHistoryWithStore} from 'mobx-react-router';
import {AppState} from './stores/AppState';
import routes from './routes';
import './index.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';

useStrict(true);

injectTapEventPlugin();

const routerStore = new RouterStore();
const appState = new AppState();
const history = syncHistoryWithStore(browserHistory, routerStore);

const stores = {
  routerStore,
  appState
};

render(
  <Provider {...stores}>
    <Router routes={routes} history={history}/>
  </Provider>,
  document.getElementById('app')
);
