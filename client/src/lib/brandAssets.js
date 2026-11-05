// Original artwork from the owner's MCA Brand Identity Drive folder.
// Public IDs live in the replacement Cloudinary account; no credentials belong in the client.
const root = 'https://res.cloudinary.com/fv2eljrd/image/upload/'
const file = (id, format, transform = 'f_auto,q_auto') => `${root}${transform}/mentors-crib/brand/${id}.${format}`
// Site photos stay in /public/assets but are delivered through Cloudinary's fetch API:
// Cloudinary pulls the original from the live site once, then serves a resized,
// auto-format (WebP/AVIF) copy from its CDN. Local dev fetches from production.
const PRODUCTION_ORIGIN = 'https://mentors-crib-africa.vercel.app'
export const cloudPhoto = (path, width) => {
  const origin = import.meta.env.DEV || typeof window === 'undefined' ? PRODUCTION_ORIGIN : window.location.origin
  return `https://res.cloudinary.com/fv2eljrd/image/fetch/f_auto,q_auto,c_limit,w_${width}/${origin}${path}`
}

export const brandAssets = Object.freeze({
  logo: file('identity-a2', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoCyan: file('identity-a1', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoWhite: file('identity-4', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoLarge: file('identity-3', 'png', 'f_auto,q_auto/e_trim/c_limit,w_900'),
  darkBoard: file('identity-1', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
  lightBoard: file('identity-2', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
  palette: file('identity-a3', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
})
