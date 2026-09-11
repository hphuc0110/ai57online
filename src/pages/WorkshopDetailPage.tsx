import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { getWorkshopPrice, roadmapLevels } from '../data/roadmap'
import { getWorkshopContent } from '../data/workshopContent'
import { useRegistrationModal, RegistrationModalProvider } from '../context/RegistrationModalContext'
import RegistrationModal from '../components/registration/RegistrationModal'

function findModule(moduleNumber: number) {
  for (const level of roadmapLevels) {
    const mod = level.modules.find((m) => m.number === moduleNumber)
    if (mod) return { level, module: mod }
  }
  return null
}

function WorkshopDetailInner() {
  const { moduleId = '', wsCode = '' } = useParams()
  const moduleNumber = Number(moduleId)
  const { openRegistration } = useRegistrationModal()
  const [activeSession, setActiveSession] = useState<number | null>(null)

  const found = useMemo(() => findModule(moduleNumber), [moduleNumber])
  const workshop =
    found?.module.workshops.find((w) => w.code === wsCode) ??
    found?.module.advancedWorkshops?.find((w) => w.code === wsCode)
  const content = getWorkshopContent(moduleNumber, wsCode.toUpperCase())
  const isAdvanced = workshop?.meta === 'Advanced'
  const priceLabel = getWorkshopPrice(moduleNumber, isAdvanced)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (content) {
      document.title = `${content.title} — AI57`
    }
    return () => {
      document.title = 'AI57'
    }
  }, [content])

  if (!found || !workshop || !content) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-extrabold text-hero-navy">Không tìm thấy workshop</h1>
        <Link to="/lo-trinh" className="mt-4 inline-block text-primary font-bold hover:underline">
          ← Quay lại lộ trình
        </Link>
      </div>
    )
  }

  const { module, level } = found
  const accentBg = isAdvanced ? 'bg-advanced' : 'bg-primary'
  const accentText = isAdvanced ? 'text-advanced' : 'text-primary'
  const softBg = isAdvanced ? 'bg-advanced/15' : 'bg-primary-light/50'
  const softHover = isAdvanced ? 'hover:bg-advanced/15' : 'hover:bg-primary-light/40'
  const softOpen = isAdvanced ? 'bg-advanced/15' : 'bg-primary-light/40'
  const softBorder = isAdvanced ? 'border-advanced/20' : 'border-primary/15'
  const softBorderT = isAdvanced ? 'border-advanced/15' : 'border-primary/10'
  const ringMeta = isAdvanced
    ? 'text-advanced ring-1 ring-advanced/25'
    : 'text-primary ring-1 ring-primary/20'
  const btnPrimary = isAdvanced
    ? 'bg-advanced shadow-lg shadow-advanced/25 transition hover:brightness-95'
    : 'bg-primary shadow-lg shadow-primary/25 transition hover:bg-primary-dark'
  const btnOutline = isAdvanced
    ? 'border-advanced text-advanced hover:bg-advanced/10'
    : 'border-primary text-primary hover:bg-primary-light'

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/50 via-white to-white">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/lo-trinh"
          className={`inline-flex items-center gap-1 text-sm font-bold ${accentText} hover:underline`}
        >
          ← Quay lại lộ trình đào tạo
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-hero-navy px-2.5 py-1 text-xs font-extrabold uppercase text-white">
            {level.letter} · Module {module.number}
          </span>
          <span className={`rounded-md ${accentBg} px-2.5 py-1 text-xs font-extrabold text-white`}>
            {workshop.code}
          </span>
          <span className={`rounded-md bg-white px-2.5 py-1 text-xs font-bold ${ringMeta}`}>
            {workshop.meta}
          </span>
          <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-extrabold text-white">
            {priceLabel}
          </span>
        </div>

        <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
          {module.title}
        </p>
        <h1 className="mt-2 text-2xl font-extrabold leading-snug text-hero-navy sm:text-3xl">
          {content.title}
        </h1>

        <section className={`mt-8 rounded-2xl border ${softBorder} bg-white p-5 shadow-sm sm:p-7`}>
          <h2 className="text-lg font-extrabold text-hero-navy">Nội dung workshop</h2>
          <p className="mt-1 text-sm text-gray-500">Bạn sẽ học và thực hành những nội dung sau:</p>
          <ul className="mt-5 space-y-3">
            {content.items.map((item, i) => (
              <li
                key={i}
                className={`flex gap-3 rounded-xl ${softBg} px-4 py-3 text-[15px] leading-relaxed text-gray-800`}
              >
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${accentBg} text-xs font-extrabold text-white`}
                >
                  {i + 1}
                </span>
                <span className="pt-0.5">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`mt-8 rounded-2xl border ${softBorder} bg-white p-5 shadow-sm sm:p-7`}>
          <h2 className="text-lg font-extrabold text-hero-navy">Lộ trình từng buổi</h2>
          <p className="mt-1 text-sm text-gray-500">Nhấn vào buổi học để xem sản phẩm đầu ra</p>

          <div className="mt-5 space-y-3">
            {workshop.sessions.map((session, i) => {
              const open = activeSession === i
              return (
                <div key={session.session} className={`overflow-hidden rounded-xl border ${softBorder}`}>
                  <button
                    type="button"
                    onClick={() => setActiveSession(open ? null : i)}
                    className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition ${softHover}`}
                  >
                    <span
                      className={`shrink-0 rounded ${accentBg} px-2 py-1 text-[11px] font-extrabold text-white`}
                    >
                      {session.session}
                    </span>
                    <span className="min-w-0 flex-1 text-sm font-bold text-hero-navy sm:text-[15px]">
                      {session.title}
                    </span>
                    <svg
                      className={`mt-1 h-4 w-4 shrink-0 ${accentText} transition-transform ${open ? 'rotate-180' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {open && (
                    <div
                      className={`border-t ${softBorderT} ${softOpen} px-4 py-3 text-sm leading-relaxed text-gray-700`}
                    >
                      <span className={`font-bold ${accentText}`}>Đầu ra: </span>
                      {session.deliverable}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={openRegistration}
            className={`inline-flex min-h-[48px] items-center justify-center rounded-xl px-6 py-3 text-sm font-bold uppercase tracking-wide text-white ${btnPrimary}`}
          >
            Đăng ký tư vấn
          </button>
          <Link
            to="/lo-trinh"
            className={`inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 px-6 py-3 text-sm font-bold transition ${btnOutline}`}
          >
            Xem toàn bộ lộ trình
          </Link>
        </div>
      </main>
      <Footer />
      <RegistrationModal />
    </div>
  )
}

export default function WorkshopDetailPage() {
  return (
    <RegistrationModalProvider>
      <WorkshopDetailInner />
    </RegistrationModalProvider>
  )
}
