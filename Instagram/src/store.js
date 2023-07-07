import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import { composeWithDevTools} from '@redux-devtools/extension'

const middleware = [thunk]

const store =createStore(
    rootReducer,
    composeWithDevTools(...middleware)
)

export default store;