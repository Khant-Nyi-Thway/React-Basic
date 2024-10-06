//import './App.css';
import MCount from './components/counting_map/MultipleCount';
import SCount from './components/counting_map/SingleCount';

function App() {
  return (
    <div className="App">

      {/* Multiple line Map Style */}
      {
        [0,1,2,3].map((digit) => {
            return ( <MCount key={digit}></MCount> );
        })
      }
      <hr></hr>
      {/* Single line Map Style */}
      {
        [0,1,2,3].map(digit => <SCount key={digit} />)
      }

    </div>
  );
}

export default App;