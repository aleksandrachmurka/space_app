const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };
const timeOptions = { hour: '2-digit', minute: '2-digit' }

export const dateToLocale = date => new Date(date).toLocaleDateString(undefined, dateOptions);

export const timeToLocale = date => new Date(date).toLocaleTimeString([], timeOptions)