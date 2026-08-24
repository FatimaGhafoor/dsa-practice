// 34 - Given hours and minutes, determine whether the time is AM or PM.

function isAMorPM(hour) {
  if (hour < 0 || hour > 23) {
    return false;
  }
  if (hour < 12) {
    return "AM";
  }
  return "PM";
}
