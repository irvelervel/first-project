import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App' // the path doesn't include .js for Components!

const root = ReactDOM.createRoot(document.getElementById('root'))
// creating a react root element out of an empty div in index.html
root.render(<App />) // invoking the App component from './App'
// we're using that root element for rendering App
// what is App? App is a React Component

// index.js is where all the React "engine" gets initialized
