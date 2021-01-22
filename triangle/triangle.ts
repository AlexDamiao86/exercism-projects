export default class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  kind(): string {

    function bind(sides: number[]): void {
      if (sides.includes(0)) throw new Error("triangles with no size are illegal")
      if (sides.some(side => side < 0)) throw new Error("triangles with negative sides are illegal")

      sides.forEach((currentSide, index) => {
        const sumOtherSides = sides
          .filter((_, idx) => idx !== index)
          .reduce(function(sum, side) { return sum + side })
        if (sumOtherSides <= currentSide) throw new Error("triangles violating triangle inequality are illegal")
      })
    }

    bind(this.sides);

    let previousSide = -1
    let equalSides = 0
    let triangleType = ""

    this.sides.sort().forEach(side => {
      if (side === previousSide) equalSides++   
      previousSide = side 
    })

    switch (equalSides) {
      case 0: 
        triangleType = "scalene"
        break;
      case 1: 
        triangleType = "isosceles"
        break;
      case 2: 
        triangleType = "equilateral"
    }

    return triangleType

  }
}
