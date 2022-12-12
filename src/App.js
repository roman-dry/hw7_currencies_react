import './App.css';
import Currencies from './Components/Currencies';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='container'>
		<h1 className='mb-3'>Currencies</h1>
      <Currencies />
    </div>
  );
}

export default App;
