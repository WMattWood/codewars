// PROBLEM
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// RULES
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable (seconds) {
  // Derive hours value
  const hours = Math.floor( seconds / 3600)
  seconds = seconds % 3600
  // Derive minutes value
  const minutes = Math.floor( seconds / 60)
  seconds = seconds % 60
  // Seconds value becomes the remainder after deriving both hours and minutes.
  // Return formatted string
  return `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`
}

// This function formats numbers of < 3 digits to two digits.
function formatTwoDigits(num) {
  return ("0" + num).slice(-2)
}

module.exports = humanReadable