import React, { useState, useEffect, useContext } from 'react';
import { que, ScoreContext } from '../App';
import Result from './Result';

export default function QuestionBox() {
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [color, setColor] = useState('blue');
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = que[currentQueIndex];

  function handleOptionClick(optionId) {
    const isCorrect = currentQuestion.options.find(option => option.id === optionId)?.isCorrect;
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }
    if (currentQueIndex === que.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQueIndex(prevIndex => prevIndex + 1);
    }
  }
  useEffect(() => {
    console.log(`Your Current score: ${score}`);

  }, [score]);
  function resetGame() {
    setCurrentQueIndex(0);
    setScore(0);
    setColor('blue');
    setShowResult(false);
  }

  return (
    <ScoreContext.Provider value={{ score, total: que.length }}>
      {!showResult ? (
        <div className='question-container'>
          <h1 className='heading'>
            Test Your Knowledge!!
          </h1>
          <div className='question-heading'>
            <p>
              <b>{currentQueIndex + 1} of {que.length}</b>
            </p>
            <h2 className='Questions' style={{ color: color }}>{currentQuestion.text}</h2>
          </div>
          <div className='options'>
            {currentQuestion.options.map(option => (
              <div
                key={option.id}
                className='option-btn btn-7'
                onClick={() => handleOptionClick(option.id)}
              >
                {option.text}
              </div>
            ))}
          </div>
          <div className='last'>
            <button className='opt-btn' onClick={() => setColor('Red')}>
              Highlight
            </button>
            <button className='opt-btn-2' onClick={() => setColor('blue')}>
              Remove Highlight
            </button>
          </div>
        </div>
      ) : <Result resetGame={resetGame} />}
    </ScoreContext.Provider>
  );
}
