import React, { useContext } from 'react';
import { ScoreContext } from '../App';

export default function Result({ resetGame }) {
  const { score, total } = useContext(ScoreContext);

  return (
    <div className='result-container'>
      <div className='display-area'>
        <p className='result-heading'> <b> Final Results </b> </p>
        <p className='attempted'> <b> {score} out of {total} questions - ({(score / total) * 100} %) </b> </p>
        <button className='restart-game' onClick={resetGame}> Restart Game </button>
      </div>
    </div>
  )
}
