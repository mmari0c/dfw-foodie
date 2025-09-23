import './App.css'
import Grid from './components/Grid'

function App() {
  return (
    <div className='App'>
      <nav class="navbar">
        <div class="navbar__inner">
          <div class="brand">
            <div class="brand__logo">DFW</div>
            <span class="brand__name">Foodie</span>
          </div>
        </div>
      </nav>
      <Grid />
    </div>
  )
}

export default App
