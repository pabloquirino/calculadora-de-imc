const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const w = document.querySelector('#weight').value.replace(',', '.')
    const h = document.querySelector('#height').value.replace(',', '.')

    const weight = Number(w)
    const height = Number(h)

    const imc = (weight / (height * height)).toFixed(2)

    const value = document.querySelector('#value')
    value.textContent = imc

    let answer = document.querySelector('#answer')
    if (imc < 17) {
        answer.textContent = `, Muito abaixo do peso`
        value.style.color = 'red'
    }

    else if (imc < 19) {
        answer.textContent = `, Abaixo do peso`
        value.style.color = '#DB7100'
    }

    else if (imc < 25) {
        answer.textContent = `, Peso normal`
        value.style.color = 'green'
    }

    else if (imc < 30) {
        answer.textContent = `, Acima do peso`
        value.style.color = '#DB7100'
    }
    else {
        answer.textContent = `, Obesidade`
        value.style.color = 'red'
    }

    document.querySelector('#info').classList.remove('hidden')
})

