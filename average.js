
function average(numbers) {
  const newNumbers = numbers.filter(val => !Number.isNaN(val))
  return newNumbers.reduce((p, c)=> p + c, 0) /newNumbers.length;
}

module.exports = {average};
