const Header=props =>{
  return(
  <h1>{props.course.name}</h1>
  )
}
const Part = props=>{
  return(
    <>
    <p>
        {props.name} {props.exercises}
      </p>
    </>
  )
}
const Content=props =>{
  return(
    <>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </>
  )
}
const Total=props =>{
  return(
    <>
      <p>Number of exercises {' '} 
        {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greet() {
    console.log('hello, my name is ' + this.name+'su edad'+this.age)
  }
  
}

const adam = new Person('Adam Ondra', 29)
adam.greet()
console.log('hola' + adam.name + adam.age)

const janja = new Person('Janja Garnbret', 23)
janja.greet()


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 16
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      
    </div>
  )
}
export default App