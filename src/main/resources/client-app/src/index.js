import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom'
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import red from '@material-ui/core/colors/red';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
      primary: blue,
      secondary: red
    },
    typography: {
        useNextVariants: true,
    },
});


ReactDOM.render(

    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter basename="/">
                <Switch>
                    <Route exact path='/app' component={HomePage} />
                    <Route exact path='/app/:componentId' component={HomePage} />
                    <Route path='/' component={LoginPage} />
                </Switch>
            </BrowserRouter>
        </MuiThemeProvider>
    </Provider>

    , document.getElementById('root'));
registerServiceWorker();
