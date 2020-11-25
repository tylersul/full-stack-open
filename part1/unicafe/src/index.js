import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({text, value, setValue}) => {
  const setToValue = () => {
    setValue(value + 1)
  }

  return (
    <button onClick={setToValue}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return (
    <p>{text} {value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text='good' value={good} setValue={setGood}/>
      <Button text='neutral' value={neutral} setValue={setNeutral}/>
      <Button text='bad' value={bad} setValue={setBad}/>
      <h1>Statistics</h1>
      <Statistic text='good' value={good}/>
      <Statistic text='neutral' value={neutral}/>
      <Statistic text='bad' value={bad}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)