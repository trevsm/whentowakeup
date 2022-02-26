export function DatetoHHMM(date) {
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ampm = "AM";
  if (hh >= 12) {
    ampm = "PM";
  }
  hh = hh % 12;
  if (hh == 0) {
    hh = 12;
  }
  return hh + ":" + ("0" + mm).slice(-2) + ampm;
}

export function addMinutes(date, minutes) {
  const newDate = new Date(date);
  newDate.setMinutes(date.getMinutes() + minutes);
  return newDate;
}

export function HHMMtoDate(hhmm) {
  let time = hhmm.split(":");
  let newDate = new Date(2020, 0, 1, time[0], time[1]);
  return newDate;
}
