import React from 'react';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers.js/CounterContainer';
import TodosContainer from './containers.js/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer number={0} />
      <hr />
      <TodosContainer />
    </div>
  );
}

export default App;
