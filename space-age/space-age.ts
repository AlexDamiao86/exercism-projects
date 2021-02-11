export default class SpaceAge {
  seconds: number
  constructor(seconds: number) {
    this.seconds = seconds
  }

  public onEarth(): number {
    return parseFloat((this.seconds / 31557600).toFixed(2))
  }

  public onMercury(): number { 
    return parseFloat((this.onEarth() / 0.2408467).toFixed(2))
  }

  public onVenus(): number { 
    return parseFloat((this.onEarth() / 0.61519726).toFixed(2))
  }

  public onMars(): number { 
    return parseFloat((this.onEarth() / 1.8808158).toFixed(2))
  }

  public onJupiter(): number { 
    return parseFloat((this.onEarth() / 11.862615).toFixed(2))
  }

  public onSaturn(): number { 
    return parseFloat((this.onEarth() / 29.447498).toFixed(2))
  }

  public onUranus(): number { 
    return parseFloat((this.onEarth() / 84.016846).toFixed(2))
  }

  public onNeptune(): number { 
    return parseFloat((this.onEarth() / 164.79132).toFixed(2))
  }
}