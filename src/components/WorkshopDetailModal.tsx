import { useEffect, useState } from 'react'
import type { ModuleData, WorkshopBlock } from '../data/roadmap'
import { getWorkshopContent } from '../data/workshopContent'
import { useRegistrationModal } from '../context/RegistrationModalContext'

interface WorkshopDetailModalProps {
  module: ModuleData
  workshop: WorkshopBlock
  levelLetter: string
  onClose: () => void
}

export default function WorkshopDetailModal({
  module,
  workshop,
  levelLetter,
  onClose,
}: WorkshopDetailModalProps) {
  const { openRegistration } = useRegistrationModal()
  const [activeSession, setActiveSession] = useState<number | null>(null)
  const content = getWorkshopContent(module.number, workshop.code)

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)

    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center sm:p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={onClose}
        aria-label="Đóng chi tiết workshop"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="workshop-modal-title"
        className="relative z-10 flex w-full max-h-[92dvh] flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:max-w-2xl sm:rounded-2xl"
      >
        <div className="shrink-0 border-b border-gray-100 px-4 pb-3 pt-3 sm:px-6 sm:pb-4 sm:pt-5">
          <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-300 sm:hidden" />
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-hero-navy px-2.5 py-1 text-xs font-extrabold uppercase text-white">
                  {levelLetter} · Module {module.number}
                </span>
                <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-extrabold text-white">
                  {workshop.code}
                </span>
                <span className="rounded-md bg-white px-2.5 py-1 text-xs font-bold text-primary ring-1 ring-primary/20">
                  {workshop.meta}
                </span>
                <span className="rounded-md bg-accent px-2.5 py-1 text-xs font-extrabold text-white">
                  4.000.000 đ
                </span>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-gray-500">
                {module.title}
              </p>
              <h2
                id="workshop-modal-title"
                className="mt-1 text-xl font-extrabold leading-snug text-hero-navy sm:text-2xl"
              >
                {content?.title ?? workshop.title}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl text-gray-500 transition hover:bg-gray-100"
              aria-label="Đóng"
            >
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto overscroll-contain px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-4 sm:px-6 sm:pb-8">
          {!content ? (
            <p className="py-8 text-center text-sm text-gray-500">
              Chưa có nội dung chi tiết cho workshop này.
            </p>
          ) : (
            <>
              <section className="rounded-2xl border border-primary/15 bg-primary-light/30 p-4 sm:p-5">
                <h3 className="text-base font-extrabold text-hero-navy">Nội dung workshop</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Bạn sẽ học và thực hành những nội dung sau:
                </p>
                <ul className="mt-4 space-y-3">
                  {content.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 rounded-xl bg-white px-3 py-3 text-[15px] leading-relaxed text-gray-800 shadow-sm sm:px-4"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-extrabold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-5 rounded-2xl border border-primary/15 bg-white p-4 sm:p-5">
                <h3 className="text-base font-extrabold text-hero-navy">Lộ trình từng buổi</h3>
                <p className="mt-1 text-sm text-gray-500">Nhấn vào buổi học để xem sản phẩm đầu ra</p>

                <div className="mt-4 space-y-2.5">
                  {workshop.sessions.map((session, i) => {
                    const open = activeSession === i
                    return (
                      <div
                        key={session.session}
                        className="overflow-hidden rounded-xl border border-primary/15"
                      >
                        <button
                          type="button"
                          onClick={() => setActiveSession(open ? null : i)}
                          className="flex w-full items-start gap-3 px-3 py-3 text-left transition hover:bg-primary-light/40 sm:px-4 sm:py-3.5"
                        >
                          <span className="shrink-0 rounded bg-primary px-2 py-1 text-[11px] font-extrabold text-white">
                            {session.session}
                          </span>
                          <span className="min-w-0 flex-1 text-sm font-bold text-hero-navy sm:text-[15px]">
                            {session.title}
                          </span>
                          <svg
                            className={`mt-1 h-4 w-4 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
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
                          <div className="border-t border-primary/10 bg-primary-light/40 px-3 py-3 text-sm leading-relaxed text-gray-700 sm:px-4">
                            <span className="font-bold text-primary">Đầu ra: </span>
                            {session.deliverable}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </section>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={openRegistration}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-primary/25 transition hover:bg-primary-dark"
                >
                  Đăng ký tư vấn
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-xl border-2 border-primary px-6 py-3 text-sm font-bold text-primary transition hover:bg-primary-light"
                >
                  Đóng
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
