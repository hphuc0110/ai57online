/** Canonical production origin for absolute share / OG URLs. */
export const SITE_URL = 'https://tuyensinhai57.honglinheducation.vn'

export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_URL
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

/** Always use production URL so Facebook can scrape Open Graph tags. */
export function getArticleShareUrl(slug: string): string {
  return `${SITE_URL}/tin-tuc/${slug}`
}

export function getArticleImageUrl(coverImage: string): string {
  if (coverImage.startsWith('http')) return coverImage
  return `${SITE_URL}${coverImage.startsWith('/') ? coverImage : `/${coverImage}`}`
}
