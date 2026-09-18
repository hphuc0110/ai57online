/** URL công khai đang phục vụ bản mới (có /images/news + /tin-tuc). */
export const SITE_URL = 'https://ai57online.vercel.app'

/**
 * Domain thương hiệu — gắn lại sau khi trỏ DNS/Vercel về deployment mới.
 * Hiện domain này vẫn đang serve bản cũ (thiếu ảnh news) nên chưa dùng cho OG/share.
 */
export const BRAND_SITE_URL = 'https://tuyensinhai57.honglinheducation.vn'

export function getAbsoluteUrl(path: string): string {
  if (path.startsWith('http')) return path
  const origin =
    typeof window !== 'undefined' && window.location?.origin
      ? window.location.origin
      : SITE_URL
  return `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

/** Dùng host đang có file ảnh + trang bài để Facebook scrape được. */
export function getArticleShareUrl(slug: string): string {
  return `${SITE_URL}/tin-tuc/${slug}`
}

export function getArticleImageUrl(coverImage: string): string {
  if (coverImage.startsWith('http')) return coverImage
  return `${SITE_URL}${coverImage.startsWith('/') ? coverImage : `/${coverImage}`}`
}
