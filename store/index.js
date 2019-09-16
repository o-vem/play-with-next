import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'js-cookie'

import rootReducer from './reducers'

const persistConfig = () => ({
    key: 'root',
    storage: new CookieStorage(Cookies)
})

const persistedReducer = persistReducer(persistConfig(), rootReducer)

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
);

// const store = createStore(persistedReducer, /* preloadedState, */ enhancer);
// const persistor = persistStore(store)

const getStore = (someProps) => {
    const isServer = typeof window === 'undefined'
    console.log(`getStore called on ${isServer ? 'server' : 'browser'}`)

    if (isServer) {
        let store = createStore(persistedReducer, /* preloadedState, */ enhancer);
    
        return store
    } 

    const {persistStore, persistReducer} = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    const persistConfig = {
        key: 'nextjs',
        whitelist: ['fromClient'], // make sure it does not clash with server keys
        storage
    };

    const persistedReducer = persistReducer(persistConfig, reducer);
    const store = makeConfiguredStore(persistedReducer, initialState);

    store.__persistor = persistStore(store); // Nasty hack

    return store;

    console.log('someProps')
    console.dir(someProps)
    let store = createStore(persistedReducer, /* preloadedState, */ enhancer);
    persistStore(store)

    return store
}

export {
    // store,
    // persistor,
    getStore,
}