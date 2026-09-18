import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ExpertQuoteSection from './components/ExpertQuoteSection'
import RegistrationModal from './components/registration/RegistrationModal'
import PartnersSection from './components/PartnersSection'
import WhyAI57Section from './components/WhyAI57Section'
import VideoSection from './components/VideoSection'
import Footer from './components/Footer'
import StickyRegisterBar from './components/StickyRegisterBar'
import { RegistrationModalProvider } from './context/RegistrationModalContext'

function App() {
  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <HeroSection />
          {/* <RegistrationSection /> */}
          <ExpertQuoteSection />
          {/* <PartnersSection /> */}
          <WhyAI57Section />
          <VideoSection />
        </main>
        <Footer />
      </div>
      <StickyRegisterBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}

export default App
