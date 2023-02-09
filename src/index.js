import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import './fonts/Marcellus/Marcellus-Regular.ttf';
import './fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import rootReducer from "./store/reducers/reducers";
import { Provider } from "react-redux";
import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./store/sagas/sagas";
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware, logger))
);
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
