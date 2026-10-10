import { useState } from 'react'

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p>{text} {value} {text === "average" | text === "positive" ? '%' : ''}</p>
    </div>
  )
}
const Statistics = ({props}) => {
  console.log('PROPS', props)
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.total
  const average = props.average
  const positive = props.positive
  return (
      good || neutral || bad ? <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={isNaN(average) ? 0 : average} />
      <StatisticLine text="positive" value={isNaN(positive) ? 0 : positive} />

  </div> :
  <p>No feedback given</p>) 
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + bad + neutral
  const average = ((good * 1) + (bad * -1) + (neutral * 0)) / total
  const positive = (good / total) * 100
  const props = {
    good: good,
    neutral: neutral,
    bad: bad,
    total: total,
    average: average,
    positive: positive
  }
  const increaseGood = () => {
    const newGood = good + 1
    setGood(newGood)
  }
  const increaseNeutral = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
  }
  const increaseBad = () => {
    const newBad = bad + 1
    setBad(newBad)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={increaseGood}>good</button>
      <button onClick={increaseNeutral}>neutral</button>
      <button onClick={increaseBad}>bad</button>

      <h1>statisics</h1>
      <Statistics props={props}/>
    </div>
  )
}

export default App