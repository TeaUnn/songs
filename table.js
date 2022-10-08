function generateTable () {
  const songsElements = document.querySelectorAll('.song h2')

  // Give id to each song
  for (element of Array.from(songsElements)) {
    element.id = element.innerText
  }

  // All song titles
  const titles = Array.from(songsElements).map(song => song.innerText)

  // Target element
  const target = document.querySelector('.table')
  
  for (const title of titles) {
    const element = document.createElement('a')
    element.innerText = title
    element.href = `#${title}`
    target.appendChild(element)
  }
}

generateTable()

