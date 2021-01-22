export default class ArmstrongNumbers {
  static isArmstrongNumber(value: number) : boolean {
    const valueString = value.toString();
    const numberDigits = value.toString().length;
    let sum = 0; 
    for(let i = 0; i < numberDigits; i++)
      sum += Math.pow(parseInt(valueString[i]), numberDigits);
    return sum === value;
  }
}