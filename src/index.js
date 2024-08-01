 import React, { useState } from 'react';
 import ReactDOM from 'react-dom' 
 import './main.css'

 function App() {
    const [pointsA, setPointsA] = useState(1);
    const [pointsB, setPointsB] = useState(1);
    const [showReset, setShowReset] = useState(false);
  
    const handleIncreasePoints = () => {
      const randomCharacter = Math.random() > 0.5 ? 'A' : 'B';
      if (randomCharacter === 'A') {
        setPointsA(prev => {
          const newPoints = prev + 1;
          setShowReset(newPoints > 1 || pointsB > 1);
          return newPoints;
        });
      } else {
        setPointsB(prev => {
          const newPoints = prev + 1;
          setShowReset(newPoints > 1 || pointsA > 1);
          return newPoints;
        });
      }
    };
  
    const handleReset = () => {
      setPointsA(1);
      setPointsB(1);
      setShowReset(false);
    };
  
    const getStatusMessage = () => {
      if (pointsA > pointsB) {
        return 'A is winning';
      } else if (pointsA < pointsB) {
        return 'B is winning';
      } else {
        return 'Same point';
      }
    };

function ProgressBar({ points }) {
    const bars = [];
    for (let i = 0; i < points; i++) {
      bars.push(<div key={i} className="progress-bar"></div>);
    }
  
    return <div className="progress-container">{bars}</div>;
  }

    return (
      <div className="App">
        <h2 className="status">{getStatusMessage()}</h2>
        <div className="character-info">
          <div className="character">
            <span>Character A</span>
            <div className="progress-container">
                <ProgressBar points={pointsA}/>
            </div>
          </div>
          <div className="character">
            <span>Character B</span>
            <div className="progress-container">
            <ProgressBar points={pointsB}/>
            </div>
          </div>
        </div>
        <button onClick={handleIncreasePoints}>Race</button>
        {showReset && <button onClick={handleReset}>Reset</button>}
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'))

