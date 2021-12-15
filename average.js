function average(numbers) {
  const numbersWithoutNaN = numbers.filter(val => !Number.isNaN(val))
  const numbersWithoutNaNCount = numbersWithoutNaN.length
  const nanCountPercentage = (numbersWithoutNaNCount / numbers.length);

  if(nanCountPercentage > 0.6){
    return NaN;
  }
  // else if(nanCountPercentage >= 0.3 && nanCountPercentage <= 0.6){
   
  //   let half = Math.floor( numbersWithoutNaNCount/ 2);
  //   const numbersWithoutNaNMedian = (numbersWithoutNaNCount % 2) 
  //                                   ? numbersWithoutNaN[half] 
  //                                   : (numbersWithoutNaN[half - 1] + numbersWithoutNaN[half]) / 2.0;

  //   return (numbersWithoutNaN.reduce((p, c)=> p + c, 0) + numbersWithoutNaNMedian) / numbers.length;
  // }
  
  return numbersWithoutNaN.reduce((p, c)=> p + c, 0) / numbersWithoutNaNCount;
}

module.exports = {average};
