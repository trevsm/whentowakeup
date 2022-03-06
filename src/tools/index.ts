const addHours = (date: Date, hours: number): Date =>
  new Date(date.getTime() + hours * 60 * 60 * 1000);

function pad(num: number, size: number) {
  var s = "0" + num;
  return s.substr(s.length - size);
}

//empty array
const EA = (size: number) => Array(size).fill(null);

const ampm = (hour: number) => {
  const suffix = hour >= 12 ? "PM" : "AM";
  const hours = ((hour + 11) % 12) + 1;
  return { hours, suffix };
};

export { addHours, pad, EA, ampm };
