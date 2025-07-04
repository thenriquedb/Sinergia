import moment from "moment"

export function calculateDifferenceBetweenTwoTimes(initialHour, finalHour) {
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}

export function isBetween(timeOrign, moment1, moment2, interval) {
  return moment(timeOrign).isBetween(moment1, moment2, null, interval);
}

export function duration(initialHour, finalHour) {
  if (initialHour == finalHour) {
    return 0;
  }
  return Math.abs(moment.duration(moment(initialHour).diff(finalHour)).asHours());
}

export function intervalsToArray(string, format) {
  return string.split("-").map(item => moment(item.trim(), format));
}


export function formatHour(string) {
  const time = new Date(string);
  console.log("time", time)
  return `${time.getHours()}:${time.getMinutes() < 10 ?
    `0${time.getMinutes()}` : time.getMinutes()}`;
}

