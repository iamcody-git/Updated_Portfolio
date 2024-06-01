import { useState } from 'react'
// import Toggle from './Components/Toggle/Toggle'
import Intro from './Components/Intro/Intro'
import About from './Components/About/About'
import Skill from './Components/Skills/Skill'
import ProductList from './Components/ProductList/ProductList'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      {/* <Toggle /> */}
      <Intro />
      <About />
      <Skill />
      <ProductList />
      <Contact />
      <Footer />
      
    </>
  )
}

export default App
