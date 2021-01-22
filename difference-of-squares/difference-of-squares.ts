// My solution 
// class Squares {
//   private n: number;
//   constructor(n: number) {
//     this.n = n;
//   }
//   get squareOfSum(): number {
//     let sum = 0;
//     for (let i = 1; i <= this.n; i++) sum += i;  
//     return Math.pow(sum, 2);
//   }
//   get sumOfSquares(): number {
//     let sum = 0; 
//     for (let i = 1; i <= this.n; i++) sum += Math.pow(i, 2);
//     return sum;
//   }
//   get difference(): number {
//     return this.squareOfSum - this.sumOfSquares; 
//   }
// }
// export default Squares;

// My other solution using recursive functions
// Recursive functions are a little bit slower 
// class Squares {
//   private n: number;
//   constructor(n: number) {
//     this.n = n;
//   }
//   get squareOfSum(): number {
//     function sqrSum(n: number): number {
//       let sum = 0; 
//       if (n > 0) sum = n + sqrSum(n - 1);
//       return sum;
//     } 
//     return Math.pow(sqrSum(this.n), 2);
//   }
//   get sumOfSquares(): number {
//     function sumSqr(n: number): number {
//       let sum = 0;
//       if (n > 0) sum = Math.pow(n, 2) + sumSqr(n - 1);
//       return sum;
//     }
//     return sumSqr(this.n);
//   }
//   get difference(): number {
//     return this.squareOfSum - this.sumOfSquares; 
//   }
// }
// export default Squares;

// Another solution from Community's user 
export default class Squares {

  squareOfSum = 0;
  sumOfSquares = 0;
  difference = 0;

  constructor(value: number) {
      for (let i = 1; i <= value; i++) {
          this.squareOfSum += i
          this.sumOfSquares += i ** 2
      }
      this.squareOfSum **= 2

      this.difference = this.squareOfSum - this.sumOfSquares
  }
}