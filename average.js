function average(numbers) {
  const numbersWithoutNaN = numbers.filter(val => !Number.isNaN(val))
  const numbersWithoutNaNCount = numbersWithoutNaN.length
  const numbersCountPercentage = (numbersWithoutNaNCount / numbers.length);

  if (numbersCountPercentage > 0.4){
    return numbersWithoutNaN.reduce((p, c)=> p + c, 0) /numbersWithoutNaNCount;
  } else{
    return NaN;
  }
}

module.exports = {average};
