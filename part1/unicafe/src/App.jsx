import { useState } from 'react'

const Statistics = ({props}) => {
  console.log(props)
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const total = props.total
  const average = props.average
  const positive = props.positive
  return (
      good || neutral || bad ? <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {isNaN(average) ? 0 : average}</p>
      <p>positive {isNaN(positive) ? 0 : positive} %</p>

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

  return (
    <div>
      <h1>give feedback</h1>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>

      <h1>statisics</h1>
      <Statistics props={props}/>
    </div>
  )
}

export default App