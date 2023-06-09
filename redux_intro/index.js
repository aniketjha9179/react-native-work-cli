/**
 * @format
 */





import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import store from './components/Redux/store';
import { useSelector } from 'react-redux';


const AppRedux = ()=>(
    <Provider store={store}>
        <App />
    </Provider>

)

AppRegistry.registerComponent(appName, () => AppRedux);
