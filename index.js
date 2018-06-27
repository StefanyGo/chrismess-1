const form = document.querySelector('form#flickForm')

const handleSubmit = function(ev) {
  ev.preventDefault()
  const f = ev.target

  const flickName = f.flickName.value
  const flickSpan = document.createElement('span')
  flickSpan.classList.add('name')
  flickSpan.textContent = flickName

  const chrisName = f.chrisName.value
  const chrisSpan = document.createElement('span')
  chrisSpan.classList.add('chris')
  chrisSpan.textContent = chrisName

  const item = document.createElement('li')
  item.classList.add('flick')
  item.appendChild(flickSpan)
  item.appendChild(chrisSpan)

  const list = document.querySelector('#flicks')
  list.appendChild(item)

  f.reset()
}

form.addEventListener('submit', handleSubmit)
