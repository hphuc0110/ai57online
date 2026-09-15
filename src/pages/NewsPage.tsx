import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NewsSection from '../components/NewsSection'
import StickyRegisterBar from '../components/StickyRegisterBar'
import RegistrationModal from '../components/registration/RegistrationModal'
import { RegistrationModalProvider } from '../context/RegistrationModalContext'

export default function NewsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Tin tức — AI57'
    return () => {
      document.title = 'AI57'
    }
  }, [])

  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Header />
        <main>
          <NewsSection />
        </main>
        <Footer />
      </div>
      <StickyRegisterBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}
