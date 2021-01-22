class Words {
  count(sentence:string):Map<string, number> {
    const wordsMap = new Map();
    const wordsArray = sentence.trim().toLowerCase().split(/\s+/);
    wordsArray.forEach(
      word => {
        wordsMap.has(word) ?
          wordsMap.set(word, wordsMap.get(word) + 1) : 
          wordsMap.set(word, 1);
      }
    );
    return wordsMap;
  }
}

export default Words;




