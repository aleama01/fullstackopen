import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [best, setBest] = useState(0)
  const [votes, setVotes] = useState({})
  const [selected, setSelected] = useState(0)

  const handleRandomAnecdote = () => {
    const handler = () => {
      const randomIdx = Math.floor(Math.random() * anecdotes.length)
      setSelected(randomIdx)
    }
    return handler
  }

  const handleVote = () => {
    const handler = () => {
      const votesTmp = { ...votes }
      if (!votesTmp[selected]) {

        votesTmp[selected] = 0
      }
      votesTmp[selected] += 1

      if (votesTmp[selected] > votes[best]) {
        let newBest = selected
        setBest(newBest)
      }
      setVotes(votesTmp)
    }
    return handler
  }
  return (
    <div>
      {anecdotes[selected]}
      <br />
      <p>has {votes[selected]} votes</p>
      <button onClick={handleRandomAnecdote()}>next anecdote</button>
      <button onClick={handleVote()}>vote</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[best]}</p>
      <p>Has {votes[best]} votes</p>
    </div>
  )
}

export default App