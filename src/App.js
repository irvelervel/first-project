import './App.css'
import ExampleWithClass from './components/ExampleWithClass'
import HeadingComponent from './components/HeadingComponent'
import NewComponent from './components/NewComponent'
// I'm importing the component called NewComponent from its file

// App is a React Component
// A React Component can be as easy as a function returning JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeadingComponent
          h1content="Hello!"
          subtitle="React testing here!"
          customClass="top-heading"
        />
        <ExampleWithClass myCssClass="green" />
        <img
          src="https://placekitten.com/300"
          className="App-logo"
          alt="logo"
        />
        <h1 className="text-red">HELLO REACT!</h1>
        <NewComponent />
        <HeadingComponent h1content="Goodbye!" subtitle="See you soon :)" />
      </header>
    </div>
  )
}

export default App
