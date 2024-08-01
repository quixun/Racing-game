 import React, { useState } from 'react';
 import ReactDOM from 'react-dom' 
 import './main.css'

 function App() {
    // Create states to manage points and 'reset' button  
    const [pointsA, setPointsA] = useState(1); 
    const [pointsB, setPointsB] = useState(1);
    const [showReset, setShowReset] = useState(false);
  

    // The function handles 'Race' button
    const handleRace = () => {
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


    // The function handles 'reset' button
    const handleReset = () => {
      setPointsA(1);
      setPointsB(1);
      setShowReset(false);
    };
  


    // The function handles massage displayed
    const getStatusMessage = () => {
      if (pointsA > pointsB) {
        return 'A is winning';
      } else if (pointsA < pointsB) {
        return 'B is winning';
      } else {
        return 'Same point';
      }
    };


    // The component creates progress bar corresponding to each point of character
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
        <button onClick={handleRace}>Race</button>
        {showReset && <button onClick={handleReset}>Reset</button>}
      </div>
    );
  }

ReactDOM.render(<App />, document.getElementById('root'))

