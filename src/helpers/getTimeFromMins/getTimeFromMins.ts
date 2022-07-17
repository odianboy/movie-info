export const getTimeFromMins = (min: number): string => {
    const hour = 60;
    const hours = Math.trunc(min / hour);
    const minutes = min % hour;
    return hours + ':' + minutes;
}
