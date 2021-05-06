const week = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
];

export function displayTimestamp(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return week[date.getDay()];
}

export function whatIsDate(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toDateString();
}

export function whatIsHour(timestamp: number) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString();
}  
