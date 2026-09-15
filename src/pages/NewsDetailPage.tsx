import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import StickyRegisterBar from '../components/StickyRegisterBar'
import RegistrationModal from '../components/registration/RegistrationModal'
import { RegistrationModalProvider } from '../context/RegistrationModalContext'
import { formatNewsDate, getNewsBySlug, newsItems } from '../data/news'

function NewsDetailInner() {
  const { slug = '' } = useParams()
  const article = useMemo(() => getNewsBySlug(slug), [slug])

  const related = useMemo(() => {
    if (!article) return []
    return newsItems
      .filter((item) => item.slug !== article.slug)
      .filter((item) => item.category === article.category)
      .slice(0, 3)
  }, [article])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (article) {
      document.title = `${article.title} — AI57`
    }
    return () => {
      document.title = 'AI57'
    }
  }, [article])

  if (!article) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-extrabold text-hero-navy">Không tìm thấy bài viết</h1>
        <Link to="/tin-tuc" className="mt-4 inline-block font-bold text-primary hover:underline">
          ← Quay lại tin tức
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-light/50 via-white to-white">
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
        <Link
          to="/tin-tuc"
          className="inline-flex items-center gap-1 text-sm font-bold text-primary hover:underline"
        >
          ← Quay lại tin tức
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="rounded-md bg-primary px-2.5 py-1 text-xs font-extrabold text-white">
            {article.category}
          </span>
          <time className="text-sm text-gray-500" dateTime={article.date}>
            {formatNewsDate(article.date)}
          </time>
        </div>

        <h1 className="mt-4 text-2xl font-extrabold leading-snug text-hero-navy sm:text-3xl">
          {article.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-gray-600">{article.excerpt}</p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-primary/15 bg-primary-light/30">
          <img
            src={article.coverImage}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <article className="mt-10 space-y-8">
          {article.sections.map((section, index) => (
            <div key={index}>
              {section.heading && (
                <h2 className="mb-3 text-lg font-extrabold text-hero-navy sm:text-xl">
                  {section.heading}
                </h2>
              )}
              <div className="space-y-4">
                {section.paragraphs.map((p, pIndex) => (
                  <p key={pIndex} className="text-sm leading-relaxed text-gray-700 sm:text-base">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </article>

        {related.length > 0 && (
          <aside className="mt-14 border-t border-primary/15 pt-10">
            <h2 className="text-lg font-extrabold text-hero-navy">Bài liên quan</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    to={`/tin-tuc/${item.slug}`}
                    className="flex gap-3 overflow-hidden rounded-xl border border-primary/10 bg-white transition hover:border-primary/30"
                  >
                    <img
                      src={item.coverImage}
                      alt=""
                      className="h-16 w-20 shrink-0 object-cover"
                      loading="lazy"
                    />
                    <span className="flex items-center py-2 pr-3 text-sm font-semibold text-gray-800 hover:text-primary">
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default function NewsDetailPage() {
  return (
    <RegistrationModalProvider>
      <NewsDetailInner />
      <StickyRegisterBar />
      <RegistrationModal />
    </RegistrationModalProvider>
  )
}
