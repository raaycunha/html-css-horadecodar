const frm = document.querySelector('#frm')
const loginInput = document.querySelector('#inLogin')
const passInput = document.querySelector('#inPass')
const btnSubmit = document.querySelector('#btnSubmit')
btnSubmit.disabled = true

frm.addEventListener('input', () => {

    const login = loginInput.value
    const pass = passInput.value

    if (login.length >= 6 && pass.length >= 8) {
        btnSubmit.disabled = false
        btnSubmit.className = 'btnOn'
    } else {
        btnSubmit.disabled = true
        btnSubmit.className = 'btnOff'
    }

    if (login.length > 0 && login.length < 6) loginInput.classList.add('input-erro')
    else loginInput.classList.remove('input-erro')

    if (pass.length > 0 && pass.length < 8) passInput.classList.add('input-erro')
    else passInput.classList.remove('input-erro')
})

frm.addEventListener('submit', (e) => {
    e.preventDefault()

    loginInput.value = ''
    passInput.value = ''
    loginInput.focus()

    btnSubmit.disabled = true
    btnSubmit.className = 'btnOff'
})