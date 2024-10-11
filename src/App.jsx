import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './components/data'

function App() {

  const cards = data.map((item) => {
    return (
      <Card 
        key={item.title}
        {...item}
      />
    )
  })
  return (
    <>
      <Navbar />
      {cards}
    </>
  )
}

export default App
