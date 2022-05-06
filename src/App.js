import './App.css';
import Users from './components/Users';
import Counter from './components/Counter';
import get from './components/get';
import GetApi from './components/services/GetApi';

function App() {
  return (
    <div className="App">
      <div>
      <h1>Users name</h1>
        <Users />
      </div>
      <div>
        <Counter/>
      </div>
      <div>
        <GetApi/>
      </div>
    </div>
 
  );
}

export default App;
