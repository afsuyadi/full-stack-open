import Header from './Header';
import Content from './Content';
import Total from './Total';
import {useState} from 'react';

const App = () => {
  const [counter, setCounter ] = useState(0)
  const increaseOne = () => setCounter(counter+1)
  const decreaseOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)
  // setTimeout(() => setCounter(counter + 1), 1000)
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React',
    exercises: 10
    },
    {part: 'Using props to pass data',
    exercises: 7
     },
    {
    part: 'State of a component',
    exercises: 14
    }
  ]
  // console.log('rendering....', counter)

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      <div>{counter}</div>
      <button onClick={increaseOne}>
        plus
      </button>
      <button onClick={decreaseOne}>
        minus
      </button>
      <button onClick={setToZero}>
        reset
      </button>
      {/* <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App