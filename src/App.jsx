import propTypes from 'prop-types';


const Hello = ({ name, age }) => {
    const bornYear = () => new Date().getFullYear() - age
  
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born {bornYear()}</p>
    </div>
  )
}

Hello.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
}

const App = () => {
  const nimi = "Pekka"
  const ika = 20 

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Pavlo" age={2 + 20}/>
      <hr></hr>
      <Hello name={nimi} age={ika}/>
    </div>
  )
}

export default App