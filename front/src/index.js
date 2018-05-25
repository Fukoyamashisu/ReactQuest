import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


//MATERIAL UI
import { MuiThemeProvider,createMuiTheme } from '@material-ui/core/styles';

//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';



import {indigo,purple,pink} from '@material-ui/core/colors';


const theme = createMuiTheme({
    palette: {
        primary: indigo,
        secondary: pink
    },
    overrides: {
        MuiButton: {
            root: {
                color: 'white',
                '&:hover': {
                    backgroundColor: purple
                }
            }
        }
    }
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
