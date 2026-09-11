import { useState } from 'react'
import { getWorkshopPrice, type ModuleData, type WorkshopBlock } from '../data/roadmap'
import { getWorkshopContent } from '../data/workshopContent'
import { useRegistrationModal } from '../context/RegistrationModalContext'

interface WorkshopDetailPanelProps {
  module: ModuleData
  workshop: WorkshopBlock
  levelLetter: string
  onClose: () => void
}

export default function WorkshopDetailPanel({
  module,
  workshop,
  levelLetter,
  onClose,
}: WorkshopDetailPanelProps) {
  const { openRegistration } = useRegistrationModal()
  const [activeSession, setActiveSession] = useState<number | null>(null)
  const content = getWorkshopContent(module.number, workshop.code)
  const isAdvanced = workshop.meta === 'Advanced'
  const priceLabel = getWorkshopPrice(module.number, isAdvanced)
  const accentBg = isAdvanced ? 'bg-advanced' : 'bg-primary'
  const accentText = isAdvanced ? 'text-advanced' : 'text-primary'
  const accentBorder = isAdvanced ? 'border-advanced' : 'border-primary'
  const panelBg = isAdvanced
    ? 'border-advanced/25 bg-advanced/10'
    : 'border-primary/15 bg-primary-light/30'
  const panelBorder = isAdvanced ? 'border-advanced/15' : 'border-primary/10'
  const hoverBg = isAdvanced ? 'hover:bg-advanced/15' : 'hover:bg-primary-light/40'
  const sessionOpenBg = isAdvanced ? 'bg-advanced/15' : 'bg-primary-light/40'
  const sessionBorder = isAdvanced ? 'border-advanced/20' : 'border-primary/15'
  const ringMeta = isAdvanced
    ? 'text-advanced ring-1 ring-advanced/25'
    : 'text-primary ring-1 ring-primary/20'
  const btnShadow = isAdvanced
    ? 'shadow-lg shadow-advanced/25 transition hover:brightness-95'
    : 'shadow-lg shadow-primary/25 transition hover:bg-primary-dark'

  return (
    <div className={`mt-2 overflow-hidden rounded-xl border ${panelBg}`}>
      <div className={`border-b ${panelBorder} bg-white px-3 py-3 sm:px-4 sm:py-4`}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-md bg-hero-navy px-2.5 py-1 text-xs font-extrabold uppercase text-white">
                {levelLetter} · Module {module.number}
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
            <h3 className="mt-2 text-base font-extrabold leading-snug text-hero-navy sm:text-lg">
              {content?.title ?? workshop.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-lg text-gray-500 transition hover:bg-gray-100"
            aria-label="Đóng"
          >
            ×
          </button>
        </div>
      </div>

      <div className="space-y-4 p-3 sm:p-4">
        {!content ? (
          <p className="py-4 text-center text-sm text-gray-500">
            Chưa có nội dung chi tiết cho workshop này.
          </p>
        ) : (
          <>
            <section>
              <h4 className="text-sm font-extrabold text-hero-navy">Nội dung workshop</h4>
              <p className="mt-0.5 text-xs text-gray-500">
                Bạn sẽ học và thực hành những nội dung sau:
              </p>
              <ul className="mt-3 space-y-2">
                {content.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg bg-white px-3 py-2.5 text-sm leading-relaxed text-gray-800 shadow-sm"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${accentBg} text-[11px] font-extrabold text-white`}
                    >
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h4 className="text-sm font-extrabold text-hero-navy">Lộ trình từng buổi</h4>
              <p className="mt-0.5 text-xs text-gray-500">Nhấn vào buổi học để xem sản phẩm đầu ra</p>

              <div className="mt-3 space-y-2">
                {workshop.sessions.map((session, i) => {
                  const open = activeSession === i
                  return (
                    <div
                      key={session.session}
                      className={`overflow-hidden rounded-lg border ${sessionBorder} bg-white`}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveSession(open ? null : i)}
                        className={`flex w-full items-start gap-2.5 px-3 py-2.5 text-left transition ${hoverBg}`}
                      >
                        <span
                          className={`shrink-0 rounded ${accentBg} px-1.5 py-0.5 text-[11px] font-extrabold text-white`}
                        >
                          {session.session}
                        </span>
                        <span className="min-w-0 flex-1 text-sm font-bold text-hero-navy">
                          {session.title}
                        </span>
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 ${accentText} transition-transform ${open ? 'rotate-180' : ''}`}
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
                          className={`border-t ${panelBorder} ${sessionOpenBg} px-3 py-2.5 text-sm leading-relaxed text-gray-700`}
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

            <div className="flex flex-col gap-2 pt-1 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openRegistration}
                className={`inline-flex min-h-[44px] items-center justify-center rounded-xl ${accentBg} px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-white ${btnShadow}`}
              >
                Đăng ký tư vấn
              </button>
              <button
                type="button"
                onClick={onClose}
                className={`inline-flex min-h-[44px] items-center justify-center rounded-xl border-2 ${accentBorder} px-5 py-2.5 text-sm font-bold ${accentText} transition hover:bg-white`}
              >
                Đóng
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
