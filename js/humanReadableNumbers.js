function humanReadable (seconds) {
  const hours = Math.floor( seconds / 3600)
  seconds = seconds % 3600
  
  const minutes = Math.floor( seconds / 60)
  seconds = seconds % 60
  
  return `${formatTwoDigits(hours)}:${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`
}

function formatTwoDigits(num) {
  return ("0" + num).slice(-2)
}

module.exports = humanReadable