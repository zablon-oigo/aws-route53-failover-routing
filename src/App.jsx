import Hero from "./components/Hero"
import Header from './components/Header'
import Appointment from "./components/Appointment"
function App() {
  return (
    <>
    <div className="w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
      <Header/>
    <Hero/>
    <Appointment/>
    <div className="h-[2000px]">
      
    </div>
    </div>
    </>
  )
}

export default App
