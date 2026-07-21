import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore
        Name="Vaibhavi"
        School="Vignan Institute of Engineering for Women"
        Total={480}
        goal={6}
      />
    </div>
  );
}

export default App;