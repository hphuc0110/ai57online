/** Canonical production site. */
export const SITE_URL = 'https://ai57tuyensinh.honglinheducation.vn'

export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_URL
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

/** Prefer the domain the user is actually on (avoids stale hard-coded hosts). */
export function getArticleShareUrl(slug: string): string {
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_URL
  return `${origin}/tin-tuc/${slug}`
}

export function getArticleImageUrl(coverImage: string): string {
  if (coverImage.startsWith('http')) return coverImage
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_URL
  return `${origin}${coverImage.startsWith('/') ? coverImage : `/${coverImage}`}`
}
