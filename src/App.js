import logo from './logo.svg';
import './App.css';
import TodoContainer from './components/containers/TodoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoContainer></TodoContainer>
      </header>
    </div>
  );
}

export default App;
