import React from "react";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";

import Input from "./components/Input";
import inputReducer from "./components/Redux/inputReducer";


const store = createStore(
  inputReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
store.subscribe(() => console.log(store.getState()));

function App() {
  

  return (
    <Provider store={store}>
      <Input />
    </Provider>
  );
}



export default App;
