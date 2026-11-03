// Original artwork from the owner's MCA Brand Identity Drive folder.
// Public IDs live in the replacement Cloudinary account; no credentials belong in the client.
const root = 'https://res.cloudinary.com/fv2eljrd/image/upload/'
const file = (id, format, transform = 'f_auto,q_auto') => `${root}${transform}/mentors-crib/brand/${id}.${format}`
export const brandAssets = Object.freeze({
  logo: file('identity-a2', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoCyan: file('identity-a1', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoWhite: file('identity-4', 'png', 'f_auto,q_auto/e_trim/c_limit,w_640'),
  logoLarge: file('identity-3', 'png', 'f_auto,q_auto/e_trim/c_limit,w_900'),
  darkBoard: file('identity-1', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
  lightBoard: file('identity-2', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
  palette: file('identity-a3', 'jpg', 'f_auto,q_auto/c_limit,w_1200'),
})
