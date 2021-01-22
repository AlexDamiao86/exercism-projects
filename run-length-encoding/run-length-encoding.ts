class RunLengthEncoding {

  static encode(messageUnencoded: string): string {
    const chars = [...messageUnencoded, ""]; 
    let count = 0; 
    let previous = "";
    let messageEncoded = ""; 

    chars.forEach((char, index) => { 
      index === 0 ? previous = char : previous = chars[index - 1]

      if (char === previous)  {
        count++    
      } else {
        count > 1 
          ? messageEncoded += (count + previous)
          : messageEncoded += previous
        count = 1
      }
    });

    return messageEncoded;
  }

  static decode(messageCoded: string): string {

    function charIsNumeric(char: string): boolean {
      return /^\d+$/.test(char);
    }
    
    const chars = [...messageCoded];
    let messageDecoded = ""; 
    let timesToRepeat = ""; 

    chars.forEach(char => { 
      if (charIsNumeric(char)) { 
        timesToRepeat += char 
      } else { 
        if (timesToRepeat === "") timesToRepeat = "1"
        messageDecoded += char.repeat(parseInt(timesToRepeat))
        timesToRepeat = ""
      }
    })

    return messageDecoded;
  }
}

export default RunLengthEncoding;

// Solution found on site 
// class RunLengthEncoding {
//   static encode = (s: string) => s.replace(/(.)\1+/g, m => m.length + m[0])
//   static decode = (s: string) => s.replace(/([0-9]+)(.)/g, (_, n, c) => c.repeat(Number(n)))
// }
// export default RunLengthEncoding