const btnSend = document.querySelector('#btnSend')
const btnTheme = document.querySelector('#btnTheme')

const savedTheme = localStorage.getItem('theme') || 'false'
if (savedTheme === 'true') document.body.classList.add('dark-mode')

btnTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')

    const isDark = document.body.classList.contains('dark-mode')
    localStorage.setItem('theme', isDark)
})