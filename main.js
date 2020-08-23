const light = document.getElementById('light')
const smart = document.getElementById('smart')
const pro = document.getElementById('pro')

const priceSection = document.getElementById('price')

const btns = document.querySelectorAll('#btns-handler button')

let activeBtn = btns[0]
activeBtn.classList.add('active')

btns.forEach(btn => btn.addEventListener('click', setPeriodHandler));

function setPeriodHandler() {
    if (activeBtn.getAttribute('data-type') !== this.getAttribute('data-type')) {
        activeBtn.classList.remove('active')

        priceSection.classList.remove('show')
        priceSection.classList.add('hide')

        this.classList.add('active') 

        setTimeout(() => {
            switch(this.dataset.type) {
                case 'month':
                    light.innerText = '20$ / 1 месяц*'
                    smart.innerText = '50$ / 1 месяц*'
                    pro.innerText = '100$ / 1 месяц*'
                    break
                case 'half-year':
                    light.innerText = '18$ / 1 месяц*'
                    smart.innerText = '45$ / 1 месяц*'
                    pro.innerText = '90$ / 1 месяц*'
                    break
                case 'year':
                    light.innerText = '16$ / 1 месяц*'
                    smart.innerText = '40$ / 1 месяц*'
                    pro.innerText = '80$ / 1 месяц*'
                    break
            }

            priceSection.classList.remove('hide')
            priceSection.classList.add('show')
        }, 300)

        activeBtn = this
    }    
}


