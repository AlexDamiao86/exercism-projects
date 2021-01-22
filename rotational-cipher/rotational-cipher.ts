export default class RotationalCipher {
  static rotate(plainString: string, key: number) : string {
    const letters = "abcdefghijklmnopqrstuvwxyz"
    let cipheredString = ''
    for (let i = 0; i < plainString.length; i++) {
      let cipheredLetter = plainString[i]
      const isUpperCase = cipheredLetter == cipheredLetter.toUpperCase()
      if (isUpperCase) cipheredLetter = cipheredLetter.toLowerCase()
      const letterPosition = letters.indexOf(cipheredLetter) 
      if (letterPosition !== -1 && key > 0) {
        let shiftedPosition = letterPosition + key
        if (shiftedPosition > 25) shiftedPosition -= 26 
        cipheredLetter = letters[shiftedPosition]
      }
      if (isUpperCase) cipheredLetter = cipheredLetter.toUpperCase()
      cipheredString += cipheredLetter
    }
    return cipheredString
  }
}
