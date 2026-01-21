import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Partners from './components/Partners'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'
import './App.css'

export default function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Router>
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <div className="w-full bg-white overflow-x-hidden">
              <Navbar scrollToSection={scrollToSection} />
              <main>
                <Home />
                <About />
                <Services />
                <Partners />
                <FAQ />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />

        {/* Privacy Policy Page */}
        <Route
          path="/privacy-policy"
          element={
            <div className="w-full bg-white overflow-x-hidden">
              <Navbar scrollToSection={scrollToSection} />
              <PrivacyPolicy />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  )
}