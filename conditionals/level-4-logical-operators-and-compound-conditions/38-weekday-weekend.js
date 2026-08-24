// 38 - Determine whether a day is a weekday or weekend.
function isWeekdayOrWeekend(day) {
  day = day.toLowerCase();

  const weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday"];
  if (day === "saturday" || day === "sunday") {
    return "Weekend";
  }
  if (weekdays.includes(day)) {
    return "Weekday";
  }

  return "Invalid Input";
}
