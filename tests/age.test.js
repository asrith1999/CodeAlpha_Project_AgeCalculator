const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateCalendarAge } = require('../age-core');

test('exact birthdays and a normal interval', () => {
  assert.deepEqual(calculateCalendarAge(2000, 11, 14, new Date(2026, 10, 14)), { years: 26, months: 0, days: 0 });
  assert.deepEqual(calculateCalendarAge(2000, 5, 20, new Date(2026, 10, 14)), { years: 26, months: 5, days: 25 });
});
test('month end and leap days use a clamped calendar anniversary', () => {
  assert.deepEqual(calculateCalendarAge(2025, 1, 31, new Date(2025, 1, 28)), { years: 0, months: 1, days: 0 });
  assert.deepEqual(calculateCalendarAge(2004, 2, 29, new Date(2025, 1, 28)), { years: 21, months: 0, days: 0 });
});
test('invalid and future dates are rejected', () => {
  const today = new Date(2026, 10, 14);
  for (const values of [[2025, 2, 29], [2000, 4, 31], [2026, 12, 1], [0, 1, 1], [2000, 0, 1]]) {
    assert.throws(() => calculateCalendarAge(...values, today));
  }
});
