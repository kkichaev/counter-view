import {TimeHuman} from 'timehiman.js'

onload = () => {
    console.log('document on load')
    const place = document.getElementById('place');
    console.log(place);

    const date = new Date('1976-03-02')
    date.setFullYear(date.getFullYear() + 65);

    setInterval(()=> {
        let rest = date.getTime() - Date.now();
        const th = new TimeHuman(rest)
        place.innerHTML = ` ${th.days} дней, ${th.hours} часов ${th.minutes} минут ${th.sec}`
    },1000)

    const year_control = document.getElementById('year-control');
    let yearStart = 1941
    const yearEnd = new Date().getFullYear()
    let html = ''

    while(yearStart < yearEnd) {
        html += `<option value="value2">${yearStart}</option>\n`
        yearStart += 1
    }

    year_control.innerHTML = html

    const month_control = document.getElementById('month-control');
    let m = 1
    html =''

    while (m <= 12) {
        html += `<option value="value2">${m}</option>\n`
        m += 1
    }

    month_control.innerHTML = html

    const day_control = document.getElementById('day-control');
    let d = 1
    html =''

    while (d <= 31) {
        html += `<option value="value2">${d}</option>\n`
        d += 1
    }

    day_control.innerHTML = html
}
