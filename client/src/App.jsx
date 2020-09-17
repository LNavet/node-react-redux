import React from 'react';
import {Provider} from 'react-redux'
import generateStore from './redux/store'
import HomePage from './components/HomePage';
//import Posts from './components/PostComponent';
//import Formulario from "./components/FormularioComponent";

function App() {
  const store = generateStore()
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;