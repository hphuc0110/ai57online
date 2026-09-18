import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const SITE_URL = 'https://tuyensinhai57.honglinheducation.vn'

const articles = JSON.parse(readFileSync(join(__dirname, 'news-meta.json'), 'utf8'))

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default function handler(req, res) {
  const slug = typeof req.query.slug === 'string' ? req.query.slug : ''
  const article = articles.find((item) => item.slug === slug)

  if (!article) {
    res.statusCode = 404
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<!doctype html><title>Not found</title><h1>Không tìm thấy bài viết</h1>')
    return
  }

  const url = `${SITE_URL}/tin-tuc/${article.slug}`
  const image = `${SITE_URL}${article.coverImage}`
  const title = escapeHtml(`${article.title} — AI57`)
  const description = escapeHtml(article.excerpt)

  const html = `<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="AI57" />
  <meta property="og:locale" content="vi_VN" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:alt" content="${escapeHtml(article.title)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta http-equiv="refresh" content="0;url=${url}" />
</head>
<body>
  <p><a href="${url}">${escapeHtml(article.title)}</a></p>
</body>
</html>`

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html; charset=utf-8')
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  res.end(html)
}
