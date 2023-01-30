import { Component } from 'react'
// class components in React have to extend from the main class component
// in the React Library

class ExampleWithClass extends Component {
  render() {
    return <h1 className={this.props.myCssClass}>Class component!</h1>
    // in a class component the props are going to be found on an object
    // specifically called "props"; you can find it on "this"
    // "this" point to the component itself!
  }
}

export default ExampleWithClass

// in a Class Component you're going to wrap your return statement
// in a method called render()
// render() is mandatory! without it the class component will not work :(
