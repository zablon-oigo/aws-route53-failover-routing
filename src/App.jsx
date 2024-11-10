import Hero from "./components/Hero"
import Header from './components/Header'
import Appointment from "./components/Appointment"
import Prices from "./components/Prices"
import Contact from "./components/Contact"
function App() {
  return (
    <>
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header/>
    <Hero/>
    <Appointment/>
    <Prices/>
    <Contact/>
    </div>
    </>
  )
}

export default App
