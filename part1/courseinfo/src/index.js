import React from 'react'
import ReactDOM from 'react-dom'

/*
const Title=({course})=><h1>{course}</h1>
*/

const Title=(props)=>{
  return  <h1>{props.course}</h1>
}
const ListTopic=(props)=>{
  return (
    <p>
        {props.part} {props.exercise}
      </p>
  )
}
const ExerciseTotal=(props)=>{
  return <p>Number of exercises {props.exercises.map(elem => elem).reduce((acc, current) => acc + current, 0)}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Title course={course}></Title>
      <ListTopic part={part1} exercise={exercises1}/>
      <ListTopic part={part2} exercise={exercises2}/>
      <ListTopic part={part3} exercise={exercises3}/>
      <ExerciseTotal exercises={[exercises1,exercises2,exercises3]} />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))