export function calculateUVIndex(uvi: number) {
  if (uvi <= 2) {
    return "Low";
  } else if (uvi > 2 || uvi <= 5) {
    return "Moderate";
  } else if (uvi > 5 || uvi <= 7) {
    return "High";
  } else if (uvi > 7 || uvi <= 10) {
    return "Very High";
  } else if (uvi > 10) {
    return "Extreme";
  } else return "Undefined";
}
