const dateOptions = { day: 'numeric', month: 'long', year: 'numeric' };

export const dateToLocale = date => new Date(date).toLocaleDateString(undefined, dateOptions);