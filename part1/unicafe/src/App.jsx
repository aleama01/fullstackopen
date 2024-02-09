import { useState } from 'react'

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>
        {text}
      </td>
      <td>
        {value}
      </td>
    </tr>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  const tot = (good + bad + neutral)
  const avg = (good - bad) / tot
  const positive = good / tot * 100
  return (
    <>
      <h1>Statistics</h1>
      {tot == 0 ?
        <p> No feedback given</p> :
        <table>
          <tbody>
            <StatisticLine text={'Good'} value={good} />
            <StatisticLine text={'Neutral'} value={neutral} />
            <StatisticLine text={'Bad'} value={bad} />
            <StatisticLine text={'All'} value={tot} />
            <StatisticLine text={'Average'} value={avg} />
            <StatisticLine text={'Positive'} value={positive + '%'} />
          </tbody>
        </table>
      }
    </>
  )
}

const Button = ({ text, state, setState }) => {
  const handleFeedback = () => {
    const handler = () => {
      let newValue = state + 1
      setState(newValue)
    }
    return handler
  }
  return (
    <button onClick={handleFeedback()}>{text}</button>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give feedback</h1>
      <br />
      <Button text={'good'} setState={setGood} state={good} />
      <Button text={'neutral'} setState={setNeutral} state={neutral} />
      <Button text={'bad'} setState={setBad} state={bad} />

      <br />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App