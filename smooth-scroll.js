'use strict'

const scrollDuration = 512

function easeInOutQuad (t) {
  return t < 0.5
    ? 2 * t * t
    : -1 + (4 - 2 * t) * t
}

const smoothScrollTo = (href) => {
  const start = window.performance.now()
  const target = document.getElementById(href.substring(1))

  const startY = window.scrollY
  const deltaY = target.getBoundingClientRect().top

  function move (pos) {
    window.scroll(0, startY + (deltaY * pos))
  }

  function update (ts) {
    const pos = (ts - start) / scrollDuration

    if (pos >= 1) {
      return move(1)
    }

    move(easeInOutQuad(pos))

    window.requestAnimationFrame(update)
  }

  window.requestAnimationFrame(update)
}

const elements = Array.from(document.querySelectorAll('.smooth-scroll'))

for (let element of elements) {
  element.addEventListener('click', function (ev) {
    ev.preventDefault()
    smoothScrollTo(element.getAttribute('href'))
  })
}