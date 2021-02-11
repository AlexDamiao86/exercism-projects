interface dnaCount {
  A: number | undefined;
  C: number | undefined;
  G: number | undefined;
  T: number | undefined;
}

class NucleotideCount {
  static nucleotideCounts(dnaStrand : string): dnaCount {
    if (/[^GCAT]/g.test(dnaStrand)) 
      throw new Error('Invalid nucleotide in strand.')
    
    return {
      A: typeof(dnaStrand.match(/A/g)?.length) !== 'undefined' ? dnaStrand.match(/A/g)?.length : 0,
      C: typeof(dnaStrand.match(/C/g)?.length) !== 'undefined' ? dnaStrand.match(/C/g)?.length : 0,
      G: typeof(dnaStrand.match(/G/g)?.length) !== 'undefined' ? dnaStrand.match(/G/g)?.length : 0, 
      T: typeof(dnaStrand.match(/T/g)?.length) !== 'undefined' ? dnaStrand.match(/T/g)?.length : 0,
    }
  }
}

export default NucleotideCount

// Solution found on community
// class NucleotideCount {
//   static nucleotideCounts(nucleotides: string): Record<string, number> {
//     if (nucleotides.match(/[^A|C|G|T]/)) {
//       throw new Error("Invalid nucleotide in strand")
//     }
//     const count: Record<string, number> = {
//       A: 0,
//       C: 0,
//       G: 0,
//       T: 0
//     }
//     nucleotides.split('').forEach(nucleotide => count[nucleotide]++)
//     return count
//   }
// }
// export default NucleotideCount