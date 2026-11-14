function calculateCalendarAge(year, month, day, today = new Date()) {
  function date(y, m, d) {
    const value = new Date(0);
    value.setUTCFullYear(y, m, d);
    value.setUTCHours(0, 0, 0, 0);
    return value;
  }
  if (![year, month, day].every(Number.isInteger) || year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('Enter a valid day, month and year.');
  }
  const birth = date(year, month - 1, day);
  if (birth.getUTCFullYear() !== year || birth.getUTCMonth() !== month - 1 || birth.getUTCDate() !== day) {
    throw new Error('That date does not exist. Check the day and month.');
  }
  const end = date(today.getFullYear(), today.getMonth(), today.getDate());
  if (birth > end) throw new Error('Date of birth cannot be in the future.');
  function anniversary(months) {
    const start = date(year, month - 1 + months, 1);
    const last = date(start.getUTCFullYear(), start.getUTCMonth() + 1, 0).getUTCDate();
    return date(start.getUTCFullYear(), start.getUTCMonth(), Math.min(day, last));
  }
  let months = (end.getUTCFullYear() - year) * 12 + end.getUTCMonth() - month + 1;
  if (anniversary(months) > end) months--;
  const days = Math.round((end - anniversary(months)) / 86400000);
  return { years: Math.floor(months / 12), months: months % 12, days };
}

if (typeof module !== 'undefined') module.exports = { calculateCalendarAge };
