const formatter = new Intl.RelativeTimeFormat('en')
const hour = 3.6e+6
const day = 8.64e+7

export function relativeTime(time) {
    if (time < day) return formatter.format(Math.floor(time / hour), 'hours')
    return formatter.format(Math.floor(time / day), 'days')
}