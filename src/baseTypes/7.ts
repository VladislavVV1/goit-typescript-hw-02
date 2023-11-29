/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

const enum Weekdays {
  Monday = "Monday",
  Tuersday = "Tuersday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

function isWeekend(weekdays: Weekdays): boolean {
  return weekdays === Weekdays.Saturday || weekdays === Weekdays.Sunday;
}