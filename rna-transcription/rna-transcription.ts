const rnaComplements: { [dnaNucleotide: string]: string } = {
  'G': 'C', 
  'C': 'G', 
  'A': 'U', 
  'T': 'A'
}

class Transcriptor {
  toRna(dnaStrand: string): string {
    if (/[^GCAT]/g.test(dnaStrand)) 
      throw new Error('Invalid input DNA.') 
    return dnaStrand.replace(/[GCAT]/g, (dna) => rnaComplements[dna])
  }
}

export default Transcriptor
