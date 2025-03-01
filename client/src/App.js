import logo from './logo.svg';
import './App.css';
import ProductList from './components/ProductList'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
      <ProductList/>
      </header>
    </div>
  );
}

export default App;
