// API URL
const GIPHY_API_KEY = 'DFnkagrPjOIRLqOy9uFglI4l3CcOYjGT'

// Browser check
export const inBrowser = typeof window !== 'undefined'

// Hash offset
const hashOffset = -64

/**
 * Scrolls a `target` into view and adds an `offset`.
 *
 * @param {HTMLElement} target the element to scroll into view.
 * @param {Number} offset number of pixels the page scrolls to relative to the top of `target`.
 */
export function scrollTo(target, offset = 0) {
  const y = window.pageYOffset || document.documentElement.scrollTop

  window.scrollTo({
    top: target.getBoundingClientRect().top + y + offset,
    behavior: 'instant',
  })
}

/**
 * Scrolls to an element with id `hash`, if it exists, and does nothing if the hash is falsey.
 *
 * @param {string} hash
 */
export function scrollToHash(hash) {
  if (!hash) return

  const element = document.getElementById(hash)

  if (element) {
    // -64 offset for nav header
    scrollTo(element, hashOffset)
  }
}

/**
 * Grabs a few sad GIFs from the Giphy API and returns one at random
 *
 * @returns {*} sad GIF data
 */
export async function getSadGIF() {
  const res = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=crying&limit=16&offset=1&rating=g&lang=en`
  )

  const gifs = (await res.json()).data

  return gifs[(Math.random() * gifs.length) >>> 0]
}
