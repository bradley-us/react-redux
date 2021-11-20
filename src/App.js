import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import Filteroptions from './components/pure/FilterOptions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
        <TodoFormContainer></TodoFormContainer>
        {/* Filter options contain Filter Container */}
        <Filteroptions></Filteroptions>
      </header>
    </div>
  );
}

export default App;
