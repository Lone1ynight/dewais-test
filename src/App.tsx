import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Search } from './components/search/Search';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Search />
      </div>
    </Provider>
  );
}

export default App;
