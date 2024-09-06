export function initBirthdayForm() {
    const year_control = document.getElementById('year-control');
    let yearStart = 1941
    const yearEnd = new Date().getFullYear()
    let html = ''

    while(yearStart < yearEnd) {
        html += `<option value=${yearStart}>${yearStart}</option>\n`
        yearStart += 1
    }

    year_control.innerHTML = html

    const month_control = document.getElementById('month-control');
    let m = 1
    html =''

    while (m <= 12) {
        html += `<option value=${m}>${m}</option>\n`
        m += 1
    }

    month_control.innerHTML = html

    const day_control = document.getElementById('day-control');
    let d = 1
    html =''

    while (d <= 31) {
        html += `<option value=${d}>${d}</option>\n`
        d += 1
    }

    day_control.innerHTML = html

    const year = localStorage.getItem('year')
    const month = localStorage.getItem('month')
    const day = localStorage.getItem('day')

    if (year) {
        window['hide']('birthday_from')

        const year_control = document.getElementById('year-control')
        year_control.value = year

        const month_control = document.getElementById('month-control')
        month_control.value = month

        const day_control = document.getElementById('day-control')
        day_control.value = day

        const man = localStorage.getItem('man')
        const man_control = document.getElementById('man')
        const woman_control = document.getElementById('woman')

        if (man==='false') {
            man_control.checked = false
            woman_control.checked = true
        } else {
            man_control.checked = true
            woman_control.checked = false
        }
        window['start_calc']()
    } else {
        window['show']('birthday_from')
    }
}