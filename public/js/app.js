
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msgOne = document.querySelector('#msg-1')
const msgTwo = document.querySelector('#msg-2')

msgOne.textContent = 'hello...'
msgTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        if (data.error) {
           msgOne.textContent = data.error
           msgTwo.textContent =''
        
        } else {
            msgOne.textContent = data.loc
            msgTwo.textContent = data.forecast
            
            
        }
    })
})

})