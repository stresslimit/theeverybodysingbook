// import _ from '_'

window.addEventListener('load', (e) => {

  externalLinks()
  song()

})


function externalLinks() {
  let a = document.querySelectorAll('a')
  a.forEach((el) => {
    if (el.host != window.location.host)
      el.target = "_blank"
  })
}


function song() {
  const scriptURL = 'https://script.google.com/macros/s/AKfycbz4i7lqu9TNvJho_0HB26ZmzbDeQBnJzDeHkAkl4JNJyDU2oq2QKwd-yRuYhqY_R7UV/exec'
  const form = document.forms['submit-to-google-sheet']

  console.log(form)

  form.addEventListener('submit', e => {
    e.preventDefault()
    form.submitbutton.disabled = true
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        console.log('Success!', response)
        form.innerHTML = 'Thanks!!'
      })
      .catch(error => console.error('Error!', error.message))
    })
}
