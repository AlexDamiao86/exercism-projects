export class ResistorColor {
  private firstColor: number;
  private secondColor: number; 
  private readonly colorsNumbers : string[] = 
    ['black',
    'brown',
    'red', 
    'orange', 
    'yellow',
    'green', 
    'blue', 
    'violet', 
    'grey', 
    'white'];

  constructor(colors: string[]) {
    if(colors.length < 2) 
      throw new Error("At least two colors need to be present");
    this.firstColor = this.colorsNumbers.indexOf(colors[0].toLowerCase());
    this.secondColor = this.colorsNumbers.indexOf(colors[1].toLowerCase());
  }
  
  value = (): number => {
    return this.firstColor * 10 + this.secondColor; 
  }
}
