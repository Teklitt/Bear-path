import logo from './images/BearPath Logo.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>BearPath</p>
        <a
          className="App-link"
          href="https://www.figma.com/file/r24wBhKeSLYUME1kP1DoTy/Product-Design%2FMockUp?node-id=0%3A1&mode=dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to BearPath Figma Design
        </a>
      </header>
    </div>
  )
}

export default App
