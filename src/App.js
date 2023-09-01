import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';



function App() {
  return (
    <div className="App">
      <>
        <PersonCard firstname={'Jane'} lastname={'Doe'} hair={'Black'} count={45} />
        <PersonCard firstname={'John'} lastname={'Smith'} hair={'Brown'} count={88} />
      </>
    </div>
  );
}

export default App;
