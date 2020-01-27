import moment from "moment"

export function calculateDifferenceBetweenTwoTimes(initialHour, finalHour) {
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}

export function isBetween(timeOrign, moment1, moment2) {
  return moment(timeOrign).isBetween(moment1, moment2);
}

export function duration(initialHour, finalHour) {
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}

export function intervalsToArray(string, format) {
  return string.split("-").map(item => moment(item.trim(), format));
}

export function formatHour(time) {
  return `${time.getHours()}:${time.getMinutes() < 10 ?
    `0${time.getMinutes()}` : time.getMinutes()}`;
}

