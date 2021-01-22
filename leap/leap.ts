function isLeapYear(year: number): boolean {
  return year % 4 === 0 
    ? year % 100 === 0 
      ? year % 400 === 0 
        ? true 
        : false 
      : true 
    : false;
}

// Solucao de colega 
// function isLeapYear(year:number): boolean {
//   return  year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0)
// }

// Ou ainda, outra solução 
// function isLeapYear(year: number): boolean {
//   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
// }

export default isLeapYear
