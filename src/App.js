import logo from './logo.svg';
import './App.css';
import Teams from './components/Teams/Teams';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      {/* all data load here  */}
      <Header></Header>
      <Teams></Teams>
     
    </div>
  );
}

export default App;
