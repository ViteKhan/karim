import './App.css';
import { useState } from 'react';
import photo from './photo.jpg';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 5 + 14;
  
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "Really sure?",
      "Think again!",
      "Last chance!",
      "Surely not?",
      "You might regret this!",
      "Give it another thought!",
      "Are you absolutely certain?",
      "This could be a mistake!",
      "Have a heart!",
      "Don't be so cold!",
      "Change of heart?",
      "Wouldn't you reconsider?",
      "Is that your final answer?",
      "You're breaking my heart ;(",
      "I am better than Gleb",
      "YESSSS"
    ];
    
    return phrases[Math.min(noCount, phrases.length - 1)];
  };
  
  const noButtonText = getNoButtonText();
  
  const handleYesClick = () => {
    setYesPressed(true);
  };
  
  const handleNoClick = () => {
    if (noButtonText === 'YESSSS') {
      handleYesClick();
      return;
    }
    setNoCount(noCount + 1);
  };
  
  return (
    <div className="app">
      <div className="valentine-container">
          {yesPressed ? (
            <>
              <img src={photo} alt="" style={{ width: "400px", height: "500px" }}/>
              <div className="text-container">LOVE</div>
            </>
          ) : (
            <>
              <img
                style={{ width: "400px", height: "400px" }}
                src="https://media1.tenor.com/m/n9Hl8cEdNV4AAAAC/ricardo-milos.gif"
                alt=""
              />
              <h1 className="text-container">Will you be my Valentine?</h1>
              <div>
                <button
                  className="yes-button"
                  style={{ fontSize: `${yesButtonSize}px` }}
                  onClick={handleYesClick}
                >
                  Yes
                </button>
                <button
                  className="no-button"
                  onClick={handleNoClick}
                >
                  {noCount === 0 ? "No" : noButtonText}
                </button>
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default App;
