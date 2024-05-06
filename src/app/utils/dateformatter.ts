export function dateFormatter(date : Date) {
    const [,month,,year] = date.toDateString().split(' ');    
    return month + ' ' +year;
}