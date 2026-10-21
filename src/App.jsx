import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import WhyJoin from './components/WhyJoin.jsx'
import Schedule from './components/Schedule.jsx'
import RegisterForm from './components/RegisterForm.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

function App() {
  return (
    <>
      <Hero />
      <main>
        <Features />
        <WhyJoin />
        <Schedule />
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}

export default App
