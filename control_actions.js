import {TimeHuman} from "./timehuman.js";

export function intiControls() {
    let timer = undefined
    
    window['hide'] = (id) => {
        let element  = document.getElementById(id);
        const hiding = 'display: none;';

        if (element.style.cssText && element.style.cssText.includes(hiding))
            element.style.cssText = ''
        else
            element.style.cssText = hiding
    }
    window['show'] = (id) => {
        let element  = document.getElementById(id);
        const hiding = 'display: none;';

        element.style.cssText = ''
    }

    window['save'] = (id) => {
        console.log('save')

        const year = document.getElementById('year-control')
        let val = year.options[year.selectedIndex].text;
        localStorage.setItem('year', val)

        const month = document.getElementById('month-control')
        val = month.options[month.selectedIndex].text;
        localStorage.setItem('month', val)

        const day = document.getElementById('day-control')
        val = day.options[day.selectedIndex].text;
        localStorage.setItem('day', val)

        const man = document.getElementById('man')
        localStorage.setItem('man', man.checked)

        window['start_calc']()
        window['hide'](id)
    }

    window['start_calc'] = () => {
        const year = localStorage.getItem('year')
        const month = localStorage.getItem('month')
        const day = localStorage.getItem('day')
        const date = new Date(`${year}-${month}-${day}`)
        const man = localStorage.getItem('man')
        const man_range = 65;
        const woman_range = 60;
        const finish_year = date.getFullYear() + (man ? man_range : woman_range);
        date.setFullYear(finish_year);
        const place = document.getElementById('place');

        clearInterval(timer)
        timer = setInterval(()=> {
            let rest = date.getTime() - Date.now();
            const th = new TimeHuman(rest)
            place.innerHTML = ` ${th.days} дней, ${th.hours} часов ${th.minutes} минут ${th.sec}`
        },1000)
    }

    const buttons = document.getElementsByTagName('button')
    for (let button of buttons) {
        const action = button.getAttribute('data-action')

        if (action) {
            const ref = button.getAttribute('data-ref')

            button.addEventListener("click", (event) => window[action](ref));
        }
    }

    const groupBoxes = document.getElementsByClassName('checkbox-group')

    for (let gb of groupBoxes) {
        const inputs = gb.getElementsByTagName('input')

        const ids = []

        for(const input of inputs) {
            if (input.getAttribute('type') === 'checkbox') {
                ids.push(input.getAttribute('id'))
                input.setAttribute('group-id', gb.getAttribute('id'))
                input.addEventListener('click', (event) =>{
                    const cb = event.target
                    const inputId = cb.getAttribute('id')
                    const group = document.getElementById(cb.getAttribute('group-id'))
                    const ids = JSON.parse(group.getAttribute('check-boxes'))

                    for(const id of ids) {
                        document.getElementById(id).checked = id === inputId;
                    }
                })
            }
        }

        gb.setAttribute('check-boxes', JSON.stringify(ids))
    }
}