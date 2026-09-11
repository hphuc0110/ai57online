import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HLEContent from '../components/hle/HLEContent'
import StickyRegisterBar from '../components/StickyRegisterBar'
import RegistrationModal from '../components/registration/RegistrationModal'
import { RegistrationModalProvider } from '../context/RegistrationModalContext'

export default function HLEPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Hồng Lĩnh Education — AI57'
    return () => {
      document.title = 'AI57'
    }
  }, [])

  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <HLEContent />
        </main>
        <Footer />
      </div>
      <StickyRegisterBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}
