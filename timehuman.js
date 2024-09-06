export class TimeHuman {
    constructor(ms) {
        this.days = Math.floor(ms / (24*60*60*1000));
        const daysms = ms % (24*60*60*1000);
        this.hours = Math.floor(daysms / (60*60*1000));
        const hoursms = ms % (60*60*1000);
        this.minutes = Math.floor(hoursms / (60*1000));
        const minutesms = ms % (60*1000);
        this.sec = Math.floor(minutesms / 1000);
    }
}