const timeOptions = { hour: '2-digit', minute: '2-digit' }

export const timeToLocale = date => new Date(date).toLocaleTimeString([], timeOptions)